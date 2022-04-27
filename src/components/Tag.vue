<template>
  <div>{{ posttag }}</div>
</template>

<script>
import { reactive, ref, toRefs, onMounted } from 'vue'

export default {
  props: {
    posttag: {
      type: [],
    },
  },
  setup() {
    const tags = ref([])
    // const tagArray = []
    const posttag = ref([])
    const tagArray = posttag.forEach((item) => {
      item.tags.forEach((tag) => tagArray.push(tag))
    })

    // tags.value = tagArray
    onMounted(() => {
      console.log(posttag.value)
    })
    return {
      tags,
      tagArray,
    }
  },
}
</script>

<style lang="scss" scoped></style>
