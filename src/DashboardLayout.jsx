import { Layout } from "antd";
import PropTypes from "prop-types";
import VideoGrid from "./VideoGrid";
import { useState } from "react";
import DashboardHeader from "./DashboardHeader";

const DashboardLayout = ({ children }) => {

  const [activeUsers] = useState(Array(5).fill(null));

  return (
    <Layout>
      <DashboardHeader {...{activeUsers}}/>
      <div className="row gx-1">
        <div className="col">{children}</div>
        {/* <VideoGrid {...{activeUsers}}/> */}
      </div>
    </Layout>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.any,
};

export default DashboardLayout;
