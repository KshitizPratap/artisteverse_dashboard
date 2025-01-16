import Metrics from "../../common/components/metric/Metrics";
import Table from "../../common/components/table/Table";
import { overviewMetrics } from "../../common/dummyData";
import classes from "./stats.module.scss";

const Stats = () => {
  return (
    <div className={classes.mainContainer}>
      {overviewMetrics.map((metrics) => {
        return (
          <div className={classes.colSpan1}>
            <Metrics {...metrics} />
          </div>
        );
      })}
      <div className={classes.colSpan1}>
        <Metrics metricType="circular" title="Age Group" />
      </div>
      <div className={classes.colSpan2}>
        <Table title="Top Sales" size="small" />
      </div>
      <div className={classes.colSpan1}>
        <Metrics {...overviewMetrics[0]} />
      </div>
      <div className={classes.colSpan2}>
        <Table title="Top Sales" size="small" />
      </div>
      <div className={classes.colSpan1}>
        <Metrics {...overviewMetrics[0]} />
      </div>
      <div className={classes.colSpan2}>
        <Table title="Top Sales" size="small" />
      </div>
    </div>
  );
};

export default Stats;
