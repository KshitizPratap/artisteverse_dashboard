import { useState } from "react";
import { dataTable } from "../../dummyData";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import classes from "./table.module.scss";

type TableProp = {
  title: string;
};

const Table = ({ title }: TableProp) => {
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const headers = dataTable[0].map((col) => col.label);

  return (
    <div className={classes.mainContainer}>
      <h2>{title}</h2>
      <table>
        <thead className={classes.tableHeader}>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className={classes.tableBody}>
          {dataTable.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((col, colIndex) => (
                <td key={colIndex}>{col.value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className={classes.paginationContainer}>
        <MdKeyboardArrowLeft />
        {offset + 1} / {Math.floor(dataTable.length / limit) + 1}
        <MdKeyboardArrowRight />
      </div>
    </div>
  );
};

export default Table;
