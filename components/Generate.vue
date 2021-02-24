<template>
  <div>
    <template v-for="(elm, key) in obj.list">
      <component :key="key" v-if="elm" :is="elm.is" v-bind="elm.props">
        {{ elm.text }}
      </component>
    </template>
  </div>
</template>

<script>
import Code from "@/components/Code";
import Pen from "@/components/Pen";
export default {
  components: {
    Code,
    Pen
  },
  props: ["obj"],
};
</script>

<style>
</style>