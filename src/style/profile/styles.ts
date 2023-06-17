import Image from "next/image";
import { Avatar } from "@mui/material";
import { Grid } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { styled } from "@mui/material/styles";

export const ID = styled("div")`
  font-family: NotoSans, sans-serif;
  text-align: center;

  padding: 10px 0;
`;

export const StyledAvatar = styled(Avatar)`
  width: 85px;
  height: 85px;
  object-fit: cover;
`;

export const Circle = styled("div")`
  width: 95px;
  height: 95px;
  border-radius: 50%;
  border: 1px solid #dbdbdb;
  box-sizing: border-box;

  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
`;

export const ProfileContainer = styled("div")`
  width: 90%;
  height: calc(100vh - 35px);
  margin: auto;
`;

export const ProfileWrap = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 25px 0;
`;

export const AvaterWrap = styled("div")`
  display: flex;
  justify-content: center;
  margin: auto;
  flex: 1;
`;

export const InfoWrap = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  flex: 2;
  gap: 10px;
`;

export const UserInfo = styled("div")`
  display: flex;
  flex-direction: row;
`;

export const UserIdText = styled("div")``;

export const DotImage = styled(Image)`
  margin-left: auto;
  width: 30px;
  height: 30px;
`;

export const FollowInfo = styled("div")`
  display: flex;
  flex-direction: row;
`;

export const FollowGrid = styled("div")`
  flex: 1;
`;

export const StyledGrid = styled(Grid)`
  .avatar,
  .follow-info,
  .my-info {
    display: flex;
    justify-content: center;
    margin: auto;
  }

  .follow-info {
    text-align: center;
    padding-right: 10px;
  }

  .my-info {
    padding-bottom: 20px;
    font-size: 20px;
  }
`;

export const FollowInfoText = styled("div")<{ isBold?: boolean }>`
  font-family: NotoSans, sans-serif;
  text-align: center;
  font-weight: ${(props) => (props.isBold ? "bold" : "normal")};
`;

export const ContentWrap = styled("div")``;
export const Content = styled("div")``;

export const StyledImageList = styled(ImageList)`
  width: 100%;
  gap: 0px;
  aspect-ratio: 3/1;
`;

export const StyledImageListItem = styled(ImageListItem)`
  img {
    aspect-ratio: 1/1;
  }
`;
