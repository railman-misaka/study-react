"use client";
import { Header } from "@/src/components/Header";
import { Posts } from "@/src/components/Posts";
import { Footer } from "@/src/components/Footer";
// import { useBgLighBlue } from "@/src/hooks/useBgLighBlue";
// import { useEffect, useCallback, useState } from "react";

// type Post = {
//   id: number;
//   title: string;
//   body: string;
//   userId: number;
// };

export default function Home() {
  // useBgLighBlue();

  // const [posts, setPosts] = useState<Post[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<Error | null>(null);

  // const getPosts = useCallback(async () => {
  //   try {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //     if (!res.ok) {
  //       throw new Error("エラーが発生したため、データの取得に失敗しました。");
  //     }
  //     const json = await res.json();
  //     setPosts(json);
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       setError(error);
  //     } else {
  //       setError(new Error("An unknown error occurred."));
  //     }
  //   }
  //   setLoading(false);
  // }, []);

  // useEffect(() => {
  //   getPosts();
  // }, [getPosts]);

  return (
    <div>
      <Header />
      <Posts />
      <Footer />
    </div>
  );
}
