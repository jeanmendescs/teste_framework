import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import ToDoImg from "../../img/Todos.jpg";
import AlbumsImg from "../../img/Albums.jpg";
import PostsImg from "../../img/Posts.jpg";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardImg}>
          <img src={PostsImg} alt="asd"></img>
        </div>
        <Link to="/posts">Posts</Link>
      </div>
      <div className={styles.card}>
        <div className={styles.cardImg}>
          <img src={AlbumsImg} alt="asd"></img>
        </div>
        <Link to="/albums">Albums</Link>
      </div>
      <div className={styles.card}>
        <div className={styles.cardImg}>
          <img src={ToDoImg} alt="asd"></img>
        </div>
        <div>
          <Link to="/todos">To-Dos</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
