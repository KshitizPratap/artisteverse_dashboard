import Metrics from "../../common/components/metric/Metrics";
import { overviewMetrics } from "../../common/dummyData";
import classes from "./overview.module.scss";

const Overview = () => {
  return (
    <div className={classes.mainContainer}>
      {overviewMetrics.map((metrics) => {
        return <Metrics {...metrics} />;
      })}
    </div>
  );
};

export default Overview;
