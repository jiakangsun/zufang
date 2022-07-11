<template>
  <div>
    <van-nav-bar title="收藏列表" left-arrow @click-left="$router.go(-1)" />
    <ZufangList :list="favoritesList"></ZufangList>
  </div>
</template>

<script>
import ZufangList from '@/components/ZufangList.vue'
import { getFavorites } from '@/api/My'
export default {
  name: 'collect',
  created () {
    this.getFavorites()
  },
  data () {
    return {
      favoritesList: []
    }
  },
  methods: {
    async getFavorites () {
      try {
        const res = await getFavorites(this.$store.state.user)
        console.log('getFavorites', res)
        this.favoritesList = res.data.body
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
</style>
