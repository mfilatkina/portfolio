import Image from "next/image";
import { useState } from "react";

import styles from "../styles/contact.module.scss";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Свяжитесь со мной</h1>
      <h2 className={styles.subtitle}>Любым удобным для вас способом</h2>
      <div className={styles.links}>
        <Image
          src="/icons/telegram.svg"
          width="30px"
          height="30px"
          alt="telegram"
        />
        <Image
          src="/icons/linkedin.svg"
          width="30px"
          height="30px"
          alt="linkedin"
        />
        <Image src="/icons/email.svg" width="30px" height="30px" alt="email" />
      </div>
      <h2 className={styles.subtitle}>
        Или оставьте ваши данные, я свяжусь с вами
      </h2>
      <form>
        <label>
          Ваше имя:
          <input
            type="text"
            value={name}
            // onChange={setName(e.target.value)}
            name="name"
          />
        </label>
        <label>
          Ваша почта:
          <input type="text" name="email" />
        </label>
        <label>
          Сообщение:
          <input type="text" name="message" />
        </label>
        <input type="submit" value="Отправить" />
      </form>
    </div>
  );
}

export default Contact;
