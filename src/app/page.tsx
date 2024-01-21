"use client";
import { Header } from "@/src/components/Header";
import { Main } from "@/src/components/Main";
import { Footer } from "@/src/components/Footer";
import { useCounter } from "@/src/hooks/useCounter";
import { useInputArray } from "@/src/hooks/useInputArray";
import { useBgLighBlue } from "@/src/hooks/useBgLighBlue";
import { useEffect, useCallback, useState } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export default function Home(props: { foo: number }) {
  console.log(props);
  const { foo, isShow, handleClick, handleDisplay } = useCounter();
  const { text, array, handleChanged, handleAdd } = useInputArray();
  useBgLighBlue();

  const [posts, setPosts] = useState<Post[]>([]);

  const getPosts = useCallback(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    setPosts(json);
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div>
      <Header />

      {isShow ? <h1>{foo}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>

      <input type="text" value={text} onChange={handleChanged} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>

      <Main page="index" />

      <ol>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ol>

      <Footer />
    </div>
  );
}
