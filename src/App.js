import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Header2 from './components/Header2/Header2';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Posts from './components/Posts/Posts';
import PostDetail from './components/PostDetail/PostDetail';
function App() {
  return (
    <div className="App">
      <Header2></Header2>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/friends" element={<Friends />}></Route>
        <Route path="/friend/:friendId" element={<FriendDetail />}></Route>
        <Route path="/posts" element={<Posts />}>
          <Route path=":postId" element={<PostDetail />}></Route>
        </Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
