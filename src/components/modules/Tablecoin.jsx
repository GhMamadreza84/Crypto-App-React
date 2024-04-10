import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";
const TableCoin = ({ coins }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Name</th>
            <th>Price</th>
            <th>24h</th>
            <th>Total Volume</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* {coins.map((coin) => (
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default TableCoin;

const TableRow = () => {
  return (
    <tr>
      <td>
        <div>
          <img src={coin.image} alt={coin.name} />
          <span>{coin.symbol.toUpperCase()}</span>
        </div>
      </td>
    </tr>
  );
};
