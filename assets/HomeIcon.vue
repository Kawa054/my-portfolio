<template>
	<svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" :width="width" :height="height" viewBox="0 0 512 512" xml:space="preserve">
		<g>
			<polygon class="st0" points="442.531,218 344.828,120.297 256,31.469 167.172,120.297 69.438,218.047 0,287.469 39.984,327.453 
      		  109.406,258.031 207.156,160.281 256,111.438 304.844,160.281 402.531,257.984 472.016,327.453 512,287.469">
			</polygon>
			<polygon class="st0" points="85.719,330.375 85.719,480.531 274.75,480.531 274.75,361.547 343.578,361.547 343.578,480.531 
       			 426.281,480.531 426.281,330.328 256.016,160.063">
			</polygon>
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