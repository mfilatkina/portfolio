import Link from "next/link";

import styles from "./Navbar.module.scss";

function Navbar(): JSX.Element {
  return (
    <div className={styles.container}>
      <Link href="/">LOGO</Link>
      <ul className={styles.list}>
        <li className={styles["list-item"]}>
          <Link href="/work">WORK</Link>
        </li>
        <li className={styles["list-item"]}>
          <Link href="/about">ABOUT</Link>
        </li>
        <li className={styles["list-item"]}>
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
