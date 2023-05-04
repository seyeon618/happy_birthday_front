import Image from "next/image";
import { styled } from "@mui/material/styles";

export const FormWrap = styled("div")`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FormTop = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 9.2;
  justify-content: center;

  border: 1px solid #dbdbdb;
  border-radius: 1px;
`;

export const FormBottom = styled("div")`
  width: 100%;
  height: 100%;
  flex: 0.8;
  display: flex;
  align-items: center;

  border: 1px solid #dbdbdb;
  border-top: none;
  border-radius: 1px;

  background-color: #fafafa;
`;

export const MessageWrap = styled("div")`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const BackLoginMessage = styled("div")`
  display: inline-block;

  font-family: NotoSans, serif;
  font-size: 0.8rem;
  text-align: center;
  color: black;

  cursor: pointer;
`;

export const LockIcon = styled("div")`
  background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='682.667' height='682.667' version='1.0' viewBox='0 0 512 512'%3E%3Cpath d='M242 .6c-8.4 1.1-20.1 3.9-28 6.6-19.1 6.8-33.1 15.7-48.1 30.7-18.4 18.4-28.8 37.1-35.1 63.1-2 7.9-2.1 12.1-2.5 60.1l-.4 51.7-14.7.4c-11.6.4-15.9.9-20.5 2.6-11.4 4.1-21.3 13.7-25.8 24.9l-2.4 5.8-.3 113c-.2 84.1 0 114.4.9 118.5 3.4 16 16.9 29.6 32.7 32.9 7.6 1.6 309 1.6 316.4 0 16.1-3.4 29.7-17.3 32.8-33.4.8-4.3 1-37.4.8-118.5l-.3-112.5-2.4-5.8c-4.5-11.2-14.4-20.8-25.8-24.9-4.6-1.7-8.9-2.2-20.5-2.6l-14.7-.4-.4-51.7c-.4-48-.5-52.2-2.5-60.1-6.2-25.8-17-45.1-35.1-63.1-18.5-18.5-38-29.3-63.1-35-8.3-1.9-33.1-3.3-41-2.3zM267 22c17.4 2 34.8 8.4 49.1 18.1 25 16.8 42.3 45.9 45.9 76.9.5 4.7 1 28.2 1 52.2V213H149v-43.8c0-24 .5-47.5 1-52.2 2.9-25 14.1-48.1 31.8-65.2 19.5-18.9 45.4-29.8 72.7-30.7 2.2 0 7.8.4 12.5.9zm150.2 216.5c2.3 1.7 5.4 5.1 6.8 7.5l2.5 4.5.3 109c.2 80.3 0 110.4-.8 114.4-1.6 7.1-8.3 14.2-15.2 15.9-6.7 1.7-302.9 1.7-309.6 0-6.9-1.7-13.6-8.8-15.2-15.9-.8-4-1-34.1-.8-114.4l.3-109 2.2-4c2.6-4.9 5.7-7.9 10.3-9.9 3.1-1.4 21.8-1.5 159.2-1.3l155.6.2 4.4 3z'/%3E%3C/svg%3E");
  background-size: 60px 60px;
  background-repeat: no-repeat;
  width: 60px;
  height: 60px;
  margin: 0 auto;
`;

export const Question = styled("div")`
  font-family: NotoSans, sans-serif;
  font-size: 15px;
  text-align: center;

  margin: 10px auto;
`;

export const GuideMessage = styled("div")`
  font-family: NotoSans-light, sans-serif;
  font-size: 12px;
  text-align: center;
  color: #737780;

  width: 80%;
  margin: 0px auto;
`;

export const PlayingImage = styled(Image)`
  width: 15px;
  height: 15px;
  margin-left: 3px;
`;

export const Account = styled("div")`
  font-family: NotoSans, sans-serif;
  font-size: 12px;
  text-align: center;
  color: #00376b;

  margin-top: 10px;
`;

export const SepWrap = styled("div")`
  display: inline-flex;
  width: 80%;
  margin: 0 auto;
  padding-top: 30px;
  align-items: center;
`;

export const SepText = styled("div")`
  font-family: NotoSans, sans-serif;
  font-size: 12px;
  color: #737780;

  flex-grow: 4;
  text-align: center;
`;

export const Sep = styled("div")`
  background-color: #dbdbdb;
  width: 5rem;
  height: 1px;
  flex-grow: 3;
`;

export const NewAccount = styled("div")`
  font-family: NotoSans, sans-serif;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  color: black;

  padding-top: 30px;
`;
