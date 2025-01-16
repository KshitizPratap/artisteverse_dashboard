import Metrics from "../../common/components/metric/Metrics";
import Table from "../../common/components/table/Table";
import { overviewMetrics } from "../../common/dummyData";
import classes from "./overview.module.scss";

const Overview = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={`${classes.welcomeContainer} ${classes.colSpan1}`}>
        <h1>Welcome</h1>
        <h2>Mr. John Doe</h2>
      </div>
      <div className={classes.colSpan2}>
        <Metrics {...overviewMetrics[0]} />
      </div>
      {overviewMetrics.map((metrics) => {
        return (
          <div className={classes.colSpan1}>
            <Metrics {...metrics} />
          </div>
        );
      })}
      <div className={classes.colSpan3}>
        <Table title="Top Sales" size="medium" />
      </div>
    </div>
  );
};

export default Overview;
