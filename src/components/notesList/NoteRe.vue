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
          <button
            class="rm"
            @click="
              $emit('saveTodo', NoteX);
              save = true;
            "
            style="float: right"
          >
            <span
              v-if="save"
              class="material-symbols-outlined"
              style="font-size: 30px"
            >
              save
            </span>
            <span
              v-else
              class="material-symbols-outlined"
              style="font-size: 30px"
            >
              save_as
            </span>
          </button>
        </h3>

        <AddEl @add-el="addEl" />
        <br />

        <div v-for="(todo, i) of NoteX.todos">
          <li :class="{ done: todo.completed }">
            <span
              style="
                height: 30px;
                width: 500px;
                max-width: 500px;
                display: flex;
                align-items: center;
              "
            >
              <button class="rm" @click="todo.completed = !todo.completed">
                <span v-if="todo.completed" class="material-symbols-outlined">
                  unpublished
                </span>
                <span v-else class="material-symbols-outlined">
                  check_circle
                </span>
              </button>
              <strong>{{ i + 1 }}</strong>
              {{ todo.title }}
            </span>
            <button
              class="rm"
              style="text-align: end"
              @click="
                todo1 = true;
                rerightTodoNote();
                ActiveId = i;
              "
            >
              <span class="material-symbols-outlined"> edit </span>
            </button>
            <button
              class="rm"
              style="float: right"
              @click="removeTodoNote(todo.id)"
            >
              <span class="material-symbols-outlined"> close </span>
            </button>
          </li>
        </div>
      </div>
    </div>
    <div
      v-if="this.reright"
      @submit.prevent="TheSubmit(ActiveId)"
      class="editWndw"
    >
      <div
        class="editor1"
        style="display: flex; justify-content: center; align-items: center"
      >
        <h4>Заменить на &nbsp;</h4>
        <input style="width: 200px; height: 30px" type="text" v-model="title" />
        <button
          class="rm"
          type="submit"
          @click="TheSubmit(ActiveId)"
          style="background: #ffffff; padding: 6px"
          onmouseover="this.style.backgroundColor='#00ff00';"
          onmouseout="this.style.backgroundColor='#ffffff';"
        >
          <span class="material-symbols-outlined"> check </span>
        </button>
        <button
          style="background: #ffffff; padding: 6px"
          onmouseover="this.style.backgroundColor='#ff0000';"
          onmouseout="this.style.backgroundColor='#ffffff';"
          class="rm"
          type="submit"
          @click="reright = !reright"
        >
          <span class="material-symbols-outlined"> close</span>
        </button>
      </div>
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
      save: true,
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
      this.save = false;
      this.$emit("save-false");
    },
    addEl(x) {
      this.NoteX.todos.push(x);
      this.$emit("save-false");
      this.save = false;
    },
    TheSubmit(id) {
      if (this.title.trim()) {
        this.save = false;
        this.$emit("save-false");
        if (this.todo1 == true) {
          this.NoteX.todos[id].title = this.title;
        } else this.NoteX.title = this.title;
      }

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
.editor1 {
  border: 2px solid black;
  border-radius: 2%;
  width: 500px;
  height: 330px;
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
  width: 500px;
  padding: 0.4rem 2rem;
  margin-bottom: 0.5rem;
  margin-left: auto;
  margin-right: auto;
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
  background: #72727252;
  transform: scale(1.5);
}

input {
  margin-right: 2rem;
}
.done {
  background-color: #b4ffb4;
  border-radius: 10px 10px 10px 10px;
}

.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
}
</style>
