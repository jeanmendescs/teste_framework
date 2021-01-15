import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { albumsHeader, useFetch } from "../../utils";
import { Table, Layout } from "../../components";

const Albums = () => {
  const { rawData } = useFetch({
    url: "https://jsonplaceholder.typicode.com/albums",
  });

  return (
    <Layout>
      <Link to="/">
        <FaArrowLeft size="25px" />
      </Link>
      <Table rawData={rawData} header={albumsHeader} pageTitle="Albums" />
    </Layout>
  );
};

export default Albums;
