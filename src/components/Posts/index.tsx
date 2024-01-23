"use client";
import { usePosts } from "@/src/hooks/usePosts";

export const Posts = () => {
  const { data, error, isLoading, isEmpty } = usePosts();

  if (isLoading) return <div>ローディング中</div>; // データとエラーが両方ない場合はローディング中と判断
  if (error) return <div>{error.message}</div>;
  if (isEmpty) return <div>データは空です</div>;

  return (
    <ol>
      {data.map((post: any) => {
        return <li key={post.id}>{post.title}</li>;
      })}
    </ol>
  );
};
