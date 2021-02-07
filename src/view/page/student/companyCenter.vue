<template>
  <div class="page">
    <div class="searchline">
      <el-input
        placeholder="公司名称"
        size="mini"
        style="width: 200px; margin-left: 12px"
      ></el-input>
      <el-input
        placeholder="地址"
        size="mini"
        style="width: 200px; margin-left: 12px"
      ></el-input>
      <el-select
        v-model="value"
        placeholder="行业"
        size="mini"
        style="width: 200px; margin-left: 12px"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-select
        v-model="value"
        placeholder="注册年份"
        size="mini"
        style="width: 200px; margin-left: 12px"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div class="flexBox">
      <el-card shadow="always" class="box">
        <div class="card-info">
          <el-avatar shape="square" :size="50" :src="imgurl[0]"></el-avatar>
          <div class="cart-text">
            名称：瑞幸咖啡有限公司<br>
            行业：餐饮<br>
            注册年份2018<br>
            注册资金：2000万<br>
          </div>
        </div>
        <div class="card-info">
          简介：喝好喝好喝好喝好喝好喝好喝好喝好喝好喝好喝
        </div>
        

      </el-card>
      <el-card shadow="always" class="box">
        <el-avatar shape="square" style="height:60px;width:60px;" fit="cover" :src="imgurl[1]"></el-avatar>
      </el-card>
      <el-card shadow="always" class="box"></el-card>
      <el-card shadow="always" class="box"> </el-card>
      <el-card shadow="always" class="box"> </el-card>
      <el-card shadow="always" class="box"> </el-card>
      <el-card shadow="always" class="box"> </el-card>
      <el-card shadow="always" class="box"> </el-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgurl: [
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fx0.ifengimg.com%2Fres%2F2019%2F5B90DF3CF0740BC6833904A8BF7D14FD72E45D40_size23_w1080_h775.jpeg&refer=http%3A%2F%2Fx0.ifengimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615277370&t=ffc81bd58d069cae340070f1e1fcebab",
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3961151127,2104133477&fm=26&gp=0.jpg",
      ],
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
    };
  },
};
</script>

<style scoped>
.page {
  height: 100vh;
}
.flexBox {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.box {
  height: 160px;
  width: 250px;
  margin: 12px 0 0 12px;
  border-radius: 8px;
  cursor: pointer;
}
.searchline {
  margin-top: 20px;
  display: flex;
  justify-content: left;
}
.card-info{
  display: flex;
  font-size: 12px;
  justify-content: space-between;
}
.card-info .cart-text{
  font-size: 12px;
  width: 140px;
}
</style>