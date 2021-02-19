<template>
  <div
    class="m-6 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex flex-col"
  >
    <div class="text-xs uppercase mb-2">Lesson {{ index + 1 }}</div>
    <div class="text-gray-600 pb-5">{{ obj.title }}</div>
    <p class="text-xs text-gray-800">{{ obj.description }}</p>
    <NuxtLink :to="obj.url">
      <ViewButton />
    </NuxtLink>
  </div>
</template>

<script>
import ViewButton from "@/components/ViewButton.vue";
export default {
  components: {
    ViewButton,
  },
  props: ["obj", "index"],
  mounted() {
    console.log({ obj: this.obj });
  },
};
</script>

<style>
</style>