<template>
	<div class="cat-container" v-show="isLoaded">
		<canvas id="vuepress-cat" :width="style.width" :height="style.height" class="live2d"></canvas>
	</div>
</template>

<script>
	import live2dJSString from "./zenlive2d";
	import { useDarkMode } from "@vuepress/theme-default/lib/client";
	import { watch } from "vue";

	let data = []

	fetch(`https://raw.githubusercontent.com/evrstr/live2d-widget-models/master/dat.json`).then(res => res.json())
		.then(models => {
			models.forEach(item => data.push(item.json))
		})
	export default {
		name: "Cat",
		data() {
			return {
				isLoaded: true,
				model: data,
				style: {
					width: 200,
					height: 200,
				},
			};
		},
		mounted() {
			this.initCat();
			this.$router.afterEach((to, from) => {
				if (to.path !== from.path) {
					this.initCat();
				}
			});
			const isDarkMode = useDarkMode();
			if (this.isLoaded == true) {
				while (data.length === 0) { }
				window.loadlive2d("vuepress-cat", data[Math.floor(Math.random() * data.length)])
			}
		},
		methods: {
			initCat() {
				const isMobile =
					/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
						navigator.userAgent
					)
						? true
						: false;
				if (isMobile) {
					this.isLoaded = false;
					return console.log("mobile do not load model");
				}
				if (!window.loadlive2d) {
					const script = document.createElement("script");
					script.innerHTML = live2dJSString;
					document.body.appendChild(script);
				}
				this.style = {
					width: 200,
					height: 300,
				};
			},
		},
	};
</script>

<style scoped>
	.cat-container {
		position: fixed;
		right: 50px;
		bottom: 100px;
		color: #00adb5;
	}

	.cat-container #vuepress-cat {
		position: fixed;
		opacity: 0.9;
		right: 35px;
		bottom: -20px;
		z-index: 99999;
		pointer-events: none;
	}
</style>