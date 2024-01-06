import { Layout } from "antd";
import { FaUserCircle, FaRegShareSquare } from "react-icons/fa";
import PropTypes from "prop-types";

const { Header } = Layout;

const DashboardHeader = ({ className,activeUsers,style }) => {
    const SAMPLE_COLOR = [
        "primary",
        "success",
        "warning",
        "secondary"
    ]
    const HEADER_MAX_USER = 4;
    return (
        <Header className={"bg-light shadow border fs-4 "+ className } style={{
            display: "grid",
            zIndex:5,
            gridTemplateColumns: "83% 14% 3%",
            alignItems: "center",
            ...style
        }}>
            <strong>Interactive Dashboard</strong>
            <div className="d-flex border-start border-end mx-1 px-2 align-items-center" style={{
                height:'30%'
            }}>
            <div className="mx-1">
                    {activeUsers.map((_, index) => {
                        return index + 1 !== HEADER_MAX_USER ? <FaUserCircle className={`pointer mb-1 text-${SAMPLE_COLOR[index]}`} /> : null;
                    })}
            </div>
            <div className="pointer fs-6">+{activeUsers.length - HEADER_MAX_USER}</div>
            </div>
            <FaRegShareSquare className="pointer mx-1 fs-6" />
        </Header>
    );
};

DashboardHeader.propTypes = {
    activeUsers: PropTypes.array,
    className: PropTypes.string,
    style: PropTypes.style
  };

export default DashboardHeader;
