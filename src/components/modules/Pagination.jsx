import {useState} from "react"

const Pagination = () => {
  const [page,setPage]=useState(1)
  return (
    <div>
      <button>Previous</button>
      <p></p>
      <button>Previous</button>
    </div>
  )
};

export default Pagination;
