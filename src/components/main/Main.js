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
        html_url={dados.html_url}
        created_at={dados.created_at}
        login={dados.login}
        followers={dados.followers}
        following={dados.following}
      />
      <h2>Meus projetos </h2>
      <Repositorios repos={dados.repos_url} />
    </main>
  );
};

export default Main;
