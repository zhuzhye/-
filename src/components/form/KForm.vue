<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  provide() {
    return {
      form: this,
    };
  },
  props: {
    model: {
      type: Object,
      required: true,
    },
    rules: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    validate(cb) {
      // 校验内部所有表单项
      // 获取所有items
      const results = this.$children
        .filter((item) => item.prop)
        .map((item) => {
          return item.validate();
        });
      // 统一处理Promise
      Promise.all(results)
        .then(() => cb(true))
        .catch(() => cb(false));
    },
  },
};
</script>