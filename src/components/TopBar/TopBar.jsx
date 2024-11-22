import React from "react";
import "./TopBar.scss";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";

export default function TopBar() {
  return (
    <header>
      <div className="topbar-container">
        <div className="topLeft">
          <h1>Wallet</h1>
        </div>
        <div className="topRight">
          <div className="topbar-icon">
            <NotificationsIcon className="topbar-icon"/>
            <span>2</span>
          </div>
          <div className="topbar-icon">
            <LanguageIcon className="topbar-icon"/>
            <span>2</span>
          </div>
          <div className="topbar-icon">
            <SettingsIcon className="topbar-icon"/>
          </div>
          <img src="./logo192.png" alt="profile" />
        </div>
      </div>
    </header>
  );
}
