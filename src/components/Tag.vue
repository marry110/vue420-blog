<template>
  <div class="tag-cloud" v-for="(item, index) in posttag" :key="index">
    <!-- <div>{{ item.tags }}</div> -->
    <h3>标签</h3>

    <div v-for="tag in item.tags" :key="tag">
      <router-link :to="{ path: '/tags', query: { tag } }">
        #{{ tag }}
      </router-link>
    </div>

    <!-- <div>{{ tags }}</div> -->

    <div class="tag-cloud">
      <!-- <h3>标签</h3> -->
      <div v-for="tag in tags" :key="tag">
        <router-link :to="{ path: '/tags', query: { tag } }">
          #{{ tag }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, toRefs, onMounted } from 'vue'
const tags = ref([])
const tagArray = []

const tagSet = new Set()

props.posttag.forEach((item) => {
  // item.tags.forEach((tag) => tagArray.push(tag))
  item.tags.forEach((tag) => tagSet.add(tag))
})

tags.value = tagArray
tags.value = [...tagSet]
const props = defineProps({
  posttag: Array,
})
</script>

<style lang="scss" scoped>
.tag-cloud {
  padding: 10px;
}
.tag-cloud h3 {
  border-bottom: 1px solid #eeeeee;
  padding: 16px 8px;
  color: #444;
}
.tag-cloud div {
  display: inline-block;
  padding: 10px;
}
.tag-cloud a {
  color: #ccc;
  text-decoration: none;
}
.tag-cloud a.router-link-active {
  color: #ff8800;
  font-size: bold;
}
</style>
