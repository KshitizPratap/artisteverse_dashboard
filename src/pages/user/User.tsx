import { useState } from "react";
import UserTable from "./user-list/UserList";
import UserAcquisition from "./user-acquisition/UserAcquisition";
import classes from "./user.module.scss";

const User = () => {
  const [activeTab, setActiveTab] = useState<"list" | "acquisition">("list");

  return (
    <div className={classes.mainContainer}>
      <div className={classes.userAction}>
        <div className={classes.tabContainer}>
          <span
            data-tab={activeTab === "list"}
            onClick={() => setActiveTab("list")}
          >
            User List
          </span>
          <span
            data-tab={activeTab === "acquisition"}
            onClick={() => setActiveTab("acquisition")}
          >
            User Acquisition
          </span>
        </div>
        {activeTab === "list" && (
          <button className={classes.download}>Download</button>
        )}
      </div>
      <div data-tab={activeTab === "list"}>
        <UserTable />
      </div>
      <div data-tab={activeTab === "acquisition"}>
        <UserAcquisition />
      </div>
    </div>
  );
};

export default User;
