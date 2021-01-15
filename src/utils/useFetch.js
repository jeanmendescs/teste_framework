import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = ({ url }) => {
  const [rawData, setRawData] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const { data } = await axios.get(url);
      setRawData(data);
    };
    getPosts();
  }, [url]);

  return {
    rawData,
  };
};
