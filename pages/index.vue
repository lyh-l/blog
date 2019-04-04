<template>
  <div>
55555555
  </div>
</template>
<script>
import { personDec } from "@/const/api";
export default {
  data() {
    return {
      dec: {}
    };
  },
  mounted() {
    console.log("ppppp")
    this.getDec();
  },
  methods: {
    getDec() {
      console.log("llll")
      this.$axios.get(`http://yapi.demo.qunar.com/mock/68007/${personDec}`).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style>
</style>