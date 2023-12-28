import { useEffect } from "react";

export const useBgLighBlue = () => {
  useEffect(() => {
    console.log("foo");
    //ここからマウント処理
    document.body.style.backgroundColor = "lightblue";

    //ここからアンマウント処理
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
};
