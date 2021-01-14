import React from "react";
import styles from "./styles.module.scss";

const Table = ({ data, header, pageTitle }) => {
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

  const renderHeader = () => {
    return header.map((columnTitle, index) => (
      <th key={index}>{columnTitle}</th>
    ));
  };

  if (!data) {
    return null;
  }

  return (
    <div>
      <h1>{pageTitle}</h1>
      <table id={styles.students}>
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table>
    </div>
  );
};

export default Table;
