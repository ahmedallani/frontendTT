<template>
  <pre class="mx-8">
    <code v-highlight="highlight" class="html rounded-xl border-2 border-gray-500 "></code>
  </pre>
</template>

<script>
export default {
  props:["highlight"]
};
</script>

<style>
</style>