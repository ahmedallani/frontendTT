<template>
  <button
    @click="$emit(`click`)"
    class="focus:outline-none z-10 text-blue-500 border-blue-700 focus:border-blue-900  border-2 mt-6 inline-block whitespace-nowrap w-32 shadow-md hover:shadow-xl rounded-lg"
  >
    View {{ less ? "less" : "more" }}
    <Icon :name="less ? 'arrow-left' : 'arrow-right'" />
  </button>
</template>

<script>
import Icon from "@/components/Icon.vue";
export default {
  components: {
    Icon,
  },
  props: { less: Boolean }
};
</script>

<style>
</style>