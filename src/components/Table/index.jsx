import React, { useContext } from "react";
import styles from "./styles.module.scss";
import { useTable } from "./useTable";
import { UsersContext } from "../../utils";

const Table = ({ rawData, header, pageTitle }) => {
  const users = useContext(UsersContext);
  const { data, handleSort, direction, columnSelected } = useTable({
    rawData,
    users,
  });

  const renderBody = () => {
    return data.map(({ userName, id, title, body, completed }) => {
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{userName}</td>
          <td>{title}</td>
          {body && <td>{body}</td>}
          {completed !== undefined && <td>{`${completed}`}</td>}
        </tr>
      );
    });
  };

  const toggleDirectionIcon = direction === "asc" ? "\u25B2" : "\u25Bc";

  const renderHeader = () =>
    header.map(({ name, key }) => (
      <th onClick={() => handleSort(key)} key={key}>
        {`${name} ${columnSelected === key ? toggleDirectionIcon : ""}`}
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
