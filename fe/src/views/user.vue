<template>
  <div class="users">
    <h1>test</h1>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        text: 'debug',
        show: false
      }
    },
  mounted() {
    const a = {a:1, b:2}
    this.text = JSON.stringify(this.$vuetify.breakpoint)
  }
}
</script>
