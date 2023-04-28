import React from "react";

import { CardWrap, WholeWrap } from "../components/common/Card/styles";
import { Article, Picture, PictureWrap } from "../styles";
import isMobile from "../utils/isMobile";

import Login from "./accounts/login";

function Root(): React.ReactElement {
  const isMobileVariable = isMobile();
  console.log(isMobileVariable);

  return (
    <WholeWrap>
      <CardWrap>
        <Article>
          <PictureWrap isMobile={isMobileVariable}>
            <Picture />
          </PictureWrap>
          <Login />
        </Article>
      </CardWrap>
    </WholeWrap>
  );
}

export default Root;
