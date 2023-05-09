import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Grid } from "@mui/material";
import axios from "axios";
import { useCookies } from "react-cookie";

import { StyledAvatar } from "../../style/home/styles";

function Home(): React.ReactElement {
  const [cookies, setCookie, removeCookie] = useCookies(["id"]);
  const [id, setId] = useState(null);
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
  });

  const logOut = () => {
    removeCookie("id");
    router.push("/accounts/login");
  };

  return (
    <div>
      <Grid container>
        <Grid xs={4}>
          <StyledAvatar src="/Image/youngseo.png" alt="Profile" />
        </Grid>
        <Grid xs={8}>{"test"}</Grid>
      </Grid>
    </div>
  );
}

export default Home;
