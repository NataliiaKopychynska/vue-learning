<script>
export default {
  data() {
    return {
      info: "Title Component",
      someInfo: "This is some info",
    };
  },
  methods: {
    userData(word = "default") {
      this.info = "Info Changed! " + word;
      this.someInfo = "The info has been updated.";
    },
  },
};
</script>

<template>
  <h3>{{ info }}</h3>
  <p>{{ someInfo }}</p>

  <!-- @click/:click/v-on:click -->
  <!-- @mouseenter... -->

  <button type="button" @click="userData('sam new')">Change Info</button>
</template>

<style scoped>
h3 {
  color: blue;
  font-weight: lighter;
}
p {
  color: gray;
}
</style>