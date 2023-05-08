import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useCookies } from "react-cookie";

function Home(): React.ReactElement {
  const [cookies, setCookie, removeCookie] = useCookies(["id"]);
  const [id, setId] = useState(null);
  const router = useRouter();

  const authCheck = () => {
    const token = cookies.id;
    console.log("token: " + token);
    axios
      .get(`${process.env.NEXT_PUBLIC_BASEURL}/accounts/token`, {
        params: {
          token: token,
        },
      })
      .then((res) => {
        setId(res.data.id);
      })
      .catch(() => {
        logOut();
      });
  };

  useEffect(() => {
    authCheck();
  });

  const logOut = () => {
    removeCookie("id");
    router.push("/accounts/login");
  };

  return (
    <div>
      {id && <h1>{id}</h1>}
      <button onClick={logOut}>로그아웃</button>
    </div>
  );
}

export default Home;
