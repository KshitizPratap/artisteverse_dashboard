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
      <Table title="Top Sales" size="small" />
      <Metrics {...overviewMetrics[0]} />
      <Table title="Top Sales" size="small" />
      <Metrics {...overviewMetrics[0]} />
      <Table title="Top Sales" size="small" />
    </div>
  );
};

export default Stats;
