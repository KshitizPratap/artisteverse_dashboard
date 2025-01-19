import Metrics from "../../../common/components/metric/Metrics";
import Table from "../../../common/components/table/Table";
import { overviewMetrics } from "../../../common/dummyData";
import classes from "./userAcquisition.module.scss";

const UserAcquisition = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.colSpan1}>
        <Metrics metricType="circular" title="Traffic Generated" />
      </div>

      <div className={classes.colSpan2}>
        <Metrics {...overviewMetrics[0]} />
      </div>

      <div className={classes.colSpan3}>
        <Table title="Top Sales" size="small" />
      </div>
    </div>
  );
};

export default UserAcquisition;
