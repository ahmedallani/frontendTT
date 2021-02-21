<template>
  <div class="flex flex-col items-center max-w-5xl">
    <div class="relative w-full">
      <h1 class="font-serif text-2xl text-center m-4">
        Building Your First Web Page
      </h1>
      <div v-if="timeRead" class="absolute right-0 top-0 pr-2">
        {{ timeRead }} min read <Icon name="clock" />
      </div>
    </div>
    <div class="p-2">
      <comp @time="(time) => updateTime('comp', time)" />
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon.vue";
import comp from "@/components/building_your_first_web_page/comp";
export default {
  components: {
    Icon,
    comp,
  },
  data() {
    return {
      list: ["comp"],
      time: {},
      timeRead: false,
    };
  },
  methods: {
    updateTime(name, time) {
      debugger
      this.time[name] = time;
      let size = Object.keys(this.time).length;
      if (size >= this.list.length) {
        this.updateTimeRead();
      }
    },
    updateTimeRead() {
      this.timeRead = Math.ceil(
        this.list.reduce((acc, cv) => {
          acc += this.time[cv];
          return acc;
        }, 0)
      );
    },
  },
};
</script>

<style>
</style>