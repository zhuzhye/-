<template>
  <div>
    <!-- 1.label -->
    <label v-if="label">{{ label }}</label>
    <!-- 2.slot  -->
    <slot></slot>
    <!-- 3.校验信息 -->
    <p v-if="error" style="color: red">{{ error }}</p>
  </div>
</template>

<script>
import Validator from "async-validator";
export default {
  inject: ["form"],
  props: {
    label: {
      type: String,
      default: "",
    },
    prop: {
      type: String,
    },
  },
  data() {
    return {
      error: "",
    };
  },
  mounted() {
    this.$on("validate", () => {
      this.validate();
    });
  },
  methods: {
    validate() {
      const rules = this.form.rules[this.prop];
      const value = this.form.model[this.prop];
      const validator = new Validator({ [this.prop]: rules });
      return validator.validate({ [this.prop]: value }, (errors) => {
        if (errors) {
          this.error = errors[0].message;
        } else {
          this.error = "";
        }
      });
    },
  },
};
</script>

<style>
</style>