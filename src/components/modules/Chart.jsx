import { IoMdClose } from "react-icons/io";
import styles from "./Chart.module.css"
const Chart = ({chart,setChart}) => {
  return (
    <div className={styles.container}>
     <span onClick={()=>setChart(null)} className={styles.cross}><IoMdClose /></span>
    </div>
  );
}

export default Chart;