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
import { mapState,mapMutations } from "vuex";
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
      time: {},
      timeRead: false,
      listTitle:[
        "Introduction",
        "What Are HTML & CSS?"
      ]
    };
  },
  created(){
    this.changeLesson(this.lesson)
  },
  computed: {
    ...mapState(["show"]),
    list: function () {
      return this.listTitle.map((title,index) => ({
        is: `comp${index}`,
        show: `comp${index}`,
        title,
        props: {
          show: this.show === `comp${index}`,
        },
        listeners: {
          time: function(time) { return  this.updateTime(`comp${index}`, time)}.bind(this),
          show: function(show) { return this.updateShow(`comp${index}`, show)}.bind(this),
        },
      }));
    },
    lesson: function(){
      return {
        back : "/",
        title: "Building Your First Web Page",
        url : "/building_your_first_web_page",
        list: this.list
      }
    }
  },
  methods: {
    ...mapMutations(["changeLesson","changeShow"]),
    updateTime(name, time) {
      this.time[name] = time;
      let size = Object.keys(this.time).length;
      if (size >= this.list.length) {
        this.updateTimeRead();
      }
    },
    updateShow(name, show) {
      this.changeShow(show ? name : false)
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