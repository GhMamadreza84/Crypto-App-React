import { useState } from "react";
import {CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis} from "recharts"

import { convertData } from "../../helpers/convertData";
import { IoClose } from "react-icons/io5";
import styles from "./Chart.module.css";
const Chart = ({ chart, setChart }) => {
  const [type, setType] = useState("prices");
  console.log(convertData(chart, type));
  return (
    <div className={styles.container}>
      <span onClick={() => setChart(null)} className={styles.cross}>
        <IoClose />
      </span>
      <div className={styles.chart}>
        <div className={styles.graph}>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={400} height={400} data={convertData(chart,type)}>
            <Line type="monotone" dataKey={type} stroke="#3874ff" strokeWidth="2" />
            <CartesianGrid stroke="#404042" />
            <YAxis dataKey={type} domain={['auto','auto']} />
            <XAxis />
          </LineChart>
        </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Chart;
