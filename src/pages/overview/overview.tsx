import Metrics from "../../common/components/metric/metrics";
import { MetricProps } from "../../common/model/commonTypes";
import classes from "./overview.module.scss";

const overviewMetrics: Array<MetricProps> = [
  {
    metricType: "line",
    title: "Streams",
    total: "42563",
    relativeProgress: "10.1%",
  },
  {
    metricType: "line",
    title: "Avg. Time Spent",
    total: "25 Min",
    relativeProgress: "-5.2%",
  },
  {
    metricType: "line",
    title: "No. of Visits",
    total: "362342",
    relativeProgress: "8.7%",
  },
];

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
