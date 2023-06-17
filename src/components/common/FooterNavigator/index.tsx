import React from "react";
import { useRouter } from "next/router";

import CatImage from "../../../../public/Image/piano_cat.jpg";

import {
  CatImg,
  Footer,
  HomeIcon,
  ModalContainer,
  ModalStyled,
  PostAddIcon,
  ProfileIcon,
  ReelsIcon,
  SearchIcon,
  Text,
  Title,
} from "./styles";
import { FooterWrap } from "./styles";

interface Props {
  id: string;
}

function FooterNavi({ id }: Props): React.ReactElement {
  const router = useRouter();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onClickIcon = (path: string) => {
    router.push(path);
  };

  const onClickReels = () => {
    if (id === "0000.seo_") {
      router.push("/reels");
    } else {
      handleOpen();
    }
  };

  return (
    <div>
      <ModalStyled
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContainer>
          <Title>{"~대충 피아노 연주하는 영상~"}</Title>
          <Text>{"부끄러워서 영서만 볼 수 있서요..."}</Text>
          <CatImg src={CatImage} alt="cat"></CatImg>
        </ModalContainer>
      </ModalStyled>
      <FooterWrap>
        <Footer>
          <HomeIcon onClick={() => onClickIcon("/home")} />
          <SearchIcon onClick={() => onClickIcon("/home")} />
          <PostAddIcon onClick={() => onClickIcon("/feed/create")} />
          <ReelsIcon onClick={() => onClickReels()} />
          <ProfileIcon onClick={() => onClickIcon("/profile/0000.seo_")} />
        </Footer>
      </FooterWrap>
    </div>
  );
}

export default FooterNavi;
