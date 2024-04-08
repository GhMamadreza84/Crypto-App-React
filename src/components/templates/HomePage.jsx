import { useEffect, useState } from "react";

const HomePage = () => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&&x_cg_demo_api_key=CG-fE2xUGccdiFXM9THzncMJfDH"
    )
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, []);
  return <div>Home Page</div>;
};
export default HomePage;
