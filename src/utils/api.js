import axios from "axios";

const BASE_URL = "https://bend-natasafi-nc-news.herokuapp.com/api";

export const getTopics = async () => {
  const { data } = await axios.get(`${BASE_URL}/topics`);
  return data.topics;
};

// export const getArticles= async ()=>{

// }
