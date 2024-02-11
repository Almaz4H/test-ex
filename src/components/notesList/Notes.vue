<template>
  <div>
    <button @click="addNote()" style="width: 70px">
      <span class="material-symbols-outlined"> add_ad </span>
    </button>
    <div v-for="(note, i) of notes">
      <h2>
        Название: {{ note.title }}
        <button
          @click="
            editingNote = note;
            activeNoteIndex = i;
          "
        >
          <span class="material-symbols-outlined"> edit </span>
        </button>
        <b>&nbsp;</b>
        <button @click="removeNote(note.title)">
          <span class="material-symbols-outlined"> close </span>
        </button>
      </h2>

      <div v-for="todo of note.todos">
        <li>
          <span>
            {{ todo.title }}
          </span>
        </li>
      </div>
    </div>
    <NoteRe
      v-if="editingNote"
      :activeNote="editingNote"
      @back="editingNote1()"
      @saveTodo="Todo"
      @save-false="saveFalse"
    />
  </div>
</template>

<script>
import NoteRe from "./NoteRe.vue";
export default {
  name: "notes",
  props: ["notes"],
  components: {
    NoteRe,
  },
  data() {
    return {
      activeNoteIndex: false,
      editingNote: false,
      con: false,
      save: true,
    };
  },
  methods: {
    saveFalse() {
      this.save = false;
    },
    editingNote1() {
      if (this.save == false) {
        this.con = confirm("Вы уверены, что хотите выйти без сохранения?");
        if (this.con == true) {
          this.editingNote = false;
        }
      } else this.editingNote = false;
      this.con = false;
    },
    removeTodo(id) {
      this.save = false;
      this.$emit("remove-todo", id);
    },
    Todo(x, y) {
      this.save = true;
      this.$emit("saveTodo", x, this.activeNoteIndex);
    },
    removeNote(title) {
      this.con = confirm("Вы уверены, что хотите удалить заметку?");
      if (this.con == true) {
        this.$emit("remove-note", title);
      }
      this.con = false;
    },
    addNote() {
      this.$emit("add-note");
    },
  },
};
</script>

<style scoped>
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
button {
  border-width: 2px;
  border-radius: 10%;
  cursor: pointer;
}
</style>
