<template>
  <div>
    <!-- <ElementTest></ElementTest> -->
    <KForm :model="model" :rules="rules" ref="loginForm">
      <KFormItem label="用户名" prop="username">
        <KInput
          v-model="model.username"
          :mytx="TX"
          placeholder="请输入用户名"
        ></KInput>
      </KFormItem>
      <KFormItem prop="username">
        <button @click="Onlogin">登录</button>
      </KFormItem>
    </KForm>
  </div>
</template>

<script>
import KInput from "./KInput.vue";
import KFormItem from "./KFormItem.vue";
import KForm from "./KForm.vue";

export default {
  components: {
    KInput,
    KFormItem,
    KForm,
  },
  data() {
    return {
      model: {
        username: "TiM",
      },
      rules: {
        username: [
          {
            required: true,
            message: "用户名为必填项",
          },
        ],
      },
      TX: "QW",
    };
  },
  methods: {
    Onlogin() {
      console.log(this.$refs.loginForm.validate);
      this.$refs.loginForm.validate((result) => {

        this.$notice({
          title: "社会你杨哥喊你来搬砖",
          message: "校验失败!",
          duration: 1000,
        });
        console.log(result);
        // if (result) {
        //   console.log("submit log");
        // } else {
        //   alert("校验失败");
        // }
      });
    },
  },
};
</script>

<style scoped>
.mycolor {
  color: red;
}
</style>