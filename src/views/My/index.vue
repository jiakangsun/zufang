<template>
  <div>
    <!-- 登录 -->
    <div v-if="this.$store.state.user" class="bjt">
      <div class="my-info">
        <div class="my-pic-box">
          <img
            class="my-pic"
            :src="base + userInfo.avatar "
            alt=""
          />
        </div>
        <div class="my-name">
          <div class="user">{{ userInfo.nickname }}</div>
          <!-- v-if="this.$store.state.user && this.$store.state.user.token" -->
          <div @click="logout" class="tuichu">退出</div>
          <div class="bianji">
            编辑个人资料
            <van-icon name="play" />
          </div>
        </div>
      </div>
    </div>
    <!-- 未登录 -->
    <div v-else class="wdl">
      <img src="http://liufusong.top:8080/img/profile/bg.png" alt="" />
      <div class="myxinxi">
        <div class="my-touxiang">
          <img src="http://liufusong.top:8080/img/profile/avatar.png" alt="" />
          <p>游客</p>
          <van-button type="primary" to="/login">去登录</van-button>
        </div>
      </div>
    </div>
    <van-grid :column-num="3" :border="false">
      <van-grid-item @click="goFavorites" icon="star-o" text="我的收藏" />
      <van-grid-item @click="goHire" icon="wap-home-o" text="我的出租" />
      <van-grid-item icon="clock-o" text="看房记录" />
      <van-grid-item icon="notes-o" text="成为房主" />
      <van-grid-item icon="contact" text="个人资料" />
      <van-grid-item icon="service-o" text="联系我们" />
    </van-grid>
    <div class="advert">
      <img src="http://liufusong.top:8080/img/profile/join.png" alt="" />
    </div>
  </div>
</template>

<script>
import { getUserInfo } from '@/api/My'
export default {
  name: 'My',
  created () {
    this.getUserInfo()
  },
  data () {
    return {
      userInfo: {},
      base: 'http://liufusong.top:8080'
    }
  },
  methods: {
    // 账号登出
    async logout () {
      try {
        await this.$dialog.confirm({ message: '确定退出吗' })
        this.$store.commit('setUser', '')
      } catch (err) {
        console.log(err)
      }
    },
    // 跳转到我的收藏  如果有token就跳转  没有
    async goFavorites () {
      if (this.$store.state.user) {
        this.$router.push('/collect')
      } else {
        this.$router.push('/login')
      }
    },
    // 跳转到我的出租  如果有token就跳转  没有
    async goHire () {
      if (this.$store.state.user) {
        this.$router.push('/hire')
      } else {
        this.$router.push('/login')
      }
    },
    // 获取用户信息
    async getUserInfo () {
      try {
        const res = await getUserInfo(this.$store.state.user)
        console.log(res)
        this.userInfo = res.data.body
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
.wdl {
  position: relative;
  width: 750px;
  height: 600px;
  background-color: #fff;
  img {
    width: 100%;
  }
  .myxinxi {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 638px;
    height: 330px;
    background-color: #fff;
    .my-touxiang {
      width: 140px;
      height: 140px;
      background-color: #fff;
      border: 5px solid #f5f5f5;
      text-align: center;
      border-radius: 50%;
      box-shadow: 0 2px 2px #bdbdbd;
      transform: translate(251px, -50%);
      img {
        width: 120px;
        height: 120px;
        margin-top: 10px;
      }
      p {
        font-size: 13px;
        margin-top: 40px;
      }
      .van-button {
        width: 140px;
        height: 60px;
        font-size: 13px;
        background-color: #21b97a;
        border-radius: 10px;
      }
    }
  }
}
.bjt {
  position: relative;
  width: 750px;
  height: 750px;
  background: url("http://liufusong.top:8080/img/avatar.png") no-repeat;
  background-size: cover;
  .my-info {
    position: absolute;
    width: 638px;
    height: 416px;
    background-color: #fff;
    // background-color: pink;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 10px 3px #ddd;
    text-align: center;
    .my-pic-box {
      width: 140px;
      height: 140px;
      background-color: #fff;
      border: 5px solid #f5f5f5;
      text-align: center;
      border-radius: 50%;
      box-shadow: 0 2px 2px #bdbdbd;
      transform: translate(251px, -50%);

      .my-pic {
        width: 120px;
        height: 120px;
        margin-top: 10px;
      }
    }
    .my-name {
      .user {
        font-size: 13px;
        margin-top: -30px;
        margin-bottom: 10px;
      }
      .tuichu {
        width: 54px;
        height: 40px;
        line-height: 40px;
        font-size: 12px;
        border-radius: 30px;
        background-color: #21b97a;
        color: #fff;
        padding: 2px 30px;
        transform: translateX(265px);
      }
      .bianji {
        color: #999;
        font-size: 12px;
        margin-top: 50px;
        .van-icon {
          font-size: 12px;
        }
      }
    }
  }
}
.van-grid {
  margin-top: 20px;
}
/deep/ .van-icon {
  font-size: 44px;
  margin-bottom: 10px;
}
/deep/ .van-grid-item__text {
  font-size: 26px;
}
.advert {
  margin-left: 30px;
  margin-top: 40px;
  width: 690px;
  height: 170px;
  img {
    width: 100%;
  }
}
</style>
