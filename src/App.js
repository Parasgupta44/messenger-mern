import React, { useEffect, useState } from "react";
import Pusher from "pusher-js";
import "./App.css";
import ChatWindow from "./components/Chat/chatWindow";
import Sidebar from "./components/Sidebar/Sidebar";
import axios from "./components/axios";

const App = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/messages/sync").then((res) => {
      console.log(res.data);
      setMessages(res.data);
    });
  }, []);

  // Change pusher from local
  useEffect(() => {
    const pusher = new Pusher("demo", {
      cluster: "mt1",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessage) => {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage]);
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  console.log(messages);

  return (
    <div className="App">
      <div className="appBody">
        <Sidebar />
        <ChatWindow messages={messages} />
      </div>
    </div>
  );
};

export default App;
