import logo from "./logo.svg";
import "./App.css";
import Auth from "./components/Auth";
import Cookies from "universal-cookie";
import { useRef, useState } from "react";
import Chat from "./components/Chat";

const cookies = new Cookies()

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"))
  const [room, setRoom] = useState(null)
  const roomInputRef = useRef("")
  if(!isAuth){
  return (
    <div>
      <Auth setIsAuth={setIsAuth}/>
    </div>
  );
  }

  return(
    <div>

      {room?<div><Chat room={room}/></div>:<div className="room">
        <label>Enter Room Nmae:</label>
        <input ref={roomInputRef}/>
        <button onClick={()=>setRoom(roomInputRef.current.value)}>Enter Chat</button>
        </div>}
    </div>
  )
}

export default App;
