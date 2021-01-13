import React from "react";

const Table = ({ data, header, pageTitle }) => {
  const renderBody = () => {
    return data.map(({ userId, id, title, body, completed }) => {
      if (completed) {
        return (
          <tr key={id}>
            <td>{userId}</td>
            <td>{id}</td>
            <td>{title}</td>
            <td>{`${completed}`}</td>
          </tr>
        );
      } else {
        return (
          <tr key={id}>
            <td>{userId}</td>
            <td>{id}</td>
            <td>{title}</td>
            <td>{body}</td>
          </tr>
        );
      }
    });
  };

  // const renderBody = () => {
  //   return data.map((value, index) => {
  //     console.log(value);
  //     return (
  //       <tr key={index}>
  //         <td>{value}</td>
  //       </tr>
  //     );
  //   });
  // };

  // const renderHeader = () => {
  //   return header.map((columnTitle) => {
  //     return (
  //       <tr key={id}>
  //         <td>{userId}</td>
  //         <td>{id}</td>
  //         <td>{title}</td>
  //         <td>{body}</td>
  //       </tr>
  //     );
  //   });
  // };

  const renderHeader = () => {
    return header.map((columnTitle, index) => (
      <th key={index}>{columnTitle}</th>
    ));
  };

  return (
    <div>
      <h1>{pageTitle}</h1>
      <table>
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table>
    </div>
  );
};

export default Table;
