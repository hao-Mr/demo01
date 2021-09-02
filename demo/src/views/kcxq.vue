<template>
  <div class="kcxq">
    <div class="avatar">
      <img :src="list.avatar" alt="" />
      <div>
        <p>{{ list.real_name }}</p>
      </div>
    </div>
    <div class="con">
      <van-tabs>
        <van-tab title="讲师介绍">
          <p>老师简介</p>
          <p>{{ list.introduction }}</p>
        </van-tab>
        <van-tab title="主讲课程">
          <div class="zj" v-for="(item, index) in nav" :key="index">
            <img :src="item.cover_img" alt="" />
            <div class="div1">
              <div class="div2">
                <p class="p1">{{ item.title }}</p>
                <p class="p2">{{ item.sales_num }}人已报名</p>
              </div>
              <div class="div3">
                <p class="p3">100</p>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  prop: {},
  components: {},
  data() {
    return {
      id: this.$route.query.id,
      list: [],
      nav: [],
    };
  },

  computed: {},

  watch: {},

  methods: {},

  async created() {
    var res = await this.$axios.get(
      "http://120.53.31.103:84/api/app/teacher/" + this.id
    );
    this.list = res.data.data.teacher;

    var res1 = await this.$axios.post(
      "http://120.53.31.103:84/api/app/teacher/mainCourse"
    );
    this.nav = res1.data.data.list;
    console.log(res1.data.data);
  },

  async mounted() {},
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
.kcxq {
  width: 100%;
  .avatar {
    width: 90%;
    height: 100px;
    margin: 20px auto;
    display: flex;
    align-items: center;
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: gold;
    }
    div {
      margin-left: 10px;
    }
  }
  .con {
    width: 90%;
    margin: 0 auto;
    p:nth-child(1) {
      font-size: 14px;
      color: gray;
      margin: 10px 0;
    }
    .zj {
      width: 90%;
      margin: 15px auto;
      display: flex;
      img {
        width: 100px;
        height: 100px;
      }
      .div1 {
        width: 180px;
        display: flex;
        justify-content: space-between;
        .div2 {
          width: 100px;
          margin-left: 10px;
          .p1 {
            font-size: 16px;
          }
          .p2 {
            font-size: 12px;
            margin-top: 40px;
          }
        }
        .div3 {
          width: 20px;

          margin-top: 50px;
          margin-right: 10px;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
