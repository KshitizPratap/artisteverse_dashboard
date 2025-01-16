import { useState } from "react";
import { PieChart as PChart, Pie, Sector, ResponsiveContainer } from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";
import { chartColors } from "../../utils";

import classes from "./pieChart.module.scss";
import "../../../index.css";

const data = [
  { name: "G", value: 400 },
  { name: "G B", value: 300 },
  { name: "Gp C", value: 300 },
  { name: "Gup D", value: 200 },
  { name: "Goup E", value: 20 },
  { name: "Group F", value: 20 },
];

const TOOLTIP_COLOR = "var(--primary-color)";

const renderActiveShape = (props: PieSectorDataItem) => {
  const {
    cx = 0,
    cy = 0,
    innerRadius = 0,
    outerRadius = 0,
    startAngle = 0,
    endAngle = 0,
    fill,
    name,
    percent = 0,
  } = props;

  const RADIAN = Math.PI / 180;
  const midAngle = (startAngle + endAngle) / 2;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);

  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 20) * cos;
  const my = cy + (outerRadius + 20) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 10;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} textAnchor="middle" fontSize={14} fill="#fff" dy={4}>
        {name}
      </text>

      {/* Highlight the active sector */}
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        cornerRadius={4}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle + 5}
        endAngle={endAngle - 5}
        innerRadius={outerRadius + 2}
        outerRadius={outerRadius + 4}
        fill={fill}
      />

      {/* Tooltip Group with Rotation */}
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={TOOLTIP_COLOR}
        fill="none"
        strokeWidth={2}
      />
      <circle cx={ex} cy={ey} r={4} fill={TOOLTIP_COLOR} stroke="none" />
      <rect
        x={cos >= 0 ? ex : ex - 50}
        y={ey - 10}
        width={50}
        height={20}
        fill={TOOLTIP_COLOR}
        stroke={TOOLTIP_COLOR}
        rx={6}
        ry={6}
      />
      <text
        x={cos >= 0 ? ex + 12 : ex - 12}
        y={ey + 5}
        textAnchor={textAnchor}
        fill="#fff"
        width={50}
      >
        {Math.round(percent * 100)}%
      </text>
    </g>
  );
};

const PieChart = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_: unknown, index: number) => {
    setActiveIndex(index);
  };

  return (
    <ResponsiveContainer className={classes.mainContainer}>
      <PChart width={400} height={400}>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data.map((item, index) => ({
            ...item,
            fill: chartColors[index % chartColors.length],
            stroke: "none",
            payload: data,
          }))}
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={80}
          dataKey="value"
          onMouseEnter={onPieEnter}
          cornerRadius={4}
          paddingAngle={-5}
        />
      </PChart>
    </ResponsiveContainer>
  );
};

export default PieChart;
