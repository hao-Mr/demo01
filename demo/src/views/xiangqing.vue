<template>
  <div class="xiangqing"></div>
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

  async created() {
    var res = await this.$axios.get(
      "http://120.53.31.103:84/api/app/courseInfo/basis_id=xxx"
    );
    console.log(res);
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
<style lang="scss" scoped></style>
