<template>
  <div class="main">
    <van-nav-bar
      :title="this.housesList.community"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item
        v-for="(item, index) in this.housesList.houseImg"
        :key="index"
        >
        <img :src="base+item" alt="">
        </van-swipe-item
      >
    </van-swipe>
    <van-cell-group>
      <van-cell :title="this.housesList.description" />
    </van-cell-group>
    <div class="ditie-box">
      <span class="ditie" v-for="(item2, index) in this.housesList.tags" :key="index">{{item2}}</span>
    </div>
    <div class="introduce">
      <div class="pattern">
        <div class="num1">
          <span class="price">{{this.housesList.price}}</span>
          <span class="month">/月</span>
        </div>
        <p>租金</p>
      </div>
      <div class="pattern">
        <div class="num1">
          <span class="price">{{this.housesList.roomType}}</span>
          <span class="month"></span>
        </div>
        <p>房型</p>
      </div>
      <div class="pattern">
        <div class="num1">
          <span class="price">{{this.housesList.size}}</span>
          <span class="month">平米</span>
        </div>
        <p>面积</p>
      </div>
    </div>
    <div class="loucen">
      <div class="left">
        <p>装修： 精装</p>
        <p>楼层： {{this.housesList.floor}}</p>
      </div>
      <div class="right">
        <p v-for="(item1, index) in this.housesList.oriented" :key="index">朝向： {{item1}}</p>
        <p>类型： 普通住宅</p>
      </div>
    </div>
    <div class="map-box">
      <p>小区： 天山星城</p>
      <div class="map">地图</div>
    </div>
    <h3 class="peitao">房屋配套</h3>
    <div class="tubiao">
      <ul>
        <li>
          <p>
            <span><i class="iconfont icon-yigui-hui"></i></span>
          </p>
          <span>衣柜</span>
        </li>
        <li>
          <p>
            <span><i class="iconfont icon-xiyiji"></i></span>
          </p>
          <span>洗衣机</span>
        </li>
        <li>
          <p>
            <span><i class="iconfont icon-kongdiao"></i></span>
          </p>
          <span>空调</span>
        </li>
        <li>
          <p>
            <span><i class="iconfont icon-tianranqi-01"></i></span>
          </p>
          <span>天然气</span>
        </li>
        <li>
          <p>
            <span><i class="iconfont icon-bingxiang"></i></span>
          </p>
          <span>冰箱</span>
        </li>
        <li>
          <p>
            <span
              ><i class="iconfont icon-haofangtuo400iconfont2reshuiqi"></i
            ></span>
          </p>
          <span>热水器</span>
        </li>
        <li>
          <p>
            <span><i class="iconfont icon-icon-test"></i></span>
          </p>
          <span>宽带</span>
        </li>
        <li>
          <p>
            <span><i class="iconfont icon-jiajiabaojie-tubiao-"></i></span>
          </p>
          <span>沙发</span>
        </li>
      </ul>
    </div>
    <h3 class="peitao">房源概况</h3>
    <div class="avatar-box">
      <div class="avatar">
        <div class="avatar-l">
          <img src="http://liufusong.top:8080/img/avatar.png" alt="" />
        </div>
        <div class="avatar-r">
          <p>王女士</p>
          <span>已认证房主</span>
        </div>
      </div>
      <div class="avatar1">
        <van-button plain type="primary">发消息</van-button>
      </div>
    </div>
    <div class="wenben">
      1.周边配套齐全，地铁四号线陶然亭站，交通便利，公交云集，距离北京南站、西站都很近距离。
      2.小区规模大，配套全年，幼儿园，体育场，游泳馆，养老院，小学。
      3.人车分流，环境优美。
      4.精装两居室，居家生活方便，还有一个小书房，看房随时联系。
    </div>
    <h3 class="peitao">猜你喜欢</h3>
    <!-- <ZufangList></ZufangList> -->

    <div class="btn-bottom">
      <van-button class="moren" type="default">
        <van-icon name="star" />收藏</van-button
      >
      <van-button class="moren" type="default">在线咨询</van-button>
      <van-button class="zhuyao" type="primary">电话预约</van-button>
    </div>
  </div>
</template>

