<template>
  <div class="home">
    <div v-if="postData.length" class="layout">
      <post-list :list="postData" v-if="showPost"></post-list>
      <tag :posttag="postData"></tag>
    </div>

    <div v-else>
      <Spinner />
    </div>

    <!-- <button @click="showPost = !showPost">show/hide</button> -->

    <!-- <button @click="postData.pop()">delete one blog information</button> -->
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue'
import Spinner from '@/components/Spinner.vue'
import { reactive, toRefs, ref, onMounted, onUnmounted, onUpdated } from 'vue'
import axios from 'axios'
import Tag from '@/components/Tag.vue'
export default {
  components: {
    PostList,
    Spinner,
    Tag,
  },
  setup() {
    const state = reactive({
      postData: [],
    })
    const load = async () => {
      console.log('执行数据的方法')
      try {
        let data = await axios('http://localhost:3000/posts')
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    load()

    const postDataList = async () => {
      let res = await axios('http://localhost:3000/posts')
      state.postData = res.data
      console.log(state.postData)
      console.log(res)
    }

    const pdata = toRefs(postDataList)

    const showPost = ref(true)

    onMounted(() => {
      postDataList()
      console.log(
        'destory the components after it the components will not render'
      )

      // better scroll
      // destory the third party plug in instance
    })

    // watchEffect
    //  get the data

    onUnmounted(() => {
      console.log(
        'destory the components after it the components will not render'
      )

      // better scroll
      // destory the third party plug in instance
    })

    onUpdated(() => {
      console.log(
        'the content which has been changed belong to components this life cycle will touched'
      )
    })
    return {
      ...toRefs(state),
      ...pdata,
      showPost,
      load,
    }
  },
}
</script>

<style lang="scss" scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
}
</style>
