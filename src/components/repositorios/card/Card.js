import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <a href={props.href} target="blank" className={styles.card}>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <span>{props.language}</span>
    </a>
  );
};

export default Card;
