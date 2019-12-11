import { withRouter } from "next/router";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";

// getInitialProps进行获取后端接口数据
const Demo2 = ({ router }) => {
  const [color, setcolor] = useState("blue");
  return (
    <>
      <div>{router.query.name}</div>
      <Link href="/">
        <a>首页</a>
      </Link>
      <div className="div">sdasdas</div>
      <div>
        <button
          onClick={() => {
            setcolor(color == "blue" ? "red" : "blue");
          }}
        >
          改变颜色
        </button>
      </div>
      <style jsx>
        {`
          div {
            color: ${color};
          }
        `}
      </style>
    </>
  );
};
Demo2.getInitialProps = async () => {
  const promise = new Promise(resolve => {
    axios("http://rap2api.taobao.org/app/mock/data/1407237").then(res => {
      console.log("远程数据结果：", res);
      resolve(res.data);
    });
  });
  return await promise;
};
export default withRouter(Demo2);
