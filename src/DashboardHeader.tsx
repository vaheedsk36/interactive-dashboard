import { Layout } from "antd";
import React from "react";
import { FaUserCircle, FaRegShareSquare } from "react-icons/fa";

const { Header } = Layout;

const DashboardHeader = ({ activeUsers }) => {
    const HEADER_MAX_USER = 4;
    return (
        <Header className="bg-light shadow-sm border fs-4" style={{
            display: "grid",
            gridTemplateColumns: "87% 12% 1%",
            alignItems: "center"
        }}>
            <strong>Interactive Dashboard</strong>
            <div className="d-flex align-items-center border-start border-end px-3 me-2 h-50">
                <div className="me-1">
                    {activeUsers.map((_, index) => {
                        return index + 1 !== HEADER_MAX_USER ? <FaUserCircle className="pointer mb-1" /> : null;
                    })}
                </div>
                <div className="fs-6 pointer">+{activeUsers.length - HEADER_MAX_USER}</div>
            </div>
            <FaRegShareSquare className="pointer" />
        </Header>
    );
};

export default DashboardHeader;
