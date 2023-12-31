import { Layout, Menu } from "antd";
import PropTypes from "prop-types";
import VideoGrid from "./VideoGrid";

const { Header } = Layout;

const items = new Array(15).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

const DashboardLayout = ({ children }) => {
  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <div className="row gx-1">
        <div className="col">{children}</div>
        <VideoGrid/>
      </div>
    </Layout>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.any,
};

export default DashboardLayout;
