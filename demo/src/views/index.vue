<template>
  <div class="index">
    <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000">
      <van-tabbar-item icon="home-o" to="/sy">首页</van-tabbar-item>
      <van-tabbar-item icon="newspaper-o" to="/kc">课程</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/zx">资讯</van-tabbar-item>
      <van-tabbar-item icon="star-o" to="/ts">图书</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/my">我的</van-tabbar-item>
    </van-tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  prop: {},
  components: {},
  data() {
    return {
      active: "",
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
<style lang="scss" scoped></style>
