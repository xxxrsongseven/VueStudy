<template>
  <div class="container">
    <Category title="游戏">
      <template scope="games">
        <ul>
          <li v-for="(item, index) in games.games" :key="index">{{ item }}</li>
        </ul>
      </template>
    </Category>
    <Category title="游戏">
      <!-- 解构赋值{} -->
      <template scope="{games}">
        <ol>
          <li style="color: red" v-for="(item, index) in games" :key="index">
            {{ item }}
          </li>
        </ol>
      </template>
    </Category>
    <Category title="游戏">
      <template slot-scope="{ games }">
        <h4 style="font-size: 30px" v-for="(item, index) in games" :key="index">
          {{ item }}
        </h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";

export default {
  components: { Category },
};
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
}
</style>