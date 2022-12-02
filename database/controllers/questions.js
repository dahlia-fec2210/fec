require('dotenv').config();
const axios = require('axios');
const path = require('path');

const headers = {
  headers: {
    Authorization: `${process.env.TOKEN}`,
  },
};

function getQuestionsForProduct(url) {
  return axios.get(path.join(process.env.DATABASE_URL, url), headers)
    .then((response) => response.data);
}

function getAnswersForQuestion(questionId) {
  return axios.get(path.join(process.env.DATABASE_URL, `/qa/questions/${questionId}/answers`), headers)
    .then((response) => response.data);
}

function postQuestion(question) {
  return axios.post(path.join(process.env.DATABASE_URL, 'qa', 'questions'), question, headers)
    .then((response) => response.data);
}

function postAnswerToQuestion(questionId, answer) {
  return axios.post(path.join(process.env.DATABASE_URL, `qa/questions/${questionId}/answers`), answer, headers)
    .then((response) => response.data);
}

function markQuestionHelpful(questionId) {
  console.log(questionId, 'questionId');
  return axios.put(path.join(process.env.DATABASE_URL, `/qa/questions/${questionId}/helpful`), {}, headers)
    .then((response) => response.data);
}

module.exports = {
  getQuestionsForProduct,
  getAnswersForQuestion,
  postQuestion,
  postAnswerToQuestion,
  markQuestionHelpful,
};
