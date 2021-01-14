import React from "react";
import { Link } from "react-router-dom";
import Table from "../Table";
import { useFetch } from "../../useFetch";

const Todos = () => {
  const { data } = useFetch({
    url: "https://jsonplaceholder.typicode.com/todos",
  });

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
