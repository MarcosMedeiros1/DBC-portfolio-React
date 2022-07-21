import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <h3>
        <a href={props.href} target="blank">
          <span>{props.name}</span>
        </a>{" "}
        🔗
      </h3>
      <p>{props.description}</p>
      <span>{props.language}</span>
    </div>
  );
};

export default Card;
