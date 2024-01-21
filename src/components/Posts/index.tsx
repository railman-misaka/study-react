"use client";
import React from "react";
import { useEffect, useCallback, useState } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        throw new Error("エラーが発生したため、データの取得に失敗しました。");
      }
      const json = await res.json();
      setPosts(json);
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      } else {
        setError(new Error("An unknown error occurred."));
      }
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (loading) return <div>ローディング中</div>;

  if (error) return <div>{error.message}</div>;

  if (posts.length === 0) return <div>データは空です</div>;

  return (
    <ol>
      {posts.map((post) => {
        return <li key={post.id}>{post.title}</li>;
      })}
    </ol>
  );
};
