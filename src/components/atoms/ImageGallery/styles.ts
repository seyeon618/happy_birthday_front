import { styled } from "@mui/material/styles";
import { Swiper } from "swiper/react";

export const CurImage = styled("img")`
  width: 100%;
  height: 100%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

export const ImageGalleryWrap = styled("div")`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  z-index: 0;

  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

export const SwiperStyled = styled(Swiper)`
  display: flex;
  align-items: center;

  &.swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-button-next {
    color: #d9d9d9;
  }
`;
