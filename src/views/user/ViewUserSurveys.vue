<template>
  <div class="wrapper">
    <div class="register-headings">
      <h1>Manage User Info</h1>
      <h4>User Name : Test</h4>
      <h4>Email : Test</h4>
    </div>
    <div>
      <h1 class="highlight__text">{{ message }}</h1>
      <div v-show="surveysLength > 0">
        <v-row class="albums__list--table">
          <v-col cols="9" sm="2">
            <span>Title</span>
          </v-col>
          <v-col cols="9" sm="2">
            <span>Description</span>
          </v-col>
          <v-col cols="4" sm="2">
            <span>Status</span>
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
              @deleteSurvey="goDelete(survey.id)"
              @viewSurvey="goView(survey.id)"
              @handlePublish="handlePublish(survey)"
            />
          </div>
        </v-row>
      </div>
      <h2
        v-show="surveysLength < 1"
        class="highlight__text"
        style="text-align: center"
      >
        NO SURVEYS FOUND
      </h2>
    </div>
  </div>
</template>
<script>
import SurveyDataService from "../../services/SurveyDataService";
import SurveyListItem from "@/components/SurveyListItem.vue";
export default {
  name: "surveys-list",
  data() {
    return {
      surveys: [],
      surveysLength: 0,
      message: "Manage User Surveys",
      userInfo: "",
    };
  },
  components: {
    SurveyListItem,
  },
  methods: {
    goView(id) {
      this.$router.push({ name: "viewSurvey", params: { id } });
    },
    goDelete(id) {
      SurveyDataService.deleteSurvey(id)
        .then(() => {
          this.retreiveSurveys();
        })
        .catch((e) => {
          this.message = e.response.data.message;
        });
    },
    handlePublish(survey) {
      const surveyData = {
        id: survey.id,
        isPublished: survey.survey_isPublished,
      };
      console.log(surveyData);
      SurveyDataService.publishSurvey(surveyData)
        .then(() => {
          this.retreiveSurveys();
        })
        .catch((e) => {
          this.message = e.response.data.message;
        });
    },
    retreiveSurveys() {
      SurveyDataService.getAllSurveys()
        .then((response) => {
          this.surveys = response.data;
          this.surveysLength = response.data.length;
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