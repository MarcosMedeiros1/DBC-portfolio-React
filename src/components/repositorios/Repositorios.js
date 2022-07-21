import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./Repositorios.module.css";
import Card from "./card/Card";

const Repositorios = () => {
  const [dados, setDados] = useState([]);

  const setup = async () => {
    try {
      const { data } = await axios.get(
        "https://api.github.com/users/MarcosMedeiros1/repos",
      );
      setDados(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setup();
  }, []);

  return (
    <section className={styles.repositorios}>
      {dados.map(({ id, name, language, description, html_url }) => (
        <Card
          key={id}
          href={html_url}
          name={name}
          language={language}
          description={description}
        />
      ))}
    </section>
  );
};

export default Repositorios;
