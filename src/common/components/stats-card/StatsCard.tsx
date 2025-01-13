import { AiOutlineDollar } from "react-icons/ai";
import classes from "./statsCard.module.scss";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

type StatsProps = {
  title: string;
  value: string;
  change: string;
  dropdownHandler?: () => void;
};

const StatsCard = ({ title, value, change }: StatsProps) => {
  return (
    <div className={classes.mainContainer}>
      <AiOutlineDollar size={20} />
      <div className={classes.content}>
        <span>{title}</span>
        <span>{value}</span>
        <span>
          {change}
          {change[0] === "+" ? (
            <FaArrowTrendUp size={14} />
          ) : (
            <FaArrowTrendDown size={14} />
          )}
        </span>
      </div>
    </div>
  );
};

export default StatsCard;
