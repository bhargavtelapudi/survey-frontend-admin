<template>
  <div class="wrapper">
    <div class="register-headings">
      <h1>View Survey</h1>
      <h4 class="highlight__text"><strong style="color:#202020"> SURVEY TITLE :</strong> {{ survey.survey_title }}</h4>
      <h4 class="highlight__text">
        <strong style="color:#202020">SURVEY DESCRIPTION :</strong> {{ survey.survey_description }}
      </h4>
      <h4 class="highlight__text">
        <strong style="color:#202020">SURVEY STATUS :</strong> {{ survey.survey_isPublished ? "Published" :
            'UnPublished'
        }}
      </h4>
    </div>
    <ul class="accordian" v-for="question in survey.questions" :key="question.id" v-if="survey.questions.length > 0">
      <li class="accordian__item">
        <input type="checkbox" checked />
        <i></i>
        <h2>{{ question.title }}</h2>
        <p>
        <h4 v-if="question.options && question.options.length > 0">CHOICES</h4>
        <div class="question__choices" v-if="question.options && question.options.length > 0">
          <div  v-for="(item, index) in question.options"
            :key="index">
            <span>{{ item.option }}</span>
          </div>
        </div>
        {{ question.response || "QUESTION RESPONSE" }}
        </p>
      </li>
    </ul>
    <h2 v-if="survey.questions.length < 1" class="highlight__text" style="text-align: center">
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
        survey_isPublished: false,
        questions: [
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
<style>
.question__choices {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px 0 20px 0;
  border-bottom: 1px solid var(--colorLightGrey);
}

.question__choices span {
  padding: 10px;
  border: 1px solid var(--colorLightGrey);
  box-shadow: var(--boxShadow);
}
</style>