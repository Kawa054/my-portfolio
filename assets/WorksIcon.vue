<template>
	<svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" :width="width" :height="height" viewBox="0 0 512 512" xml:space="preserve">
		<g>
			<polygon class="st0" points="209.403,111.029 144.971,62.705 0,62.705 0,106.231 0,112.973 0,384.277 48.324,303.005 
				48.324,159.353 386.59,159.353 386.59,191.569 434.913,191.569 434.913,111.029 	">
			</polygon>
			<path class="st0" d="M512,229.511l-80.392,146.817l-34.303,65.628c-2.409,3.816-7.017,7.34-10.715,7.34H16.108
				c-6.418,0-8.571-4.058-8.699-7.146v-0.064c0-0.064,0-0.064,0-0.129l114.695-212.444c1.851-3.587,2.997-5.726,6.759-5.726h376.378
				C508.94,223.784,512,226.422,512,229.511z">
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