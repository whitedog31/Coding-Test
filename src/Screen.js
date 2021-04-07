// 여기는 echarts 씁니다.
import React from "react";

// chart
import Chart from "echarts-for-react";

// utils
import { sortedDateList, findMaxValue } from "./utils";

export default function Screen({ datas }) {
  console.log("datas", datas);

  // x축, data.dimensions, data.measures
  const { dimensions, measures } = datas.data;

  // y축 ,index
  const { index } = datas;

  // console.log("Screen", dimensions, measures, index);

  // 첫번째 인덱스 : 데이터 루틴 ->
  // 두번째 인덱스 : layer
  // 세번째 인덱스 : 실제 값
  const list = [];
  for (let idx = 0; idx < measures[0].length; idx++) {
    const tmpArray = measures[0].map((v, i) => {
      // console.log(i, idx, v[idx]);
      // 단위변환
      return [idx, i, v[idx]];
    });
    // .reverse();
    list.push(...tmpArray);
  }

  // console.log("list", list);
  findMaxValue(list);
  // 데이터값
  const option = {
    tooltip: {
      position: "top",
    },
    grid: {
      height: "50%",
      top: "10%",
    },
    visualMap: {
      min: 0,
      max: 169000,
      // type: "piecewise",
      orient: "horizontal",
      right: 0,
      top: 0,
      inRange: {
        color: ["#CFDFEB", "#4280B4"],
      },
    },
    xAxis: {
      type: "category",
      data: dimensions,
      splitArea: {
        show: true,
      },
    },
    yAxis: {
      type: "category",
      data: index,
      splitArea: {
        show: true,
      },
    },
    series: [
      {
        name: "차트",
        type: "heatmap",
        data: list,
        label: {
          show: true,
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
    // calendar: {
    //   top: 120,
    //   left: 30,
    //   right: 30,
    //   cellSize: ["auto", 13],
    //   range: "2016",
    //   itemStyle: {
    //     borderWidth: 0.5,
    //   },
    //   yearLabel: { show: false },
    // },
    // series: {
    //   type: "heatmap",
    //   coordinateSystem: "calendar",
    //   data: [],
    // },
  };

  // chart 렌더링
  return (
    <div>
      <h1>차트</h1>
      <Chart
        option={option}
        style={{
          width: "100%",
          height: "700px",
        }}
      />
    </div>
  );
}
