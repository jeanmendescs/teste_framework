import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../useFetch";
import Table from "../Table";

const Albums = () => {
  const { rawData } = useFetch({
    url: "https://jsonplaceholder.typicode.com/albums",
  });

  return (
    <div>
      <Link to="/">Home</Link>
      <Table
        rawData={rawData}
        header={["User ID", "ID", "Title"]}
        pageTitle="Albums"
      />
    </div>
  );
};

export default Albums;
