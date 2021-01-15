import React from "react";
import styles from "./styles.module.scss";
import { useTable } from "./useTable";

const Table = ({ rawData, header, pageTitle }) => {
  const { data, handleSort } = useTable({ rawData });

  const renderBody = () => {
    return data.map(({ userId, id, title, body, completed }) => {
      return (
        <tr key={id}>
          <td>{userId}</td>
          <td>{id}</td>
          <td>{title}</td>
          {body && <td>{body}</td>}
          {completed !== undefined && <td>{`${completed}`}</td>}
        </tr>
      );
    });
  };

  const renderHeader = () =>
    header.map(({ name, key }) => (
      <th onClick={() => handleSort(key)} key={key}>
        {name}
      </th>
    ));

  if (!data) {
    return null;
  }

  return (
    <>
      <h1>{pageTitle}</h1>
      <div className={styles.container}>
        <table className={styles.table}>
          <thead>
            <tr>{renderHeader()}</tr>
          </thead>
          <tbody>{renderBody()}</tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
