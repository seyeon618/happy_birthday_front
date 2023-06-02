import { Avatar } from "@mui/material";
import { Grid } from "@mui/material";
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

export const StyledGrid = styled(Grid)`
  &&.container {
    padding: 25px 0;
  }

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

export const InfoNumber = styled("div")`
  font-family: NotoSans, sans-serif;
  font-weight: bold;
`;

export const InfoTitle = styled("div")`
  font-family: NotoSans, sans-serif;
`;
