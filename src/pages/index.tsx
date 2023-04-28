import React from "react";

import { CardWrap, WholeWrap } from "../components/common/Card/styles";
import { Article, Picture, PictureWrap } from "../styles";

import Login from "./accounts/login";

function Root(): React.ReactElement {
  return (
    <WholeWrap>
      <CardWrap>
        <Article>
          <PictureWrap>
            <Picture />
          </PictureWrap>
          <Login />
        </Article>
      </CardWrap>
    </WholeWrap>
  );
}

export default Root;
