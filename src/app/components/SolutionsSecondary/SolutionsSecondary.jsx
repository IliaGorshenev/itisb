import Image from "next/image";
import styles from "./SolutionsSecondary.module.css";
export const SolutionsSecondary = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.rowTwoColumns}>
          <div style={{ backgroundColor: "#EFFBFF" }} className={styles.item}>
            <h3 style={{ color: "#0F1B2E" }} className={styles.itemTitle}>
              Экосистема корпоративных коммуникаций
            </h3>
            <p
              style={{ color: "rgba(15, 27, 46, 0.6)" }}
              className={styles.itemText}
            >
              Инструменты контейнеризации, защиты данных, контроля доступов
              пользователей и возможность запрета на экспорт данных{" "}
            </p>
            <div className={styles.footer}>
              <ul className={styles.itemList}>
                <li className={styles.itemListItem}>
                  <p
                    style={{ color: "rgba(15, 27, 46, 0.6)" }}
                    className={styles.itemListText}
                  >
                    Прямой канал взаимодействия между корпоративными серверами,
                    реализуемый через трастовые соединения;
                  </p>
                </li>
                <li className={styles.itemListItem}>
                  <p
                    style={{ color: "rgba(15, 27, 46, 0.6)" }}
                    className={styles.itemListText}
                  >
                    Аудио и видеоконференции с количеством участников до 128;
                  </p>
                </li>
                <li className={styles.itemListItem}>
                  <p
                    style={{ color: "rgba(15, 27, 46, 0.6)" }}
                    className={styles.itemListText}
                  >
                    Демонстрация экрана;
                  </p>
                </li>
                <li className={styles.itemListItem}>
                  <p
                    style={{ color: "rgba(15, 27, 46, 0.6)" }}
                    className={styles.itemListText}
                  >
                    Отправка сообщений, фото-видео, файлов, контактов
                  </p>
                </li>
              </ul>
              <Image
                className={styles.itemImage}
                width={274}
                height={274}
                src={"/solution-1.png"}
              ></Image>
            </div>
            <div className={styles.tags}>
              <div
                style={{ backgroundColor: "rgba(1, 117, 124, 0.1)" }}
                className={styles.tag}
              >
                <span
                  style={{
                    color: "#0F1B2E",
                  }}
                  className={styles.tagText}
                >
                  eXpress
                </span>
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: "#EFFBFF" }} className={styles.item}>
            <h3 style={{ color: "#0F1B2E" }} className={styles.itemTitle}>
              Роботизация поддержки клиентов и сотрудников
            </h3>
            <p
              style={{ color: "rgba(15, 27, 46, 0.6)" }}
              className={styles.itemText}
            >
              Позволяет объединить каналы коммуникаций: мессенджеры, социальные
              сети, чат на сайте, e-mail и мобильное приложение
            </p>
            <div className={styles.footer}>
              <ul className={styles.itemList}>
                <li className={styles.itemListItem}>
                  <p
                    style={{ color: "rgba(15, 27, 46, 0.6)" }}
                    className={styles.itemListText}
                  >
                    Единое окно для служб поддержки разных бизнес вертикалей;
                  </p>
                </li>
                <li className={styles.itemListItem}>
                  <p
                    style={{ color: "rgba(15, 27, 46, 0.6)" }}
                    className={styles.itemListText}
                  >
                    Интуитивно понятный интерфейс;
                  </p>
                </li>
                <li className={styles.itemListItem}>
                  <p
                    style={{ color: "rgba(15, 27, 46, 0.6)" }}
                    className={styles.itemListText}
                  >
                    Неограниченное количество опрераторов;
                  </p>
                </li>
                <li className={styles.itemListItem}>
                  <p
                    style={{ color: "rgba(15, 27, 46, 0.6)" }}
                    className={styles.itemListText}
                  >
                    Аналитика обращений для улучшения продуктов и сервисов;{" "}
                  </p>
                </li>
                <li className={styles.itemListItem}>
                  <p
                    style={{ color: "rgba(15, 27, 46, 0.6)" }}
                    className={styles.itemListText}
                  >
                    Фильтрация спама и шума.
                  </p>
                </li>
              </ul>
              <Image
                className={styles.itemImage}
                width={250}
                height={250}
                src={"/solution-2.png"}
              ></Image>
            </div>
            <div className={styles.tags}>
              <div
                style={{ backgroundColor: "rgba(1, 117, 124, 0.1)" }}
                className={styles.tag}
              >
                <span
                  style={{
                    color: "#0F1B2E",
                  }}
                  className={styles.tagText}
                >
                  AutoFAQ
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rowTwoColumns}>
          <div style={{ backgroundColor: "#EFFBFF" }} className={styles.item}>
            <h3 className={styles.itemTitle}>Видеоконференцсвязь (ВКС)</h3>
            <p className={styles.itemText}>
              Защищённое подключение WebRTC абонентов из внешней сети с
              использованием наложенного шифрования{" "}
            </p>
            <div className={styles.footer}>
              <ul className={styles.itemList}>
                <li className={styles.itemListItem}>
                  <p className={styles.itemListText}>
                    Возможность подключения различных типов абонентов в закрытом
                    сегменте сети;
                  </p>
                </li>
                <li className={styles.itemListItem}>
                  <p className={styles.itemListText}>
                    Защищённое подключение WebRTC абонентов из внешней сети с
                    использованием наложенного шифрования.
                  </p>
                </li>
              </ul>
              <Image
                className={styles.itemImage}
                width={255}
                height={221}
                src={"/solution-6.png"}
              ></Image>
            </div>
            <div className={styles.tags}>
              <div style={{ backgroundColor: "rgba(1, 117, 124, 0.1)" }} className={styles.tag}>
                <span className={styles.tagText}>IVA Technologies </span>
              </div>
              <div style={{ backgroundColor: "rgba(1, 117, 124, 0.1)" }} className={styles.tag}>
                <span className={styles.tagText}>Vinteo</span>
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: "#EFFBFF" }} className={styles.item}>
            <h3 className={styles.itemTitle}>Система виртуализации</h3>
            <p className={styles.itemText}>
              Поддержка широкого спектра процессоров и интеграция с системой
              Zabbix для расширенного мониторинга инфраструктуры
            </p>
            <div className={styles.footer}>
              <ul className={styles.itemList}>
                <li className={styles.itemListItem}>
                  <p className={styles.itemListText}>
                    Автоматическая балансировка нагрузки узлов;
                  </p>
                </li>
                <li className={styles.itemListItem}>
                  <p className={styles.itemListText}>
                    Живая миграция BM между серверами;
                  </p>
                </li>
                <li className={styles.itemListItem}>
                  <p className={styles.itemListText}>Высокая доступность;</p>
                </li>
                <li className={styles.itemListItem}>
                  <p className={styles.itemListText}>
                    Поддержка протоколов iSCSI и Fiber channel.
                  </p>
                </li>
              </ul>
              <Image
                className={styles.itemImage}
                width={264}
                height={264}
                src={"/solution-7.png"}
              ></Image>
            </div>
            <div className={styles.tags}>
              <div style={{ backgroundColor: "rgba(1, 117, 124, 0.1)" }} className={styles.tag}>
                <span className={styles.tagText}>eXpress</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rowTwoColumns}>
          <div style={{ backgroundColor: "#EFFBFF" }} className={styles.item}>
            <h3 className={styles.itemTitle}>
              Экосистема корпоративных коммуникаций
            </h3>
            <p className={styles.itemText}>
              Экосистема корпоративных коммуникаций
            </p>
            <div className={styles.footer}>
              <ul className={styles.itemList}>
                <li className={styles.itemListItem}>
                  <p className={styles.itemListText}>
                    Разработано для контроля различных типов оборудования и
                    технологий;
                  </p>
                </li>
                <li className={styles.itemListItem}>
                  <p className={styles.itemListText}>
                    Работа на х86 архитектуре и открытых ОС (Linux);
                  </p>
                </li>
                <li className={styles.itemListItem}>
                  <p className={styles.itemListText}>
                    Поддержка работы на защищённых ОС (Astra Linux, RedOS).
                  </p>
                </li>
              </ul>
              <Image
                className={styles.itemImage}
                width={320}
                style={{ right: "-10px", bottom: "0px" }}
                height={266}
                src={"/solution-8.png"}
              ></Image>
            </div>
            <div className={styles.tags}>
              <div style={{ backgroundColor: "rgba(1, 117, 124, 0.1)" }} className={styles.tag}>
                <span className={styles.tagText}>Initi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
