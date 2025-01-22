import {
  BarChart,
  Bar,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Cell,
  Tooltip,
} from "recharts";
import { chartColors } from "../../../utils";
import classes from "./verticalBarGraph.module.scss";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
];

const GraphTooltip = ({ active, payload, coordinate: { x, y } }: any) => {
  if (active && payload && payload.length) {
    const barHeight =
      document.getElementsByClassName("recharts-rectangle")[
        payload[0].payload.barIndex
      ].attributes[3].nodeValue;

    return (
      <div
        className={classes.tooltip}
        style={{
          left: x - 25,
          top: 190 - Number(barHeight || y),
        }}
      >
        <p>{payload[0].value}</p>
        <span className={classes.downArrow}></span>
      </div>
    );
  }
  return null;
};

const VerticalBarGraph = () => {
  return (
    <ResponsiveContainer className={classes.mainContainer}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid
          stroke="#ccc"
          horizontal={true}
          vertical={false}
          strokeDasharray="0"
        />
        <XAxis stroke="#bbb" tick={false} padding={{ right: 20 }} />
        <YAxis
          stroke="#fff"
          padding={{ top: 20 }}
          axisLine={false}
          fontSize={12}
        />
        <Tooltip content={<GraphTooltip />} cursor={false} />
        <defs>
          {chartColors.map((color, index) => (
            <linearGradient
              key={`gradient-${index}`}
              id={`colorGradient-${index}`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="70%" stopColor={color} stopOpacity={1} />
              <stop
                offset="100%"
                stopColor="var(--secondary-color)"
                stopOpacity={1}
              />
            </linearGradient>
          ))}
        </defs>
        <Bar
          dataKey="uv"
          data={data.map((item, index) => ({
            ...item,
            barIndex: index,
          }))}
          fill="#8884d8"
          // label={{ position: "top" }}
          barSize={30}
          radius={[5, 5, 0, 0]}
        >
          {data.map((_, index) => {
            return (
              <Cell
                key={`cell-${index}`}
                fill={`url(#colorGradient-${index})`}
                strokeWidth={5}
              />
            );
          })}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default VerticalBarGraph;
