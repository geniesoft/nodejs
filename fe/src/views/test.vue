<template>
  <div>
    <h1>{{title}}</h1>
    <button @click="test">test</button>
    <v-btn :color="btnColor" @click="test">test</v-btn>
  </div>
</template>

<script>
  export default{
    name: 'test',
    data() {
      return {
        title: 'test',
        btnColor : 'success'
      }
    },
    methods:{
      test() {
        console.log("test");
        this.title = "변한다"
        this.btnColor = "warning"
      }
    }
  }
</script>
