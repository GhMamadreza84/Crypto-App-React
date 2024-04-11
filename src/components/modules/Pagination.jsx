import { useState } from "react";
import styles from "./Pagination.module.css";
const Pagination = ({ page, setPage }) => {
  const previousHandler = () => {
    if (page <= 1) return;
    setPage((page) => page - 1);
  };
  const nextHandler = () => {
    if (page >= 10) return;
    setPage((page) => page + 1);
  };
  return (
    <div className={styles.pagination}>
      <button
        onClick={previousHandler}
        className={page === 1 ? styles.disabled : null}
      >
        Previous
      </button>
      <p>1</p>
      <p>2</p>
      {page > 2 && page < 9 && (
        <>
          <span>...</span>
          <p>{page}</p>
        </>
      )}
      <span>...</span>
      <p>9</p>
      <p>10</p>
      <button onClick={nextHandler} className={page === 10 ? styles.disabled : null}>Next</button>
    </div>
  );
};

export default Pagination;
