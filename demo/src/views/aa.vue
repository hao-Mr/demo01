<template>
  <div class="my">
    <div class="top">
      <div class="login">
        <img src="	http://120.53.31.103:86/img/avatar.71c6d2b4.png" alt="" />
        <p>
          <span @click="login">登录/</span>
          <span>注册</span>
        </p>
      </div>
      <img src="http://120.53.31.103:86/img/user_bg.7d633ee2.png" alt="" />
    </div>
    <div class="nav">
      <div>
        <p>0</p>
        <p>我的学习</p>
      </div>
      <div>
        <p>0</p>
        <p>本周课时</p>
      </div>
      <div>
        <p>0</p>
        <p>我的积分</p>
      </div>
    </div>
    <div class="con" v-for="(item, index) in list" :key="index">
      <div v-for="(item2, key) in item" :key="key">
        <div>
          <p>
            <van-icon :name="item2.icon" />
            {{ item2.name }}
          </p>
          <p>></p>
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
      list: [
        [
          {
            name: "我的作业",
            icon: "description",
            url: "Homework",
          },
          {
            name: "我的社区",
            icon: "friends-o",
            url: "MyCommunity",
          },
        ],
        [
          {
            name: "课程订单",
            icon: "newspaper-o",
            url: "Order",
          },
          {
            name: "图书订单",
            icon: "idcard",
            url: "Order",
          },
        ],
        [
          {
            name: "优惠券",
            icon: "coupon-o",
            url: "Coupon",
          },
          {
            name: "学习卡",
            icon: "debit-pay",
            url: "Card",
          },
          {
            name: "分销中心",
            icon: "peer-pay",
            url: "Distribute",
          },
        ],
        [
          {
            name: "消息中心",
            icon: "comment-o",
            url: "Message",
          },
          {
            name: "地址管理",
            icon: "location-o",
            url: "Address",
          },
          {
            name: "关于我们",
            icon: "friends-o",
            url: "About",
          },
          {
            name: "意见反馈",
            icon: "records",
            url: "Feedback",
          },
          {
            name: "设置",
            icon: "setting-o",
            url: "Options",
          },
        ],
      ],
    };
  },

  computed: {},

  watch: {},

  methods: {
    login() {
      this.$router.push("/login");
    },
  },

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
.my {
  width: 100%;
  height: 100%;
  background: #dedede;
  .top {
    width: 100%;
    height: 200px;
    background: white;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    .login {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      border: 1px solid #ededed;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      p {
        width: 70px;
        height: 25px;
        margin-top: 10px;
        text-align: center;
        span {
          color: white;
          font-size: 16px;
        }
      }
    }
  }
  .nav {
    width: 100%;
    height: 80px;
    background: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    div {
      width: 100px;
      height: 60px;

      p:nth-child(1) {
        font-size: 20px;
        text-align: center;
        margin-top: 8px;
        color: red;
        &:hover {
          color: #5bb8f5;
        }
      }
      p:nth-child(2) {
        font-size: 16px;
        text-align: center;
      }
    }
  }
  .con {
    width: 100%;
    margin-top: 10px;
    background: white;
    div {
      width: 100%;
      height: 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 5px;
      p:nth-child(1) {
        width: 100px;
        height: 40px;
        line-height: 40px;
      }
      p:nth-child(2) {
        width: 20px;
        height: 40px;
        line-height: 40px;
        font-size: 25px;
        color: gray;
      }
    }
  }
}
</style>
