import React, { useState } from "react";

import GoSimDown from "../../../public/Image/gosim_down.png";
import GoSimUp from "../../../public/Image/gosim_up.png";
import Auth from "../../components/common/Auth";
import FooterNavi from "../../components/common/FooterNavigator";
import { GoSimImg, ReelsContainer, Video } from "../../style/reels/styles";

function Reels(): React.ReactElement {
  const [id, setId] = useState(null); // 접속중인 user

  return (
    <ReelsContainer>
      <Auth setId={setId} />
      <GoSimImg src={GoSimUp} alt="gosim img" priority={true} />
      <Video autoPlay>
        <source src={"/video/piano.mp4"} type="video/mp4" />
      </Video>
      <GoSimImg src={GoSimDown} alt="gosim img" priority={true} />
      <FooterNavi id={id} />
    </ReelsContainer>
  );
}

export default Reels;
