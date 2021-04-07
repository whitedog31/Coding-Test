import axios from "axios";
import React, { useState, useEffect } from "react";
import Screen from "./Screen";
// 1. 데이터를 불어와야 한다.

// 2. 데이터 비동 기 처리 후 로딩 처리

// 3. 데이터 존재할 시 Screen 보여주 기
const Container = () => {
  const URL = ``;
  const [datas, setDatas] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        // axios
        setLoading(true);
        const { data } = await axios.get(URL);
        setDatas(data);
        setLoading(false);
      } catch (e) {
        setDatas(null);
        setLoading(false);
        console.log("e", e);
      }
    };
    fetchDatas();
    console.log("useEffect");
    // measures 값이 변경 될 때 , api 재요청 기능 필요
  }, []);

  // 데이터가 없다면 null처리
  if (loading) return <div>Loading </div>;
  if (!datas) return null;

  return (
    <>
      <h1>
        <Screen datas={datas} />
      </h1>
    </>
  );
};

export default Container;
