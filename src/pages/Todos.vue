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
import Login from "@/pages/Login.vue";

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
            { id: 1, title: "Собрать совещение", completed: false },
            {
              id: 2,
              title: "Распределить зоны ответсвенности",
              completed: false,
            },
            { id: 3, title: "Установить сроки", completed: false },
            { id: 4, title: "Подготовить отчёт", completed: false },
          ],
        },

        {
          title: "Тренировка",
          todos: [
            { id: 1, title: "Пробежка 30мин", completed: false },
            { id: 2, title: "Подтягивание 5 подходов", completed: false },
            { id: 3, title: "Отжимания 3 подхода", completed: false },
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
        title: "Новая задача",
        todos: [],
      });
    },
  },
  components: {
    TodoList,
    AddEl,
    notes,
    AddNote,
    Login,
  },
};
</script>
