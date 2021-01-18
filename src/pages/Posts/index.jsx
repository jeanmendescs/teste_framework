import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Table, Layout } from "../../components";
import { postsHeader, useFetch } from "../../utils";

const Posts = () => {
  const { rawData } = useFetch({
    url: "https://jsonplaceholder.typicode.com/posts",
  });

  return (
    <Layout>
      <Link to="/">
        <FaArrowLeft size="25px" />
      </Link>
      <Table rawData={rawData} header={postsHeader} pageTitle="Posts" />
    </Layout>
  );
};

export default Posts;
