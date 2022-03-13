import "./App.css";
import React from "react";
import { ChatEngine } from "react-chat-engine";

function App() {
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        // userName="sujon"
        userName="john"
        userSecret="qwerty"
        // userSecret="sujon"
        projectID="3342a8fa-120f-46d0-953f-942e20ffff81"
      />
    </div>
  );
}

export default App;
