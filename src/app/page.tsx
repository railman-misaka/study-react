"use client";
import { Header } from "@/src/components/Header";
import { Main } from "@/src/components/Main";
import { Footer } from "@/src/components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [foo, setFoo] = useState(1);

  const handleClick = (e: any) => {
    setFoo((foo) => foo + 1);
  };

  useEffect(() => {
    //ここからマウント処理
    document.body.style.backgroundColor = "lightblue";

    //ここからアンマウント処理
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div>
      <Header />
      <h1>{foo}</h1>
      <button onClick={handleClick}>ボタン</button>
      <Main page="index" />

      <Footer />
    </div>
  );
}
