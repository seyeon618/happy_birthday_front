import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
} from "date-fns";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import CommentModal from "../CommentModal";

import {
  Circle,
  ClampText,
  Content,
  ContentText,
  ContentWrap,
  CurImage,
  Heart,
  ImageGalleryWrap,
  ImageWrap,
  Indicator,
  IndicatorWrap,
  NotiWrap,
  PostDate,
  PostHeader,
  PostHeaderText,
  StyledAvatar,
  SwiperSlideStyled,
  SwiperStyled,
  TextStyled,
  TextWrap,
} from "./styles";

import "swiper/css";
import "swiper/css/pagination";

interface Props {
  id: string;
}

function PostContent({ id }: Props): React.ReactElement {
  const [posts, setPosts] = useState([]);
  const [likeList, setLikeList] = useState<Record<number, boolean>>({});

  // modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getPost = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASEURL}/posts/list`)
      .then((res) => {
        const promises = [];
        const postData = [];
        for (let i = 0; i < res.data.length; i++) {
          // private 이거나, admin이 작성한 게시물은 표시하지 않음
          if (!res.data[i].is_private && res.data[i].user_id != "admin") {
            const user_data = {
              id: res.data[i].user_id,
            };

            const like_data = {
              post_id: res.data[i].id,
            };

            promises.push(
              Promise.all([
                axios
                  .post(
                    `${process.env.NEXT_PUBLIC_BASEURL}/accounts/user`,
                    user_data
                  )
                  .then((user) => {
                    res.data[i].profile_path = user.data.file_path;
                  }),
                axios
                  .get(
                    `${process.env.NEXT_PUBLIC_BASEURL}/posts/image/list?post_id=${res.data[i].id}`
                  )
                  .then((image) => {
                    const postImageList = [];
                    for (let i = 0; i < image.data.length; i++) {
                      postImageList.push(image.data[i].file_path);
                    }
                    res.data[i].post_list = postImageList;
                  }),
                axios
                  .post(
                    `${process.env.NEXT_PUBLIC_BASEURL}/posts/liked/count`,
                    like_data
                  )
                  .then((like) => {
                    res.data[i].liked_count = like.data;
                  }),
                axios
                  .get(
                    `${process.env.NEXT_PUBLIC_BASEURL}/posts/liked?user_id=${id}&post_id=${res.data[i].id}`
                  )
                  .then((liked) => {
                    likeList[res.data[i].id] = liked.data.is_liked;
                  }),
                axios
                  .get(
                    `${process.env.NEXT_PUBLIC_BASEURL}/comments/post/list?post_id=${res.data[i].id}`
                  )
                  .then((comment) => {
                    const commentList = [];
                    for (let i = 0; i < comment.data.length; i++) {
                      commentList.push(comment.data[i]);
                    }
                    res.data[i].comment_list = commentList;
                  }),
              ]).catch((error) => console.log(error))
            );

            postData.push(res.data[i]);
          }
        }

        Promise.all(promises)
          .then(() => {
            setPosts(postData);
          })
          .catch((error) => {
            console.log(error.response);
          });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  useEffect(() => {
    if (id) {
      getPost();
    }
  }, [id]);

  const likePost = (user_id: string, post_id: number, liked: boolean) => {
    const data = {
      user_id: user_id,
      post_id: post_id,
      is_liked: !liked,
    };

    axios
      .post(`${process.env.NEXT_PUBLIC_BASEURL}/posts/liked`, data)
      .then((res) => {
        setLikeList((prevLikeList) => {
          return {
            ...prevLikeList,
            [post_id]: !liked,
          };
        });
      });

    setPosts((prevPosts) => {
      return prevPosts.map((post) => {
        if (post.id === post_id) {
          return {
            ...post,
            liked_count: !liked ? post.liked_count + 1 : post.liked_count - 1,
          };
        } else {
          return post;
        }
      });
    });
  };

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
    <ContentWrap>
      {posts.map((postData) => (
        <Content key={postData.id}>
          <PostHeader>
            <StyledAvatar src={postData.profile_path} alt="Profile" />
            <PostHeaderText>{postData.user_id}</PostHeaderText>
            <Circle>{"•"}</Circle>
            <PostDate>{TimeAgo(postData.published_at)}</PostDate>
          </PostHeader>
          <ImageGalleryWrap>
            <SwiperStyled
              pagination={{
                dynamicBullets: true,
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {postData.post_list?.map((img, index) => (
                <SwiperSlideStyled key={index}>
                  <CurImage src={img} alt={`Image ${img}`} />
                </SwiperSlideStyled>
              ))}
            </SwiperStyled>
            {/*<Swiper*/}
            {/*  pagination={{*/}
            {/*    dynamicBullets: true,*/}
            {/*  }}*/}
            {/*  modules={[Pagination]}*/}
            {/*  className="mySwiper"*/}
            {/*>*/}
            {/*  <SwiperSlide>Slide 1</SwiperSlide>*/}
            {/*  <SwiperSlide>Slide 2</SwiperSlide>*/}
            {/*  <SwiperSlide>Slide 3</SwiperSlide>*/}
            {/*  <SwiperSlide>Slide 4</SwiperSlide>*/}
            {/*  <SwiperSlide>Slide 5</SwiperSlide>*/}
            {/*  <SwiperSlide>Slide 6</SwiperSlide>*/}
            {/*  <SwiperSlide>Slide 7</SwiperSlide>*/}
            {/*  <SwiperSlide>Slide 8</SwiperSlide>*/}
            {/*  <SwiperSlide>Slide 9</SwiperSlide>*/}
            {/*</Swiper>*/}
          </ImageGalleryWrap>

          <NotiWrap>
            <Heart
              filled={likeList[postData.id]}
              onClick={() => likePost(id, postData.id, likeList[postData.id])}
            />
          </NotiWrap>
          <TextWrap>
            {postData.liked_count != 0 && (
              <TextStyled>좋아요 {postData.liked_count}개</TextStyled>
            )}
            <TextStyled>
              <ContentText>
                <a>{postData.user_id}</a>
                <ClampText
                  text={postData.content}
                  id="customId"
                  lines={2}
                  moreText={"더 보기"}
                  lessText={"접기"}
                />
              </ContentText>
            </TextStyled>

            {postData.comment_list?.length > 0 && (
              <TextStyled className={"grayText"} onClick={handleOpen}>
                {`댓글 ${postData.comment_list?.length}개 모두 보기`}
              </TextStyled>
            )}
            <CommentModal open={open} handleClose={handleClose} />
          </TextWrap>
        </Content>
      ))}
    </ContentWrap>
  );
}

export default PostContent;
