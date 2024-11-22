import React from "react";
import "./Feature.scss";
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';

export default function Feature({ title, cost, compared, explanation }) {
  return (
    <article>
      <div className="feature-container">
        <span className="feature-title">{title}</span>
        <div className="analysis-container">
          <span className="feature-cost">{cost}</span>
          <span className="feature-compared">{compared}</span>
          {compared > 0 ? (<ArrowUpwardOutlinedIcon className="upward-icon" />)
          : <ArrowDownwardOutlinedIcon className="downward-icon" />}
        </div>
        <span className="feature-explanation">{explanation}</span>
      </div>
    </article>
  );
}
