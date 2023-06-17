import { styled } from "@mui/material/styles";
import { Swiper, SwiperSlide } from "swiper/react";

export const CurImage = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ImageGalleryWrap = styled("div")`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  z-index: 0;
`;

export const SwiperStyled = styled(Swiper)`
  display: flex;
  align-items: center;
`;

export const SwiperSlideStyled = styled(SwiperSlide)`
  width: 100%;
  height: 100%;
`;
