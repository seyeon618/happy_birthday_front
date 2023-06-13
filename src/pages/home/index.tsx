import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Divider } from "@mui/material";
import axios from "axios";

import PostContent from "../../components/atoms/PostContent";
import Auth from "../../components/common/Auth";
import {
  Alarm,
  Circle,
  Container,
  Footer,
  FooterWrap,
  Header,
  HomeIcon,
  IDText,
  Logo,
  PostAddIcon,
  ProfileIcon,
  ProfileList,
  ReelsIcon,
  SearchIcon,
  StyledAvatar,
  StyledGrid,
} from "../../style/home/styles";

function Home(): React.ReactElement {
  const [id, setId] = useState(null);
  const [user, setUser] = useState([]);
  const router = useRouter();

  const getUsers = () => {
    axios
      .post(`${process.env.NEXT_PUBLIC_BASEURL}/accounts/user/list`)
      .then((res) => {
        const userData = res.data;

        // 본인 id를 가장 첫번째에 위치 시키도록 함
        const sortedData = [...userData].sort((a, b) => {
          if (a.id === id) return -1;
          else if (b.id === id) return 1;
          else return 0;
        });

        setUser(sortedData);
      })
      .catch((error) => {
        // 오류 처리
        console.error(error);
      });
  };

  useEffect(() => {
    getUsers();
  }, [id]);

  const onClickIcon = (path: string) => {
    router.push(path);
  };

  return (
    <Container>
      <Auth setId={setId} />
      <Header>
        <Logo>{"Happy Birthday"}</Logo>
        <Alarm />
      </Header>
      <Divider light />
      <ProfileList>
        {user.map((userData) => (
          <StyledGrid key={userData.id} container className="container">
            <StyledGrid item xs={12} className="avatar">
              <Circle>
                <StyledAvatar src={userData.file_path} alt="Profile" />
              </Circle>
              <IDText>{userData.id}</IDText>
            </StyledGrid>
          </StyledGrid>
        ))}
      </ProfileList>
      <Divider light />
      <PostContent id={id} />
      <Divider light />
      <FooterWrap>
        <Footer>
          <HomeIcon onClick={() => onClickIcon("/home")} />
          <SearchIcon onClick={() => onClickIcon("/home")} />
          <PostAddIcon onClick={() => onClickIcon("/feed/create")} />
          <ReelsIcon onClick={() => onClickIcon("/home")} />
          <ProfileIcon onClick={() => onClickIcon("/profile")} />
        </Footer>
      </FooterWrap>
    </Container>
  );
}

export default Home;
