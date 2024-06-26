import { RotatingLines } from "react-loader-spinner";
import { FaArrowRight } from "react-icons/fa6";

import { marketChart } from "../../services/cryptoApi";
import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";
import styles from "./TableCoin.module.css";
const TableCoin = ({ coins, isLoading, currency, setChart }) => {
  return (
    <div className={styles.container}>
      {isLoading ? (
        <RotatingLines strokeColor="#3874ff" strokeWidth="2" />
      ) : (
        <>
          <div className={styles.titles}>
            <h2>Buy and sell with the lowest fees in the industry</h2>
            <p>
              Buy and sell 150+ cryptocurrencies with 20+ fiat currencies using
              bank transfers or your credit/debit card.
            </p>
            <a href="#">
              Learn More <FaArrowRight className={styles.icon} />
            </a>
          </div>
          <div className={styles.tableDiv}>
            <table className={styles.table}>
              {/* <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>Total Volume</th>
              <th></th>
            </tr>
          </thead> */}
              <tbody>
                {coins.map((coin) => (
                  <TableRow
                    coin={coin}
                    key={coin.id}
                    currency={currency}
                    setChart={setChart}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default TableCoin;

const TableRow = ({ coin, currency, setChart }) => {
  const {
    id,
    name,
    image,
    current_price,
    price_change_percentage_24h: price_change,
    total_volume,
    symbol,
  } = coin;
  const showHandler = async () => {
    try {
      const res = await fetch(marketChart(id));
      const data = await res.json();
      console.log(data);
      setChart({ ...data, coin });
    } catch (error) {
      setChart(null);
    }
  };
  return (
    <tr>
      <td>
        <div className={styles.symbol} onClick={showHandler}>
          <img src={image} alt={name} />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td className={styles.name}>{name}</td>
      <td>
        {currency === "usd" ? "$" : null}
        {currency === "jpy" ? "¥" : null}
        {currency === "eur" ? "€" : null}
        {current_price.toLocaleString()}
      </td>
      <td className={price_change > 0 ? styles.success : styles.error}>
        {price_change.toFixed(2)}%
      </td>
      <td>{total_volume.toLocaleString()}</td>
      <td>
        <img src={price_change > 0 ? chartUp : chartDown} alt={name} />
      </td>
    </tr>
  );
};
