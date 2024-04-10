import { useEffect, useState } from "react";
import TableCoin from "../modules/TableCoin";
import { getCoinList } from "../../services/cryptoApi";
const HomePage = () => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch(getCoinList())
      .then((res) => res.json())
      .then((json) => setCoins(json));
  }, []);
  return (
    <div>
      <TableCoin coins={coins} />
    </div>
  );
};
export default HomePage;
