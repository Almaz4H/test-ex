<template>
  <div class="hello" style="justify-content: center">
    <div class="login">
      <form @submit.prevent>
        <div>
          <label for="username" style="margin-right: 12px">Логин</label>
          <input type="text" v-model="username" name="username" />
        </div>
        <div>
          <label for="password">Пароль</label>
          <input
            :type="vis ? 'text' : 'password'"
            v-model="password"
            name="password"
          />
          <button @click="vis = !vis">
            <span v-if="vis" class="material-symbols-outlined">
              visibility
            </span>
            <span v-else class="material-symbols-outlined">
              visibility_off
            </span>
          </button>
        </div>
        <button
          style="height: 30px; font-size: 16px; font-weight: bold"
          @click="login"
        >
          Войти
        </button>
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
      vis: false,
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

<style scoped>
label {
  font-weight: bold;
}
input {
  margin-left: 10px;
}
button {
  margin-left: 5px;
  border-width: 0px;
  border-radius: 10%;
  cursor: pointer;
}
button:hover {
  background-color: black;
  color: aliceblue;
}
div {
  margin: 10px;
  display: flex;
  justify-content: start;
  align-items: center;
}
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
}
</style>
