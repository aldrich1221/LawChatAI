<template>
  <div class="login">
    <h1>AI Consultant Chat</h1>
    <input type="text" v-model="username" placeholder="Enter your username" />
    <button @click="login">Login</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: ""
    };
  },
  methods: {
    login() {
      if (this.username) {
        localStorage.setItem("username", this.username);
        this.$router.push("/chat");
      }
    }
  }
};
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

input {
  margin-bottom: 10px;
  padding: 10px;
  width: 300px;
  font-size: 16px;
}

button {
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
}
</style>
