<template>
  <div>
    <div class="nav-bgc">
      <div class="zjt">
        <van-icon name="arrow-left" />
      </div>
      <div class="search-box">
        <van-search disabled v-model="value1" placeholder="请输入小区或地址">
          <template #left>
            <div class="beijing">
              北京
              <i class="iconfont icon-xiala"></i>
            </div>
          </template>
        </van-search>
        <div class="ditu">
          <i class="iconfont icon-ditu"></i>
        </div>
      </div>
    </div>
    <van-sticky>
      <van-dropdown-menu>
        <van-dropdown-item title="区域">
          <van-picker title="标题" :columns="columns" value-key="label" />
          <van-button class="white" type="default">取消</van-button>
          <van-button class="green" type="primary">确定</van-button>
        </van-dropdown-item>
        <van-dropdown-item title="方式">
          <van-picker title="标题" :columns="columns1" value-key="label" />
          <van-button class="white" type="default">取消</van-button>
          <van-button class="green" type="primary">确定</van-button>
        </van-dropdown-item>
        <van-dropdown-item title="租金">
          <van-picker title="标题" :columns="columns2" value-key="label" />
          <van-button class="white" type="default">取消</van-button>
          <van-button class="green" type="primary">确定</van-button>
        </van-dropdown-item>
        <van-dropdown-item @open="show = true" title="筛选"></van-dropdown-item>
      </van-dropdown-menu>
    </van-sticky>
    <van-popup v-model="show" position="right" style="height: 100%; width: 70%"
      >123</van-popup
    >
    <!-- v-for="(item, index) in houseList" :key="index" -->
    <ZufangList :list="houseList"></ZufangList>
  </div>
</template>

<script>
import ZufangList from '@/components/ZufangList.vue'
import { getHouse, getCondition } from '@/api/search'
export default {
  name: 'Search',
  created () {
    this.getHouse()
    this.getCondition()
  },
  data () {
    return {
      value1: '',
      columns: [],
      columns1: [],
      columns2: [
        {
          text: '浙江'

        },
        {
          text: '福建'

        }
      ],
      show: false,
      houseList: [],
      obj: {}
    }
  },
  methods: {
    async getHouse () {
      try {
        const res = await getHouse()
        console.log('getHouse', res)
        this.houseList = res.data.body.list
      } catch (err) {
        console.log(err)
      }
    },
    async getCondition () {
      try {
        const res = await getCondition(this.$store.state.cityId)
        console.log('getCondition', res)
        this.obj = res.data.body
        this.obj.area.children[0].children = [{ label: '' }]
        this.obj.subway.children[0].children = [{ label: '' }]
        this.columns = [this.obj.area, this.obj.subway]
        this.columns1 = this.obj.rentType
        this.columns2 = this.obj.price
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {
    ZufangList
  }
}
</script>

<style scoped lang='less'>
.nav-bgc {
  height: 100px;
  background-color: #21b97a;
}
.zjt {
  height: 100px;
  line-height: 100px;
  margin-left: 10px;
}
.van-icon {
  font-size: 40px;
  color: #fff;
}
.search-box {
  position: absolute;
  top: 16px;
  margin-left: 20px;
  padding: 0 0 0 12px;
}
.van-search {
  height: 68px;
  margin-left: 55px;
  margin-right: 145px;
  padding: 5px 5px 5px 8px;
  border-radius: 3px;
  background-color: #fff;
  /deep/ .van-icon-search {
    font-size: 40px;
    color: #9c9fa1;
  }
}
.beijing {
  height: 34px;
  line-height: 34px;
  padding-left: 10px;
  font-size: 28px;
  color: #333;
  border-right: 1px solid #9c9fa1;
  .iconfont {
    zoom: 0.6;
    color: #7f7f80;
    margin-right: 30px;
    padding-bottom: 30px;
  }
}
.ditu {
  width: 30px;
  position: absolute;
  top: 10px;
  right: 30px;
  margin-right: 40px;
  text-align: center;
  .icon-ditu {
    font-size: 45px;
    color: #fff;
  }
}
.white {
  width: 250px;
  font-size: 36px;
  color: #20b97a;
}
.green {
  width: 500px;
  font-size: 36px;
  color: #fff;
  background-color: #20b97a;
}
/deep/ .van-dropdown-menu__bar--opened {
  z-index: -1;
}
</style>
