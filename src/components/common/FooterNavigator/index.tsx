import React from "react";
import { useRouter } from "next/router";

import {
  Footer,
  HomeIcon,
  PostAddIcon,
  ProfileIcon,
  ReelsIcon,
  SearchIcon,
} from "./styles";
import { FooterWrap } from "./styles";

function FooterNavi(): React.ReactElement {
  const router = useRouter();

  const onClickIcon = (path: string) => {
    router.push(path);
  };

  return (
    <FooterWrap>
      <Footer>
        <HomeIcon onClick={() => onClickIcon("/home")} />
        <SearchIcon onClick={() => onClickIcon("/home")} />
        <PostAddIcon onClick={() => onClickIcon("/feed/create")} />
        <ReelsIcon onClick={() => onClickIcon("/home")} />
        <ProfileIcon onClick={() => onClickIcon("/profile/0000.seo_")} />
      </Footer>
    </FooterWrap>
  );
}

export default FooterNavi;
