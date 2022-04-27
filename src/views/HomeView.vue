<template>
  <!-- <div>
    <div class="home">{{ name }}----{{ age }}</div>

  <button @click="handleClick">111</button>

  <p v-if="paused" @click="change">button</p>
  <p v-else>primary</p>
 </div> -->

  <div>
    <!-- <p>RefData:{{ refData.name }}---{{ refData.age }}</p> -->
    <!-- <p>RefData:{{ refData }}</p>
    <button @click="updaterefdata">更新RefData</button> -->

    <!-- <p>ReactiveData:{{ reactiveData.name }}---{{ reactiveData.age }}</p> -->
    <!-- <p>ReactiveData:{{ reactiveData }}</p>
    <button @click="updatereactivedata">更新ReactiveData</button> -->
  </div>

  <p>{{ name }}</p>
  <input type="text" v-model="search" />
  <!-- <div v-for="(item, index) in names" :key="index">
    {{ item.name }}
  </div> -->
  <div v-for="(item, index) in matchMames" :key="index">
    {{ item.name }}
  </div>
  <!-- input textarea select    -->
  <p>{{ search }}</p>

  <button @click="handleClick">stop</button>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  toRefs,
  computed,
  watch,
  watchEffect,
} from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
  },

  setup() {
    // let name = ref('mr.wu')
    // let age = ref(18)
    // let paused = ref(true)
    // const handleClick = () => {
    //   name.value = 'jspang'
    //   console.log(name)
    // }

    // const refData = ref({
    //   name: 'lily',
    //   age: 18,

    // })
    // const reactiveData = reactive({
    //   name: 'lucy',
    //   age: 19,
    // })

    // const refData = ref('ref')
    // // const reactiveData = reactive('reactive')

    // const updaterefdata = () => {
    //   // refData.value.name = 'cindy'
    //   refData.value = 'cindy'
    // }
    // const updatereactivedata = () => {
    //   // reactiveData.name = 'coco'
    //   // reactiveData = 'coco'
    // }
    const name = computed(() => {
      return 'jspang'
    })

    const names = ref([
      { name: 'cat' },
      { name: 'dog' },
      { name: 'pig' },
      { name: 'rubbit' },
    ])

    const search = ref('Mrs COCO')

    const matchMames = computed(() => {
      return names.value.filter((item) => item.name.includes(search.value))
    })

    // watch([search, names], ([newSearch, newNames], [prevSearch, prevNames]) => {
    //   console.log(
    //     'watch is touched',
    //     newSearch,
    //     newNames,
    //     prevSearch,
    //     prevNames
    //   )
    // })

    // watchEffect(() => {
    //   console.log('watchEffect touched ', search.value)
    // })

    const stopWatch = watch(
      [search, names],
      ([newSearch, newNames], [prevSearch, prevNames]) => {
        console.log(
          'watch is touched',
          newSearch,
          newNames,
          prevSearch,
          prevNames
        )
      }
    )

    const stopEffect = watchEffect(() => {
      console.log('watchEffect touched ', search.value)
    })

    const handleClick = () => {
      stopWatch()
      stopEffect()
    }
    return {
      // name,
      // age,
      // paused,
      // handleClick,
      // refData,
      name,
      names,
      search,
      matchMames,
      stopWatch,
      stopEffect,
      handleClick,
      // reactiveData,

      // updaterefdata,

      // updatereactivedata,
    }
  },
})
</script>
