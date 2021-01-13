import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Table from "../Table";

const Todos = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/todos`
      );
      setData(data);
    };
    getPosts();
  }, []);

  return (
    <div>
      <Link to="/">Home</Link>
      <Table
        data={data}
        header={["User ID", "ID", "Title", "Completed"]}
        pageTitle="Todos"
      />
    </div>
  );
};

export default Todos;
