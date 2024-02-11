<template>
  <div class="hello">
    <div class="login">
      <form @submit.prevent="login">
        <h1>Войти на сайт</h1>
        <label for="username">Имя пользователя</label>
        <input type="text" v-model="username" name="username" />
        <label for="password">Пароль</label>
        <input type="text" v-model="password" name="password" />
        <button>Войти</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      if (this.username == "admin" && this.password == "admin") {
        window.location.replace("./todos");
      } else {
        alert("Неверный логин или пароль");
      }
    },
  },
};
</script>
