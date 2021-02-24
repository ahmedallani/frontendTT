<template>
  <div
    class="bg-white p-2 h-1/4 m-4 duration-1000 shadow-md hover:shadow-xl max-w-5xl rounded-md"
  >
    <Generate :obj="displayObj" />
    <div class="pl-5 m-2">
      <ViewButton @click="$emit('show', !show)" :less="show" />
    </div>
  </div>
</template>

<script>
import Generate from "@/components/Generate";
import ViewButton from "@/components/ViewButton.vue";
import time from "@/mixins/time.js";
import { shortStr } from "@/data/help";
let style = {
  p: "text-sm text-gray-700 pl-5 m-2",
};
export default {
  props: ["show","obj"],
  mixins: [time],
  components: {
    ViewButton,
    Generate,
  },
  computed: {
    list:function(){
        return this.obj.list
    },
    displayObj: function () {
      return this.show
        ? this.obj
        : {
            list: [
              this.list[0],
              {
                ...this.list[1],
                text: this.shortStr(this.list[1].text),
              },
            ],
          };
    },
  },
  methods: {
    shortStr,
  },
};
</script>

<style>
</style>