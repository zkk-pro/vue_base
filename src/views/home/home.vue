<template>
  <div @click="showToast">基础框架</div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    showToast() {
      this.$showToast({
        title: '444',
        content: '123',
        autoHide: false,
        showLoading: true
      })
    }
  }
};
</script>

<style lang="scss" scoped></style>
