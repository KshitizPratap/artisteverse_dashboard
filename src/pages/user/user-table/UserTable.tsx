import { useState } from "react";
import { userData } from "../../../common/dummyData";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import classes from "./userTable.module.scss";

const UserTable = () => {
  const limit = 6;
  const [offset, setOffset] = useState(0);
  const totalPages = Math.ceil(userData.length / limit);
  const currentPage = Math.floor(offset / limit) + 1;
  const paginatedData = userData.slice(offset, offset + limit);
  const headers = paginatedData[0].map((col) => col.label);

  return (
    <div className={classes.mainContainer}>
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className={classes.tableBody}>
          {paginatedData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((col, colIndex) => (
                <td key={colIndex}>{col.value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className={classes.paginationContainer}>
        <MdKeyboardArrowLeft
          onClick={() => setOffset((prev) => prev - limit)}
          className={currentPage <= 1 ? classes.disableArrows : ""}
        />
        <span>
          {currentPage} / {totalPages}
        </span>
        <MdKeyboardArrowRight
          onClick={() => setOffset((prev) => prev + limit)}
          className={currentPage >= totalPages ? classes.disableArrows : ""}
        />
      </div>
    </div>
  );
};

export default UserTable;
