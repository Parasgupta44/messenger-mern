import React, { useState } from "react";
import "./chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import {
  SearchOutlined,
  AttachFile,
  MoreVert,
  InsertEmoticon,
} from "@material-ui/icons";
import MicIcon from "@material-ui/icons/Mic";
import axios from "../../components/axios";

const ChatWindow = ({ messages }) => {
  const [inp, setInput] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault();
    await axios.post("/messages/new", {
      message: inp,
      name: "DEMO AUTH",
      timestamp: new Date().getTime(),
      receieved: false,
    });
    setInput("");
  };
  return (
    <div className="chat">
      <div className="chatHeader">
        <Avatar />
        <div className="chatHeaderInfo">
          <h3>Room name</h3>
          <p>Last seen at ...</p>
        </div>
        <div className="chatHeaderRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chatBody">
        {messages.map((message) => (
          <p className={`chatMessage ${message.receieved && "chatReceive"}`}>
            <span className="chatName">{message.name}</span>
            {message.message}
            <span className="chatTimestamp">{message.timestamp}</span>
          </p>
        ))}
      </div>
      <div className="chatFooter">
        <InsertEmoticon />
        <form>
          <input
            value={inp}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
};

export default ChatWindow;
