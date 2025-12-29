<script setup>
import { defineProps } from "vue";
import User from "./User.vue";
const props = defineProps({
  users: {
    type: Array,
    required: true,
  },

  deleteUser: {
    type: Function,
    required: true,
  },
});
</script>
<template>
  <div className="users">
    <div className="user-card" v-if="users.length === 0">
      No users added yet.
    </div>
    <div
      class="user-card"
      v-else-if="users.some((user) => user.name === 'Nata')"
    >
      Hello Nata!
    </div>
    <User
      v-else
      v-for="(user, index) in users"
      :key="index"
      :user="user"
      @delete="deleteUser(index)"
    />
  </div>
</template>
<style scoped>
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
