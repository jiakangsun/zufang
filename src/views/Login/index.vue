<template>
  <div>
    <van-nav-bar title="账号登陆" left-arrow @click-left="$router.go(-1)" />
    <van-form @submit="onSubmit">
      <van-field
        v-model.trim="username"
        name="username"
        placeholder="请输入账号"
        :rules="[{ required: true }, { pattern: /^[a-zA-Z0-9]{5,8}$/ }]"
      />
      <van-field
        v-model.trim="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="[
          { required: true },
          {
            pattern: /^[a-zA-Z0-9]{5,12}$/,
          },
        ]"
      />
      <div style="margin: 10px">
        <van-button @click="qts" block type="info" native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
    <div class="tz">
      <a href="#">还没有账号，去注册~</a>
    </div>
  </div>
</template>

<script>
import { getLogin } from '@/api/login'
export default {
  created () { },
  data () {
    return {
      username: 'itheima',
      password: '123456'
    }
  },
  methods: {
    async onSubmit (values) {
      try {
        console.log('submit', values)
        const res = await getLogin(this.username, this.password)
        console.log(res)
        this.$store.commit('setUser', res.data.body.token)
        this.$router.push({ name: 'my' })
        this.$toast.success('登录成功')
      } catch (err) {
        console.log(err)
        this.$toast.fail('登录失败')
      }
    },
    qts () {
      if (this.username === '' || this.password === '') {
        return this.$toast('用户名和密码不能为空')
      } else if (this.username.length < 5 || this.password.length > 8) {
        return this.$toast('用户名格式为5-8位的字母和数字')
      } else if (this.password.length < 5 || this.username.length > 12) {
        return this.$toast('密码格式为6-12位的字母和数字')
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
/deep/ .van-field__control {
  height: 110px;
  font-size: 34px;
}

.van-button {
  margin-top: 50px;
  font-size: 36px;
  text-align: center;
  background-color: #1cb676;
  border: none;
}
.tz {
  text-align: center;
  margin-top: 60px;
  a {
    color: #666;
    font-size: 30px;
  }
}
</style>
