<template>
  <div class="post" v-if="singData">
    <h3>{{ singData.title }}</h3>
    <p class="pre">{{ singData.body }}</p>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import { reactive, toRefs, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import PostList from '@/components/PostList.vue'
import Spinner from '@/components/Spinner.vue'

export default {
  components: {
    PostList,
    Spinner,
  },
  props: {
    id: { type: String },
  },
  setup() {
    const route = useRoute()
    console.log(route.params.id)
    const state = reactive({
      singData: {},
      aa: {},
    })

    const singleDataList = async () => {
      let id = route.params.id
      let res = await axios('http://localhost:3000/posts/' + id)
      state.singData = res.data
      console.log(state.singData)
      console.log(res)
      console.log(res.data)
      // console.log(singData)

      const singData = res.data
      state.singData = singData
      console.log(singData)
    }

    const singleD = toRefs(singleDataList)
    // console.log(singleD)

    onMounted(() => {
      singleDataList()
    })
    return {
      ...toRefs(state),
      ...singleD,
    }
  },
}
</script>

<style lang="scss" scoped>
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post h3 {
  display: inline-block;
  position: relative;
  font-size: 26px;
  color: white;
  margin-bottom: 10px;
  max-width: 400px;
}
.post h3::before {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;

  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
}
.post p {
  color: #444;
  line-height: 1.5rem;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
</style>
