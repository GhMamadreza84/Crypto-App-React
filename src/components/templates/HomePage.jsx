import { useEffect, useState } from "react";
import { getCoinList } from "../../services/cryptoApi";
import TableCoin from "../modules/TableCoin";
import Pagination from "../modules/Pagination";
import Search from "../modules/Search";
const HomePage = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(getCoinList(page, currency));
      setIsLoading(true);
      const data = await res.json();
      setCoins(data);
      setIsLoading(false);
    };
    getData();
  }, [page,currency]);
  return (
    <div>
      <Search currency={currency} setCurrency={setCurrency} />
      <TableCoin coins={coins} isLoading={isLoading} currency={currency} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};
export default HomePage;
