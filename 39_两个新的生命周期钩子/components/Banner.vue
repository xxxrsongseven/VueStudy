<template>
      <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Vue Router Demo</h2>
        <button @click="back">后退</button>
        <button @click="forward">前进</button>
        <button @click="go">测试一下go</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
methods:{
  back(){
    this.$router.back()
  },
  forward(){
  this.$router.forward()
  },
  go(){
    this.$router.go(-3)
  }
}
}
</script>

<style>

</style>