import { useEffect, useState } from "react";
import { getCoinList } from "../../services/cryptoApi";

import styles from "./ChartPage.module.css";
import TableCoin from "../modules/TableCoin";
import Pagination from "../modules/Pagination";
// import Search from "../modules/Search";
import Chart from "../modules/Chart";
import blueGradient from "../../assets/blueGradient.png";

const HomePage = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");
  const [chart, setChart] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(getCoinList(page, currency));
        setIsLoading(true);
        const data = await res.json();
        setCoins(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [page, currency]);
  return (
    <div className={styles.container}>
      {/* <Search currency={currency} setCurrency={setCurrency} /> */}
      <TableCoin
        coins={coins}
        isLoading={isLoading}
        currency={currency}
        setChart={setChart}
      />
      <Pagination page={page} setPage={setPage} />
      {!!chart && <Chart chart={chart} setChart={setChart} />}
      <img
        src={blueGradient}
        alt="blueGradient"
        className={styles.blueGradient}
      />
    </div>
  );
};
export default HomePage;
