import React, { useState } from "react";
import Image from "next/image";
import Divider from "@mui/material/Divider";

import Dot from "../../../public/Image/dots.png";
import Auth from "../../components/common/Auth";
import { WholeWrap } from "../../components/common/Card/styles";
import Footer from "../../components/common/Footer";
import {
  Circle,
  ID,
  InfoNumber,
  InfoTitle,
  StyledAvatar,
  StyledGrid,
} from "../../style/profile/styles";

function Profile(): React.ReactElement {
  const [id, setId] = useState(null);

  return (
    <div>
      <Auth setId={setId} />
      <WholeWrap>
        <ID>{id}</ID>
        <Divider />
        <StyledGrid container className="container">
          <StyledGrid xs={4} className="avatar">
            <Circle>
              <StyledAvatar src="/Image/youngseo.png" alt="Profile" />
            </Circle>
          </StyledGrid>
          <StyledGrid xs={8} spacing={2}>
            <StyledGrid xs={12} className="my-info">
              <StyledGrid xs={5}>{"0000.seo_"}</StyledGrid>
              <StyledGrid xs={7}>
                <Image src={Dot} alt="dots" width={30} height={30} />
              </StyledGrid>
            </StyledGrid>
            <StyledGrid className="follow-info">
              <StyledGrid xs={4}>
                <InfoNumber>{"3"}</InfoNumber>
                <InfoTitle>{"게시물"}</InfoTitle>
              </StyledGrid>
              <StyledGrid xs={4}>
                <InfoNumber>{"3"}</InfoNumber>
                <InfoTitle>{"팔로워"}</InfoTitle>
              </StyledGrid>
              <StyledGrid xs={4}>
                <InfoNumber>{"3"}</InfoNumber>
                <InfoTitle>{"팔로우"}</InfoTitle>
              </StyledGrid>
            </StyledGrid>
          </StyledGrid>
        </StyledGrid>
      </WholeWrap>
      <Footer />
    </div>
  );
}

export default Profile;
