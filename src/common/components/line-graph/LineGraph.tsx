import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { data } from "../../dummyData";
import classes from "./lineGraph.module.scss";

const LineGraph = () => {
  return (
    <ResponsiveContainer className={classes.graphContainer}>
      <AreaChart width={500} height={400} data={data}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="25%" stopColor="#b6a2fb" stopOpacity={1} />
            <stop offset="75%" stopColor="#b6a2fb" stopOpacity={0.3} />
          </linearGradient>
        </defs>
        <XAxis stroke="#fff" tick={false} padding={{ right: 20 }} />
        <YAxis stroke="#fff" tick={false} padding={{ top: 20 }} />
        <Tooltip
          contentStyle={{
            height: "50px",
            width: "50px",
            backgroundColor: "var(--primary-color)",
            padding: "0",
          }}
          itemStyle={{
            color: "#fff",
          }}
        />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#fff"
          fill="url(#colorUv)"
          fillOpacity={1}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default LineGraph;
