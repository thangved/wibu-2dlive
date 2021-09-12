<template>
  <div class="wibu-container" v-show="isLoaded">
    <canvas
      id="vuepress-wibu"
      :width="style.width"
      :height="style.height"
      class="live2d"
    ></canvas>
  </div>
</template>

<script>
import live2dJSString from "./live2d";
import data from "./data";

export default {
  name: "Wibu",
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
    this.initWibu();
    this.$router.afterEach((to, from) => {
      if (to.path !== from.path) {
        this.initWibu();
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
    initWibu() {
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
.wibu-container {
  position: fixed;
  right: 50px;
  bottom: 100px;
  color: #00adb5;
}

.wibu-container #vuepress-wibu {
  position: fixed;
  opacity: 0.9;
  right: 35px;
  bottom: -20px;
  z-index: 99999;
  pointer-events: none;
}
</style>
