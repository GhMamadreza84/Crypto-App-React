import { useEffect, useState } from "react";
const Search = ({ currency, setCurrency }) => {
  const [text, setText] = useState("");
  useEffect(()=>{
    console.log(text);
  },[text])
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>
    </div>
  );
};

export default Search;
