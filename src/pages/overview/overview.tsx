import LineGraph from "../../common/components/line-graph/LineGraph";
import classes from "./overview.module.scss";

const Overview = () => {
  return (
    <div className={classes.mainContainer}>
      <LineGraph />
    </div>
  );
};

export default Overview;
