<template>

    <div class="space-y-2">
        <ToDoItem
            v-for="todo in $store.state.todos"
            :key="todo.id"
            :todo="todo"
        />
    </div>

</template>

<script>
import ToDoItem from '@/components/ToDoItem';

export default {
    components: {
        ToDoItem
    }
}

</script>
