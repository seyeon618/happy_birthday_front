import React from "react";
import { Pagination } from "swiper";

import {
  CurImage,
  ImageGalleryWrap,
  SwiperSlideStyled,
  SwiperStyled,
} from "./styles";

import "swiper/swiper.min.css";

interface Props {
  img_list: string[];
}

function ImageGallery({ img_list }: Props) {
  return (
    <ImageGalleryWrap>
      <SwiperStyled
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {img_list?.map((img, index) => (
          <SwiperSlideStyled key={index}>
            <CurImage src={img} alt={`Image ${img}`} />
          </SwiperSlideStyled>
        ))}
      </SwiperStyled>
    </ImageGalleryWrap>
  );
}

export default ImageGallery;
