<template>
  <div class="xiangqing">
    <div class="head">
      <img
        src="http://120.53.31.103:84/uploads/image/2021-07-05/AmLRnGuNSjB5SQ3IPQQNUnS97rhRynIr1eFOoFv7.png"
        alt=""
      />
    </div>
    <div class="title">
      <p>疯狂英语</p>
      <p>共1课时|67人已报名</p>
      <p>开课时间：2021/07/08 00:00-2021/07/09 00:00</p>
      <p>免费</p>
    </div>
    <div class="fw">
      <p><span>服务：</span><span>课程售后</span></p>
      <p>详情></p>
    </div>
    <div class="nav">
      <p>教学团队</p>
      <div class="tuan">
        <div>
          <img
            src="	http://120.53.31.103:84/uploads/image/2021-07-05/ZDGzYZ0832MhLmMKcts2cyKxVZ2SOvkKxWRnaG2v.png"
            alt=""
          />
          <p>123</p>
        </div>
        <div>
          <img
            src="	http://120.53.31.103:84/uploads/image/2021-07-05/ZDGzYZ0832MhLmMKcts2cyKxVZ2SOvkKxWRnaG2v.png"
            alt=""
          />
          <p>123</p>
        </div>
        <div>
          <img
            src="	http://120.53.31.103:84/uploads/image/2021-07-05/ZDGzYZ0832MhLmMKcts2cyKxVZ2SOvkKxWRnaG2v.png"
            alt=""
          />
          <p>123</p>
        </div>
        <div>
          <img
            src="	http://120.53.31.103:84/uploads/image/2021-07-05/ZDGzYZ0832MhLmMKcts2cyKxVZ2SOvkKxWRnaG2v.png"
            alt=""
          />
          <p>123</p>
        </div>
        <div>
          <img
            src="	http://120.53.31.103:84/uploads/image/2021-07-05/ZDGzYZ0832MhLmMKcts2cyKxVZ2SOvkKxWRnaG2v.png"
            alt=""
          />
          <p>123</p>
        </div>
      </div>
    </div>
    <div class="naa">
      <van-tabs v-model="active">
        <van-tab title="课程介绍" class="aa">
          <p>课程介绍</p>
          <p>123456</p>
          <p>12345678978998</p>
        </van-tab>
        <van-tab title="课程大纲" class="aa"
          ><p>课程大纲</p>
          <p>1.字符的魅力</p></van-tab
        >
        <van-tab title="课程评价" class="aa">
          <p>课程评价</p>
          <div>
            <img src="	http://120.53.31.103:86/img/empty.0d284c2e.png" alt="" />
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <div class="foot">
      <div>立即报名</div>
    </div>
  </div>
</template>

<script>
export default {
  prop: {},
  components: {},
  data() {
    return {
      active: "",
      list: [],
      id: this.$route.query.id,
    };
  },

  computed: {},

  watch: {},

  methods: {},

  async created() {
    var res = await this.$axios.get(
      "http://120.53.31.103:84/api/app/teacher/" + this.id
    );
    this.list = res.data.data;
    this.aa = res.data.data.teacher;
    console.log(res);
    console.log(this.id);
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
.xiangqing {
  width: 100%;
  height: 100%;
  background: #ededed;
  position: relative;
  .head {
    width: 100%;
    height: 200px;
    img {
      width: 200px;
      height: 200px;
    }
  }
  .title {
    width: 100%;
    height: 140px;
    background: white;
    padding-top: 10px;
    p:nth-child(1) {
      font-size: 18px;
      margin-left: 10px;
      margin-top: 10px;
    }
    p:nth-child(2) {
      font-size: 12px;
      margin-left: 10px;
      margin-top: 10px;
      color: gray;
    }
    p:nth-child(3) {
      font-size: 12px;
      margin-left: 10px;
      margin-top: 10px;
      color: gray;
    }
    p:nth-child(4) {
      font-size: 16px;
      margin-left: 10px;
      margin-top: 10px;
      color: red;
    }
  }
  .fw {
    width: 100%;
    height: 30px;
    background: white;
    line-height: 30px;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    p {
      font-size: 12px;
      color: gray;
      span:nth-child(2) {
        color: black;
      }
    }
  }
  .nav {
    width: 100%;
    height: 150px;
    margin-top: 10px;
    background: white;
    p {
      //   margin-top: 10px;
      padding: 10px;
    }
    .tuan {
      width: 100%;
      height: 80px;
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
      div {
        width: 50px;
        height: 80px;
        img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
        p {
          text-align: center;
        }
      }
    }
  }
  .naa {
    width: 100%;
    height: 150px;
    margin-top: 10px;
    background: white;
    .aa {
      margin: 10px 0;
      p {
        margin-top: 10px;
      }
    }
  }
}
.foot {
  width: 100%;
  height: 40px;
  position: fixed;
  background: white;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  div {
    width: 90%;
    height: 100%;
    background: red;
    text-align: center;
    line-height: 40px;
    color: white;
    border-radius: 20px;
    margin: auto;
  }
}
</style>
