import classNames from "classnames";
import Image from "next/image";
import SwiperCore from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import styles from "./Partners.module.css";
import IVATechnologiesLogo from "../../../../public/iva.png";
import KasperskyLogo from "../../../../public/kaspersky.png";
import ntech from "../../../../public/ntech.png";
import psql from "../../../../public/psql.png";
import p7 from "../../../../public/p7.png";
import astra from "../../../../public/astra.png";
import lenovo from "../../../../public/lenovo.png";
import depo from "../../../../public/depo.png";
import yadro from "../../../../public/yadro.png";
import openyard from "../../../../public/openyard.png";
import autofaq from "../../../../public/autofaq.png";
import aquarius from "../../../../public/aquarius.png";
import primo from "../../../../public/primo.png";
import express from "../../../../public/express.png";
import nanocad from "../../../../public/nanocad.png";
import autograph from "../../../../public/autograph.png";
import simpleone from "../../../../public/simpleone.png";

const partnersData = [
  {
    title: "Лаборатория Касперского",
    description:
      "Международная компания, специализирующаяся на разработке систем защиты от компьютерных вирусов, спама, хакерских атак и прочих киберугроз.",
    image: KasperskyLogo,
    height: 41,
    width: 197,
  },
  {
    title: "IVA Technologies",
    description:
      "Ведущий игрок российского IT-рынка и лидирующий российский разработчик экосистемы корпоративных коммуникаций.",
    image: IVATechnologiesLogo,
    height: 59,
    width: 82,
  },
  {
    title: "SimpleOne",
    description:
      "Российский разработчик решений для автоматизации сервисных бизнес-процессов. Входит в международную группу компаний ITGLOBAL.COM",
    image: simpleone,
    height: 18,
    width: 128,
  },
  {
    title: "Р7-Офис",
    description:
      "Российский кроссплатформенный пакет приложений для совместной работы с офисными документами",
    image: p7,
    height: 35,
    width: 127,
  },
  {
    title: "Lenovo",
    description:
      "Является крупнейшим производителем персональных компьютеров в мире с долей на рынке более 20 %, а также занимает пятое место по производству мобильных телефонов",
    image: lenovo,
    height: 19,
    width: 97,
  },
  {
    title: "DEPO Computers",
    description:
      "Российская IT-компания, cистемообразующее предприятие отечественной радиоэлектронной промышленности. Имеет стратегическое значение для обеспечения информационной безопасности государства",
    image: depo,
    height: 39,
    width: 67,
  },
  {
    title: "AutoFAQ",
    description:
      "Искусственный интеллект для клиентского сервиса и внутренних коммуникаций",
    image: autofaq,
    height: 31,
    width: 108,
  },
  {
    title: "NtechLab",
    description:
      "Российская компания, создатель решений на основе собственных алгоритмов распознавания лиц и силуэтов. Продукты компании востребованы в сферах общественной и корпоративной безопасности, розничной торговли",
    image: ntech,
    height: 31,
    width: 100,
  },
  {
    title: "PostgreSQL",
    description:
      "Cвободная объектно-реляционная система управления базами данных. Существует в реализациях для множества UNIX-подобных платформ, включая различные BSD-системы",
    image: psql,
    height: 38,
    width: 103,
  },
  {
    title: "Astra Linux",
    description:
      "Операционная система на базе ядра Linux, которая внедряется в России в качестве альтернативы Microsoft Windows в государственных организациях",
    image: astra,
    height: 33,
    width: 95,
  },
  {
    title: "Автограф",
    description:
      "Компания создает продукты в области программного обеспечения формирования технической документации, построенные на собственном графическом ядре без использования иностранных компонентов",
    image: autograph,
    height: 52,
    width: 81,
  },
  {
    title: "Open Yard",
    description:
      "Производитель серверного оборудования. Благодаря собственному производству, технологиям и интеллектуальной собственности, мы обеспечиваем поддержку и развитие решений в любых условиях",
    image: openyard,
    height: 22,
    width: 124,
  },
  {
    title: "Astra Linux",
    description:
      "Операционная система на базе ядра Linux, которая внедряется в России в качестве альтернативы Microsoft Windows в государственных организациях",
    image: astra,
    height: 33,
    width: 95,
  },
  {
    title: "Аквариус",
    description:
      "Крупнейший российский разработчик и производитель компьютерной техники и ИТ-решений, системообразующее предприятие",
    image: aquarius,
    height: 26,
    width: 119,
  },
  {
    title: "YADRO",
    description:
      "Технологическая компания, сосредоточенная на изменении подхода бизнеса к вызовам технологической трансформации",
    image: yadro,
    height: 50,
    width: 50,
  },
  {
    title: "Primo RPA",
    description:
      "Полнофункциональная платформа для внедрения роботизации любой сложности и масштаба: от запуска роботов-ассистентов до полной автоматизации ключевых бизнес-процессов",
    image: primo,
    height: 39,
    width: 95,
  },
  {
    title: "eXpress",
    description:
      "Платформа корпоративных коммуникаций и мобильности, единственный на сегодняшний момент сертифицированный ФСТЭК России по 4-му уровню доверия корпоративный суперапп с инсталляциями в крупных компаниях",
    image: express,
    height: 47,
    width: 55,
  },
  {
    title: "nanoCAD",
    description:
      "Российский разработчик инженерного ПО: технологий автоматизированного проектирования (САПР/CAD), информационного моделирования (ТИМ/BIM)",
    image: nanocad,
    height: 50,
    width: 91,
  },
];

export const Partners = () => {
  SwiperCore.use([Navigation, Autoplay]);
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.buttons}>
          <div
            className={classNames(styles.swiperButtonPrev, "swiper-buttonprev")}
          >
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5 8L2 8M2 8L9 15M2 8L9 0.999999"
                stroke="#01757C"
                stroke-width="1.5"
              />
            </svg>
          </div>
          <div
            className={classNames(styles.swiperButtonNext, "swiper-buttonnext")}
          >
            <svg
              width="19"
              height="16"
              viewBox="0 0 19 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 8L17.5 8M17.5 8L10.5 1M17.5 8L10.5 15"
                stroke="white"
                stroke-width="1.5"
              />
            </svg>
          </div>
        </div>
        <div className={styles.header}>
          <h2 className={styles.headerTitle}>{`{  Партнеры  }`}</h2>
          <div className={styles.rightPart}>
            <p className={styles.headerText}>Наши официальные партнеры</p>
            <p className={styles.headerSubtitle}>
              В штате компании имеются сертифицированные специалисты ведущих
              вендоров России
            </p>
          </div>
        </div>
        <div className={styles.slider}>
          <Swiper
            style={{ alignContent: "center" }}
            spaceBetween={30}
            slidesPerView="auto"
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1424: {
                slidesPerView: 3,
              },
            }}
            grid={{ rows: 1 }}
            loop
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".swiper-buttonnext",
              prevEl: ".swiper-buttonprev",
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            {partnersData.map((partner, index) => (
              <SwiperSlide key={index}>
                <div key={index} className={styles.sliderCard}>
                  <h3 className={styles.title}>{partner.title}</h3>{" "}
                  <p className={styles.text}>{partner.description}</p>{" "}
                  <Image
                    src={partner.image}
                    alt={partner.title}
                    className={styles.image}
                    width={partner.width}
                    height={partner.height}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};
