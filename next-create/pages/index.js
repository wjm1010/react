import React from "react";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import Nav from "../components/nav";
import Demo from "../components/demo1";
import {Button} from 'antd'
const Home = () => {
  function btn() {
    // Router.push('/demo2?name=kiki')
    Router.push({
      pathname: "/demo2",
      query: {
        name: "angel"
      }
    });
  }
  return (
    <>
      <Head>
        <title>hello world</title>
        <meta charSet="utf-8" />
      </Head>
      <Nav />
      <Demo>点击</Demo>
      <div><Button>我是按钮</Button></div>
      <div>首页</div>
      <Link href="./demo1?name=jackson">
        <a>demo01</a>
      </Link>
      <Link href={{ pathname: "/demo2", query: { name: "cc" } }}>
        <a>demo02</a>
      </Link>
      <Link href={{ pathname: "/demo3", query: { name: "cc" } }}>
        <a>demo03</a>
      </Link>
      <div>
        <button onClick={btn}>demo02</button>
      </div>
      <p style={{ color: "red" }}>hi there</p>
      <style global jsx>{`
        body {
          background: pink;
        }
      `}</style>
    </>
  );
};

export default Home;
