import styles from "./Main.module.css";
import HeadPerfil from "../headPerfil/HeadPerfil";
import Repositorios from "../repositorios/Repositorios";

const Main = ({ dados }) => {
  return (
    <main className={styles.container}>
      <HeadPerfil
        photo={dados.avatar_url}
        name={dados.name}
        bio={dados.bio}
        location={dados.location}
        company={dados.company}
        login={dados.login}
      />
      <h2>Repositórios </h2>
      <Repositorios repos={dados.repos_url} />
    </main>
  );
};

export default Main;
