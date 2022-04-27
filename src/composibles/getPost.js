import { reactive, toRefs, ref, onMounted, onUnmounted, onUpdated } from 'vue'

import axios from 'axios'
export default {
  components: {
    PostList,
  },
  setup() {
    // const load = async () => {
    //   console.log('执行数据的方法')
    //   try {
    //     let data = await axios('http://localhost:3000/posts')
    //     console.log(data)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
    // load()
    const state = reactive({
      postData: [],
    })
    const postDataList = async () => {
      let res = await axios('http://localhost:3000/posts')
      state.postData = res.data
      console.log(state.postData)
      console.log(res)
    }

    const pdata = toRefs(postDataList)
    const showPost = ref(true)

    onUnmounted(() => {
      console.log(
        'destory the components after it the components will not render'
      )

      // better scroll
      // destory the third party plug in instance
    })

    // watchEffect
    //  get the data

    onMounted(() => {
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
      posts,
      showPost,
      // load,
    }
  },
}
