export default defineNuxtConfig({
	compatibilityDate: '2025-01-26',
	devtools: { enabled: true },
	modules: ['@tresjs/nuxt'],
	app:{
		head: {
			script: [
				{ id:"MathJax-script", src: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js', async: true}
			]
		}  
		}
})