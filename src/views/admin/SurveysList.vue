<template>
  <div class="wrapper">
    <h1>Surveys List</h1>
    <h4 class="highlight__text">{{ message }}</h4>
    <div v-if="surveys.length > 0">
      <v-row class="albums__list--table">
        <v-col cols="9" sm="2">
          <span>Survey Title</span>
        </v-col>
        <v-col cols="9" sm="2">
          <span>Description</span>
        </v-col>
        <v-col cols="4" sm="2">
          <span>Created By</span>
        </v-col>
        <v-col cols="9" sm="1">
          <span>View</span>
        </v-col>
        <v-col cols="9" sm="1">
          <span>Delete</span>
        </v-col>
        <div class="album__item--wrapper">
          <SurveyListItem
            v-for="survey in surveys"
            :key="survey.id"
            :survey="survey"
            @deleteSurvey="goDelete(survey)"
            @viewSurvey="goView(survey)"
          />
        </div>
      </v-row>
    </div>
    <h2
      v-else-if="surveys.length < 1"
      class="highlight__text"
      style="text-align: center"
    >
      NO SURVEYS FOUND
    </h2>
  </div>
</template>
<script>
import AdminDataService from "../../services/AdminDataService";
import SurveyListItem from "@/components/SurveyListItem.vue";
export default {
  name: "surveys-list",
  data() {
    return {
      surveys: [
        {
          title: "test",
          description: "test@email.com",
          createdBy: "google",
        },
      ],
      message: "View or Delete Surveys",
    };
  },
  components: {
    SurveyListItem,
  },
  methods: {
    goView(album) {
      this.$router.push({ name: "view", params: { id: album.id } });
    },
    goDelete(album) {
      AdminDataService.delete(album.id)
        .then(() => {
          this.retreiveSurveys();
        })
        .catch((e) => {
          this.message = e.response.data.message;
        });
    },
    retreiveSurveys() {
      AdminDataService.getAllAdminSurveys()
        .then((response) => {
          this.albums = response.data;
        })
        .catch((e) => {
          this.message = e.response.data.message;
        });
    },
  },
  mounted() {
    this.retreiveSurveys();
  },
};
</script>
<style>

</style>