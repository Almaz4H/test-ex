<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="title" />
    <button type="submit">&#8617;</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.title.trim()) {
        const newNote = {
          title: "Работа",
          todos: [
            { id: 1, title: "Поработать", completed: false },
            { id: 2, title: "Поработать 2", completed: false },
            { id: 3, title: "Поработать 3", completed: false },
          ],
        };
        this.$emit("add-note", newNote);
        this.title = "";
      }
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  justify-content: center;
}

input {
  width: 300px;
}
</style>
