<template>
    <svg
    class="h-5 w-5 inline font-bold"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        :d="d"
      />
    </svg>
</template>

<script>
import { icons } from "@/data/help.js";
export default {
  props: ["name"],
  computed: {
    d: function () {
      return icons[this.name];
    },
  },
};
</script>

<style>
</style>