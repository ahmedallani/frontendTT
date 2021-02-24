<template>
  <div class="max-w-5xl">
    <div class="relative w-full pt-4">
      <h1 class="font-serif text-2xl text-center m-4">
        Building Your First Web Page
      </h1>
      <div v-if="timeRead" class="absolute right-0 top-0 pr-2">
        {{ timeRead }} min read <Icon name="clock" />
      </div>
    </div>
    <div >
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
import { mapState, mapMutations } from "vuex";
import Icon from "@/components/Icon.vue";
import comp from "@/components/building_your_first_web_page";
import lesson from "@/data/ls1/ls1/index.js";
export default {
  components: {
    Icon,
    comp,
  },
  data() {
    return {
      time: {},
      timeRead: false,
      lesson: lesson,
    };
  },
  created() {
    this.changeLesson(this.obj);
  },
  computed: {
    ...mapState(["show"]),
    list: function () {
      return this.lesson.list.map((elm, index) => ({
        is: `comp`,
        show: `comp${index}`,
        title: elm.title,
        props: {
          show: this.show === `comp${index}`,
          obj: elm,
        },
        listeners: {
          time: function (time) {
            console.log(index, time);
            return this.updateTime(`comp${index}`, time);
          }.bind(this),
          show: function (show) {
            return this.updateShow(`comp${index}`, show);
          }.bind(this),
        },
      }));
    },
    obj: function () {
      return { ...this.lesson, list: this.list };
    },
  },
  methods: {
    ...mapMutations(["changeLesson", "changeShow"]),
    updateTime(name, time) {
      this.time[name] = time;
      let size = Object.keys(this.time).length;
      if (size >= this.list.length) {
        this.updateTimeRead();
      }
    },
    updateShow(name, show) {
      this.changeShow(show ? name : false);
    },
    updateTimeRead() {
      this.timeRead = Math.ceil(
        this.list.reduce((acc, cv) => {
          acc += this.time[cv.show];
          return acc;
        }, 0)
      );
    },
  },
};
</script>

<style>
</style>