import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JoinRoomScreen from "./screens/JoinRoomScreen/JoinRoomScreen";
import RoomScreen from "./screens/RoomScreen/RoomScreen";
import IntroScreen from "./screens/IntroScreen/IntroScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/join-room" element={<JoinRoomScreen />} />
        <Route path="/room" element={<RoomScreen />} />
        <Route path="/" element={<IntroScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
