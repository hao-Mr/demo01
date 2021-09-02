<template>
  <div class="kc">
    <div
      class="con"
      v-for="(item, index) in list"
      :key="index"
      @click="go_kcxq(item.id)"
    >
      <img :src="item.avatar" alt="" />
      <div>
        <p>{{ item.real_name }}</p>
        <p>{{ item.introduction }}</p>
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
      list: [],
    };
  },

  computed: {},

  watch: {},

  methods: {
    go_kcxq(cid) {
      this.$router.push("/kcxq?id=" + cid);
      console.log(cid);
    },
  },

  async created() {
    var res = await this.$axios.get(
      "http://120.53.31.103:84/api/app/teacher/search/attrs"
    );
    this.list = res.data.data.list;
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
.kc {
  width: 100%;
  height: 100%;
  background: white;
  .con {
    width: 90%;
    height: 100px;
    background: #dedede;
    margin: 15px auto;
    border-radius: 8px;
    display: flex;
    align-items: center;
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: goldenrod;
      margin: 5px 20px;
    }
    div {
      p:nth-child(1) {
        font-size: 16px;
      }
      p:nth-child(2) {
        font-size: 12px;
        color: gray;
      }
    }
  }
}
</style>
