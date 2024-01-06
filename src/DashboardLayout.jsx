import { Layout } from "antd";
import PropTypes from "prop-types";
import VideoGrid from "./VideoGrid";
import { useState } from "react";
import DashboardHeader from "./DashboardHeader";

const { Sider, Content } = Layout;

const DashboardLayout = ({ children }) => {
  
  const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    maxWidth: '100vw',
  };

  const headerStyle = {
    height: 50,
    paddingInline: 48,
    lineHeight: '50px',
    width:'82%'
  };

  const [activeUsers] = useState(Array(5).fill(null));

  return (
    <Layout style={layoutStyle}>
      <DashboardHeader className="" style={headerStyle} activeUsers={activeUsers} />
        <Content width="70%">{children}</Content>
        <Sider width='18%' style={{ height:'100vh',zIndex:5}}>
          <VideoGrid {...{ activeUsers }} />
        </Sider>
    </Layout>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.any,
};

export default DashboardLayout;
