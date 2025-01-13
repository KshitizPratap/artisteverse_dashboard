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

const CustomTooltip = ({ active, payload, coordinate: { x } }: any) => {
  // TODO - Fix flickering of tooltip
  const activeCircle: any = document.getElementsByClassName("recharts-dot")[0];
  const cy = activeCircle?.cy.baseVal.value || 0;

  if (active && payload && payload.length) {
    return (
      <div
        className={classes.tooltip}
        style={{
          left: x - 25,
          top: cy - 35,
        }}
      >
        <p>{payload[0].value}</p>
        <span className={classes.downArrow}></span>
      </div>
    );
  }
  return null;
};

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
        <Tooltip content={<CustomTooltip />} cursor={false} />
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
