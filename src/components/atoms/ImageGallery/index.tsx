import React from "react";
import { Pagination } from "swiper";
import { SwiperSlide } from "swiper/react";

import { CurImage, ImageGalleryWrap, SwiperStyled } from "./styles";

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
          <SwiperSlide key={index}>
            <CurImage src={img} alt={`Image ${img}`} />
          </SwiperSlide>
        ))}
      </SwiperStyled>
    </ImageGalleryWrap>
  );
}

export default ImageGallery;
