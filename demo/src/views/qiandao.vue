<template>
  <div class="qiandao">
    <div class="top">
      <div class="left">
        <img src="http://120.53.31.103:84/uploads/avatar.jpg" alt="" />
        <div>
          <p>用户名</p>
          <p>积分</p>
        </div>
      </div>
      <div class="right">
        <button>签到规则</button>
      </div>
    </div>
    <div class="rl">
      <div class="">
        <van-calendar
          :row-height="32"
          :value="date"
          :show-title="false"
          :show-confirm="false"
        />
      </div>
    </div>
    <div class="rl1"></div>
    <div class="con">
      <div class="title">
        <p>
          好课推荐
        </p>
        <p>
          更多>
        </p>
      </div>
      <div class="title1">
        <div>
          <img
            src="	http://120.53.31.103:84/uploads/image/2021-01-21/0iHDEF8fiqFAern6hLl0erzc1P1d94OAHUPkgNBw.jpeg"
            alt=""
          />
        </div>
        <div class="div2">
          <p>论渣男的自我修养</p>
          <p>积分</p>
        </div>
        <div class="div3">
          <button>去兑换</button>
        </div>
      </div>
    </div>
    <div class="con">
      <div class="title">
        <p>
          热门图书
        </p>
        <p>
          更多>
        </p>
      </div>
      <div class="title1">
        <div>
          <img
            src="	http://120.53.31.103:84/uploads/image/2021-04-07/H2FyMmqIV87LZIUR0qG1AQziJsgVtgGcidQFoGZz.jpeg"
            alt=""
          />
        </div>
        <div class="div2">
          <p>vue开发后台管理系统</p>
          <p>积分</p>
        </div>
        <div class="div3">
          <button>去兑换</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  prop: {},
  components: {},
  data() {
    return {
      date: "",
    };
  },

  computed: {},

  watch: {},

  methods: {},

  created() {},

  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
};
</script>
<style lang="scss" scoped>
.qiandao {
  width: 100%;
  height: 100%;
  .top {
    width: 100%;
    height: 100px;
    background: red;
    display: flex;
    justify-content: space-between;
    padding: 30px 20px;
    .left {
      width: 200px;
      height: 50px;
      display: flex;
      img {
        width: 50px;
        height: 50px;
        border: 1px solid #ededed;
        margin-right: 10px;
        border-radius: 50%;
      }
    }
    .right {
      button {
        width: 80px;
        height: 25px;
        border-radius: 20px;
        border: none;
        background: goldenrod;
        font-size: 14px;
        color: white;
      }
    }
  }
  .rl {
    width: 100%;
    height: 150px;
    background: red;
    position: relative;
    div {
      width: 300px;
      height: 300px;
      position: absolute;
      top: 150px;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 0;
    }
  }
  .rl1 {
    width: 100%;
    height: 150px;
    background: white;
  }
  .con {
    width: 100%;
    margin-top: 10px;
    .title {
      width: 100%;
      height: 30px;
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
    }
    .title1 {
      width: 330px;
      height: 100px;
      border-radius: 5px;
      border: 1px solid #ededed;
      display: flex;
      margin: 0 20px;
      div {
        img {
          width: 100px;
          height: 80px;
        }
        :nth-child(1) {
          font-size: 14px;
          margin-top: 10px;
          margin-left: 10px;
        }
        :nth-child(2) {
          font-size: 12px;
          margin-top: 30px;
          margin-left: 10px;
          color: red;
        }
      }
      .div3 {
        button {
          margin-top: 60px;
          margin-left: 10px;
          width: 50px;
          height: 20px;
          border: 1px solid #ededed;
          border-radius: 20px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
