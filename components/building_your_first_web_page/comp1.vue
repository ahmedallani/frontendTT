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
        <ViewButton @click="$emit('show',false)" less />
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
        <ViewButton @click="$emit('show',true)" />
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
          text: "What Are HTML & CSS?",
          props: { class: "font-serif text-xl  m-4" },
        },
        {
          is: "p",
          text:
            "HTML, HyperText Markup Language, gives content structure and meaning by defining that content as, for example, headings, paragraphs, or images. CSS, or Cascading Style Sheets, is a presentation language created to style the appearance of content—using, for example, fonts or colors.",
          props: { class: style.p },
        },
        {
          is: "p",
          text:
            "The two languages—HTML and CSS—are independent of one another and should remain that way. CSS should not be written inside of an HTML document and vice versa. As a rule, HTML will always represent content, and CSS will always represent the appearance of that content.",
          props: { class: style.p },
        },
        {
          is: "p",
          text:
            "With this understanding of the difference between HTML and CSS, let’s dive into HTML in more detail.",
          props: { class: style.p },
        }
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