"use client";
import { Header } from "@/src/components/Header";
import { Main } from "@/src/components/Main";
import { Footer } from "@/src/components/Footer";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [foo, setFoo] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);

  const handleClick = (e: any) => {
    setFoo((foo) => foo + 1);
  };

  const handleChanged = useCallback((e: any) => {
    if (e.target.value.length > 5) {
      alert("5文字以内にしてください");
      return;
    }
    setText(e.target.value);
  }, []);

  const handleDisplay = useCallback(() => {
    setIsShow((isShow) => !isShow);
  }, []);

  useEffect(() => {
    console.log("foo");
    //ここからマウント処理
    document.body.style.backgroundColor = "lightblue";

    //ここからアンマウント処理
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [foo]);

  return (
    <div>
      <Header />
      {isShow ? <h1>{foo}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <input type="text" value={text} onChange={handleChanged} />
      <Main page="index" />

      <Footer />
    </div>
  );
}
