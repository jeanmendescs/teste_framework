import React from "react";
import { Link } from "react-router-dom";
import Classnames from "classnames";
import styles from "./styles.module.scss";

const Home = () => {
  return (
    <div>
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
    </div>
  );
};

export default Home;
