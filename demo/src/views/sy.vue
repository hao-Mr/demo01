<template>
  <div class="sy">
    <div class="search">
      <van-search v-model="value" placeholder="请输入搜索关键词" />
    </div>
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="2000" indicator-color="#ededed">
        <van-swipe-item
          ><img
            src="https://img2.baidu.com/it/u=1355158683,1597723475&fm=26&fmt=auto&gp=0.jpg"
            alt=""
          />
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01f5855de2888fa80120686bb66d15.jpg%401280w_1l_2o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632819266&t=5e2ded8d7789f813b53b1ae75ffc26f9"
            alt=""
          />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="con" v-for="(item, index) in nav" :key="index">
      <div class="con1">
        <p>
          <span>{{ item.channel_info.name }}</span>
          <span>更多</span>
        </p>
        <div class="con2" v-for="(it, key) in item.list" :key="key">
          <img :src="it.teacher_avatar" alt="" />
          <div>
            <p>{{ it.teacher_name }}</p>
            <p>{{ it.introduction }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import service from "@/http/service";
export default {
  prop: {},
  components: {},
  data() {
    return {
      value: "",
      banner: [],
      nav: [],
    };
  },

  computed: {},

  watch: {},

  methods: {},

  async created() {
    var res = await this.$axios.get("http://120.53.31.103:84/api/app/banner");

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
.banner {
  width: 100%;
}
.my-swipe {
  width: 100%;
  height: 200px;
  img {
    width: 100%;
    height: 100%;
  }
}
.con {
  width: 100%;
  background: #ededed;
  margin-top: 10px;
  .con1 {
    width: 100%;
    padding: 0 10px;
    line-height: 50px;
    p {
      display: flex;
      justify-content: space-between;
      span {
        font-size: 16px;
        color: gray;
      }
    }
    .con2 {
      width: 100%;
      height: 100px;
      background: white;
      margin-top: 10px;
      border-radius: 5px;
      display: flex;
      padding: 20px;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: red;
      }
      div {
        margin-left: 10px;
        width: 250px;
        height: 50px;
        p {
          height: 25px;
        }
        :nth-child(2) {
          font-size: 12px;
          color: grey;
        }
      }
    }
  }
}
</style>
