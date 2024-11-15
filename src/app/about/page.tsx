"use client";
import styles from "./about.module.css";
import { Header } from "../components/Header";
import BookRow from "../components/BookRow/BookRow";
import { DummyBooks } from "@/app/components/dummyBooks/dummyBooks";

export default function About() {
  const bookRows = DummyBooks.map((b) => {
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
