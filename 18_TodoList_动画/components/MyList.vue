<template>
  <ul class="todo-main">
    <transition-group appear
     name="animate__animated animate__bounce"
      enter-active-class="animate__lightSpeedInRight"
       leave-active-class="animate__lightSpeedOutLeft">
    <MyItem v-for="listObj in lists" :key="listObj.id" :todo ="listObj"/>
    </transition-group>
  </ul>
</template>
 
<script>
import 'animate.css'
import MyItem from "./MyItem.vue";
export default {
  components: {
    MyItem,
  },
  props:['lists'],
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>