import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: { maxResults: "50" },
  headers: {
    'X-RapidAPI-Key': 'e0aecc6605mshb2ed8845c5858e9p1f9dbajsn9a406d1b16cc',
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const {data} = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
