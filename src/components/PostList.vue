<template>
  <div>
    <!-- {{ post }} -->

    <div class="post">
      <div v-for="(item, index) in list" :key="index">
        <h3>{{ item.title }}</h3>
        <Detail :detail="list" />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import Detail from '@/components/DetailList.vue'
export default {
  props: {
    list: {
      type: Array,
    },
  },

  components: {
    Detail,
  },
  setup() {
    const state = reactive({
      count: 0,
    })

    return {
      ...toRefs(state),
    }
  },
}
</script>

<style lang="scss" scoped>
.post {
  margin: 0 40px 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid dashed #e7e7e7;
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
</style>
