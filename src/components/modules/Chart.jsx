import { useState } from "react";
import {LineChart, ResponsiveContainer} from "recharts"

import { convertData } from "../../helpers/convertData";
import { IoClose } from "react-icons/io5";
import styles from "./Chart.module.css";
const Chart = ({ chart, setChart }) => {
  const [type, setType] = useState("market_caps");
  console.log(convertData(chart, type));
  return (
    <div className={styles.container}>
      <span onClick={() => setChart(null)} className={styles.cross}>
        <IoClose />
      </span>
      <div className={styles.chart}>
        <div className={styles.graph}>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart>

          </LineChart>
        </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Chart;
