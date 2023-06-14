import React, { useEffect, useState } from "react";
import { Divider } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import axios from "axios";
import Sheet from "react-modal-sheet";

import {
  ClampText,
  CommentContainer,
  CommentContent,
  CommentHeader,
  CommentIDWrap,
  CommentMyAvatar,
  CommentUploadButton,
  CommentWrap,
  ContentWrap,
  Footer,
  InputWrap,
  SheetContainer,
  SheetContent,
  SheetHeader,
  StyledAvatar,
  StyledDate,
  StyledId,
  StyledInput,
} from "./styles";

interface Props {
  open: boolean;
  handleClose: () => void;
  id: string;
  post_id: number;
  comment_list: any;
  timeAgo: (dateString: string) => JSX.Element;
  parseDateString: (dateString: string) => Date;
}

function CommentModal({
  open,
  handleClose,
  id,
  post_id,
  comment_list,
  timeAgo,
  parseDateString,
}: Props): React.ReactElement {
  const [profile, setProfile] = useState([]);
  const [myProfile, setMyProfile] = useState("");

  const [comment, setComment] = useState("");

  useEffect(() => {
    const getProfile = async () => {
      const commentPromises = comment_list.map((commentData) =>
        axios
          .get(
            `${process.env.NEXT_PUBLIC_BASEURL}/accounts/profile?user_id=${commentData.user_id}`
          )
          .then((res) => res.data)
      );

      const profileData = await Promise.all(commentPromises);
      setProfile(profileData);
    };

    const getMyProfile = async () => {
      const myProfilePromise = axios
        .get(
          `${process.env.NEXT_PUBLIC_BASEURL}/accounts/profile?user_id=${id}`
        )
        .then((res) => res.data);

      const myProfileData = await Promise.resolve(myProfilePromise);
      setMyProfile(myProfileData);
    };

    if (post_id && comment_list.length > 0) {
      getProfile();
    }

    if (id) {
      getMyProfile();
    }
  }, [post_id, comment_list, id]);

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    const date = `${year}${month}${day}${hours}${minutes}`;
    return date;
  };

  const handleInputCange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentUpload = () => {
    const data = {
      content: comment,
      date: getCurrentDate(),
      user_id: id,
    };
    axios.post(
      `${process.env.NEXT_PUBLIC_BASEURL}/comments/add?post_id=${post_id}`,
      data
    );
  };

  return (
    <Sheet isOpen={open} onClose={handleClose}>
      <SheetContainer>
        <SheetHeader />
        <CommentHeader>{"댓글"}</CommentHeader>
        <SheetContent>
          <CommentContent>
            {comment_list
              .sort(
                (a, b) =>
                  parseDateString(b.date).getTime() -
                  parseDateString(a.date).getTime()
              )
              .map((commentData, index) => (
                <CommentWrap key={commentData.id}>
                  <StyledAvatar src={profile[index]} alt="Profile" />
                  <CommentContainer>
                    <CommentIDWrap>
                      <StyledId>{commentData.user_id}</StyledId>
                      <StyledDate>{timeAgo(commentData.date)}</StyledDate>
                    </CommentIDWrap>
                    <ContentWrap>
                      <ClampText
                        text={commentData.content}
                        id="customId"
                        lines={1}
                        moreText={"더 보기"}
                        lessText={"접기"}
                      />
                    </ContentWrap>
                  </CommentContainer>
                </CommentWrap>
              ))}
          </CommentContent>
        </SheetContent>
        <Footer>
          <Divider light />
          <InputWrap>
            <CommentMyAvatar src={myProfile} alt="MyAvatar" />
            <StyledInput
              placeholder="댓글 달기..."
              disableUnderline={true}
              onChange={handleInputCange}
              endAdornment={
                <InputAdornment position="end">
                  <CommentUploadButton
                    variant="text"
                    onClick={handleCommentUpload}
                  >
                    게시
                  </CommentUploadButton>
                </InputAdornment>
              }
            />
          </InputWrap>
        </Footer>
      </SheetContainer>

      <Sheet.Backdrop />
    </Sheet>
  );
}

export default CommentModal;
