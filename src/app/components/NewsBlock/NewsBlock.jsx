"use client";
import Image from "next/image";
import Link from "next/link";
import { articles } from "../../news/const";
import styles from "./NewsBlock.module.css";
export const NewsBlock = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.headerTitle}>{`{  Новости  }`}</h2>
        <div className={styles.textContainer}>
          <p className={styles.headerText}>
            Новости и публикации <br></br>
          </p>
        </div>
      </div>
      <div className={styles.mainContentWrapper}>
        <div className={styles.tableWrapper}>
          <div className={styles.table}>
            {articles &&
              articles.slice(0, 3).map((article, index) => {
                return (
                  <div className={styles.articleWrapper} key={index}>
                    <div className={styles.articleDate}>{article.date}</div>
                    <Link href={`/news/${article.id}`}>
                      <p className={styles.articleTitle}>{article.title}</p>
                    </Link>
                    <div className={styles.articleTags}>
                      {article.tags.map((tag, index) => (
                        <div key={index} className={styles.articleTagsItem}>
                          <span className={styles.articleTagsItemText}>
                            {tag}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <Link style={{ height: "100%", maxWidth: '100%', borderRadius: '12px' }} href={`/news/${articles[0].id}`}>
          <div className={styles.positionedWrapper}>
            <div className={styles.positioned}>
              <p className={styles.positionedDate}>{articles[0].date}</p>
              <p className={styles.positionedTitle}>{articles[0].title}</p>
              <div className={styles.positionedFooter}>
                <div className={styles.positionedTags}>
                  {articles[0].tags.map((tag, index) => (
                    <div key={index} className={styles.positionedTagsItem}>
                      <span className={styles.positionedTagsItemText}>
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
                <Link href={`/news/${articles[0].id}`}>
                  <svg
                    width="72"
                    height="72"
                    viewBox="0 0 72 72"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="36"
                      cy="36"
                      r="35.5"
                      fill="white"
                      stroke="white"
                    />
                    <path
                      d="M29.5628 42.1871L41.9372 29.8127M41.9372 29.8127H32.0377M41.9372 29.8127V39.7122"
                      stroke="#01757C"
                      stroke-width="1.5"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <Image
              width={"1181"}
              height={"778"}
              className={styles.image}
              src={articles[0].firstImage}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};
