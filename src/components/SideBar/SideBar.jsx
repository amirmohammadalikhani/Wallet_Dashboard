import React from "react";
import "./SideBar.scss";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ReportIcon from "@mui/icons-material/Report";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <nav>
      <div className="sidebar-container">
        <ul className="sidebar-list">
          <h3>Dashboard</h3>
          <Link to="/" className="link">
            <li>
              <LineStyleIcon className="sidebar-icon" />
              Home
            </li>
          </Link>
          <li>
            <TimelineIcon className="sidebar-icon" />
            Analytics
          </li>
          <li>
            <TrendingUpIcon className="sidebar-icon" />
            Sales
          </li>
        </ul>
        <ul className="sidebar-list">
          <h3>Quick menu</h3>
          <Link to="/users" className="link">
            <li>
              <PermIdentityIcon className="sidebar-icon" />
              Users
            </li>
          </Link>
          <Link to="/newUser" className="link">
            <li>
              <StorefrontIcon className="sidebar-icon" />
              New Users
            </li>
          </Link>
          <Link to="/products" className="link">
            <li>
              <AttachMoneyIcon className="sidebar-icon" />
              Products
            </li>
          </Link>
          <li>
            <BarChartIcon className="sidebar-icon" />
            Transactions
          </li>
          <li>
            <MailOutlineIcon className="sidebar-icon" />
            Reports
          </li>
        </ul>
        <ul className="sidebar-list">
          <h3>Notifications</h3>
          <li>
            <MailOutlineIcon className="sidebar-icon" />
            Mail
          </li>
          <li>
            <DynamicFeedIcon className="sidebar-icon" />
            Feedback
          </li>
          <li>
            <MessageOutlinedIcon className="sidebar-icon" />
            Messages
          </li>
        </ul>
        <ul className="sidebar-list">
          <h3>Staff</h3>
          <li>
            <WorkOutlineIcon className="sidebar-icon" />
            Manage
          </li>
          <li>
            <TimelineIcon className="sidebar-icon" />
            Analytics
          </li>
          <li>
            <ReportIcon className="sidebar-icon" />
            Reports
          </li>
        </ul>
      </div>
    </nav>
  );
}
