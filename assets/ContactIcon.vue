<template>
	<svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" :width="width" :height="height" viewBox="0 0 512 512" xml:space="preserve">
		<g>
			<path class="st0" d="M496.563,68.828H15.438C6.922,68.828,0,75.75,0,84.281v30.391l256,171.547l256-171.563V84.281
       			C512,75.75,505.078,68.828,496.563,68.828z">
			</path>
			<path class="st0" d="M0,178.016v203.391c0,34.125,27.641,61.766,61.781,61.766h388.438c34.141,0,61.781-27.641,61.781-61.766V178
       			L256,349.563L0,178.016z">
			</path>
		</g>
	</svg>
</template>

<script>
	import { defineComponent } from '@vue/composition-api'

	export default defineComponent({
		props: {
			color: {
				type: String,
				default: '#fff',
			},
			weight: {
				type: Number,
				default: 16,
			},
			height: {
				type: Number,
				default: 16,
			},
		},
	})
</script>
