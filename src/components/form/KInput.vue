<template>
  <div>
    <!-- 双绑 -->
    <!-- :value @input -->

    <input type="text" :value="value" @input="OnInput"  v-bind="$attrs">
  </div>
</template>

<script>
export default {
  inheritAttrs:false,
  props:{
    value:{
      type:String,
      default:''
    }
  },
  methods:{
    OnInput(e){
      this.$emit('input',e.target.value)
      this.$parent.$emit('validate')
    }
  },
  mounted() {
    console.log(this.$attrs);
  },
}
</script>

<style>

</style>