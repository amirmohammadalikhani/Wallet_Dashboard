import React from "react";
import "./NewMember.scss";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function NewMember({ profileImage, name, job }) {
  return (
    <div className="new-member-container">
      <img src={profileImage} alt="profile" />
      <div className="new-member-info">
        <span className="member-name">{name}</span>
        <span className="member-job">{job}</span>
      </div>
      <button className="member-button"><VisibilityIcon className="member-icon"/></button>
    </div>
  );
}
