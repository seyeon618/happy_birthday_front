import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useCookies } from "react-cookie";

function Home(): React.ReactElement {
  const router = useRouter();

  const [cookies, setCookie, removeCookie] = useCookies(["id"]);
  const [userID, setUserId] = useState(null);

  const authCheck = () => {
    const token = cookies.id;
    axios
      .post(`${process.env.NEXT_PUBLIC_BASEURL}/accounts/token`, token)
      .then((res) => {
        setUserId(res.data.id);
      })
      .catch(() => {
        logOut();
      });
  };

  useEffect(() => {
    authCheck(); // 로그인 체크 함수
  });

  const logOut = () => {
    removeCookie("id"); // 쿠키를 삭제
    router.push(`/accounts/login`);
  };

  return (
    <div>
      <div>{userID && <h1>{userID}</h1>}</div>
      <button onClick={logOut}>로그아웃</button>
    </div>
  );
}

export default Home;
