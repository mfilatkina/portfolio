import styles from "./Intro.module.scss";

function Intro() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div>Hi. I'm Maria. A front-end developer.</div>
      </div>
      <div className={styles.card}>PHOTO</div>
    </div>
  );
}

export default Intro;
