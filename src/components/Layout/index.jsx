import React, { useState, useEffect, cloneElement } from "react";
import { useFetch } from "../../utils";
import styles from "./styles.module.scss";

const Layout = ({ children }) => {
  const [users, setUsers] = useState();

  const { rawData } = useFetch({
    url: "https://jsonplaceholder.typicode.com/users",
  });

  useEffect(() => {
    if (rawData) {
      setUsers(rawData);
    } else {
      return;
    }
  }, [rawData]);

  const childrenWithProps = React.Children.map(children, (element) =>
    cloneElement(element, { users })
  );

  return <div className={styles.layout}>{childrenWithProps}</div>;
};

export default Layout;
