<template>
  <div v-if="tags.length">
    <post-list :list="tags"></post-list>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import PostList from '../components/PostList.vue'
export default {
  components: {
    PostList,
  },
  setup() {
    const state = reactive({
      tags: [],
    })
    const route = useRoute()
    console.log(route)
    console.log(route.query.tag)
    // console.log(route.query.id)
    const postData = async () => {
      let res = await axios('http://localhost:3000/posts')
      state.tags = res.data

      console.log(state.tags)
      const tags = res.data
      state.tags = tags

      console.log(tags)
    }

    onMounted(() => {
      postData()
    })

    const load = async () => {
      try {
        let res = await axios('http://localhost:3000/posts')
        state.tags = res.data
        console.log(state.tags)
        console.log(res.data)
        const tags = res.data
        state.tags = tags

        console.log(tags)
      } catch {}
    }
    load()

    const postWithTag = computed(() => {
      return tags.filter((p) => p.tags.includes(route.query.tag))
    })
    return {
      ...toRefs(state),
      postWithTag,
    }
  },
}
</script>

<style lang="scss" scoped></style>
