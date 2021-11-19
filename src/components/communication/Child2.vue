<template>
  <div>
    <h3>child2</h3>
    <!-- 属性透传 -->
    <Grandson v-bind="$attrs"></Grandson>
    <button @click="sendToChild1">给child1发送消息</button>
    <slot name="defalut" :foo="foo" @sendToChild1="sendToChild1"></slot>
  </div>
</template>
<script>
import Grandson from "@/components/communication/Grandson.vue"
export default {
  components:{
    Grandson
  },
  methods: {
    sendToChild1() {
      // 利用事件总线发送事件
      // this.$bus.$emit('event-from-child2', 'some msg from child2')
      // 利用共同祖辈元素发送事件
      this.$parent.$emit("event-from-child2", "some msg from child2");
    },
  },
  data(){
    return{
      foo:1
    }
  }
};
</script>

<style scoped>
</style>