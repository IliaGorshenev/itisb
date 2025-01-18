import Image from 'next/image';
import Link from 'next/link';
import styles from './Solutions.module.css';
export const Solutions = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.headerTitle}>{`{ РЕШЕНИЯ }`}</h2>
        <p className={styles.headerText}>Решения</p>
        <Link className={styles.headerLink} href={'/solutions'}>
          Подробнее{' '}
          <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.0684 21.2393L21.2394 1.0683M21.2394 1.0683H5.1026M21.2394 1.0683V17.2051"
              stroke="#01757C"
              stroke-width="2"
            />
          </svg>
        </Link>
      </div>
      <div className={styles.content}>
        <div className={styles.rowTwoColumns}>
          <div style={{ backgroundColor: '#EFFBFF' }} className={styles.item}>
            <h3 style={{ color: '#0F1B2E' }} className={styles.itemTitle}>
              Защищенная видеоконференцсвязь eXpress
            </h3>
            <p style={{ color: 'rgba(15, 27, 46, 0.6)' }} className={styles.itemText}>
              Современное решение для организации защищенных видеоконференций с высоким качеством связи
            </p>
            <div className={styles.footer}>
              <ul className={styles.itemList}>
                <li className={styles.itemListItem}>
                  <p style={{ color: 'rgba(15, 27, 46, 0.6)' }} className={styles.itemListText}>
                    Поддержка до 128 участников в конференции
                  </p>
                </li>
                <li className={styles.itemListItem}>
                  <p style={{ color: 'rgba(15, 27, 46, 0.6)' }} className={styles.itemListText}>
                    Демонстрация экрана и совместная работа
                  </p>
                </li>
                <li className={styles.itemListItem}>
                  <p style={{ color: 'rgba(15, 27, 46, 0.6)' }} className={styles.itemListText}>
                    Шифрование данных и защита от несанкционированного доступа
                  </p>
                </li>
                <li className={styles.itemListItem}>
                  <p style={{ color: 'rgba(15, 27, 46, 0.6)' }} className={styles.itemListText}>
                    Совместимость с различными устройствами и платформами
                  </p>
                </li>
              </ul>
              <Image className={styles.itemImage} width={344} height={344} src={'/express-1.webp'} alt="eXpress" />
            </div>
            <div className={styles.tags}>
              <div style={{ backgroundColor: 'rgba(1, 117, 124, 0.1)' }} className={styles.tag}>
                <span
                  style={{
                    color: '#0F1B2E',
                  }}
                  className={styles.tagText}
                >
                  eXpress
                </span>
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: '#01757C' }} className={styles.item}>
            <h3 className={styles.itemTitle}>Primo RPA</h3>
            <p className={styles.itemText}>
              Платформа для роботизации бизнес-процессов с использованием технологий искусственного интеллекта
            </p>
            <div className={styles.footer}>
              <ul className={styles.itemList}>
                <li className={styles.itemListItem}>
                  <p className={styles.itemListText}>Автоматизация рутинных задач и бизнес-процессов</p>
                </li>
                <li className={styles.itemListItem}>
                  <p className={styles.itemText}>Интеграция с различными системами и приложениями</p>
                </li>
                <li className={styles.itemListItem}>
                  <p className={styles.itemText}>Повышение эффективности и снижение операционных затрат</p>
                </li>
                <li className={styles.itemListItem}>
                  <p className={styles.itemText}>Масштабируемость и гибкость в настройке роботов</p>
                </li>
              </ul>
              <Image
                className={styles.itemImage}
                width={324}
                height={344}
                style={{ objectPosition: 'left' }}
                src={'/primo-rpa-logo.jpg'}
                alt="Primo RPA"
              />
            </div>
            <div className={styles.tags}>
              <div className={styles.tag}>
                <span className={styles.tagText}>RPA</span>
              </div>
              <div className={styles.tag}>
                <span className={styles.tagText}>AI</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rowTwoColumns}>
          <div style={{ backgroundColor: '#01757C' }} className={styles.item}>
            <h3 className={styles.itemTitle}>AutoFAQ AI</h3>
            <p className={styles.itemText}>
              Платформа для создания интеллектуальных чат-ботов и виртуальных ассистентов на базе искусственного
              интеллекта
            </p>
            <div className={styles.footer}>
              <ul className={styles.itemList}>
                <li className={styles.itemListItem}>
                  <p className={styles.itemListText}>Автоматизация обработки запросов клиентов</p>
                </li>
                <li className={styles.itemListItem}>
                  <p className={styles.itemListText}>Интеграция с популярными мессенджерами и платформами</p>
                </li>
                <li className={styles.itemListItem}>
                  <p className={styles.itemListText}>Анализ и улучшение качества обслуживания</p>
                </li>
                <li className={styles.itemListItem}>
                  <p className={styles.itemListText}>Персонализированные ответы на основе AI</p>
                </li>
              </ul>
              <Image
                className={styles.itemImage}
                width={324}
                height={324}
                src={'/autofaq-logo.png'}
                alt="AutoFAQ AI"
                style={{ objectPosition: 'left' }}
              />
            </div>
            <div className={styles.tags}>
              <div className={styles.tag}>
                <span className={styles.tagText}>AI</span>
              </div>
              <div className={styles.tag}>
                <span className={styles.tagText}>Чат-бот</span>
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: '#E5F2FF' }} className={styles.item}>
            <h3 style={{ color: '#0F1B2E' }} className={styles.itemTitle}>
              Directum
            </h3>
            <p style={{ color: 'rgba(15, 27, 46, 0.6)' }} className={styles.itemText}>
              Система электронного документооборота и управления бизнес-процессами
            </p>
            <div className={styles.footer}>
              <ul className={styles.itemList}>
                <li className={styles.itemListItem}>
                  <p style={{ color: 'rgba(15, 27, 46, 0.6)' }} className={styles.itemListText}>
                    Автоматизация делопроизводства и документооборота
                  </p>
                </li>
                <li className={styles.itemListItem}>
                  <p style={{ color: 'rgba(15, 27, 46, 0.6)' }} className={styles.itemListText}>
                    Управление бизнес-процессами и заданиями
                  </p>
                </li>
                <li className={styles.itemListItem}>
                  <p style={{ color: 'rgba(15, 27, 46, 0.6)' }} className={styles.itemListText}>
                    Интеграция с другими корпоративными системами
                  </p>
                </li>
                <li className={styles.itemListItem}>
                  <p style={{ color: 'rgba(15, 27, 46, 0.6)' }} className={styles.itemListText}>
                    Поддержка электронной подписи и шифрования
                  </p>
                </li>
              </ul>
              <Image
                className={styles.itemImage}
                width={324}
                height={344}
                src={'/directum-logo.png'}
                alt="Directum"
                style={{ objectPosition: 'center' }}
              />
            </div>
            <div className={styles.tags}>
              <div style={{ backgroundColor: 'rgba(63, 118, 252, 0.1)' }} className={styles.tag}>
                <span
                  style={{
                    color: '#0F1B2E',
                  }}
                  className={styles.tagText}
                >
                  ECM
                </span>
              </div>
              <div style={{ backgroundColor: 'rgba(63, 118, 252, 0.1)' }} className={styles.tag}>
                <span
                  style={{
                    color: '#0F1B2E',
                  }}
                  className={styles.tagText}
                >
                  BPM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
