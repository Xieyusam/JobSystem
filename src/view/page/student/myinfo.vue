<template>
  <div class="page">
    <el-tabs style="width:400px;margin:20px 0 0 20px;" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="账号信息" name="0"></el-tab-pane>
      <el-tab-pane label="个人资料" name="1"></el-tab-pane>
      <el-tab-pane label="简历大图" name="2"></el-tab-pane>
    </el-tabs>
    <!-- 账号 -->
    <el-form
      v-if="activeName == '0'"
      class="form"
      :label-position="labelPosition"
      label-width="80px"
      size="mini"
      :model="formLabelAlign"
    >
      <el-form-item label="账号名">
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <el-form-item label="账号">
        <el-input v-model="formLabelAlign.region"></el-input>
      </el-form-item>
      <el-form-item label="账号角色">
        <el-input v-model="formLabelAlign.type"></el-input>
      </el-form-item>
    </el-form>
      <!-- 个人资料 -->
  <el-form  v-if="activeName=='1'" class="form" :label-position="labelPosition" label-width="80px" size="mini" :model="formLabelAlign">
  <el-form-item label="姓名">
    <el-input v-model="formLabelAlign.name"></el-input>
  </el-form-item>
  <el-form-item label="姓别">
    <el-input v-model="formLabelAlign.name"></el-input>
  </el-form-item>
  <el-form-item label="专业">
    <el-input v-model="formLabelAlign.region"></el-input>
  </el-form-item>
  <el-form-item label="入学年份">
    <el-input v-model="formLabelAlign.type"></el-input>
  </el-form-item>
  <el-form-item label="平均成绩">
    <el-input v-model="formLabelAlign.type"></el-input>
  </el-form-item>
  <el-form-item label="平均绩点">
    <el-input v-model="formLabelAlign.type"></el-input>
  </el-form-item>
  <el-form-item label="擅长技能">
    <el-input v-model="formLabelAlign.type"></el-input>
  </el-form-item>
  <el-form-item label="求职方向">
    <el-input v-model="formLabelAlign.type"></el-input>
  </el-form-item>
  <el-form-item label="简介">
    <el-input v-model="formLabelAlign.type"></el-input>
  </el-form-item>
  <el-form-item label="简历图片">
    <el-input v-model="formLabelAlign.type"></el-input>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "",
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        region: "",
        type: "",
      },
    };
  },
};
</script>

<style scoped>
.page {
  min-height: 100vh;
}
.page .form {
  width: 400px;
  margin: 20px;
}
</style>