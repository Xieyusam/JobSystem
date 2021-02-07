<template>
  <div>
    <div class="flex-box">
      <!-- 学生端 -->
      <el-card shadow="always" class="box"> 
        <div class="namebox"> 个人信息</div> </el-card>
      <el-card shadow="always" class="box"> 我的投递 </el-card>
      <el-card shadow="always" class="box"> 入驻企业 </el-card>
      <el-card shadow="always" class="box"> 实习市场 </el-card>
      <!-- 企业 -->
      <el-card shadow="always" class="box"> 发布实习岗位 </el-card>
      <el-card shadow="always" class="box"> 我发布的实习 </el-card>
      <el-card shadow="always" class="box"> 我收到的简历 </el-card>
      <el-card shadow="always" class="box"> 人才市场 </el-card>
      <!-- 管理员 -->
      <el-card shadow="always" class="box"> 学生用户管理 </el-card>
      <el-card shadow="always" class="box"> 企业用户管理 </el-card>
      <el-card shadow="always" class="box"> 实习发布审批 </el-card>
      <el-card shadow="always" class="box"> 实习岗位管理 </el-card>
      <el-card shadow="always" class="box"> 投递记录查询 </el-card>
    </div>
  </div>
</template>

<script>
import headerbox from "../../components/headerbox";
export default {
  components: {
    headerbox,
  },
};
</script>

<style scoped>
.box {
  height: 150px;
  width: 230px;
  margin: 12px;
  border-radius: 8px;
  cursor: pointer;
}
.namebox{
  width: 100%;
  font-size: 14px;
  font-weight: 600;
}
.box:hover{
  border-color:#41972E;
} 
.box:hover .namebox{
  color:#41972E;
} 
.flex-box {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>