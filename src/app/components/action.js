import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getInfo = createAsyncThunk("/post/getinfo", async () => {
  const options = {
    method: "GET",
    url: "https://odds.p.rapidapi.com/v4/sports",
    params: { all: "true" },
    headers: {
      "X-RapidAPI-Key": "35360dea7cmshdbe7fec6300c773p10ff91jsnf1424cb37790",
      "X-RapidAPI-Host": "odds.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
