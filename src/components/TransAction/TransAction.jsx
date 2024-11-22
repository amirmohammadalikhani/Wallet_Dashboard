import React from "react";
import "./TransAction.scss";

export default function TransAction({
  profileImage,
  name,
  date,
  amount,
  status,
}) {
  const Button = ({ status }) => {
    return <button className={"trans-button " + status}>{status}</button>;
  };

  return (
    <tr>
      <td className="trans-td">
        <img src={profileImage} alt="profile" className="trans-profile" />
        <span className="trans-name">{name}</span>
      </td>
      <td className="trans-td">
        <time className="trans-date">{date}</time>
      </td>
      <td className="trans-td">
        <span className="trans-amount">{amount}</span>
      </td>
      <td className="trans-td">
        <Button status={status} />
      </td>
    </tr>
  );
}
