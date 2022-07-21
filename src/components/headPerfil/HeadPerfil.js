import moment from "moment";
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
          <span>🏢{props.company}</span> {" · "}
          <span>📧 marcos.medeiros@dbccompany.com.br</span>
        </div>
        <span>
          🐙{" "}
          <a href={props.html_url} target="blank">
            {" "}
            github.com/{props.login}
          </a>
          {" · "}
          <span>
            Criado em: {moment(props.created_at).format("DD/MM/YYYY")}
          </span>
        </span>

        <div className={styles.follow}>
          <span>
            👥{" "}
            <a
              href="https://github.com/MarcosMedeiros1?tab=followers"
              target="blank"
            >
              Followers: {props.followers}
            </a>
          </span>
          {"·"}
          <span>
            <a
              href="https://github.com/MarcosMedeiros1?tab=following"
              target="blank"
            >
              Following: {props.following}
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeadPerfil;
