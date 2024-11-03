import Image from "next/image";
import styles from "./InfoSecondary.module.css";
export const InfoSecondary = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.headerTitle}>{`{  Безопасность  }`}</h2>
        <div className={styles.textContainer}>
          <p className={styles.headerText}>
            Защитим Вас <br></br>
          </p>
          <span className={styles.footerText}>
            Полный спектр услуг по охране периметра, который включает установку
            ограждений, сенсорных систем обнаружения движения и систем
            оповещения. Это создает надежный барьер и мгновенно информирует о
            возможных нарушениях периметра, позволяя предотвратить
            несанкционированные вторжения и при необходимости выезжает группа
            быстрого реагирования
          </span>
        </div>
      </div>
      <div className={styles.mainContentWrapper}>
        <div className={styles.tableWrapper}>
          <div className={styles.table}>
            <Image
              width={"571"}
              height={"360"}
              className={styles.image}
              src="/security-1.png"
            />
          </div>

          <div className={styles.buttonWrapper}></div>
        </div>

        <Image
          width={"1181"}
          height={"678"}
          className={styles.image}
          src="/security-2.jpg"
        />
      </div>
    </div>
  );
};
