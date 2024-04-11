import { useEffect, useState } from "react";
import { getCoinList } from "../../services/cryptoApi";
import TableCoin from "../modules/TableCoin";
import Pagination from "../modules/Pagination";
const HomePage = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(getCoinList(page));
      setIsLoading(true)
      const data = await res.json();
      setCoins(data);
      setIsLoading(false);
    };
    getData();
  }, [page]);
  return (
    <div>
      <TableCoin coins={coins} isLoading={isLoading}  />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};
export default HomePage;
