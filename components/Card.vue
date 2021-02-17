<template>
  <div class="m-6 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md  flex flex-col z-10">
        <div class="text-xs uppercase mb-2">Lesson {{index+1}}</div>
        <div class="text-gray-600 pb-5">{{obj.title}}</div>
        <p class="text-xs text-gray-800">{{obj.description}}</p>
        <button    class="z-10 text-blue-500 border-blue-700 focus:border-blue-900 border-2 
         mt-6 inline-block whitespace-nowrap w-32 shadow-md  hover:shadow-xl rounded-lg">
         <NuxtLink  :to="obj.url">
          View more
          <svg class="h-4 w-4 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
         </NuxtLink>
        </button>
      </div>
</template>

<script>
export default {
    props:["obj","index"],
    mounted(){
      console.log({obj:this.obj})
    }
};
</script>

<style>
</style>