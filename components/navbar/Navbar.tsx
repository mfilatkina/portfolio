import Link from "next/link";

import styles from "./Navbar.module.scss";

function Navbar(): JSX.Element {
  return (
    <div className={styles.container}>
      <Link href="/">LOGO</Link>
      <ul className={styles.list}>
        <li className={styles["list-item"]}>
          <Link href="/products/work">WORK</Link>
        </li>
        <li className={styles["list-item"]}>
          <Link href="/products/about">ABOUT</Link>
        </li>
        <li className={styles["list-item"]}>
          <Link href="/products/contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