<script>
import { getHouses } from '@/api/My'
export default {
  async created () {
    try {
      const res = await getHouses(this.$route.params.houseId)
      console.log(res)
      this.housesList = res.data.body
    } catch (err) {
      console.log(err)
    }
  },
  data () {
    return {
      housesList: {},
      base: 'http://liufusong.top:8080'
    }
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {
    // ZufangList
  }
}
</script>

<style scoped lang='less'>
.main {
  position: relative;
  box-sizing: border-box;
  padding-bottom: 100px;
  // background-color: #f5f5f5;
  // height: 5000px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  width: 750px;
  height: 504px;
  text-align: center;
  background-color: #39a9ed;
  img {
    width: 750px;
    height: 504px;
  }
}
.van-cell__title {
  font-size: 32px;
  font-weight: 400;
  margin-top: 32px;
}
.ditie {
  display: inline-block;
  width: 92px;
  height: 44px;
  line-height: 44px;
  text-align: center;
  border-radius: 10px;
  font-size: 12px;
  background-color: #e1f5f8;
  color: #39becd;
  margin-left: 30px;
}
.introduce {
  margin: 30px 0;
  padding: 30px 0;
  border-top: 1px solid #999;
  border-bottom: 1px solid #999;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  .pattern {
    width: 220px;
    height: 104px;
    text-align: center;
    .num1 {
      .price {
        font-size: 36px;
        color: #fa5741;
        font-weight: bolder;
      }
      .month {
        font-size: 24px;
        color: #fa5741;
      }
    }
    p {
      font-size: 28px;
      color: #999;
    }
  }
}
.loucen {
  display: flex;
  width: 690px;
  height: 104px;
  margin-left: 30px;
  font-size: 26px;
  background-color: #fff;
  margin-bottom: 30px;
  .left {
    width: 345px;
    p {
      margin-top: 10px;
    }
  }
  .right {
    width: 345px;
    p {
      margin-top: 10px;
    }
  }
}
.map-box {
  width: 750px;
  height: 380px;
  p {
    width: 706px;
    height: 88px;
    line-height: 88px;
    margin-left: 22px;
    font-size: 28px;
    color: #333;
    background-color: #fff;
  }
  .map {
    width: 750px;
    height: 290px;
    background-color: pink;
  }
}
.peitao {
  height: 96px;
  line-height: 96px;
  font-size: 30px;
  font-weight: 600;
  border-bottom: 1px solid #999;
  margin-left: 20px;
}
.tubiao {
  width: 710px;
  height: 280px;
  // background-color: pink;
  margin-top: 20px;
  margin-left: 20px;
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 142px;
      height: 100px;
      margin: 20px 0;
      font-size: 28px;
      text-align: center;
      // border-right: 1px solid #999;
      .iconfont {
        font-size: 50px;
      }
    }
  }
}
.avatar-box {
  display: flex;
  justify-content: space-between;
  width: 710px;
  height: 164px;
  margin-left: 20px;
  // background-color: pink;
  .avatar {
    display: flex;
    .avatar-l {
      margin-top: 10px;
      width: 104px;
      height: 104px;
      img {
        width: 104px;
        height: 104px;
      }
    }
    .avatar-r {
      width: 172px;
      height: 62px;
      padding-top: 30px;
      padding-left: 20px;
      p {
        font-size: 28px;
      }
      span {
        font-size: 24px;
        color: #fa5741;
      }
    }
  }
  .avatar1 {
    .van-button--primary {
      margin-top: 53px;
      margin-right: 30px;
      width: 148px;
      height: 58px;
      line-height: 58px;
      color: #20b97a;
      border-color: #20b97a;
      border-radius: 8px;
    }
  }
}
.wenben {
  margin-left: 20px;
  width: 710px;
  height: 264px;
  line-height: 1.6;
  font-size: 28px;
  color: #333;
  padding: 20px 0;
}
.btn-bottom {
  position: fixed;
  bottom: 0;
  width: 750px;
  height: 100px;
  .moren {
    width: 250px;
    height: 100px;
    line-height: 250px;
    font-size: 34px;
    color: #999;
    .van-icon {
      margin-right: 10px;
      color: #ff4f01;
    }
  }
  .zhuyao {
    height: 100px;
    width: 250px;
    line-height: 250px;
    font-size: 34px;
    background-color: #20b97a;
  }
}
</style>
