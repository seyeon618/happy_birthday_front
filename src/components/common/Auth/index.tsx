import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useCookies } from "react-cookie";

function Auth({ setId }) {
  const [cookies, setCookie, removeCookie] = useCookies(["id"]);
  const router = useRouter();

  const authCheck = () => {
    const token = cookies.id;
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
  }, []);

  const logOut = () => {
    removeCookie("id");
    router.push("/accounts/login");
  };

  return null;
}

export default Auth;
