<template>
  <div
    :class="extend? 'w-px220' : 'w-10'"
    class="h-screen text-sm bg-gray-800 whitespace-nowrap fixed top-0 left-0 flex flex-col pl-2 pb-4  hover:text-white text-gray-300"
  >
    <div>
      <span @click="$emit('changeExtend')">
        <svg
          v-if="extend"
          class="h-6 w-6 my-2 inline text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-else
          class="h-6 w-6 my-2 inline text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </span>
    </div>
    <div class="flex items-center text-xs space-x-5 py-1">
      <div>
        <NuxtLink to="/">
          <svg
            class="h-6 w-6 inline"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
              clip-rule="evenodd"
            />
          </svg>
        </NuxtLink>
      </div>
      <div v-if="extend">
        <div>Lesson {{ obj.nbr }}:</div>
        <div>{{ obj.title }}</div>
      </div>
    </div>
    <hr />
    <div class="max-h-screen overflow-y-auto divide-y divide-gray-600">
      <div v-for="(elm, key) in obj.list" :key="key">
        <div class="py-4">
          <NuxtLink :to="elm.url"> {{ key + 1 }}<span v-if="extend">.{{ elm.title }}</span> </NuxtLink>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>
<script>
import bp from "@/plugins/breakpoints";
export default {
  props: ["obj","extend"],
  data() {
    return {
      bp,
    };
  },
};
</script>
<style>
body {
  @apply bg-gray-200;
}
.nav {
  width: 220px;
}
.content {
  margin-left: 200px;
}
</style>