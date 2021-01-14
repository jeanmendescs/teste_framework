import React from "react";
import { Link } from "react-router-dom";
import Table from "../Table";
import { useFetch } from "../../useFetch";

const Posts = () => {
  const { rawData } = useFetch({
    url: "https://jsonplaceholder.typicode.com/posts",
  });

  return (
    <div>
      <Link to="/">Home</Link>
      <Table
        rawData={rawData}
        header={["User ID", "ID", "Title", "Body"]}
        pageTitle="Posts"
      />
    </div>
  );
};

export default Posts;
