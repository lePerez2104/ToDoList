<template>

  <div class="px-3 py-10 md:px-10">
        <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">

          <ToDoSpinner v-if="loading" />

          <template v-else>
            <ToDoFormAdd />

            <ToDoItems
              v-if="$store.state.todos.length"
            />

            <ToDoEmpty v-else />
          </template>

        </div>
    </div>

</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import ToDoSpinner from '@/components/ToDoSpinner'
import ToDoFormAdd from '@/components/ToDoFormAdd'
import ToDoItems from '@/components/ToDoItems'
import ToDoEmpty from '@/components/ToDoEmpty'

export default {
  name: 'App',
  components: {
    ToDoSpinner,
    ToDoFormAdd,
    ToDoItems,
    ToDoEmpty
  },
  setup() {
    const loading = ref(false);
    const store = useStore()

    loading.value = true
    store.dispatch('getTodos').finally( () => {
      loading.value = false
    })

    return {
      loading,
    }

  },
}
</script>
