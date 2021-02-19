<template>
  <div class="bg-gray-200 font-serif">
    <div
      v-if="extend && !bp.up.sm"
      @click="extend = !extend"
      class="Z-10 w-screen h-screen fixed top-0 left-0 bg-gray-500 opacity-25"
    ></div>
    <Navbar :obj="lesson" :extend="extend" @changeExtend="extend = !extend" />
    <div :class="margin" class="p-2">
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
  },
  data: () => {
    return {
      bp,
      extend: true,
    };
  },
};
</script>
<style>
</style>
