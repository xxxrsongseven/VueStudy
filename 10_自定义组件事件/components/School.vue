<template>
  <div class="school">
      <h2>学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
      <button @click="sendSchoolName">把学校名给App</button>
  </div>
</template>

<script>
//引入一个混合
export default {
    props:['getSchoolName'],
    data() {
        return {
            name:'西安文理学院信息工程学院软件工程专业',
            address:'科技六路'
        }
    },
    methods:{
        sendSchoolName(){
            this.getSchoolName(this.name)
        }
    }
}
</script>

<style lang="less" scoped>
.school{
    background-color: skyblue;
    padding: 5px;
    margin-top: 50px;
}
</style>
