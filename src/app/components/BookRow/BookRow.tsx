"use client";
import React from "react";
import styles from "@/app/about/about.module.css";
import { BookToRead } from "../BookToRead/BookToRead";

type BookRowProps = {
  book: BookToRead;
  onMemoChange: (id: number, memo: string) => void;
  onDelete: (id: number) => void;
};

const BookRow = (props: BookRowProps) => {
  const { title, authors, memo } = props.book;

  const handleMemoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onMemoChange(props.book.id, e.target.value);
  };

  const handleDeleteClick = () => {
    props.onDelete(props.book.id);
  };

  return (
    <div className={styles.bookRow}>
      <div title={title} className={styles.title}>
        {title}
      </div>
      <div title={authors} className={styles.authors}>
        {authors}
      </div>
      <input
        type="text"
        className={styles.memo}
        value={memo}
        onChange={handleMemoChange}
      />
      <div className={styles.deleteRow} onClick={handleDeleteClick}>
        削除
      </div>
    </div>
  );
};
export default BookRow;
