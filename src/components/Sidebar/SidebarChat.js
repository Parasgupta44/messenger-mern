import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.css";
import avatar from "../../static/Images/avatar.png";

const SidebarChat = () => {
  return (
    <div className="sidebarChat">
      <Avatar src={avatar} />
      <div className="sidebarChat_info">
        <h2>Random Room (Group) name</h2>
        <p>This is some shitty message</p>
      </div>
    </div>
  );
};

export default SidebarChat;
