export type MetricProps = {
  metricType: "line" | "circular" | "vertical-bar";
  title: string;
  total?: string;
  relativeProgress?: string;
};
