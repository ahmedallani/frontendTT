<template>
  <div class="bg-gray-200">
    <navbar :obj="lesson" />
    <div class="content">
      <Nuxt />
    </div>
  </div>
</template>
<script>
import navbar from "@/components/navbar.vue";
import { mapState } from "vuex";
export default {
  components: {
    navbar,
  },
  computed: {
    ...mapState(["lesson"]),
  },
};
</script>
<style>
</style>
