<template>
  <div
    class="bg-white p-2  h-1/4 m-4 duration-1000 shadow-md hover:shadow-xl max-w-5xl  rounded-md"
  >
    <template v-if="show">
      <component
        v-for="(elm, key) in list"
        :key="key"
        :is="elm.is"
        v-bind="elm.props"
      >
        {{ elm.text }}
      </component>
      <div class="pl-5 m-2">
        <ViewButton @click="$emit('changeShow',false)" less />
      </div>
    </template>
    <template v-else>
      <component :is="list[0].is" v-bind="list[0].props">
        {{ list[0].text }}
      </component>
      <component :is="list[1].is" v-bind="list[1].props">
        {{ shortStr(list[1].text) }}
      </component>
      <div class="pl-5 m-2">
        <ViewButton @click="$emit('changeShow',true)" />
      </div>
    </template>
  </div>
</template>

<script>
import ViewButton from "@/components/ViewButton.vue";
import time from "@/mixins/time.js"
import { shortStr } from "@/data/help";
let style = {
  p: "text-sm text-gray-900 pl-5 m-2",
};
export default {
  props:["show"],
  mixins : [time],
  components: {
    ViewButton,
  },
  data() {
    return {
      list: [
        {
          is: "h2",
          text: "Introduction",
          props: { class: "font-serif text-xl  m-4" },
        },
        {
          is: "p",
          text:
            "If you can, imagine a time before the invention of the Internet. Websites didn’t exist, and books, printed on paper and tightly bound, were your primary source of information. It took a considerable amount of effort—and reading—to track down the exact piece of information you were after.",
          props: { class: style.p },
        },
        {
          is: "p",
          text:
            "Today you can open a web browser, jump over to your search engine of choice, and search away. Any bit of imaginable information rests at your fingertips. And chances are someone somewhere has built a website with your exact search in mind.",
          props: { class: style.p },
        },
        {
          is: "p",
          text:
            "Within this book I’m going to show you how to build your own websites using the two most dominant computer languages—HTML and CSS.",
          props: { class: style.p },
        },
        {
          is: "p",
          text:
            "Before we begin our journey to learn how to build websites with HTML and CSS, it is important to understand the differences between the two languages, the syntax of each language, and some common terminology.",
          props: { class: style.p },
        },
      ],
    };
  },
  methods: {
    shortStr
  },
};
</script>

<style>
</style>