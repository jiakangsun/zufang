<template>
  <div>
    <div
      v-for="(item, index) in list"
      :key="index"
      class="zufang-list"
      @click="
        $router.push({ name: 'houses', params: { houseId: item.houseCode } })
      "
    >
      <div class="left">
        <img :src="baseUrl + item.houseImg" alt="" />
      </div>
      <div class="right">
        <h3>{{ item.title }}</h3>
        <p class="p1">{{ item.desc }}</p>
        <span class="p2" v-for="(item1, index) in item.tags" :key="index">
          {{ item1 }}
        </span>
        <div>
          <span class="span1">{{ item.price }}</span>
          <span class="span2">元/月</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  created () { },
  data () {
    return {
      baseUrl: 'http://liufusong.top:8080'
    }
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.zufang-list {
  display: flex;
  margin-left: 30px;
  width: 690px;
  height: 240px;

  border-top: 1px solid #afb2b3;
  .left {
    width: 212px;
    height: 160px;
    margin-top: 40px;
    // background-color: pink;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .right {
    width: 478px;
    margin-top: 40px;
    padding-left: 24px;
    h3 {
      font-size: 32px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .p1 {
      font-size: 12px;
      color: #afb2b3;
      margin-bottom: 10px;
    }
    .p2 {
      display: inline-block;
      width: 108px;
      height: 44px;
      margin-right: 10px;
      line-height: 44px;
      text-align: center;
      border-radius: 10px;
      font-size: 12px;
      background-color: #e1f5f8;
      color: #39becd;
    }
    .span1 {
      font-size: 32px;
      font-weight: 700;
      color: #fa5741;
    }
    .span2 {
      font-size: 24px;
      color: #fa5741;
    }
  }
}
</style>
