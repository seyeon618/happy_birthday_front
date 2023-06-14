import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const options = [
  "None",
  "Atria",
  "Callisto",
  "Dione",
  "Ganymede",
  "Hangouts Call",
  "Luna",
  "Oberon",
  "Phobos",
  "Pyxis",
  "Sedna",
  "Titania",
  "Triton",
  "Umbriel",
];

interface Props {
  img_list: string[];
}

function Menu({ img_list }: Props) {
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

export default Menu;
