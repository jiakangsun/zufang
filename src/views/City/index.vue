<template>
  <div class="main">
    <van-nav-bar
      :fixed="true"
      title="城市列表"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <van-index-bar :index-list="indexListAll">
      <!-- <van-index-anchor index="当前城市" />
      <van-cell title="北京" />
      <van-index-anchor index="热门城市" />
      <van-cell title="北京" />
      <van-cell title="广州" />
      <van-cell title="上海" />
      <van-cell title="深圳" />
      <van-index-anchor index="A" />
      <van-cell title="文本" />
      <van-cell title="文本" /> -->
      <van-index-anchor v-for="(val, key) in firstName" :key="key" :index="key"
        >{{ key }}
        <!-- 当前城市 -->
        <van-cell v-if="key === '#'">北京</van-cell>
        <!-- 热门城市 -->
        <van-cell
          v-else-if="key === '热'"
          v-for="(item, index) in hotCity"
          :key="index"
          :title="item.label"
          @click="onClick(item)"
        />
        <!-- 全部城市 -->
        <van-cell
          v-else
          :title="item.label"
          v-for="item in val"
          :key="item.value"
          @click="onClick(item)"
        ></van-cell>
      </van-index-anchor>
    </van-index-bar>
  </div>
</template>

<script>
import { getHotCity, getCityList, getCityInfo } from '@/api/city'
export default {
  created () {
    this.getCityList()
    this.getHotCity()
  },
  data () {
    return {
      cityList: [],
      hotCity: [],
      indexListAll: [],
      firstName: {},
      CityInfoList: {}
    }
  },
  methods: {
    // 城市列表
    async getCityList () {
      try {
        const res = await getCityList(1)
        console.log('cityList', res)
        this.cityList = res.data.body
        const cslb = this.cityList.map(item => item.pinyin[0].toUpperCase())
        // console.log(cslb)
        const newCslb = [...new Set(cslb)].sort()
        // console.log(newCslb)
        this.indexListAll = ['#', '热', ...newCslb]
        console.log(this.indexListAll)
        const firstName1 = {}
        this.indexListAll.forEach(item => {
          firstName1[item] = []
          // 遍历城市列表
          this.cityList.forEach(item1 => {
            // 城市列表每一项城市的首字母大写  item1 是每一项城市名字
            const first = item1.pinyin[0].toUpperCase()
            if (first === item) {
              firstName1[item].push(item1)
            }
          })
        })
        // 数据接收完毕  再赋值给外面变量使用  防止数据接收失败 后外面使用无效
        this.firstName = firstName1
      } catch (err) {
        console.log(err)
      }
    },
    // 热门城市
    async getHotCity () {
      try {
        const res = await getHotCity()
        console.log('hotCity', res)
        this.hotCity = res.data.body
      } catch (err) {
        console.log(err)
      }
    },
    async onClick (item) {
      this.$store.commit('setLabel', item.label)
      this.$store.commit('setCityId', item.value)
      try {
        const res = await getCityInfo(item.label)
        console.log(res)
        this.CityInfoList = res.data.body
        if (this.CityInfoList.label !== item.label) {
          this.$toast.fail('当前城市暂无房源')
        } else {
          this.$router.push('/home')
        }
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.main {
  padding-top: 92px;
}
.van-nav-bar {
  z-index: 999;
}
</style>
