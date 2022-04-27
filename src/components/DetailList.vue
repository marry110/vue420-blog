<template>
  <div>
    <!-- detail list -->
    <div class="detail-list">
      <div v-for="(item, index) in detail" :key="index">
        <router-link :to="{ name: 'Details', params: { id: item.id } }">
          <h3>{{ item.title }}</h3>
        </router-link>
        <p>{{ item.body }}</p>

        <span v-for="(tag, index) in item.tags" :key="index">
          <span>#{{ tag }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import {
  reactive,
  toRefs,
  computed,
  onMounted,
  onUnmounted,
  onUpdated,
  watchEffect,
} from 'vue'

export default {
  props: {
    detail: {
      type: Object,
    },
  },
  setup() {
    const state = reactive({
      count: 0,
    })

    const snippet = computed(() => {
      return props.detail.body.substrings(0, 100) + '...'
    })
    onMounted(() => {
      //  request the data
      console.log(
        'before the html render that can execute after it the page is coming'
      )
    })

    watchEffect
    //  get the data

    onUnmounted(() => {
      console.log(
        'destory the components after it the components will not render'
      )
    })

    return {
      ...toRefs(state),
      snippet,
    }
  },
}
</script>

<style lang="scss" scoped></style>
