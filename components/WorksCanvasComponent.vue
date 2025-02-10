<script setup lang="ts">
	import { shallowRef } from 'vue';
	import { TresCanvas, useRenderLoop } from '@tresjs/core';
	import { OrbitControls } from '@tresjs/cientos';
	import { Vector2 } from 'three'

	const blobRef = shallowRef(null);

	const uniforms = {
		uTime: { value: 0 },
		uAmplitude: { value: new Vector2(0.1, 0.1) },
		uFrequency: { value: new Vector2(20, 5) },
	}

	const vertexShader = `
		uniform vec2 uAmplitude;
		uniform vec2 uFrequency;
		uniform float uTime;

		varying vec2 vUv;

		void main() {
			vec4 modelPosition = modelMatrix * vec4(position, 1.0);
			modelPosition.y += sin(modelPosition.x * uFrequency.x - uTime) * uAmplitude.x;
			modelPosition.x += cos(modelPosition.y * uFrequency.y - uTime) * uAmplitude.y;

			vec4 viewPosition = viewMatrix * modelPosition;
			gl_Position = projectionMatrix * viewPosition;
			vUv = uv;
		}
		`

	const fragmentShader = `
		precision mediump float;
		varying vec2 vUv;

		void main() {
			gl_FragColor = vec4(1.0, vUv.y, 0.5, 1.0);
		}
		`
	const { onLoop } = useRenderLoop();

	onLoop(({ delta, elapsed }) => {
		if (blobRef.value) {
			blobRef.value.material.uniforms.uTime.value = elapsed
		}
	});
</script>

<template>
	<TresCanvas clear-color="#000" shadows alpha>
		<OrbitControls />
		<TresPerspectiveCamera :position="[8, 10, 23]"/>
		<TresMesh ref="blobRef" :position="[0, 4, 0]">
			<TresSphereGeometry :args="[2, 32, 32]" />
			<TresShaderMaterial :vertexShader="vertexShader" :fragmentShader="fragmentShader" :uniforms="uniforms" />
		</TresMesh>

		<TresMesh :rotation="[-Math.PI / 2, 0, 0]">
			<TresPlaneGeometry :args="[10, 10, 10, 10]" />
			<TresMeshBasicMaterial color="#00FFFF" />
		</TresMesh>
	</TresCanvas>
</template>