import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Table from "../Table";

const Albums = () => {
  const [data, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/albums`
      );
      setPosts(data);
    };
    getPosts();
  }, []);

  return (
    <div>
      <Link to="/">Home</Link>
      <Table
        data={data}
        header={["User ID", "ID", "Title"]}
        pageTitle="Albums"
      />
    </div>
  );
};

export default Albums;
