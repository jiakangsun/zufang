<template>
  <div>
    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/search" icon="search">找房</van-tabbar-item>
      <van-tabbar-item replace to="/information" icon="newspaper-o" >资讯</van-tabbar-item >
      <van-tabbar-item replace to="/my" icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  created () { },
  data () {
    return { active: 0 }
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
/deep/ .van-tabbar {
  margin-top: 1000px;
}
/deep/ .van-icon {
  font-size: 44px;
}
/deep/ .van-tabbar-item__text {
  font-size: 20px;
}
</style>
