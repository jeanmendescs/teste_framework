import React from "react";
import { Link } from "react-router-dom";
import Table from "../Table";
import { useFetch } from "../../useFetch";

const Todos = () => {
  const { rawData } = useFetch({
    url: "https://jsonplaceholder.typicode.com/todos",
  });

  const header = [
    {
      key: "userId",
      name: "User Id",
    },
    {
      key: "Id",
      name: "Id",
    },
    {
      key: "title",
      name: "Title",
    },
    {
      key: "completed",
      name: "Completed",
    },
  ];

  return (
    <div>
      <Link to="/">Home</Link>
      <Table rawData={rawData} header={header} pageTitle="Todos" />
    </div>
  );
};

export default Todos;
