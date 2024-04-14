import { IoClose } from "react-icons/io5";
import styles from "./Chart.module.css"
const Chart = ({chart,setChart}) => {
  return (
    <div className={styles.container}>
     <span onClick={()=>setChart(null)} className={styles.cross}><IoClose /></span>
     <div className={styles.chart}></div>
    </div>
  );
}

export default Chart;