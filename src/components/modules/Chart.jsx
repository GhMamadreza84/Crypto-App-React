import styles from "./Chart.module.css"
const Chart = ({chart,setChart}) => {
  return (
    <div className={styles.container}>
     <span onClick={()=>setChart(null)} className={styles.cross}>X</span>
    </div>
  );
}

export default Chart;