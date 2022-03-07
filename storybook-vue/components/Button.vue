<template>
  <div>
    <v-button :type="type" :size="size">{{ text }}</v-button>
  </div>
</template>

<script>
import { Button } from "element-ui";
import 'element-ui/lib/theme-chalk/index.css'
export default {
  name: "MyButton",
  components: {
    "v-button": Button,
  },
  props: {
    text: String,
    type: String,
    size: String
  },
  methods: {
    btnClick() {
      this.$emit("btnClick", this.text);
    },
  }
};
</script>