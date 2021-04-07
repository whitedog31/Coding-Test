// 단위 변환
export const convertUnit = () => {
  console.log("converting...");
};

// 날짜 오름차순
export const sortedDateList = (arr) => {
  console.log("sorting...", arr);
  return arr.sort((a, b) => new Date(b) - new Date(a));
};

// max 값 찾기
export const findMaxValue = (arr) => {
  console.log("=====", arr);

  const tmp = arr.map((value, index) => {
    value.map((v, i) => {
      console.log(v, i);
    });
  });
  // return arr.reduce((acc, cur) => {
  //   console.log(acc, cur);
  //   const result = Math.max(acc, cur);
  //   // console.log("result", result);
  // }, 0);
};
