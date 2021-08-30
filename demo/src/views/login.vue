<template>
  <div class="login">
    <div class="top">
      <img
        src="	http://120.53.31.103:84/uploads/image/2021-04-12/PgQSnipITwNZZQsFq0igfihdieLRnI7eu9p7UruV.png"
        alt=""
      />
    </div>
    <div class="con">
      <div class="user">
        <input type="text" placeholder="请输入手机号" v-model="mobile" />
        <button @click="addsms">{{ text }}</button>
      </div>
      <div class="yz">
        <input type="text" placeholder="请输入验证码" v-model="sms" />
      </div>
      <div class="others">
        <span>*未注册的手机号将自动注册</span><span>使用密码登录</span>
      </div>
      <div class="dl">
        <button @click="add">登录</button>
      </div>
      <div class="login-info">
        <p><input type="checkbox" name="" id="" class="radio" /></p>
        <p>我同意</p>
        <a href="/treaty?name=user_register_contract">用户注册协议</a>
        <p>和</p>
        <a href="/treaty?name=user_protect_contract">隐私保护协议</a>
      </div>
    </div>
  </div>
</template>
<script>
import { smsCode, login } from "@/http/api";
export default {
  prop: {},
  components: {},
  data() {
    return {
      mobile: "",
      sms: "",
      text: "获取验证码",
    };
  },

  computed: {},

  watch: {},

  methods: {
    async addsms() {
      var res = await smsCode({
        mobile: this.mobile,
        sms_type: "login",
      });
      var res1 = /^1[3-9]\d{9}$/;
      if (!res1.test(this.mobile)) {
        this.$toast.fail("手机号格式不正确，请重新输入");
        return false;
      }
      var time = 60;
      var timer = setInterval(() => {
        this.text = `${time}`;
        if (time <= 0) {
          clearInterval(time);
          this.text = "获取验证码";
        }
        time--;
      }, 1000);
    },
    async add() {
      var res = await login({
        mobile: this.mobile,
        sms_code: this.sms,
        type: 2,
        client: "1",
      });
      console.log(res);
      this.$store.commit("setToken", res.data.data.remember_token);
      this.$router.push("/my");
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
.login {
  width: 100%;
  height: 100%;
  .top {
    width: 100%;
    height: 300px;
    img {
      width: 100%;
      height: 260px;
    }
  }
  .con {
    width: 100%;
    height: 150px;
    margin-top: 50px;
    .user {
      width: 300px;
      height: 30px;
      border-bottom: 1px solid #b7b7b7;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      margin-top: 10px;
      &:hover {
        border-bottom: 2px solid red;
      }
      input {
        border: none;
      }
      button {
        border: none;
        font-size: 14px;
        background: white;
        color: red;
      }
    }
    .others {
      width: 300px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      span {
        font-size: 14px;
        color: #b7b7b7;
      }
    }
    .yz {
      width: 300px;
      height: 30px;
      border-bottom: 1px solid #b7b7b7;
      margin: 0 auto;
      margin-top: 30px;
      &:hover {
        border-bottom: 2px solid red;
      }
      input {
        border: none;
      }
    }
    .dl {
      width: 300px;
      height: 30px;
      margin: 0 auto;
      margin-top: 60px;
      button {
        width: 300px;
        height: 50px;
        background: red;
        font-size: 16px;
        color: white;
        border: none;
        border-radius: 5px;
      }
    }
    .login-info {
      width: 300px;
      height: 20px;
      display: flex;
      margin: 0 auto;
      margin-top: 30px;
      .radio {
        margin-top: 5px;
        margin-right: 5px;
      }
    }
  }
}
</style>
