import logo from "./logo.svg";
import "./App.css";
import { useEffect, useRef, useState } from "react";

import { getDatabase, ref, push, set, onChildAdded } from "firebase/database";

function App() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [chats, setChats] = useState([]);
  const showChat = useRef(chats);

  const db = getDatabase();
  const chatListRef = ref(db, "chats");

  const updateHeight = () => {
    const el = document.getElementById("chat");
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  };

  useEffect(() => {
    onChildAdded(chatListRef, (data) => {
      showChat.current = data.val();
      console.log(showChat.current);
    });
    if (showChat.current !== chats) {
      setChats(chats=>[...showChat.current,...chats]);
// console.log(chats);
      setTimeout(() => {
        updateHeight();
      }, 1000);
    }
  }, []);

  const sendChat = () => {
    const chatRef = push(chatListRef);
    set(chatRef, {
      name,
      message: msg,
    });

    setMsg("");
  };

  return (
    <div>
      {name ? null : (
        <div>
          <input
            type="text"
            placeholder="enter your name"
            onBlur={(e) => setName(e.target.value)}
          />
        </div>
      )}
      {name ? (
        <div>
          <h1>User: {name}</h1>
          <div id="chat" className="chat-container">
            {chats.map((c, i) => (
              <div
                key={i}
                className={`container ${c.name === name ? "me" : ""}`}
              >
                <p className="chatbox">
                  <strong>{c.name}:</strong>
                  <span>{c.message}</span>
                </p>
              </div>
            ))}
          </div>
          <div className="btm">
            <input
              type="text"
              onInput={(e) => setMsg(e.target.value)}
              value={msg}
              placeholder="enter your chat"
            />
            <button onClick={(e) => sendChat()}>send</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
