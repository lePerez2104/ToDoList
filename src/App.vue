<template>

  <div class="px-3 py-10 md:px-10">
        <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">

          <ToDoSpinner v-if="loading" />

          <template v-else>
            <ToDoFormAdd />

            <ToDoItems />

            <ToDoEmpty />
          </template>

        </div>
    </div>

</template>

<script>
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
  data() {
    return {
      loading: false
    }
  },
  created() {
    this.loading = true
    this.$store.dispatch('getTodos').finally( () => {
      console.log('here');
      this.loading = false
    })
  },
}
</script>
