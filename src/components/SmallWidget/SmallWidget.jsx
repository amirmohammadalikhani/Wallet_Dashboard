import React from "react";
import "./SmallWidget.scss";
import "../NewMember/NewMember";
import NewMember from "../NewMember/NewMember";

export default function SmallWidget() {
  const allDataOfNewUsers = [
    {
      profileImage: "./logo192.png",
      name: "Mohammad Amini",
      job: "Web Developer",
    },
    {
      profileImage: "./logo192.png",
      name: "Sasan Motiei",
      job: "Seo Engineer",
    },
    { profileImage: "./logo192.png", name: "Zahra Aghaie", job: "Weblog" },
    { profileImage: "./logo192.png", name: "Qadir Yolme", job: "Hacker" },
  ];

  return (
    <article className="small-widget">
      <div className="small-widget-container">
        <h3 className="small-widget-title">New Join Members</h3>
        <div className="new-members-container">
          <NewMember {...allDataOfNewUsers[0]} />
          <NewMember {...allDataOfNewUsers[1]} />
          <NewMember {...allDataOfNewUsers[2]} />
          <NewMember {...allDataOfNewUsers[3]} />
        </div>
      </div>
    </article>
  );
}
