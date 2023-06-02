import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  Content,
  ContentWrap,
  CurImage,
  ImageGalleryWrap,
  ImageWrap,
  PostHeader,
  PostHeaderText,
  StyledAvatar,
} from "./styles";

function PostContent(): React.ReactElement {
  const [posts, setPosts] = useState([]);
  const [curImgIdxList, setCurImgIdxList] = useState([0,0,0, ...]);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const getPost = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASEURL}/posts/list`)
      .then((res) => {
        const promises_user = [];
        const promises_image = [];
        const postData = [];
        for (let i = 0; i < res.data.length; i++) {
          // private 이거나, admin이 작성한 게시물은 표시하지 않음
          if (!res.data[i].is_private && res.data[i].user_id != "admin") {
            const data = {
              id: res.data[i].user_id,
            };
            const promise_user = axios
              .post(`${process.env.NEXT_PUBLIC_BASEURL}/accounts/user`, data)
              .then((user) => {
                res.data[i].profile_path = user.data.file_path;
              })
              .catch((error) => {
                console.log(error.response);
              });

            const postImageList = [];
            const promise_image = axios
              .get(
                `${process.env.NEXT_PUBLIC_BASEURL}/posts/image/list?post_id=${res.data[i].id}`
              )
              .then((image) => {
                for (let i = 0; i < image.data.length; i++) {
                  postImageList.push(image.data[i].file_path);
                }
                res.data[i].post_list = postImageList;
              });

            promises_user.push(promise_user);
            promises_image.push(promise_image);
            postData.push(res.data[i]);
          }
        }

        Promise.all([...promises_user, ...promises_image])
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
    getPost();
  }, []);

  const prevImg = (index, imageCount) => {
    setCurImgIdxList((prevList) => {
      const newList = [...prevList];
      newList[index] = Math.max(0, newList[index] - 1);
      return newList;
    });
  };

  const nextImg = (index, imageCount) => {
    setCurImgIdxList((prevList) => {
      const newList = [...prevList];
      newList[index] = Math.min(imageCount - 1, newList[index] + 1);
      return newList;
    });
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

  return (
    <ContentWrap>
      {posts.map((postData, index) => (
        <Content key={postData.id}>
          <PostHeader>
            <StyledAvatar src={postData.profile_path} alt="Profile" />
            <PostHeaderText>{postData.user_id}</PostHeaderText>
          </PostHeader>
          <ImageGalleryWrap>
            <ImageWrap
              onTouchStart={handleTouchStart}
              onTouchEnd={(e) => {
                handleTouchEnd(
                  e,
                  curImgIdxList[index],
                  postData.post_list.length
                );
              }}
            >
              <CurImage
                src={postData.post_list[curImgIdxList[index]]}
                alt={`Image ${curImgIdxList[index]}`}
              />
            </ImageWrap>
          </ImageGalleryWrap>
        </Content>
      ))}
    </ContentWrap>
  );
}

export default PostContent;
