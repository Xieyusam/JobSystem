<template>
  <div id="login">
    <div class="center-box">
      <div class="banner-box">
        <el-carousel height="60vh" trigger="click">
          <el-carousel-item>
            <img style="height:100%;width:100%;" src="../../assets/img/ban1.png" alt="" />
          </el-carousel-item>
          <el-carousel-item>
            <img style="height:100%;width:100%;" src="../../assets/img/2.png" alt="" />
          </el-carousel-item>
          <el-carousel-item>
            <img style="height:100%;width:100%;" src="../../assets/img/3.png" alt="" />
          </el-carousel-item>
          <el-carousel-item>
            <img style="height:100%;width:100%;" src="../../assets/img/4.png" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="login-box">
        <div class="title">大学生实习平台</div>
        <div class="child-box" v-if="!isRegister">
          <el-input placeholder="your phone" v-model="phone"> </el-input>
          <el-input
            placeholder="your password"
            show-password
            v-model="password"
          >
          </el-input>

          <el-button @click="isRegister = !isRegister" type="primary"
            >register</el-button
          >
          <el-button type="primary">login</el-button>
        </div>
        <div class="child-box" v-if="isRegister">
          <el-input placeholder="your username" v-model="user"> </el-input>
          <el-input placeholder="your phone" v-model="phone"> </el-input>
          <el-input
            placeholder="your password"
            show-password
            v-model="password"
          >
          </el-input>
          <el-button @click="isRegister = !isRegister" type="primary"
            >return</el-button
          >
          <el-button type="primary">comfirm</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      user: "",
      password: "",
      isRegister: false,
    };
  },
  created() {
    console.log(window.history);
  },
  mounted() {
    this.$nextTick(() => {
      console.log(window.location);
    });
  },
  methods: {
    test() {
      window.location.href = "https://www.baidu.com";
    },
  },
};
</script>

<style>
#login {
  /* background-color: #C0C4CC; */
  height: 100vh;
  width: 100vw;
  /* text-align: center; */
  background-image: url("../../assets/img/bac.png");
  background-size: 100%;
}
#login .center-box {
  width: 100vw;
  height: 60vh;
  /* background-color: #c0c4cc; */
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: space-between;
}
#login .center-box .banner-box {
  height: 100%;
  width: 70%;
  /* background: #94faf5; */
}
#login .center-box .login-box {
  height: 100%;
  width: 30%;
  background: #004223;
  opacity: 0.85;
}

.login-box .title {
  font-size: 24px;
  text-align: center;
  color: #ffffff;
  padding: 20px 0;
}
.login-box .child-box {
  width: 80%;
  margin: auto;
}
.login-box .child-box > .el-input {
  margin: 14px 0;
}
.login-box .child-box > .el-button {
  margin: 14px 0;
  width: 48%;
}
</style>
