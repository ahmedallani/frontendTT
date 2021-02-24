<template>
  <div
    :class="extend ? 'w-px220' : 'w-10'"
    class="Z-20 h-screen text-sm bg-gray-800 whitespace-nowrap fixed top-0 left-0 flex flex-col pl-4 pb-4  text-gray-300"
  >
    <div>
      <span @click="$emit('extend')">
        <Icon :name="extend ? 'menu' : 'x'" />
      </span>
    </div>
    <div class="flex items-center text-xs space-x-5 py-1">
      <div class="hover:text-white cursor-pointer" @click="$emit('view', { url: obj.back })">
        <Icon
          v-if="obj.back"
          name="arrow-circle-left"
        />
      </div>
      <div v-if="extend">
        <div>Lesson {{ obj.nbr }}:</div>
        <div>{{ obj.title }}</div>
      </div>
    </div>
    <hr />
    <div class="max-h-screen overflow-y-auto divide-y divide-gray-600">
      <div v-for="(elm, key) in obj.list" :key="key">
        <div
          class="py-4 hover:text-white cursor-pointer"
          @click="
            $emit('view', elm.url ? { url: elm.url } : { show: elm.show })
          "
        >
          {{ key + 1 }}<span v-if="extend">.{{ elm.title }}</span>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>
<script>
import bp from "@/plugins/breakpoints";
import Icon from "@/components/Icon.vue";
export default {
  components: {
    Icon,
  },
  props: ["obj", "extend"],
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