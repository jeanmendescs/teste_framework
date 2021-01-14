import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import Classnames from "classnames";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Link
          className={Classnames(styles.cardImg, styles.postsImg)}
          to="/posts"
        >
          Posts
        </Link>
      </div>
      <div className={styles.card}>
        <Link
          className={Classnames(styles.cardImg, styles.albumsImg)}
          to="/albums"
        >
          Albums
        </Link>
      </div>
      <div className={styles.card}>
        <Link
          className={Classnames(styles.cardImg, styles.todosImg)}
          to="/todos"
        >
          To-Dos
        </Link>
      </div>
    </div>
  );
};

export default Home;
