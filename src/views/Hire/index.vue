<template>
  <div>
    <van-nav-bar title="房屋管理" left-arrow @click-left="$router.go(-1)" />
    <!-- <ZufangList></ZufangList> -->
    <ZufangList :list="hireList"></ZufangList>
  </div>
</template>

<script>
import ZufangList from '@/components/ZufangList.vue'
import { getHire } from '@/api/My'
export default {
  name: 'hire',
  created () {
    this.getHire()
  },
  data () {
    return {
      hireList: []
    }
  },
  methods: {
    async getHire () {
      try {
        const res = await getHire(this.$store.state.user)
        console.log('getHire', res)
        this.hireList = res.data.body
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
