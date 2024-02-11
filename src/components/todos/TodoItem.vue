<template>
    <li  v-bind:class="{done: todo.completed}">
        <span>
            <input type="checkbox" v-on:change="todo.completed=!todo.completed">
            <strong>{{ index + 1 }}</strong>
            {{ todo.title }}
        </span>
        <button class="rm" 
            v-on:click="$emit('remove-todo', todo.id)"
        >&#10006;</button>
    </li>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        },
        index: Number
    }
}
</script>

<style scoped>
    li {
        border: 0px solid#808080;
        display: flex;
        justify-content: space-between;
        width: 500px;
        padding: .4rem 2rem;
        margin-bottom: 0.5rem;
        margin-left: auto;
        margin-right: auto 
    }

    .rm {
        border: 0px solid#000000;
        background: rgb(255, 255, 255);
        color: #000000;
        border-radius: 25%;
        font-weight: 200;
    }

    input {
        margin-right: 2rem;
    }
    .done {      
        background-color:#b4ffb4;
    }
</style>