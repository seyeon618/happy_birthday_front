import React from "react";
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
} from "date-fns";

import ImageGallery from "../ImageGallery";

import {
  Circle,
  ClampText,
  ContentText,
  ImageWrap,
  ModalContainer,
  ModalStyled,
  PostDate,
  PostHeader,
  PostHeaderText,
  StyledAvatar,
  TextStyled,
} from "./styles";

import "swiper/css";
import "swiper/css/pagination";

interface Props {
  id: number;
  profile_path: string;
  user_id: string;
  published_at: string;
  post_list: string[];
  content: string;
  open: boolean;
  handleClose: () => void;
}

function PostModal({
  id,
  profile_path,
  user_id,
  published_at,
  post_list,
  content,
  open,
  handleClose,
}: Props): React.ReactElement {
  const parseDateString = (dateString: string) => {
    const year = Number(dateString.substring(0, 4));
    const month = Number(dateString.substring(4, 6)) - 1;
    const day = Number(dateString.substring(6, 8));
    const hour = Number(dateString.substring(8, 10));
    const minute = Number(dateString.substring(10, 12));
    return new Date(year, month, day, hour, minute);
  };

  const TimeAgo = (dateString: string) => {
    const date = parseDateString(dateString);
    const now = new Date();

    const minutesDifference = differenceInMinutes(now, date);
    if (minutesDifference < 60) {
      return <>{minutesDifference}분 전</>;
    }

    const hoursDifference = differenceInHours(now, date);
    if (hoursDifference < 24) {
      return <>{hoursDifference}시간 전</>;
    }

    const daysDifference = differenceInDays(now, date);
    return <>{daysDifference}일 전</>;
  };

  return (
    <ModalStyled
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalContainer>
        <PostHeader>
          <StyledAvatar src={profile_path} alt="Profile" />
          <PostHeaderText>{user_id}</PostHeaderText>
          <Circle>{"•"}</Circle>
          <PostDate>{TimeAgo(published_at)}</PostDate>
        </PostHeader>
        <ImageWrap>
          <ImageGallery img_list={post_list} />
        </ImageWrap>
        <TextStyled>
          <ContentText>
            <a>{user_id}</a>
            <ClampText
              text={content}
              id="customId"
              lines={1}
              moreText={"더 보기"}
              lessText={"접기"}
            />
          </ContentText>
        </TextStyled>
      </ModalContainer>
    </ModalStyled>
  );
}

export default PostModal;
