<template>
  <div class="editWndw">
    <div class="editor">
      <h2>
        Редактирование заметки
        <button class="rm" @click="$emit('back')" style="float: right">
          <span class="material-symbols-outlined"> arrow_back_ios </span>
        </button>
      </h2>
      <hr style="border: 1px solid black" />
      <div class="editor_body">
        <h3>
          Название: {{ NoteX.title }}
          <button
            class="rm"
            @click="
              rerightTodoNote();
              todo1 = false;
            "
          >
            <span class="material-symbols-outlined"> edit </span>
          </button>
        </h3>
        <AddEl @add-el="addEl" />

        <div v-for="(todo, i) of NoteX.todos">
          <li :class="{ done: todo.completed }">
            <span>
              <button class="rm" @click="todo.completed = !todo.completed">
                <span class="material-symbols-outlined"> done </span>
              </button>
              <strong>{{ i + 1 }}</strong>
              {{ todo.title }}
            </span>
            <button
              class="rm"
              style="left: 0px"
              @click="
                todo1 = true;
                rerightTodoNote();
                ActiveId = i;
              "
            >
              <span class="material-symbols-outlined"> edit </span>
            </button>
            <button class="rm" @click="removeTodoNote(todo.id)">
              <span class="material-symbols-outlined"> close </span>
            </button>
          </li>
        </div>
        <form v-if="this.reright" @submit.prevent="TheSubmit(ActiveId)">
          <input type="text" v-model="title" />
          <button type="submit">&#8617;</button>
        </form>
      </div>
      <button @click="$emit('saveTodo', NoteX)">
        <span class="material-symbols-outlined"> save </span>
      </button>
    </div>
  </div>
</template>

<script>
import AddEl from "@/components/todos/AddEl.vue";
export default {
  name: "notere",
  props: ["activeNote"],
  components: {
    AddEl,
  },
  data() {
    return {
      NoteX: {},
      reright: false,
      ActiveId: false,
      title: "",
      todo1: true,
      con: false,
    };
  },
  mounted() {
    this.NoteX = JSON.parse(JSON.stringify(this.activeNote));
  },
  methods: {
    rerightTodoNote() {
      this.reright = !this.reright;
    },
    removeTodoNote(id) {
      this.con = confirm("Вы уверены, что хотите удалить todo?");
      if (this.con == true) {
        this.NoteX.todos = this.NoteX.todos.filter((el) => el.id !== id);
      }
      this.con = false;
      this.$emit("save-false");
    },
    addEl(x) {
      this.NoteX.todos.push(x);
      this.$emit("save-false");
    },
    TheSubmit(id) {
      if (this.title.trim()) {
        if (this.todo1 == true) {
          this.NoteX.todos[id].title = this.title;
        } else this.NoteX.title = this.title;
      }
      this.$emit("save-false");
      this.title = "";
      this.reright = !this.reright;
    },
  },
};
</script>

<style scoped>
.editWndw {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.editor {
  border: 2px solid black;
  border-radius: 2%;
  width: 600px;
  height: 700px;
  background-color: white;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  border: 0px solid#808080;
  display: flex;
  justify-content: space-between;
  width: 500px;
  padding: 0.4rem 2rem;
  margin-bottom: 0.5rem;
  margin-left: auto;
  margin-right: auto;
}

.rm {
  border: 0px solid#000000;
  background: rgb(255, 255, 255);
  color: #000000;
  border-radius: 25%;
  font-weight: 200;
  cursor: pointer;
}

input {
  margin-right: 2rem;
}
.done {
  background-color: #b4ffb4;
}

.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
}
</style>
