import classNames from "classnames";
import Image from "next/image";
import SwiperCore from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import DirectumLogo from "../../../../public/directum.png";
import IVATechnologiesLogo from "../../../../public/iva.png";
import KasperskyLogo from "../../../../public/kaspersky.png";
import styles from "./Partners.module.css";

const partnersData = [
  {
    title: "Лаборатория Касперского",
    description:
      "Международная компания, специализирующаяся на разработке систем защиты от компьютерных вирусов, спама, хакерских атак и прочих киберугроз.",
    image: KasperskyLogo,
    height: 41,
    widht: 197,
  },
  {
    title: "IVA Technologies",
    description:
      "Ведущий игрок российского IT-рынка и лидирующий российский разработчик экосистемы корпоративных коммуникаций.",
    image: IVATechnologiesLogo,
    height: 59,
    widht: 82,
  },
  {
    title: "Directum",
    description:
      "Cистема управления цифровыми процессами и документами с элементами искусственного интеллекта, в основе которых лежат технологии машинного обучения и компьютерного зрения.",
    image: DirectumLogo,
    height: 49,
    widht: 191,
  },
  {
    title: "Лаборатория Касперского",
    description:
      "Международная компания, специализирующаяся на разработке систем защиты от компьютерных вирусов, спама, хакерских атак и прочих киберугроз.",
    image: KasperskyLogo,
    height: 41,
    widht: 197,
  },
  {
    title: "IVA Technologies",
    description:
      "Ведущий игрок российского IT-рынка и лидирующий российский разработчик экосистемы корпоративных коммуникаций.",
    image: IVATechnologiesLogo,
    height: 59,
    widht: 82,
  },
  {
    title: "Directum",
    description:
      "Cистема управления цифровыми процессами и документами с элементами искусственного интеллекта, в основе которых лежат технологии машинного обучения и компьютерного зрения.",
    image: DirectumLogo,
    height: 49,
    widht: 191,
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
