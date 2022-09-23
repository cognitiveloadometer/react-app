import React from "react";
import "./styles.css";

export function CircleChart({ loadometerData }) {
  let average = 0

    let result = 0
    let mult = 0
    if (loadometerData.length > 0) {
        for (let i = 0; i < loadometerData.length; i++) {
            result = result + loadometerData[i].load
            mult++
        }
        average = result / mult
    }

  const data = {
    initial: {
      unit: "GB",
      value: 5
    },
    remaining: {
      unit: "GB",
      value: average
    },
    type: "Internet"
  };

  function SemiCircleChart({ min, max, value }) {
    const angle = (value / max) * 180;
    const style = { "--angle": angle + "deg" };

    return (
      <div class="sc-gauge">
        <div class="sc-background">
          <div class="sc-percentage" style={style}></div>
          <div class="sc-mask"></div>
          <span class="sc-value">{value}</span>
        </div>
        <span class="sc-min">{min}</span>
        <span class="sc-max">{max}</span>
      </div>
    );
  }

  return (
    <SemiCircleChart
      min={0}
      max={data.initial.value}
      value={data.remaining.value.toFixed(1)}
    />
  );
}