<template>
  <div
    class="h-screen text-sm bg-gray-800 whitespace-nowrap fixed top-0 left-0 flex flex-col pl-2 pb-4 nav"
  >
    <div
      class="flex items-center hover:text-white text-gray-300 text-xs space-x-5 py-1"
    >
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
      <div>
        <div>Lesson {{ obj.nbr }}:</div>
        <div>{{ obj.title }}</div>
      </div>
    </div>
    <hr />
    <div class="max-h-screen overflow-y-auto divide-y divide-gray-600">
      <div
        v-for="(elm, key) in obj.list"
        :key="key"
        class="hover:text-white text-gray-300"
      >
        <div class="py-4">
          <NuxtLink :to="elm.url"> {{ key + 1 }}.{{ elm.title }} </NuxtLink>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>
<script>
export default {
  props: ["obj"],
};
</script>
<style>
body {
  @apply bg-gray-200;
}
.nav {
  width: 200px;
}
.content {
  margin-left: 200px;
}
</style>