import React from "react";
import "./Home.scss";
import Feature from "../../components/Feature/Feature";
import Chart from "../../components/Chart/Chart";
import { xAxisData } from "../../data";
import SmallWidget from "../../components/SmallWidget/SmallWidget";
import LargeWidget from "../../components/LargeWidget/LargeWidget";

export default function Home() {

  const allDataOfFeatures = [
    {title: 'Revanue', cost: '$2,415', compared: -11.4, explanation: 'Compared to last month'},
    {title: 'Sales', cost: '$4,430', compared: -1.4, explanation: 'Compared to last month'},
    {title: 'Cost', cost: '$3,918', compared: +2.4, explanation: 'Compared to last month'},
  ]

  return (
    <main className="home">
      <section className="features-container">
        <Feature {...allDataOfFeatures[0]} />
        <Feature {...allDataOfFeatures[1]} />
        <Feature {...allDataOfFeatures[2]} />
      </section>
      <Chart title="Month Sale" data={xAxisData} dataKey="Sale" grid />
      <section className="widgets-container">
        <SmallWidget className="small-widget"/>
        <LargeWidget className="large-widget"/>
      </section>
    </main>
  );
}
