"use client";
import { Header } from "@/src/components/Header";
import { useSearchParams, usePathname, useParams } from "next/navigation";

const PostId = () => {
  // URLのパラメーターを取得
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  console.log(name);

  // URLのパスを取得
  const pathname = usePathname();
  console.log(pathname);

  // 動的ルーティングのパラメータを取得
  const params = useParams();
  console.log(params.id);

  return (
    <div>
      <Header />
      <div>{params.id}</div>
    </div>
  );
};

export default PostId;
