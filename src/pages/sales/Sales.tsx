import Metrics from "../../common/components/metric/Metrics";
import StatsCard from "../../common/components/stats-card/StatsCard";
import { overviewMetrics } from "../../common/dummyData";
import classes from "./sales.module.scss";

const Sales = () => {
  return (
    <div className={classes.mainContainer}>
      <Metrics {...overviewMetrics[0]} />
      <div className={classes.salesContainer}>
        <StatsCard title="Total Sales" change="+10.6%" value="12,125" />{" "}
        <StatsCard title="Total Sales" change="+10.6%" value="12,125" />
      </div>
    </div>
  );
};

export default Sales;
