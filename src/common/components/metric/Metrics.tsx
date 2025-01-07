import { MetricProps } from "../../model/commonTypes";
import LineGraph from "../line-graph/LineGraph";
import PieChart from "../pie-chart/PieChart";
import classes from "./metrics.module.scss";

const Metrics = (props: MetricProps) => {
  const { metricType, title, total = "", relativeProgress = "" } = props;

  const getMetrics = () => {
    switch (metricType) {
      case "circular":
        return (
          <div className={classes.circularChart}>
            <p>{title}</p>
            <PieChart />
          </div>
        );
      case "line":
        return (
          <div className={classes.mainContainer}>
            <div className={classes.metricHeader}>
              <div className={classes.title}>
                <p>{title}</p>
                <p>{total}</p>
                <p>{relativeProgress}</p>
              </div>
            </div>
            <LineGraph />
          </div>
        );
    }
  };

  return getMetrics();
};

export default Metrics;
