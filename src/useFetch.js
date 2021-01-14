import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = ({ url }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const { data } = await axios.get(url);
      setData(data);
    };
    getPosts();
  }, [url]);

  return {
    data,
  };
};
