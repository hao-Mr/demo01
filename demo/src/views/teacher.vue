<template>
  <div class="teacher">
    <div class="heade">
      <img :src="aa.avatar" alt="" />
      <p>
        {{ aa.real_name }}
      </p>
    </div>
    <van-tabs v-model="active">
      <van-tab title="讲师介绍" id="van-tab">
        <p>老师简介</p>
        <p>{{ aa.introduction }}</p>
      </van-tab>
      <van-tab title="主讲课程">
        <div
          class="con"
          v-for="(item, index) in nav"
          :key="index"
          v-if="index == 1"
          @click="goxq"
        >
          <div class="con1" v-for="(it, key) in item.list" :key="key">
            <img id="img" :src="it.cover_img" alt="" />
            <div class="con2">
              <div class="con3">
                <p>{{ it.title }}</p>
                <p>{{ it.sales_num }}已报名</p>
              </div>
              <div class="con4">
                <p>免费</p>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
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
      aa: [],
      nav: [],
      active: "",
    };
  },

  computed: {},

  watch: {},

  methods: {
    goxq(cid) {
      this.$router.push("/xiangqing");
    },
  },

  async created() {
    var res = await this.$axios.get(
      "http://120.53.31.103:84/api/app/teacher/" + this.id
    );
    this.list = res.data.data;
    this.aa = res.data.data.teacher;
    console.log(res);

    var res1 = await this.$axios.get(
      "http://120.53.31.103:84/api/app/recommend/appIndex"
    );
    console.log(res1);
    this.nav = res1.data.data;
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
.teacher {
  width: 100%;
  .heade {
    width: 100%;
    height: 150px;
    display: flex;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin-top: 30px;
      margin-left: 20px;
    }
    p {
      width: 60px;
      height: 30px;
      margin: 40px 10px;
    }
  }
  .nav {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-around;
    div {
      width: 70px;
      line-height: 30px;
      p {
        font-size: 14px;
        text-align: center;
        &:hover {
          border-bottom: 3px solid red;
        }
      }
    }
  }
  .con {
    width: 340px;
    margin: 0 auto;
    margin-top: 20px;
    .con1 {
      width: 100%;
      height: 100px;
      display: flex;
      margin-top: 20px;
      img {
        width: 100px;
        height: 100px;
      }
      .con2 {
        width: 220px;
        height: 100px;
        display: flex;
        justify-content: space-between;
        .con3 {
          p:nth-child(1) {
            margin-left: 10px;
            font-size: 16px;
            margin-top: 10px;
          }
          p:nth-child(2) {
            margin-left: 10px;
            font-size: 16px;
            margin-top: 40px;
            font-size: 12px;
            color: gray;
          }
        }
        .con4 {
          p {
            margin-top: 70px;
            font-size: 14px;
            color: rgba(51, 128, 0, 0.835);
          }
        }
      }
    }
  }
  #van-tab {
    width: 100%;
    height: 20px;
    margin-left: 20px;
    p:nth-child(1) {
      margin-top: 10px;
      font-size: 14px;
      color: gray;
    }
    p:nth-child(2) {
      margin-top: 10px;
      font-size: 14px;
    }
  }
}
</style>
