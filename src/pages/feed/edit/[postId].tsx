import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import axios from "axios";
import FormData from "form-data";

import ImageGallery from "../../../components/atoms/ImageGallery";
import Auth from "../../../components/common/Auth";
import {
  Container,
  ContentWrap,
  EmptyImageWrap,
  Header,
  HeaderText,
  HintMessage,
  IconButtonStyled,
  ImageWrap,
  PostHeader,
  PostHeaderText,
  ShareText,
  StyledAvatar,
  TextArea,
  TextWrap,
  Toggle,
  UploadButton,
} from "../../../style/feed/edit/styles";

function Feed(): React.ReactElement {
  const router = useRouter();

  const [id, setId] = useState(null);

  const { postId } = router.query;
  let post_id: number | undefined;
  if (typeof postId === "string") {
    post_id = parseInt(postId);
  }

  const [post, setPost] = useState([]);
  const [profile, setProfile] = useState("");
  const [curImgIdx, setCurImgIdx] = useState(-1);
  const [previewImages, setPreviewImages] = useState([]);
  const [previewImageUrl, setPreviewImageUrl] = useState([]);
  // const [isFeatImage, setIsFeatImage] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const getProfile = async () => {
      const myProfilePromise = axios
        .get(
          `${process.env.NEXT_PUBLIC_BASEURL}/accounts/profile?user_id=${id}`
        )
        .then((res) => res.data);

      const myProfileData = await Promise.resolve(myProfilePromise);
      setProfile(myProfileData);
    };

    const getPost = async () => {
      const postPromise = axios
        .post(`${process.env.NEXT_PUBLIC_BASEURL}/posts/get?post_id=${post_id}`)
        .then((res) => res.data);

      const postData = await Promise.resolve(postPromise);
      setPost(postData);
      setText(postData.content);
    };

    const getPreviewImg = async () => {
      const imgPromise = axios
        .get(
          `${process.env.NEXT_PUBLIC_BASEURL}/posts/image/list?post_id=${post_id}`
        )
        .then((res) => res.data);

      const imgData = await Promise.resolve(imgPromise);

      imgData.map((userData) => previewImageUrl.push(userData.file_path));

      if (previewImageUrl.length > 0) {
        setCurImgIdx(0);
      } else {
        setCurImgIdx(-1);
      }
    };

    if (id) {
      getProfile();
    }

    if (id && post_id) {
      getPost();
      getPreviewImg();
    }
  }, [id]);

  const handleAddImages = (event) => {
    const fileList = event.target.files;
    const imageList = [];

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      const imageURL = URL.createObjectURL(file);
      imageList.push(imageURL);
    }

    if (imageList.length > 0) {
      setCurImgIdx(0);
    } else {
      setCurImgIdx(-1);
    }

    setPreviewImageUrl(imageList);
    setPreviewImages(fileList);
  };

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    return `${year}${month}${day}${hours}${minutes}`;
  };

  const handleShare = () => {
    const data = {
      post_get_info: {
        id: post_id,
      },
      updated_post: {
        content: text,
        published_at: getCurrentDate(),
        is_private: false,
      },
    };
    axios
      .put(`${process.env.NEXT_PUBLIC_BASEURL}/posts/update`, data)
      .then((res) => {
        const formData = new FormData();
        for (let i = 0; i < previewImages.length; i++) {
          formData.append(`files`, previewImages[i]);
        }

        axios
          .post(
            `${process.env.NEXT_PUBLIC_BASEURL}/posts/upload?user_id=${id}&post_id=${res.data.id}`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          )
          .then((res) => {
            handleGoHome();
          })
          .catch((error) => {
            console.log(error.response);
          });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const handleGoHome = () => {
    router.push(`/home`);
  };

  return (
    <Container>
      <Auth setId={setId} />
      <Header>
        <IconButtonStyled onClick={handleGoHome}>
          <ArrowBackIosIcon />
        </IconButtonStyled>
        <HeaderText>{"정보 수정"}</HeaderText>
        <ShareText onClick={handleShare}>{"완료"}</ShareText>
      </Header>
      <ImageWrap>
        <label htmlFor={"upload_file"}>
          {curImgIdx >= 0 ? (
            <ImageGallery img_list={previewImageUrl} />
          ) : (
            <EmptyImageWrap>{"이미지를 업로드 해주세요"}</EmptyImageWrap>
          )}
        </label>
      </ImageWrap>
      <UploadButton>
        <input
          type={"file"}
          onChange={handleAddImages}
          id={"upload_file"}
          multiple
        />
      </UploadButton>

      <ContentWrap>
        {/*우선 순위 보류*/}
        {/*<Toggle onClick={handleFeatImage}>*/}
        {/*  <IconButtonStyled>*/}
        {/*    <CropIcon />*/}
        {/*  </IconButtonStyled>*/}
        {/*</Toggle>*/}
        <PostHeader>
          <StyledAvatar src={profile} alt="Profile" />
          <PostHeaderText>{id}</PostHeaderText>
        </PostHeader>
        <TextWrap>
          <TextArea
            placeholder="문구 입력 ... "
            value={text}
            onChange={handleChangeText}
          />
        </TextWrap>
        {text.length > 0 && <HintMessage>{`${text.length}글자`}</HintMessage>}
      </ContentWrap>
    </Container>
  );
}

export default Feed;
