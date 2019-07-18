import axios from "axios";

const BASE_URL = "https://bend-natasafi-nc-news.herokuapp.com/api";

export const getTopics = async () => {
  const { data } = await axios.get(`${BASE_URL}/topics`);
  return data.topics;
};

export const getArticles = async (topic, sort_by, author) => {
  const { data } = await axios.get(`${BASE_URL}/articles?${topic}`, {
    params: {
      topic,
      sort_by,
      author
    }
  });
  return data.articles;
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

export const postComment = async (article_id, body, author) => {
  const { data } = await axios.post(
    `${BASE_URL}/articles/${article_id}/comments`,
    { body, username: author },
    "jessjelly"
  );
  console.log(data);
  return data.comment;
};

export const vote = async (id, inc_votes, section) => {
  const { data } = await axios.patch(`${BASE_URL}/${section}/${id}`, {
    inc_votes
  });
  return data.article;
};

export const deleteComment = async comment_id => {
  const { data } = await axios.delete(`${BASE_URL}/comments/${comment_id}`);
  console.log(data.comments, "de");
  return data.comments;
};

export const getUser = async user => {
  const { data } = await axios.get(`${BASE_URL}/users/jessjelly`);
  return data.user;
};
