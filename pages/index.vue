<template>
  <div class="flex justify-center">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
      <pre>
        <code v-highlight="code" class="javascript">console.log('Hello World')</code>
      </pre>
      <Card
        v-for="(elm, index) in lesson.list"
        :key="index"
        :obj="elm"
        :index="index"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import lesson from "@/data/ls1";
import Card from "@/components/Card";
export default {
  components: {
    Card,
  },
  data() {
    return {
      lesson,
    };
  },
  created() {
    this.changeLesson(this.lesson);
  },
  methods: {
    ...mapMutations(["changeLesson"]),
  },
};
</script>

<style>
</style>
