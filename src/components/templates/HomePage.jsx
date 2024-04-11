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
      const res = await fetch(getCoinList());
      const data = await res.json();
      setCoins(data);
      setIsLoading(false);
    };
    getData();
  }, []);
  return (
    <div>
      <Pagination />
      <TableCoin coins={coins} isLoading={isLoading} />
    </div>
  );
};
export default HomePage;
