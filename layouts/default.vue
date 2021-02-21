<template>
  <div class="bg-gray-200 font-serif">
    <div
      v-if="extend && !bp.up.sm"
      @click="extend = !extend"
      class="Z-10 w-screen h-screen fixed top-0 left-0 bg-gray-500 opacity-25"
    ></div>
    <Navbar :obj="lesson" :extend="extend" v-on="navOn" />
    <div :class="margin" class="p-2 flex flex-col items-center">
      <Nuxt />
    </div>
  </div>
</template>
<script>
import bp from "@/plugins/breakpoints";
import Navbar from "@/components/Navbar";
import { mapState } from "vuex";
export default {
  components: {
    Navbar,
  },
  computed: {
    ...mapState(["lesson"]),
    margin: function () {
      if (this.extend && this.bp.up.sm) {
        return "ml-px220";
      }
      return "ml-10";
    },
    navOn: function () {
      return {
        extend: this.changeExtend,
        view: this.changeView,
      };
    },
  },
  data: () => {
    return {
      bp,
      extend: true,
    };
  },
  methods: {
    changeExtend: function () {
      this.extend = !this.extend;
    },
    changeView: function (evt) {
      if (evt.url) {
        return $nuxt.$router.push({ path: evt.url });
      }
    },
  },
};
</script>
<style>
</style>
