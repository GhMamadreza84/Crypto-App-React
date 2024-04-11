import { useState } from "react";

const Pagination = () => {
  const [page, setPage] = useState(1);
  const previousHandler = () => {
    setPage((page) => page - 1);
  };
  const nextHandler = () => {
    setPage((page) => page + 1);
  };
  return (
    <div>
      <button onClick={previousHandler}>Previous</button>
      <p>{page}</p>
      <button onClick={nextHandler}>Next</button>
    </div>
  );
};

export default Pagination;
