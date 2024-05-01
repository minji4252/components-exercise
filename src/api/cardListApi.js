import axios from "axios";

export const host = process.env.PUBLIC_URL;

export const getCards = async () => {
  try {
    const response = await axios.get(`${host}/json/cardList.json`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
