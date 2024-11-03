"use client";
import styles from "./Form.module.css";

import emailjs from "emailjs-com";

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
};

export const Form = ({ type = "first" }) => {
  return (
    <div id="feedback" className={`${styles.wrapper} ${styles[type]}`}>
      <div className={styles.formWrapper}>
        <h2 className={styles.headerTitle}>
          Оставьте заявку на техническую поддержку
        </h2>
        <p className={styles.headerText}>
          Заполните форму и наши специалисты технической поддержки помогут
          решить любой ваш вопрос
        </p>
        <form className={styles.form} onSubmit={sendEmail}>
          <div className={styles.row}>
            <input
              placeholder="Название компании"
              type="text"
              className={styles.input}
              name="companyName"
            />

            <input
              placeholder="ИНН"
              type="text"
              className={styles.input}
              name="INN"
            />
          </div>
          <div className={styles.row}>
            <input
              placeholder="Название проекта"
              type="text"
              className={styles.input}
              name="projectName"
            />

            <input
              placeholder="Производитель"
              type="text"
              className={styles.input}
              name="producer"
            />
          </div>

          <input
            placeholder="Email"
            type="email"
            className={styles.input}
            name="email"
          />

          <input
            placeholder="Телефон"
            type="tel"
            className={styles.input}
            name="phone"
          />

          <textarea
            placeholder="Комментарий"
            className={styles.textarea}
            name="comment"
          ></textarea>

          <button type="submit" className={styles.button}>
            <span>Оставить заявку</span>
            <div className={styles.circle}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.56282 14.1871L13.9372 1.81268M13.9372 1.81268H4.03769M13.9372 1.81268V11.7122"
                  stroke="#01757C"
                  stroke-width="2"
                />
              </svg>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};
