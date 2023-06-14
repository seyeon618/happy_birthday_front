import React, { useState } from "react";
import MoreIcon from "@mui/icons-material/MoreHoriz";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import { confirmAlert } from "react-confirm-alert";

import {
  AlterContainer,
  Button,
  GuideMessage,
  MenuWrap,
  MessageWrap,
  StyledMenuItem,
} from "./styles";

import "react-confirm-alert/src/react-confirm-alert.css";

const ITEM_HEIGHT = 48;

interface Props {
  post_id: number;
  handleClickDelete: (postId: number) => void;
}

function MenuComp({ post_id, handleClickDelete }: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    if (e.target.textContent === "삭제") {
      confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <AlterContainer>
              <MessageWrap>
                <GuideMessage className={"emphasis"}>
                  게시물을 삭제하시겠어요?
                </GuideMessage>
                <GuideMessage>영구 삭제되니 신중히 선택해주세요!</GuideMessage>
              </MessageWrap>
              <Button
                className={"emphasis"}
                onClick={() => {
                  handleClickDelete(post_id);
                  onClose();
                }}
              >
                삭제
              </Button>
              <Button onClick={onClose}>취소</Button>
            </AlterContainer>
          );
        },
      });
    }
  };

  return (
    <MenuWrap>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        <StyledMenuItem onClick={handleClose} className={"emphasis"}>
          {"삭제"}
        </StyledMenuItem>
        <Divider />
        <StyledMenuItem onClick={handleClose}>{"수정"}</StyledMenuItem>
      </Menu>
    </MenuWrap>
  );
}

export default MenuComp;
