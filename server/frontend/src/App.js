import LoginPanel from "./components/Login/Login"
import PostReview from "./components/Dealers/PostReview"
import Dealer from "./components/Dealers/Dealer"
import Dealers from './components/Dealers/Dealers';
import Register from './components/Register/Register';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/dealers" element={<Dealers/>} />
      <Route path="/dealer/:id" element={<Dealer/>} />
      <Route path="/postreview/:id" element={<PostReview/>} />
      <Route path="/Register" element={<Register/>} />

    </Routes>
  );
}
export default App;
