import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Bem-vindo ao Warm&Chic</h1>
        <p>
          Descubra os melhores Moletons com preços incríveis. Aqui você encontra
          qualidade, praticidade e conforto em um só lugar. Navegue e
          aproveite!
        </p>
      </header>
    </div>
  );
};

export default Home;
