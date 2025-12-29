<!-- <script></script>
<template></template>
<style scoped></style> -->

<script>
import UserList from "./UserList.vue";
// import User from "./UserCard.vue";

export default {
  components: { UserList },
  data() {
    return {
      users: [],
      error: "",
      UserName: "",
      UserEmail: "",
      UserPassword: "",
    };
  },
  methods: {
    SendData() {
      if (
        this.UserName.trim() !== "" &&
        this.UserEmail.trim() !== "" &&
        this.UserPassword.trim() !== ""
      ) {
        const newUser = {
          name: this.UserName,
          email: this.UserEmail,
          password: this.UserPassword,
        };
        this.users.push(newUser);
        this.UserName = "";
        this.UserEmail = "";
        this.UserPassword = "";
        this.ClearError();
      } else {
        this.error = "All fields are required!";
      }
    },
    ClearError() {
      this.error = "";
    },
    deleteUser(index) {
      this.users.splice(index, 1);
    },
  },
};
</script>

<template>
  <div class="container">
    <h2>Form Lesson Component</h2>

    <div class="form">
      <input type="text" placeholder="Name" v-model="UserName" />
      <input type="email" placeholder="Email" v-model="UserEmail" />
      <input type="password" placeholder="Password" v-model="UserPassword" />
      <p class="errorMessage">{{ error }}</p>
      <button @click="SendData">Submit</button>
    </div>

    <UserList :users="users" :deleteUser="deleteUser" />
  </div>
</template>

<style scoped>
.container {
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
}

input:focus {
  outline: none;
  border-color: #4f46e5;
}

.errorMessage {
  color: red;
  font-size: 12px;
  height: 14px;
}

button {
  padding: 10px;
  background-color: #4f46e5;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background-color: #4338ca;
}

.users {
  margin-top: 30px;
}

.user-card {
  background: #f5f5f5;
  padding: 12px;
  border-radius: 6px;
  margin-bottom: 10px;
}
</style>
