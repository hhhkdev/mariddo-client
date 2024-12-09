import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>

      <Route path="/room/:room_id" element={<HomePage></HomePage>}></Route>

      <Route path="/room/create" element={<HomePage></HomePage>}></Route>
      <Route path="/room/enter" element={<HomePage></HomePage>}></Route>
      <Route
        path="/room/update/:room_id"
        element={<HomePage></HomePage>}
      ></Route>

      <Route path="/chatroom/:chatroom_id"></Route>
    </Routes>
  );
}

export default App;
