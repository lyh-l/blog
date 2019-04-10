<template>
  <div>
<p>中文名：{{personData.name}}</p>
<p>英文名：{{personData.EnglishName}}</p>
<p>职业：{{personData.personDec}}</p>
  </div>
</template>
<script>
import { personDec } from "@/const/api";
export default {
  data() {
    return {
      personData:{},
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
      this.$axios.get(`https://www.easy-mock.com/mock/5cad693c549690208f8f5a25${personDec}`).then(res => {
        this.personData=res.data.data
        console.log(res);
      });
    }
  }
};
</script>

<style>
</style>