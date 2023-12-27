"use client";
import { Header } from "@/src/components/Header";
import { Main } from "@/src/components/Main";
import { Footer } from "@/src/components/Footer";
import { useCallback, useEffect } from "react";

export default function Home() {
  const handleClick = useCallback((e: any) => {
    e.preventDefault();
    alert(123);
  }, []);

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
      <a href="/about" onClick={handleClick}>
        ボタン
      </a>
      <Main page="index" />

      <Footer />
    </div>
  );
}
