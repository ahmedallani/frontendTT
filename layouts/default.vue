<template>
  <div class="bg-gray-200 font-serif">
    <Navbar :obj="lesson" :extend="extend" @changeExtend="extend = !extend" />
    <div :class="extend? 'ml-px220' : 'ml-10'">
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
