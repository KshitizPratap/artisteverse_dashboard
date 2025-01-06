import Metrics from "../../common/components/metric/Metrics";
import Table from "../../common/components/table/Table";
import { overviewMetrics } from "../../common/dummyData";
import classes from "./stats.module.scss";

const Stats = () => {
  return (
    <div className={classes.mainContainer}>
      {overviewMetrics.map((metrics) => {
        return <Metrics {...metrics} />;
      })}
      <Metrics {...overviewMetrics[0]} />
      <div className={classes.colSpan2}>
        <Table title="Top Sales" size="small" />
      </div>
      <Metrics {...overviewMetrics[0]} />
      <div className={classes.colSpan2}>
        <Table title="Top Sales" size="small" />
      </div>
      <Metrics {...overviewMetrics[0]} />
      <div className={classes.colSpan2}>
        <Table title="Top Sales" size="small" />
      </div>
    </div>
  );
};

export default Stats;
