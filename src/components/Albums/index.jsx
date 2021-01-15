import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../useFetch";
import Table from "../Table";
import Layout from "../Layout";

const Albums = () => {
  const { rawData } = useFetch({
    url: "https://jsonplaceholder.typicode.com/albums",
  });

  return (
    <Layout>
      <Link to="/">Home</Link>
      <Table
        rawData={rawData}
        header={["User ID", "ID", "Title"]}
        pageTitle="Albums"
      />
    </Layout>
  );
};

export default Albums;
