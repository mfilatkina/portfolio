import Image from "next/image";
import React, { useState } from "react";

import styles from "../styles/contact.module.scss";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const changeName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const changeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setMessage(e.target.value);
  };

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
      <form className={styles["contact-form"]}>
        <div className={styles["contact-input"]}>
          <label htmlFor="name">Ваше имя:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={changeName}
            name="name"
          />
        </div>
        <div className={styles["contact-input"]}>
          <label htmlFor="email">Ваша почта:</label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={changeEmail}
            name="email"
          />
        </div>
        <div className={styles.message}>
          <label htmlFor="message">Сообщение:</label>
          <textarea
            id="message"
            value={message}
            onChange={changeMessage}
            name="message"
          />
        </div>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}

export default Contact;
