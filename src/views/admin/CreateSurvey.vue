<template>
  <div class="wrapper">
    <h1>Create Survey</h1>
    <h4 class="highlight__text">{{ message }}</h4>
    <v-form class="form">
      <v-text-field label="Title" v-model="survey.title" />
      <v-text-field label="Description" v-model="survey.description" />
      <v-btn color="success" @click="alert(`IN PROGRESS`)"
        >Add Questions For Survey</v-btn
      >
      <v-row justify="center">
        <v-col col="2"> </v-col>
        <v-col col="2">
          <v-btn color="success" @click="createSurvey()">Create Survey</v-btn>
        </v-col>
        <v-col col="2">
          <v-btn color="info" @click="cancel()">Cancel</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>
<script>
import AdminDataService from "../../services/AdminDataService";

export default {
  name: "create-survey",
  data() {
    return {
      survey: {
        title: "",
        description: "",
        questions: [],
        isPublished: false,
      },
      message: "Create Survey form",
    };
  },
  methods: {
    createSurvey() {
      
    },
    cancel() {
      this.$router.push({ name: "usersList" });
    },
  },
};
</script>
<style>
</style>