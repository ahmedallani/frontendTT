<template>
  <div>
    <component
      v-for="(elm, key) in obj.list"
      :key="key"
      :is="elm.is"
      v-bind="elm.props"
    >
      {{ elm.text }}
    </component>
  </div>
</template>

<script>
import Code from "@/components/Code"
export default {
  components:{
    Code
  },
  props: ["obj"],
};
</script>

<style>
</style>