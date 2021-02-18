<template>
  <div class="bg-gray-200">
    <Navbar :obj="lesson" />
    <div class="content">
      <Nuxt />
    </div>
  </div>
</template>
<script>
import bp from '@/plugins/breakpoints'
import Navbar from "@/components/Navbar";
import { mapState } from "vuex";
export default {
  components: {
    Navbar,
  },
  computed: {
    ...mapState(["lesson"]),
  },
  created(){
    console.log("eeeee")
  },
  mounted(){
    console.log("test",this.test)
  },
  data: () => {
    return {
      bp
    }
  }
};
</script>
<style>
</style>
