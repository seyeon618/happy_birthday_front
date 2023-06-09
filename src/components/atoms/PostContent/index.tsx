import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
} from "date-fns";

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
  TextStyled,
  TextWrap,
} from "./styles";

interface Props {
  id: string;
}

function PostContent({ id }: Props): React.ReactElement {
  const [posts, setPosts] = useState([]);
  const [likeList, setLikeList] = useState<Record<number, boolean>>({});
  const [curImgIdxList, setCurImgIdxList] = useState<number[]>([]);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

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
            console.log(postData);
            setCurImgIdxList(Array(postData.length).fill(0));
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

  const changeImg = (index, imageCount, changeFunc) => {
    setCurImgIdxList((prevList) => {
      const newList = [...prevList];
      const newIndex = changeFunc(newList[index], imageCount);

      if (
        (newIndex === 0 && newList[index] === 0) ||
        (newIndex === imageCount - 1 && newList[index] === imageCount - 1)
      ) {
        return prevList;
      }

      newList[index] = newIndex;
      return newList;
    });
  };

  const prevImg = (index, imageCount) => {
    changeImg(index, imageCount, (curIndex, count) =>
      Math.max(0, curIndex - 1)
    );
  };

  const nextImg = (index, imageCount) => {
    changeImg(index, imageCount, (curIndex, count) =>
      Math.min(count - 1, curIndex + 1)
    );
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchEnd = (
    event: React.TouchEvent<HTMLDivElement>,
    index,
    imageCount
  ) => {
    setTouchEndX(event.changedTouches[0].clientX);

    const diffX = touchStartX - touchEndX;
    if (curImgIdxList[index] === 0 && diffX < 0) return;
    if (curImgIdxList[index] === imageCount - 1 && diffX > 0) return;

    handleSwipe(index, imageCount);
  };

  const handleSwipe = (index, imageCount) => {
    const diffX = touchStartX - touchEndX;
    if (diffX > 0) {
      // 왼쪽으로 스와이프 - 다음 이미지
      nextImg(index, imageCount);
    } else if (diffX < 0) {
      // 오른쪽으로 스와이프 - 이전 이미지
      prevImg(index, imageCount);
    }
  };

  interface ImageIndicatorProps {
    count: number;
    activeIndex: number;
  }

  const ImageIndicator = React.forwardRef<HTMLDivElement, ImageIndicatorProps>(
    ({ count, activeIndex }, forwardedRef) => {
      const ref = useRef<HTMLDivElement>(null);
      const [scrollPos, setScrollPos] = useState(0);

      useEffect(() => {
        if (ref.current) {
          const newPos = Math.max(
            0,
            (activeIndex - 2) * 15
          ); /* 활성 동그라미 기준으로 좌측으로 2개의 동그라미까지 표시 */
          ref.current.scrollTo({ left: newPos, behavior: "smooth" });
          setScrollPos(newPos);
        }
      }, [activeIndex]);

      return (
        <IndicatorWrap ref={ref}>
          {Array.from({ length: count }).map((_, index) => {
            let min = 0;
            let max = Math.min(4, count - 1);

            if (count > 5) {
              if (activeIndex <= 2) {
                min = 0;
                max = 4;
              } else if (activeIndex >= count - 3) {
                min = count - 5;
                max = count - 1;
              } else {
                min = activeIndex - 2;
                max = activeIndex + 2;
              }
            }

            if (index >= min && index <= max) {
              return (
                <Indicator
                  key={index}
                  className={index === activeIndex ? "active" : ""}
                />
              );
            }

            return null;
          })}
        </IndicatorWrap>
      );
    }
  );
  ImageIndicator.displayName = "ImageIndicator";

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
      {posts.map((postData, index) => (
        <Content key={postData.id}>
          <PostHeader>
            <StyledAvatar src={postData.profile_path} alt="Profile" />
            <PostHeaderText>{postData.user_id}</PostHeaderText>
            <Circle>{"•"}</Circle>
            <PostDate>{TimeAgo(postData.published_at)}</PostDate>
          </PostHeader>
          <ImageGalleryWrap>
            <ImageWrap
              onTouchStart={handleTouchStart}
              onTouchEnd={(e) => {
                handleTouchEnd(e, index, postData.post_list.length);
              }}
            >
              <CurImage
                src={postData.post_list[curImgIdxList[index]]}
                alt={`Image ${curImgIdxList[index]}`}
              />
            </ImageWrap>
          </ImageGalleryWrap>

          <NotiWrap>
            <Heart
              filled={likeList[postData.id]}
              onClick={() => likePost(id, postData.id, likeList[postData.id])}
            />
            {postData.post_list.length > 1 && (
              <ImageIndicator
                count={postData.post_list.length}
                activeIndex={curImgIdxList[index]}
              />
            )}
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

            {postData.comment_list.length > 0 && (
              <TextStyled className={"grayText"} onClick={handleOpen}>
                {`댓글 ${postData.comment_list.length}개 모두 보기`}
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
