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

function getAnswersForQuestion(url) {
  return axios.get(path.join(process.env.DATABASE_URL, url), headers)
    .then((response) => response.data);
}

function postQuestion(question) {
  return axios.post(path.join(process.env.DATABASE_URL, 'qa/questions'), question, headers)
    .then((response) => response.data);
}

function postAnswerToQuestion(questionId, answer) {
  return axios.post(path.join(process.env.DATABASE_URL, `qa/questions/${questionId}/answers`), answer, headers)
    .then((response) => response.data);
}

function markQuestionHelpful(questionId) {
  return axios.put(path.join(process.env.DATABASE_URL, `/qa/questions/${questionId}/helpful`), {}, headers)
    .then((response) => response.data);
}

function markAnswerHelpful(answerId) {
  return axios.put(path.join(process.env.DATABASE_URL, `/qa/answers/${answerId}/helpful`), {}, headers)
    .then((response) => response.data);
}

function reportQuestion(questionId) {
  return axios.put(path.join(process.env.DATABASE_URL, `/qa/questions/${questionId}/report`), {}, headers)
    .then((response) => response.data);
}

function reportAnswer(answerId) {
  return axios.put(path.join(process.env.DATABASE_URL, `qa/answers/${answerId}/report`), {}, headers)
    .then((response) => response.data);
}

module.exports = {
  getQuestionsForProduct,
  getAnswersForQuestion,
  postQuestion,
  postAnswerToQuestion,
  markQuestionHelpful,
  reportQuestion,
  markAnswerHelpful,
  reportAnswer,
};
