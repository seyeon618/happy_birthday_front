import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Divider from "@mui/material/Divider";
import axios from "axios";

import Dot from "../../../public/Image/dots.png";
import Auth from "../../components/common/Auth";
import { WholeWrap } from "../../components/common/Card/styles";
import FooterNavi from "../../components/common/FooterNavigator";
import {
  AvaterWrap,
  Circle,
  Content,
  ContentWrap,
  DotImage,
  FollowGrid,
  FollowInfo,
  FollowInfoText,
  ID,
  InfoWrap,
  ProfileContainer,
  ProfileWrap,
  StyledAvatar,
  StyledGrid,
  StyledImageList,
  StyledImageListItem,
  UserIdText,
  UserInfo,
} from "../../style/profile/styles";

function Profile(): React.ReactElement {
  const router = useRouter();
  const { userId } = router.query; // 보고있는 user
  const [id, setId] = useState(null); // 접속중인 user
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState("");
  const [posts, setPost] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const data = {
        id: userId,
      };
      axios
        .post(`${process.env.NEXT_PUBLIC_BASEURL}/accounts/user`, data)
        .then((res) => {
          setUser(res.data);
        })
        .catch((error) => console.log(error));
    };

    const getProfile = async () => {
      axios
        .get(
          `${process.env.NEXT_PUBLIC_BASEURL}/accounts/profile?user_id=${userId}`
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((error) => console.log(error));
    };

    const getPost = () => {
      const postData = [];

      axios
        .get(
          `${process.env.NEXT_PUBLIC_BASEURL}/posts/user/list?user_id=${userId}`
        )
        .then((res) => {
          const promises = [];
          for (let i = 0; i < res.data.length; i++) {
            promises.push(
              Promise.all([
                axios
                  .get(
                    `${process.env.NEXT_PUBLIC_BASEURL}/posts/image/list?post_id=${res.data[i].id}`
                  )
                  .then((image) => {
                    const postImageList = [];
                    for (let i = 0; i < image.data.length; i++) {
                      postImageList.push(image.data[i].file_path);
                    }
                    res.data[i].img_list = postImageList;
                  }),
              ])
            );
            postData.push(res.data[i]);
          }

          Promise.all(promises)
            .then(() => {
              setPost(postData);
            })
            .catch((error) => {
              console.log(error.response);
            });
        });
    };

    if (userId) {
      getUser();
      getProfile();
      getPost();
    }
  }, [id]);

  return (
    <div>
      <Auth setId={setId} />
      <WholeWrap>
        <ID>{id}</ID>
        <Divider />
        <ProfileContainer>
          <ProfileWrap>
            <AvaterWrap>
              <Circle>
                <StyledAvatar src={profile} alt="Profile" />
              </Circle>
            </AvaterWrap>
            <InfoWrap>
              <UserInfo>
                <UserIdText>{userId}</UserIdText>
                <DotImage src={Dot} alt="dots" />
              </UserInfo>
              <FollowInfo>
                <FollowGrid>
                  <FollowInfoText>{posts.length}</FollowInfoText>
                  <FollowInfoText isBold={true}>{"게시물"}</FollowInfoText>
                </FollowGrid>
                <FollowGrid>
                  <FollowInfoText>
                    {userId === "test1" ? "100" : "❤"}
                  </FollowInfoText>
                  <FollowInfoText isBold={true}>{"팔로워"}</FollowInfoText>
                </FollowGrid>
                <FollowGrid>
                  <FollowInfoText>{"❤"}</FollowInfoText>
                  <FollowInfoText isBold={true}>{"팔로우"}</FollowInfoText>
                </FollowGrid>
              </FollowInfo>
            </InfoWrap>
          </ProfileWrap>

          <ContentWrap>
            <StyledImageList cols={3}>
              {posts.map((postData) => (
                <StyledImageListItem key={postData.id}>
                  <img
                    src={`${postData.img_list[0]}?fit=crop&auto=format`}
                    srcSet={`${postData.img_list[0]}?fit=crop&auto=format&dpr=2 2x`}
                    alt={"post"}
                    loading="lazy"
                  />
                </StyledImageListItem>
              ))}
            </StyledImageList>
          </ContentWrap>
        </ProfileContainer>
      </WholeWrap>
      <FooterNavi />
    </div>
  );
}

export default Profile;
