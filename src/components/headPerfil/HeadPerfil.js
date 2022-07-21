import styles from "./HeadPerfil.module.css";

const HeadPerfil = (props) => {
  return (
    <section className={styles.perfil}>
      <div className={styles.avatar}>
        <img src={props.photo} alt="" />
      </div>

      <div className={styles.infos}>
        <div>
          <h1>{props.name}</h1>
          <p>{props.bio}</p>
        </div>
        <div>
          <span>🏢{props.company}</span> |{" "}
          <span>📧 contato.marcosmedeiros01@gmail.com</span>
        </div>
        <span>🐙 github.com/{props.login}</span>
      </div>
    </section>
  );
};

export default HeadPerfil;
