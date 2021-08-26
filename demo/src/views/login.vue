<template>
  <div class="login">
      <div class="fan">
          <p>
              《
          </p>
      </div>
      <div class="login_img">
          <img src="https://dgss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1264439137,151078954&fm=30&app=106&f=JPEG?w=312&h=208&s=4986669F1191F1E9497585E503005063" alt="">
      </div>
      <div class="user">
          <input type="text" placeholder="请输入手机号"><span>获取验证码</span>
          <input type="password" placeholder="请输入验证码">
          <p>
              <button>登录</button>
          </p>
      </div>
      <div class="zc">
          <p>*未注册的手机号将自动注册</p>
          <button>密码登录</button>
      </div>
      <p class="di">第三方登录</p>
      <div class="aa">
          <div>
              <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.51miz.com%2FElement%2F00%2F72%2F13%2F02%2Fccb1cbec_E721302_2069f226.png%21%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue%2Fformat%2Fpng&refer=http%3A%2F%2Fimg.51miz.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632585451&t=ea387db49d47f139acaf26de526ac1e3" alt="">
              <p>微信</p>
          </div>
          <div>
              <img src="https://img1.baidu.com/it/u=1658979450,594197245&fm=26&fmt=auto&gp=0.jpg" alt="">
              <p>QQ</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  prop: {},
  components: {},
  data() {
    return {};
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
<style lang='scss' scoped>
.login {
  width: 100%;
  height: 100%;
  .di {
    margin-top: 60px;
    text-align: center;
  }
  .aa {
    width: 100%;
    display: flex;
    padding: 0 100px;
    justify-content: space-between;
    div {
      width: 50px;
      height: 80px;
      margin-top: 40px;
      img {
        width: 50px;
        height: 30px;
      }
      p {
        text-align: center;
      }
    }
  }
  .fan {
    width: 100%;
    height: 30px;
    p {
      font-size: 20px;
    }
  }
  .login_img {
    width: 100%;
    height: 200px;
    text-align: center;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .user {
    width: 375px;
    margin: 0 auto;
    input {
      margin-top: 20px;
      text-align: center;
      margin-left: 40px;
    }
    span {
      font-size: 16px;
    }
    p {
      margin-top: 10px;
      button {
        width: 300px;
        height: 50px;
        background: red;
        border: none;
        border-radius: 5px;
        color: white;
        margin-left: 35px;
      }
    }
  }
  .zc {
    width: 100%;
    padding: 0 30px;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    p {
      font-size: 14px;
    }
    button {
      font-size: 16px;
      border: none;
    }
  }
}
</style>