import Image from "next/image";
import { styled } from "@mui/material/styles";

export const ReelsContainer = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const GoSimImg = styled(Image)`
  width: 100%;
  height: 100%;
  flex: 1;
`;

export const Video = styled("video")`
  width: 100%;
  height: 300px;
`;
