import React from "react";
import { Link } from "react-router-dom";
import Table from "../Table";
import Layout from "../Layout";
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
      key: "id",
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
    <Layout>
      <Link to="/">Home</Link>
      <Table rawData={rawData} header={header} pageTitle="Todos" />
    </Layout>
  );
};

export default Todos;
