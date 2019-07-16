import axios from "axios";

const BASE_URL = "https://bend-natasafi-nc-news.herokuapp.com/api";

export const getTopics = async () => {
  const { data } = await axios.get(`${BASE_URL}/topics`);
  return data.topics;
};

export const getArticles = async topic => {
  if (topic) {
    let { data } = await axios.get(`${BASE_URL}/articles?${topic}`);
    return data.articles;
  }
  if (!topic) {
    let { data } = await axios.get(`${BASE_URL}/articles`);
    return data.articles;
  }
};

export const getArticleById = async article_id => {
  const { data } = await axios.get(`${BASE_URL}/articles/${article_id}`);
  return data.article[0];
};

export const getComments = async article_id => {
  const { data } = await axios.get(
    `${BASE_URL}/articles/${article_id}/comments`
  );
  return data.comments;
};
