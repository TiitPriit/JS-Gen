<template>
  <div>
    <h1>Tasuta API andmed Axiosiga</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>

<script>
import axiosService from "../services/axiosService"; // Importige Axiosi teenus

export default {
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    // Asünkroonse päringu tegemine Axiosi teenuse abil
    axiosService.get("/posts")
      .then((response) => {
        this.posts = response.data;
      })
      .catch((error) => {
        console.error("Viga päringu tegemisel:", error);
      });
  },
};
</script>
