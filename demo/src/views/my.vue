<template>
  <div class="login">
    <div class="fan">
      <p>
        《
      </p>
    </div>
    <div class="login_img">
      <img
        src="https://dgss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1264439137,151078954&fm=30&app=106&f=JPEG?w=312&h=208&s=4986669F1191F1E9497585E503005063"
        alt=""
      />
    </div>
    <div class="user">
      <input type="text" placeholder="请输入手机号" v-model="phone" /><span
        @click="add"
        >获取验证码</span
      >
      <input type="password" placeholder="请输入验证码" />
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
        <img
          src="https://img1.baidu.com/it/u=2063486912,4180716630&fm=26&fmt=auto&gp=0.jpg"
          alt=""
        />
        <p>微信</p>
      </div>
      <div>
        <img
          src="https://img1.baidu.com/it/u=1658979450,594197245&fm=26&fmt=auto&gp=0.jpg"
          alt=""
        />
        <p>QQ</p>
      </div>
    </div>
  </div>
</template>

<script>
import service from "@/http/service";
import { sms_code } from "@/http/service";
export default {
  prop: {},
  components: {},
  data() {
    return {
      phone: "",
    };
  },

  computed: {},

  watch: {},

  methods: {
    async add() {
      let loading = this.$toast.loading({
        duration: 10000,
        message: "加载中...",
        forbidClick: true,
      });
      service
        .post("http://120.53.31.103:84/api/app/smsCode", {
          mobile: 15769505272,
          sms_type: "login",
        })
        .then((res) => {
          console.log(res);
        });
      loading.clear();
    },
  },

  async created() {
    // let loading = this.$toast.loading({
    //   duration: 10000,
    //   message: "加载中...",
    //   forbidClick: true,
    // });
    // service
    //   .post("http://120.53.31.103:84/api/app/smsCode", {
    //     mobile: 15769505272,
    //     sms_type: "login",
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   });
    // loading.clear();
  },

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
      height: 50px;
      margin-top: 40px;
      img {
        text-align: center;
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
