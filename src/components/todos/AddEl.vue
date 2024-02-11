<template>
  <form @submit.prevent="onSubmit" style="height: 30px">
    <b style="line-height: 30px">Добавить todo &nbsp;</b>
    <input type="text" v-model="title" />
    <b>&nbsp;</b>
    <button type="submit">
      <span class="material-symbols-outlined"> done </span>
    </button>
  </form>
</template>

<script>
export default {
  name: "AddEl",
  props: ["NoteX"],
  data() {
    return {
      title: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.title.trim()) {
        const newEl = {
          id: Date.now(),
          title: this.title,
          completed: false,
        };
        this.$emit("add-el", newEl);
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
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
}
</style>
