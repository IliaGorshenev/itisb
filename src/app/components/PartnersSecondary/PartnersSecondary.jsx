import Image from "next/image";
import DirectumLogo from "../../../../public/directum.png";
import IVATechnologiesLogo from "../../../../public/iva.png";
import KasperskyLogo from "../../../../public/kaspersky.png";
import styles from "./PartnersSecondary.module.css";

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
export const PartnersSecondary = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.slider}>
          {partnersData.map((partner, index) => (
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
          ))}
        </div>
      </div>
    </>
  );
};
