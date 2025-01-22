import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { MetricProps } from "../../model/commonTypes";
import DropdownMenu from "../dropdown/Dropdown";
import PieChart from "./pie-chart/PieChart";
import LineGraph from "./line-graph/LineGraph";
import classes from "./metrics.module.scss";
import VerticalBarGraph from "./vertical-bar-graph/VerticalBarGraph";

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
                <p>
                  {relativeProgress}
                  {relativeProgress[0] === "+" ? (
                    <FaArrowTrendUp size={14} />
                  ) : (
                    <FaArrowTrendDown size={14} />
                  )}
                </p>
              </div>
              <DropdownMenu />
            </div>
            <LineGraph />
          </div>
        );
      case "vertical-bar":
        return (
          <div className={classes.circularChart}>
            <p>{title}</p>
            <VerticalBarGraph />
          </div>
        );
    }
  };

  return getMetrics();
};

export default Metrics;
