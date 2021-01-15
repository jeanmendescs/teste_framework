import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Table, Layout } from "../../components";
import { todosHeader, useFetch } from "../../utils";

const Todos = () => {
  const { rawData } = useFetch({
    url: "https://jsonplaceholder.typicode.com/todos",
  });

  return (
    <Layout>
      <Link to="/">
        <FaArrowLeft size="25px" />
      </Link>
      <Table rawData={rawData} header={todosHeader} pageTitle="Todos" />
    </Layout>
  );
};

export default Todos;
