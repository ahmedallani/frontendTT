<template>
  <div class="bg-gray-200">
    <Navbar :obj="lesson" />
    <div class="content">
      <Nuxt />
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar";
import { mapState } from "vuex";
export default {
  components: {
    Navbar,
  },
  computed: {
    ...mapState(["lesson"]),
  },
};
</script>
<style>
</style>
