import React from "react";
import { Link } from "react-router-dom";
import Table from "../Table";
import { useFetch } from "../../useFetch";
import Layout from "../Layout";

const Posts = () => {
  const { rawData } = useFetch({
    url: "https://jsonplaceholder.typicode.com/posts",
  });

  return (
    <Layout>
      <Link to="/">Home</Link>
      <Table
        rawData={rawData}
        header={["User ID", "ID", "Title", "Body"]}
        pageTitle="Posts"
      />
    </Layout>
  );
};

export default Posts;
