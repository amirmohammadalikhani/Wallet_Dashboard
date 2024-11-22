import React from "react";
import "./LargeWidget.scss";
import TransAction from "../TransAction/TransAction";

export default function LargeWidget() {

  const allDataOfTransActions = [
    { profileImage: './logo192.png', name: 'Reza Zare', date:'12 Jun 2022', amount: '$123', status: 'Approved'},
    { profileImage: './logo192.png', name: 'Amin Hosseini', date:'19 Jul 2022', amount: '$123', status: 'Declined'},
    { profileImage: './logo192.png', name: 'Arash Moradi', date:'28 May 2022', amount: '$123', status: 'Pending'},
    { profileImage: './logo192.png', name: 'Mehran Kazemi', date:'4 Feb 2022', amount: '$123', status: 'Approved'},
  ]

  return (
    <article className="large-widget">
      <div className="large-widget-container">
        <h3 className="large-widget-title">Latest TransActions</h3>
        <table className="large-widget-table">
          <tr>
            <th className="large-widget-table-customer">Customer</th>
            <th className="large-widget-table-date">Date</th>
            <th className="large-widget-table-amount">Amount</th>
            <th className="large-widget-table-status">Status</th>
          </tr>
          <TransAction {...allDataOfTransActions[0]} />
          <TransAction {...allDataOfTransActions[1]} />
          <TransAction {...allDataOfTransActions[2]} />
          <TransAction {...allDataOfTransActions[3]} />
        </table>
      </div>
    </article>
  );
}
