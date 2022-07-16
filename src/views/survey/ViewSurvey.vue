<template>
  <div class="wrapper">
    <div class="register-headings">
      <h1>View Survey</h1>
      <h4 class="highlight__text">Survey Title : {{ survey.survey_title }}</h4>
      <h4 class="highlight__text">
        Survey Description : {{ survey.survey_description }}
      </h4>
      <h4 class="highlight__text">
        Survey Status : {{ survey.survey_isPublihsed }}
      </h4>
    </div>
    <ul
      class="accordian"
      v-for="question in survey.survey_questions"
      :key="question.id"
      v-if="survey.survey_questions.length > 0"
    >
      <li class="accordian__item">
        <input type="checkbox" checked />
        <i></i>
        <h2>{{ question.title }}</h2>
        <p>
          {{ question.response || "QUESTION RESPONSE" }}
        </p>
      </li>
    </ul>
    <h2
      v-if="survey.survey_questions.length < 1"
      class="highlight__text"
      style="text-align: center"
    >
      NO QUESTIONS FOUND FOR THIS SURVEY
    </h2>
  </div>
</template>
<script>
import SurveyDataService from "../../services/SurveyDataService";
import SurveyListItem from "@/components/SurveyListItem.vue";
export default {
  name: "view survey",
  props: ["id"],
  data() {
    return {
      survey: {
        id: 1,
        survey_title: "test survey",
        survey_description: "test description",
        survey_isPublihsed: false,
        survey_questions: [
          {
            title: "What is astronomy",
          },
          {
            title: "Study on climate change",
          },
          {
            title: "Study on pollution",
          },
        ],
      },
      surveysLength: 1,
      message: "View survey details and questions",
    };
  },
  components: {
    SurveyListItem,
  },
  methods: {
    retreiveSurvey() {
      SurveyDataService.getSurvey(this.id)
        .then((response) => {
          this.survey = response.data;
        })
        .catch((e) => {
          this.message = e.response.data.message;
        });
    },
  },
  mounted() {
    this.retreiveSurvey();
  },
};
</script>