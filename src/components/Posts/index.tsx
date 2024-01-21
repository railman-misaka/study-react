"use client";
import React from "react";
import { useEffect, useCallback, useReducer } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

const initialState = {
  data: [] as Post[],
  loading: true,
  error: null as Error | null,
};

const reducer = (state: typeof initialState, action: any) => {
  switch (action.type) {
    case "end":
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case "error":
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      throw new Error("no such action type");
  }
};

export const Posts = () => {
  // const [posts, setPosts] = useState<Post[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<Error | null>(null);
  const [state, dispatch] = useReducer(reducer, initialState);

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        throw new Error("エラーが発生したため、データの取得に失敗しました。");
      }
      const json = await res.json();
      dispatch({ type: "end", data: json });
    } catch (error) {
      if (error instanceof Error) {
        dispatch({ type: "error", error });
      } else {
        dispatch({
          type: "error",
          error: new Error("An unknown error occurred."),
        });
      }
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (state.loading) return <div>ローディング中</div>;

  if (state.error) return <div>{state.error.message}</div>;

  if (state.data.length === 0) return <div>データは空です</div>;

  return (
    <ol>
      {state.data.map((post: any) => {
        return <li key={post.id}>{post.title}</li>;
      })}
    </ol>
  );
};
