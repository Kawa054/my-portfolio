<script setup lang="ts">
	import { TresCanvas, useLoader } from '@tresjs/core'
	import { OrbitControls, Text3D } from '@tresjs/cientos'
	import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
	import { watchEffect, onMounted, onUnmounted, ref } from 'vue' // onMounted, onUnmounted, ref を追加
	import * as THREE from 'three'

	const customMaterialRef = ref<THREE.MeshStandardMaterial | null>(null);
	const textMaterialRef = ref<THREE.MeshBasicMaterial | null>(null); 

	// --- キーボードイベント処理 ---
	const handleKeydown = (event: KeyboardEvent) => {
	if (event.key.toLowerCase() === 'w') {
		//モデルのマテリアルを切り替え
		if (customMaterialRef.value) {
			customMaterialRef.value.wireframe = !customMaterialRef.value.wireframe;
		}
		if (textMaterialRef.value) {
			textMaterialRef.value.wireframe = !textMaterialRef.value.wireframe;
		}
	}
	};

	onMounted(() => {
		window.addEventListener('keydown', handleKeydown);
	});

	// コンポーネントのアンマウント時にイベントリスナーを削除 (メモリリーク防止)
	onUnmounted(() => {
		window.removeEventListener('keydown', handleKeydown);
	});

	// --- モデルのロード ---
	const { scene } = await useLoader(GLTFLoader, '/models/origami_model1.gltf')

	// --- マテリアルと影の設定 ---
	watchEffect(() => {
		if (scene) {
			const box = new THREE.Box3().setFromObject(scene);
			const materialMinZ = box.min.z;
			const materialMaxZ = box.max.z;

			const customMaterial = new THREE.MeshStandardMaterial({
			roughness: 0.7,
			metalness: 0.0,
			// wireframe: false, // 初期状態はワイヤーフレームではない
			});

			customMaterial.onBeforeCompile = (shader) => {
			shader.uniforms.uColorTop = { value: new THREE.Color(0xFFEB7F) };
			shader.uniforms.uColorBottom = { value: new THREE.Color(0xFF3A7F) };
			shader.uniforms.uMinZ = { value: materialMinZ };
			shader.uniforms.uMaxZ = { value: materialMaxZ };

			shader.vertexShader = 'varying vec3 vPosition;\n' + shader.vertexShader;
			shader.vertexShader = shader.vertexShader.replace(
				'#include <begin_vertex>',
				'#include <begin_vertex>\nvPosition = position;'
			);

			shader.fragmentShader = `
				varying vec3 vPosition;
				uniform vec3 uColorTop;
				uniform vec3 uColorBottom;
				uniform float uMinZ;
				uniform float uMaxZ;
			` + shader.fragmentShader;

			shader.fragmentShader = shader.fragmentShader.replace(
				'#include <color_fragment>',
				`
				float normalizedHeight = smoothstep(uMinZ, uMaxZ, vPosition.z);
				vec3 gradientColor = mix(uColorBottom, uColorTop, normalizedHeight);
				diffuseColor.rgb = gradientColor;
				`
			);
			};

			customMaterialRef.value = customMaterial;

			scene.traverse((child) => {
			if (child.isMesh) {
				child.material = customMaterial;
				child.castShadow = true;
			}
			});
		}
	})
</script>

<template>
	<TresCanvas clear-color="#000" shadows alpha class="canvas-container">
		<OrbitControls />
		<TresPerspectiveCamera :position="[30, 55, 63]" />

		<TresDirectionalLight
			color="#FFAF7F"
			:position="[10, 30, 10]"
			:intensity="4"
			cast-shadow
		/>
		<TresAmbientLight :intensity="1" />
		<Suspense>
			<Text3D :position="[0, 20, 0]"
				text="Wキーでワイヤーフレームへ切り替え"
				font="/fonts/DotGothic16_Regular.json"
				:size="1.5" >
				<TresMeshStandardMaterial ref="textMaterialRef" color="#FF3A7F" />
			</Text3D>
		</Suspense>
		<Suspense>
			<primitive :object="scene" />
		</Suspense>
  	</TresCanvas>
</template>

<style lang="scss" scoped>
	.canvas-container {
		margin-top: -5%;
	}
</style>