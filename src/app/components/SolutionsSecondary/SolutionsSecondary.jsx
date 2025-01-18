import Image from 'next/image';
import styles from './SolutionsSecondary.module.css';

export const SolutionsSecondary = () => {
  const solutions = [
    {
      title: "Защищенная видеоконференцсвязь eXpress",
      description: "Современное решение для организации защищенных видеоконференций с высоким качеством связи",
      features: [
        "Поддержка до 128 участников в конференции",
        "Демонстрация экрана и совместная работа",
        "Шифрование данных и защита от несанкционированного доступа",
        "Совместимость с различными устройствами и платформами"
      ],
      image: "/express-1.webp",
      tags: ["eXpress"],
      backgroundColor: '#EFFBFF',
      textColor: '#0F1B2E',
    },
    {
      title: "Primo RPA",
      description: "Платформа для роботизации бизнес-процессов с использованием технологий искусственного интеллекта",
      features: [
        "Автоматизация рутинных задач и бизнес-процессов",
        "Интеграция с различными системами и приложениями",
        "Повышение эффективности и снижение операционных затрат",
        "Масштабируемость и гибкость в настройке роботов"
      ],
      image: "/primo-rpa-logo.jpg",
      tags: ["RPA", "AI"],
      backgroundColor: '#01757C',
      textColor: '#FFFFFF',
    },
    {
      title: "AutoFAQ AI",
      description: "Платформа для создания интеллектуальных чат-ботов и виртуальных ассистентов на базе искусственного интеллекта",
      features: [
        "Автоматизация обработки запросов клиентов",
        "Интеграция с популярными мессенджерами и платформами",
        "Анализ и улучшение качества обслуживания",
        "Персонализированные ответы на основе AI"
      ],
      image: "/autofaq-logo.png",
      tags: ["AI", "Чат-бот"],
      backgroundColor: '#01757C',
      textColor: '#FFFFFF',
    },
    {
      title: "Directum",
      description: "Система электронного документооборота и управления бизнес-процессами",
      features: [
        "Автоматизация делопроизводства и документооборота",
        "Управление бизнес-процессами и заданиями",
        "Интеграция с другими корпоративными системами",
        "Поддержка электронной подписи и шифрования"
      ],
      image: "/directum-logo.png",
      tags: ["ECM", "BPM"],
      backgroundColor: '#E5F2FF',
      textColor: '#0F1B2E',
    }
  ];

  return (
    <div className={styles.wrapper}>
      {solutions.map((solution, index) => (
        <div key={index} className={styles.solutionItem} style={{ backgroundColor: solution.backgroundColor }}>
          <div className={styles.solutionContent}>
            <h2 className={styles.solutionTitle} style={{ color: solution.textColor }}>{solution.title}</h2>
            <p className={styles.solutionDescription} style={{ color: solution.textColor }}>{solution.description}</p>
            <ul className={styles.featureList}>
              {solution.features.map((feature, featureIndex) => (
                <li key={featureIndex} className={styles.featureItem} style={{ color: solution.textColor }}>{feature}</li>
              ))}
            </ul>
            <div className={styles.tags}>
              {solution.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className={styles.tag} style={{ backgroundColor: solution.backgroundColor === '#01757C' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(1, 117, 124, 0.1)', color: solution.textColor }}>{tag}</span>
              ))}
            </div>
          </div>
          <div className={styles.solutionImageWrapper}>
            <Image
              src={solution.image}
              alt={solution.title}
              width={400}
              height={400}
              className={styles.solutionImage}
            />
          </div>
        </div>
      ))}
    </div>
  );
}; 