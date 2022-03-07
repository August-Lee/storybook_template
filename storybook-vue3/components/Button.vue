//Button.vue 

<template>
  <div>
    <h1>hello Vue Storybook</h1>
    <button>{{ text }}</button>
  </div>
</template>

<script>
export default {
  name: "MyButton",      
  props: {
    text: String,
  },
};
</script>