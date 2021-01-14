import React from "react";
import { Link } from "react-router-dom";
import Table from "../Table";
import { useFetch } from "../../useFetch";

const Posts = () => {
  const { data } = useFetch({
    url: "https://jsonplaceholder.typicode.com/posts",
  });

  return (
    <div>
      <Link to="/">Home</Link>
      <Table
        data={data}
        header={["User ID", "ID", "Title", "Body"]}
        pageTitle="Posts"
      />
    </div>
  );
};

export default Posts;
