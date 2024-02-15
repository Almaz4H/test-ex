<template>
  <form @submit.prevent="onSubmit" style="height: 30px">
    <b style="line-height: 30px">Добавить todo &nbsp;</b>
    <input type="text" v-model="title" />
    <b>&nbsp;</b>
    <button type="submit" class="rm">
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
.rm {
  border: 0px solid#000000;
  background: rgba(255, 255, 255, 0);
  color: #000000;
  border-radius: 25%;
  font-weight: 200;
  cursor: pointer;
}

.rm:hover {
  border: #000000 3px;
  background: #72727252;
  size: 110%;
  transform: scale(1.5);
}
</style>
