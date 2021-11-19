<template>
  <div>
   <h3>Grandson</h3> 
   <span style="color:red">{{msg}}</span> 
   <p>{{fooo}}</p>
  </div>
</template>

<script>
export default {
  //就近找
  inject:{
    fooo:{
      from:'foo'
    }
  },
  props:{
    msg:{
      type:String,
      default:""
    }
  },
  data(){
    return{
    }
  }
};
</script>

<style>
</style>