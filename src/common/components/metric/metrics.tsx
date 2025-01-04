import { MetricProps } from "../../model/commonTypes";
import LineGraph from "../line-graph/LineGraph";
import classes from "./metrics.module.scss";

const Metrics = (props: MetricProps) => {
  const { metricType, title, total = "", relativeProgress = "" } = props;

  const getMetrics = () => {
    switch (metricType) {
      case "circular":
        return null;
      case "line":
        return (
          <>
            <div className={classes.metricHeader}>
              <div className={classes.title}>
                <p>{title}</p>
                <p>{total}</p>
                <p>{relativeProgress}</p>
              </div>
            </div>
            <LineGraph />
          </>
        );
    }
  };

  return <div className={classes.mainContainer}>{getMetrics()}</div>;
};

export default Metrics;
