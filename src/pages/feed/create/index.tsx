import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CropIcon from "@mui/icons-material/Crop";
import axios from "axios";
import FormData from "form-data";
import { useCookies } from "react-cookie";

import {
  Container,
  CurImage,
  EmptyImageWrap,
  Header,
  HeaderText,
  IconButtonStyled,
  ImageButton,
  ImageContainer,
  ImageGalleryWrap,
  ImageWrap,
  ShareText,
  TagWrap,
  TextWrap,
  Toggle,
  UploadButton,
} from "../../../style/feed/create/styles";

function Create(): React.ReactElement {
  const [cookies, setCookie, removeCookie] = useCookies(["id"]);
  const [id, setId] = useState(null);
  const [postId, setPostId] = useState(null);
  const [curImgIdx, setCurImgIdx] = useState(-1);
  const [previewImages, setPreviewImages] = useState([]);
  const [previewImageUrl, setPreviewImageUrl] = useState([]);
  const [isFeatImage, setIsFeatImage] = useState(false);

  const router = useRouter();

  const authCheck = () => {
    const token = cookies.id;
    axios
      .get(`${process.env.NEXT_PUBLIC_BASEURL}/accounts/token`, {
        params: {
          token: token,
        },
      })
      .then((res) => {
        setId(res.data.id);
      })
      .catch(() => {
        logOut();
      });
  };

  useEffect(() => {
    authCheck();
  });

  const logOut = () => {
    removeCookie("id");
    router.push("/accounts/login");
  };

  const prevImg = () => {
    setCurImgIdx((curImgIdx) => curImgIdx - 1);
  };

  const nextImg = () => {
    setCurImgIdx((curImgIdx) => curImgIdx + 1);
  };

  const hiddenNext = curImgIdx < 0 || curImgIdx == previewImageUrl.length - 1;
  const hiddenPrev = curImgIdx < 0 || curImgIdx == 0;

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

  const handleFeatImage = () => {
    setIsFeatImage(!isFeatImage);
  };

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    const currentDateTime = `${year}${day}${month}${hours}${minutes}`;

    return currentDateTime;
  };

  const handleShare = () => {
    const textarea = document.getElementById(
      "text_area"
    ) as HTMLTextAreaElement;
    const text = textarea.value;

    const data = {
      writer: {
        id: id,
      },
      post: {
        content: text,
        published_at: getCurrentDate(),
        is_private: false,
      },
    };
    axios
      .post(`${process.env.NEXT_PUBLIC_BASEURL}/posts/create`, data)
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
            setPostId(res.data.id);
            router.push(`/home`);
          })
          .catch((error) => {
            console.log(error.response);
          });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <Container>
      <Header>
        <IconButtonStyled>
          <ArrowBackIosIcon />
        </IconButtonStyled>
        <HeaderText>{"새 게시물"}</HeaderText>
        <ShareText onClick={handleShare}>{"공유"}</ShareText>
      </Header>

      <ImageGalleryWrap>
        <ImageButton id="prev" onClick={prevImg} visible={!hiddenPrev}>
          <ArrowBackIosIcon />
        </ImageButton>
        <ImageWrap>
          <label htmlFor={"upload_file"}>
            {curImgIdx >= 0 ? (
              <ImageContainer>
                <CurImage
                  isFeat={isFeatImage}
                  src={previewImageUrl[curImgIdx]}
                  alt={`Image ${curImgIdx}`}
                />
                <Toggle onClick={handleFeatImage}>
                  <IconButtonStyled>
                    <CropIcon />
                  </IconButtonStyled>
                </Toggle>
              </ImageContainer>
            ) : (
              <EmptyImageWrap>{"이미지를 업로드 해주세요"}</EmptyImageWrap>
            )}
          </label>
        </ImageWrap>
        <ImageButton id="next" onClick={nextImg} visible={!hiddenNext}>
          <ArrowForwardIosIcon />
        </ImageButton>

        <UploadButton>
          <input
            type={"file"}
            onChange={handleAddImages}
            id={"upload_file"}
            multiple
          />
        </UploadButton>
      </ImageGalleryWrap>
      <TextWrap>
        <TagWrap placeholder="문구 입력 ... " id="text_area"></TagWrap>
      </TextWrap>
    </Container>
  );
}

export default Create;
