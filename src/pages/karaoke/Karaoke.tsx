import Metrics from "../../common/components/metric/Metrics";
import Table from "../../common/components/table/Table";
import classes from "./karaoke.module.scss";

const Karaoke = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.colSpan1}>
        <Metrics metricType="vertical-bar" title="Age Group" />
      </div>
      <div className={classes.colSpan2}>
        <Table title="Top Songs" size="small" />
      </div>
      <div className={classes.colSpan3}>
        <Table title="" size="medium" />
      </div>
    </div>
  );
};

export default Karaoke;
