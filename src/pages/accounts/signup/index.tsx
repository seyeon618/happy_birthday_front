import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import FormData from "form-data";
import qs from "qs";
import { useCookies } from "react-cookie";

import AccountButton from "../../../components/atoms/AccountButton";
import AlertDialog from "../../../components/atoms/AlertDialog";
import PasswordInputBox from "../../../components/atoms/PasswordInputBox";
import SignInputBox from "../../../components/atoms/SignInputBox";
import SignMessage from "../../../components/atoms/SignMessage";
import {
  Article,
  CardWrap,
  WholeWrap,
} from "../../../components/common/Card/styles";
import Footer from "../../../components/common/Footer";
import {
  Input,
  InputFormBottom,
  InputFormTop,
  InputFormWrap,
  Title,
} from "../../../style/accounts/login/styles";
import {
  AddMessage,
  AvatarStyled,
  AvatarWrap,
  GuideMessage,
  MessageWrap,
  SubMessage,
  UploadBtn,
} from "../../../style/accounts/singup/styles";

enum pageState {
  signup = 0,
  add_profile,
}

function SignUp(): React.ReactElement {
  const [page, setPage] = useState(pageState.signup);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [pw, setPw] = useState("");
  const [existName, setExistName] = useState(false);
  const [existId, setExistId] = useState(false);
  const [existPw, setExistPw] = useState(false);

  const [previewSrc, setPreviewSrc] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [cookies, setCookie] = useCookies(["id"]);

  const router = useRouter();

  const onClickNext = (e) => {
    e.preventDefault();

    const data = {
      name: name,
      id: id,
      pw: pw,
    };
    axios
      .post(`${process.env.NEXT_PUBLIC_BASEURL}/accounts/signup`, data)
      .then((res) => {
        setPage(pageState.add_profile);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const onClickSignUp = (e) => {
    e.preventDefault();

    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      axios
        .post(
          `${process.env.NEXT_PUBLIC_BASEURL}/accounts/profile/upload?user_id=${id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          const loginData = {
            username: id,
            password: pw,
          };

          axios
            .post(
              `${process.env.NEXT_PUBLIC_BASEURL}/accounts/login`,
              qs.stringify(loginData)
            )
            .then((res) => {
              setCookie("id", res.data.access_token);
              router.push("/home");
            })
            .catch((error) => {
              console.log(error.responsee);
            });
          router.push(`/home`);
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
  };

  const onClickLogin = (e) => {
    e.preventDefault();
    router.push("/accounts/login");
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (typeof result === "string") {
        setPreviewSrc(result);
      }
    };
    reader.readAsDataURL(file);
  };

  const pages = () => {
    switch (page) {
      case pageState.signup:
      default:
        return (
          <>
            <Title>Happy Birthday</Title>
            <GuideMessage>
              영서의 생일을 축하하기 위해 만든 서비스 입니다.
            </GuideMessage>
            <GuideMessage>가입 후 축하글을 남겨주세요:)</GuideMessage>
            <form>
              <Input>
                <SignInputBox
                  label="실명"
                  setText={setName}
                  setState={setExistName}
                />
                <SignInputBox
                  label="아이디"
                  setText={setId}
                  setState={setExistId}
                />
                <PasswordInputBox
                  label="비밀번호"
                  text={pw}
                  setText={setPw}
                  setState={setExistPw}
                />
              </Input>
            </form>
            <MessageWrap>
              <SubMessage>
                실명이 부담스럽다면, 익명으로 하셔도 상관없습니다. 그치만 누가
                축하했는지 알리기 위함이니 가급적 실명으로 해주세요!!
                <AddMessage>
                  <AlertDialog
                    title="Happy Birthday"
                    content="작성 예정"
                    buttonText="더 알아보기"
                    closeButtonText="닫기"
                  />
                </AddMessage>
              </SubMessage>
            </MessageWrap>
            <AccountButton
              label="가입"
              isConfirmed={existId && existPw && existName}
              onClick={onClickNext}
            />
          </>
        );
      case pageState.add_profile:
        return (
          <>
            <Title>Happy Birthday</Title>
            <GuideMessage>프로필 사진을 등록해주세요</GuideMessage>
            <label htmlFor={"upload_file"}>
              <AvatarWrap>
                {previewSrc ? (
                  <AvatarStyled alt="profile" src={previewSrc} />
                ) : (
                  <AvatarStyled src="/broken-image.jpg" />
                )}
              </AvatarWrap>
            </label>
            <UploadBtn>
              <input
                type={"file"}
                onChange={handleFileSelect}
                id={"upload_file"}
              />
            </UploadBtn>
            <MessageWrap>
              <SubMessage>
                게시물 및 댓글에 표시할 본인의 프로필을 업로드 해주세요. 업로드
                하지 않을 경우 가입이 진행되지 않습니다! 꼭 본인 사진이 아니어도
                괜찮으니 업로드 해주세요:)
              </SubMessage>
            </MessageWrap>
            <AccountButton
              label="가입"
              isConfirmed={true}
              onClick={onClickSignUp}
            />
          </>
        );
    }
  };

  return (
    <div>
      <WholeWrap>
        <CardWrap>
          <Article>
            <InputFormWrap>
              <InputFormTop>{pages()}</InputFormTop>
              <InputFormBottom>
                <SignMessage
                  question="계정이 있으신가요?"
                  answer="로그인"
                  onClick={onClickLogin}
                />
              </InputFormBottom>
            </InputFormWrap>
          </Article>
        </CardWrap>
      </WholeWrap>
      <Footer />
    </div>
  );
}

export default SignUp;
