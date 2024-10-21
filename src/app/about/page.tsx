"use client";
import "./about.module.css";
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
      <div className="App">
        <section className="nav">
          <h1>読みたい本リスト</h1>
          <div className="button-like">本を追加</div>
        </section>
        <section className="main">{bookRows}</section>
      </div>
    </>
  );
}
