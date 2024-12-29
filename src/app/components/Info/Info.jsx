import Image from "next/image";
import styles from "./Info.module.css";
export const Info = () => {
  const handleClick = () => {
    document.getElementById('feedback').scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      document.querySelector('[tabIndex="1"]').focus();
    }, 300);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.headerTitle}>{`{  О компании  }`}</h2>
        <p className={styles.headerText}>
          Поставка отечественного оборудования и ПО из реестра{" "}
          <span>Минпромторга </span>
          с дальнейшей технической поддержкой
          <span
            style={{
              display: "inline-block",
              marginLeft: "15px",
            }}
          >
            <Image width={"34"} height={"20"} src="/russia.png"></Image>
          </span>
        </p>
      </div>
      <div className={styles.mainContentWrapper}>
        <div className={styles.tableWrapper}>
          <div className={styles.table}>
            <div className={styles.row}>
              <div className={styles.tableItem}>
                <p className={styles.tableTitle}>e-mail</p>
                <span className={styles.tableText}>info@proitsolutions.ru</span>
              </div>
            </div>
            <div className={styles.twoRows}>
              <div className={styles.tableItem}>
                <p className={styles.tableTitle}>телефон ИТ</p>
                <span className={styles.tableText}>+7 (980) 496‑17‑87</span>
              </div>
              <div className={styles.tableItem}>
                <p className={styles.tableTitle}>телефон СБ</p>
                <span className={styles.tableText}>+7 (980) 496‑17‑87</span>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.tableItem}>
                <p className={styles.tableTitle}>Адрес</p>
                <span className={styles.tableText}>
                  Москва, Раменский бульвар, дом 1. Кластер «Ломоносов»
                  Московский инновационный кластер
                </span>
              </div>
            </div>
          </div>

          <div className={styles.footer}>
            <button onClick={handleClick} className={styles.button}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.949747 13.9497L13.3241 1.57538M13.3241 1.57538H3.42462M13.3241 1.57538V11.4749"
                  stroke="white"
                  stroke-width="1.5"
                />
              </svg>
            </button>
            <p className={styles.footerText}>
              Оставьте свою заявку <br></br>и начинайте работать вместе с нами!
            </p>
          </div>

          <div className={styles.buttonWrapper}></div>
        </div>

        <Image
          width={"1181"}
          height={"678"}
          className={styles.image}
          src="/info-image.jpg"
        />
      </div>
    </div>
  );
};
