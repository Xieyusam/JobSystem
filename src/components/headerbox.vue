<template>
  <div class="header-box">
    <span>{{ title }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style scoped>
.header-box {
  height: 40px;
  width: 100%;
  border-bottom: 1px solid #eeeeee;
  font-size: 16px;
  line-height: 40px;
  text-align: left;
}
</style>