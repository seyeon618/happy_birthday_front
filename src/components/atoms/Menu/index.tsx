import React, { useState } from "react";
import MoreIcon from "@mui/icons-material/MoreHoriz";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import { confirmAlert } from "react-confirm-alert";

import ConfirmDeleteAlert from "../ConfirmDeleteAlert";

import { MenuWrap, StyledMenuItem } from "./styles";

import "react-confirm-alert/src/react-confirm-alert.css";

const ITEM_HEIGHT = 48;

interface Props {
  post_id: number;
  handleClickDelete: (id: number) => void;
  handleEdit: () => void;
}

function MenuComp({ post_id, handleClickDelete, handleEdit }: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = (e) => {
    setAnchorEl(null);
    if (e.target.textContent === "삭제") {
      confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <ConfirmDeleteAlert
              id={post_id}
              handleClickDelete={handleClickDelete}
              handleClose={onClose}
            />
          );
        },
      });
    }
  };

  const handleClickEdit = () => {
    setAnchorEl(null);
    handleEdit();
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
        <StyledMenuItem onClick={handleDelete} className={"emphasis"}>
          {"삭제"}
        </StyledMenuItem>
        <Divider />
        <StyledMenuItem onClick={handleClickEdit}>{"수정"}</StyledMenuItem>
      </Menu>
    </MenuWrap>
  );
}

export default MenuComp;
