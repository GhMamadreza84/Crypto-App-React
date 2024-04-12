import {useState} from "react"
const Search = ({ currency, setCurrency }) => {
  const [text,setText]=useState("")
  return (
    <div>
      <input type="text" />
      <select value={currency} onChange={(e) =>setCurrency( e.target.value)}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>
    </div>
  );
};

export default Search;