"use client";
import Link from "next/link";
import { Form } from "../components/Form/Form";
import { Header } from "../components/Header/Header";
import styles from "./news.module.css";
import { articles} from './const'
export default function News() {
 

  return (
    <>
      <Header title={"Новости"} route={"Новости"} />
      <div className={styles.wrapper}>
        <div className={styles.newsGrid}>
          {articles.map((article) => (
            <Link key={article.id} href={`/news/${article.id}`}>
              <div className={styles.articleWrapper} >
                <span className={styles.date}>{article.date}</span>
                <h2 className={styles.title}>{article.title}</h2>
                <p className={styles.content}>{article.content}</p>
                <div className={styles.tags}>
                  {article.tags.map((tag, index) => (
                    <div key={index} className={styles.tag}>
                      <span className={styles.tagText}>{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Form></Form>
    </>
  );
}
