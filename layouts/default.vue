<template>
  <div class="bg-gray-200 font-serif">
    <div
      v-if="extend && !bp.up.sm"
      @click="extend = !extend"
      class="Z-10 w-screen h-screen fixed top-0 left-0 bg-gray-500 opacity-25"
    ></div>
    <Navbar :obj="lesson" :extend="extend" v-on="navOn" />
    <div :class="margin" class="p-2 flex flex-col items-center">
      <client-only>
        <Nuxt />
      </client-only>
    </div>
  </div>
</template>
<script>
import bp from "@/plugins/breakpoints";
import Navbar from "@/components/Navbar";
import { mapState, mapMutations } from "vuex";
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
        extend: this.changeExtend.bind(this),
        view: this.changeView.bind(this),
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
    ...mapMutations(["changeShow"]),
    changeExtend: function () {
      this.extend = !this.extend;
    },
    changeView: function (evt) {
      if (evt.url) {
        $nuxt.$router.push({ path: evt.url });
        return;
      }
      this.changeShow(evt.show);
      return;
    },
  },
};
</script>
<style>
</style>
