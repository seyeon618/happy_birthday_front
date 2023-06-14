import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
} from "date-fns";
import { Pagination } from "swiper";

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
  const [selectPostComments, setSelectPostComments] = React.useState([]);
  const [selectPostId, setSelectPostId] = React.useState(null);

  const handleOpen = (postId, comments) => {
    setSelectPostComments(comments);
    setSelectPostId(postId);

    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleAddComment = (newComment) => {
    setSelectPostComments((prevComments) => [...prevComments, newComment]);
  };

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
      {posts
        .sort(
          (a, b) =>
            parseDateString(b.published_at).getTime() -
            parseDateString(a.published_at).getTime()
        )
        .map((postData) => (
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
                    lines={1}
                    moreText={"더 보기"}
                    lessText={"접기"}
                  />
                </ContentText>
              </TextStyled>

              {postData.comment_list?.length > 0 && (
                <TextStyled
                  className={"grayText"}
                  onClick={() => handleOpen(postData.id, postData.comment_list)}
                >
                  {`댓글 ${postData.comment_list?.length}개 모두 보기`}
                </TextStyled>
              )}
            </TextWrap>
          </Content>
        ))}

      <CommentModal
        open={open}
        handleClose={handleClose}
        id={id}
        post_id={selectPostId}
        comment_list={selectPostComments}
        timeAgo={TimeAgo}
        parseDateString={parseDateString}
        handleAddComment={handleAddComment}
      />
    </ContentWrap>
  );
}

export default PostContent;
