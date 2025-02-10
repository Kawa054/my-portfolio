<script setup lang="ts">
	import { shallowRef } from 'vue';
	import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from 'three';
	import { TresCanvas, useLoader, useRenderLoop } from '@tresjs/core';
	import { OrbitControls, Text3D } from '@tresjs/cientos';
	import { Vector2, TextureLoader } from 'three';

	const blobRef = shallowRef(null);

	const gl = {
		clearColor: '#000000',
		shadows: true,
		alpha: false,
		shadowMapType: BasicShadowMap,
		outputColorSpace: SRGBColorSpace,
		toneMapping: NoToneMapping,
	};

	const uniforms = {
		uTime: { value: 0 },
		uAmplitude: { value: new Vector2(0.1, 0.1) },
		uFrequency: { value: new Vector2(2, 2) },
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
			blobRef.value.uniforms.uTime.value = elapsed
		}
	});
</script>

<template>
  <TresCanvas v-bind="gl" class="canvas-container">
    <TresPerspectiveCamera :position="[8, 2, 13]" />
	<OrbitControls/>
    <Suspense>
		<Text3D
			:position="[0, 4, 0]"
			text="ようこそポートフォリオサイトへ！"
			font="/fonts/DotGothic16_Regular.json" 
		>
			<TresShaderMaterial ref="blobRef" :vertexShader="vertexShader" :fragmentShader="fragmentShader" :uniforms="uniforms" />
		</Text3D>
    </Suspense>
	<Suspense>
		<Text3D
			:position="[0, 3, 0]"
			text="マウス操作でカメラを自由に操作できます"
			font="/fonts/DotGothic16_Regular.json" 
		>
			<TresShaderMaterial ref="blobRef" :vertexShader="vertexShader" :fragmentShader="fragmentShader" :uniforms="uniforms" />
		</Text3D>
    </Suspense>
	<Suspense>
		<Text3D
			:position="[0, 2, 0]"
			text="スクロール: 拡大・縮小"
			font="/fonts/DotGothic16_Regular.json" 
		>
			<TresShaderMaterial ref="blobRef" :vertexShader="vertexShader" :fragmentShader="fragmentShader" :uniforms="uniforms" />
		</Text3D>
    </Suspense>
	<Suspense>
		<Text3D
			:position="[0, 1, 0]"
			text="ドラッグ: カメラ角度変更"
			font="/fonts/DotGothic16_Regular.json" 
		>
			<TresShaderMaterial ref="blobRef" :vertexShader="vertexShader" :fragmentShader="fragmentShader" :uniforms="uniforms" />
		</Text3D>
    </Suspense>
    <TresDirectionalLight :position="[0, 10, 4]" :intensity="1.2" cast-shadow />
    <TresGridHelper />
  </TresCanvas>
</template>

<style lang="scss" scoped>
	.canvas-container {
		left: 70%;
	}
</style>