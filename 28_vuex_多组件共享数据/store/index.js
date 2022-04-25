//该文件用于创建vuex中最为核心的store
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
Vue.use(Vuex)
//actions 用于相应组件中的动作
const actions = {
    incrementOdd(context, value) {
        if (context.state.sum%2!=0) {
            context.commit('increment', value)
        }
    },
    incrementWait(context, value){
        setTimeout(() => {
            context.commit('increment', value)
        }, 500);
    }
}
//mutations 用于操作数据（state）
const mutations = {
    increment(state, value) {
        state.sum += value
    },
    decrement(state, value) {
        state.sum -= value
    },
    addPerson(state,value){
        state.person.push(value)
    }
}
//state 用于存储数据
const state = {
    sum: 0,
    school:'西安文理学院',
    subject:'前端',
    person:[
        {id:888, name:'何子琪'}
    ]
}
//准备一个getters准备将state中的数据进行加工
const getters = {
    bigSum(state){
        return state.sum*10
    }
}
//创建并导出Store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
