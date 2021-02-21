<template>
  <div class="max-w-5xl">
    <div class="relative w-full">
      <h1 class="font-serif text-2xl text-center m-4">
        Building Your First Web Page
      </h1>
      <div v-if="timeRead" class="absolute right-0 top-0 pr-2">
        {{ timeRead }} min read <Icon name="clock" />
      </div>
    </div>
    <div class="p-2">
      <component
        v-for="(elm, key) in list"
        :key="key"
        :is="elm.is"
        v-bind="elm.props"
        v-on="elm.listeners"
      >
        {{ elm.text }}
      </component>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon.vue";
import comp0 from "@/components/building_your_first_web_page/comp0";
import comp1 from "@/components/building_your_first_web_page/comp1";
export default {
  components: {
    Icon,
    comp0,
    comp1,
  },
  data() {
    return {
      show: false,
      time: {},
      timeRead: false,
    };
  },
  computed: {
    list: function () {
      return [0, 1].map((cv) => ({
        is: `comp${cv}`,
        props: {
          show: this.show === `comp${cv}`,
        },
        listeners: {
          time: (time) => this.updateTime(`comp${cv}`, time),
          show: (show) => this.updateShow(`comp${cv}`, show),
        },
      }));
    },
  },
  methods: {
    updateTime(name, time) {
      this.time[name] = time;
      let size = Object.keys(this.time).length;
      if (size >= this.list.length) {
        this.updateTimeRead();
      }
    },
    updateShow(name, show) {
      this.show = show ? name : false;
    },
    updateTimeRead() {
      this.timeRead = Math.ceil(
        this.list.reduce((acc, cv) => {
          acc += this.time[cv.is];
          return acc;
        }, 0)
      );
    },
  },
};
</script>

<style>
</style>