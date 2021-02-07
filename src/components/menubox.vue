<template>
  <div>
    <div class="userbox">
      <el-avatar
        :size="80"
        style="margin-bottom: 20px"
        src="https://pics1.baidu.com/feed/730e0cf3d7ca7bcb53a93fdac0b6f565f424a8bf.jpeg?token=0c020936e80756cb783469f5cb0c689f"
      ></el-avatar>
      <span>学生用户</span>
    </div>

    <el-menu
      :default-active="path"
      class="el-menu-vertical-demo"
      background-color="#464646"
      text-color="#fff"
      active-text-color="#41972E"
      @select="handleSelect"
    >
      <el-menu-item index="/">
        <span slot="title">首页</span>
      </el-menu-item>
      <!-- 学生端 -->
      <el-menu-item index="/myinfo">个人信息</el-menu-item>
      <el-menu-item index="/myDeliver">我的投递</el-menu-item>
      <el-menu-item index="/companyCenter">入驻企业</el-menu-item>
      <el-menu-item index="/jobCenter">实习市场</el-menu-item>
      <!-- 企业 -->
      <!-- <el-submenu index="3">
        <template slot="title">
          <span>企业</span>
        </template>
        <el-menu-item index="3-1">企业信息</el-menu-item>
        <el-menu-item index="3-2">发布实习岗位</el-menu-item>
        <el-menu-item index="3-3">我发布的实习</el-menu-item>
        <el-menu-item index="3-4">我收到的简历</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <span>人才</span>
        </template>
        <el-menu-item index="4-1">人才市场</el-menu-item>
      </el-submenu> -->
      <!-- 管理员 -->
      <!-- <el-submenu index="5">
      <template slot="title">
        <span>用户管理</span>
      </template>
      <el-menu-item index="5-1">学生用户管理</el-menu-item>
      <el-menu-item index="5-2">企业用户管理</el-menu-item>
    </el-submenu>
    <el-submenu index="6">
      <template slot="title">
        <span>实习管理</span>
      </template>
      <el-menu-item index="6-1">实习发布审批</el-menu-item>
      <el-menu-item index="6-1">实习岗位管理</el-menu-item>
      <el-menu-item index="6-2">投递记录查询</el-menu-item>
    </el-submenu> -->
    </el-menu>
    <div class="exit">退出登录</div>
  </div>
</template>

<script>
export default {
  name: "menubox",
  data() {
    return {
      path:"/"
    };
  },
  methods: {
    handleSelect(index){
      this.$router.push({ path: index });
    },
    goToPage(index) {
      this.$router.push({ path: "/page" + index });
    },
  },
  created(){
    console.log(this.$route.fullPath)
    this.path = this.$route.fullPath
    this.$forceUpdate()
  }
};
</script>

<style>
.userbox {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  margin: 20px 0;
}
.exit{
  font-size: 12px;
  color: #ffffff;
  width: 200px;
  position:absolute;
  line-height: 40px;
  cursor: pointer;
  bottom:0;
}
.exit:hover{
  color: #41972E;
}
</style>