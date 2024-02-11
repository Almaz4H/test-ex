<template>
  <div>
    <notes
      :notes="notes"
      @remove-todo="removeTodo"
      @saveTodo="save"
      @remove-note="removeNote"
      @add-note="addNote"
    />
  </div>
</template>

<script>
import TodoList from "@/components/todos/TodoList.vue";
import AddEl from "@/components/todos/AddEl.vue";
import AddNote from "@/components/notesList/AddNote.vue";
import notes from "@/components/notesList/Notes.vue";

export default {
  name: "App",
  data() {
    return {
      todos: [
        { id: 1, title: "Затащить", completed: false },
        { id: 2, title: "этот чёртов", completed: false },
        { id: 3, title: "код", completed: false },
      ],
      notes: [
        {
          title: "Работа",
          todos: [
            { id: 1, title: "Поработать", completed: false },
            { id: 2, title: "Поработать 2", completed: false },
            { id: 3, title: "Поработать 3", completed: false },
            { id: 4, title: "Поработать 4", completed: false },
          ],
        },

        {
          title: "Учеба",
          todos: [
            { id: 1, title: "Посмотреть урок", completed: false },
            { id: 2, title: "вью2", completed: false },
            { id: 3, title: "учиться", completed: false },
          ],
        },
      ],
    };
  },
  methods: {
    removeTodo(iToDo) {
      this.notes[activeNoteIndex].todos = this.notes[
        activeNoteIndex
      ].todos.filter((t) => t.id !== iToDo);
    },
    save(noteX, activeNoteIndex) {
      this.notes[activeNoteIndex] = noteX;
    },
    removeNote(title) {
      this.notes = this.notes.filter((t) => t.title !== title);
    },
    addNote() {
      this.notes.push({
        title: "Новый задача",
        todos: [],
      });
    },
  },
  components: {
    TodoList,
    AddEl,
    notes,
    AddNote,
  },
};
</script>
