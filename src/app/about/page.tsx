"use client";
import styles from "./about.module.css";
import { Header } from "../components/Header";
import { BookToRead } from "../components/BookToRead/BookToRead";
import BookRow from "../components/BookRow/BookRow";

export const dummyBooks: BookToRead[] = [
  {
    id: 1,
    title: "はじめてのReact",
    authors: "ダミー",
    memo: "",
  },
  {
    id: 2,
    title: "React Hooks入門",
    authors: "ダミー",
    memo: "",
  },
  {
    id: 3,
    title: "実践Reactアプリケーション開発",
    authors: "ダミー",
    memo: "",
  },
];

export default function About() {
  const bookRows = dummyBooks.map((b) => {
    return (
      <BookRow
        book={b}
        key={b.id}
        onMemoChange={(id, memo) => {}}
        onDelete={(id) => {}}
      />
    );
  });
  return (
    <>
      <Header />
      <div className={styles.App}>
        <section className={styles.nav}>
          <h1>読みたい本リスト</h1>
          <div className={styles.buttonLike}>本を追加</div>
        </section>
        <section className={styles.main}>{bookRows}</section>
      </div>
    </>
  );
}
