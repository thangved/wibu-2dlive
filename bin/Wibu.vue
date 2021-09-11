<template>
	<div class="cat-container" v-show="isLoaded">
		<canvas id="vuepress-wibu" :width="style.width" :height="style.height" class="live2d"></canvas>
	</div>
</template>

<script>
	import live2dJSString from "./live2d";
	const data = [
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/koharu/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/carcano1891_2201/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/k2_3301/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/sagiri/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/natori/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/murakumo/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/xisitina/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/index/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/touma/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/katou/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/pkp_1201/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/hallo/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/kobayaxi/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/histoire/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/ots14_3001/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/rice/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/rfb_1601/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/haru_seifuku/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/ump9_3404/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/g36_2407/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/terisa/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/kp31/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/m1928a1_1501/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/stl/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/ads_3601/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/river/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/len_space/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/aoba/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/kurumi/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/madoka/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/tsumiki/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/mashiro_ryoufuku/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/misaki_ryoufuku/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/dsr50_1801/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/nanami_ryoufuku/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/rem/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/uiharu/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/lewis_3502/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/grizzly_2102/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/liang/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/mlemk1_604/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/95type_405/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/gelina/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/px4storm_2801/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/kp31_3101/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/epsilon_2/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/22/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/welrod_1401/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/kp31_310/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/chiaki_kitty/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/live_uu/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/izumi/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/uni/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/nanami_shifuku/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/saten/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/len/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/mashiro_seifuku/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/date/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/kesyoban/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/platelet/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/tia/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/len_impact/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/ntw20_2301/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/cbjms_3503/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/dcloud/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/33/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/mashiro_shifuku/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/jin/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/greeter/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/ak12_3302/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/shizuku/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/natori_pro_jp/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/dsr50_2101/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/fn57_2203/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/hk416_3401/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/rem_2/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/misaki_seifuku/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/umaru/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/mikoto/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/300girl/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/len_swim/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/otoha_shifuku/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/m950a_2303/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/ump45_3403/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/sat8_3602/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/an94_3303/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/r93_3501/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/mai/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/g41_2401/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/Neptune/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/ots14_1203/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/chitose/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/ryunosuke/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/otoha_seifuku/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/paimeng/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/kuroko/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/aa12_2403/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/sat8_2601/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/nanami_seifuku/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/bronya/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/type88_3504/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/kp31_1103/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/hiyori/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/haru/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/kanna/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/carcano1938_2202/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/epsilon/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/platelet_2/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/contender/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/miku/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/kanzaki/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/contender_2302/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/yuri/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/misaki_shifuku/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/pio/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/hk416_805/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/snow_miku/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/type64-ar_2901/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/otoha_ryoufuku/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/g36c_1202/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/chino/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/vector_1901/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/miara_pro_en/model.json",
		"https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/wa2000_6/model.json",
	]

	export default {
		name: "Cat",
		data() {
			return {
				isLoaded: true,
				model: data,
				style: {
					width: 200,
					height: 400,
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
			if (this.isLoaded == true) {
				window.loadlive2d(
					"vuepress-wibu",
					data[Math.floor(Math.random() * data.length)]
				);
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
					height: 400,
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

	.cat-container #vuepress-wibu {
		position: fixed;
		opacity: 0.9;
		right: 35px;
		bottom: -20px;
		z-index: 99999;
		pointer-events: none;
	}
</style>
