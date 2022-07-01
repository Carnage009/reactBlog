import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import {  Routes, Route } from "react-router-dom"
import CreatePost from './pages/CreatePost/CreatePost';
import SinglePost from './pages/SinglePost/SinglePost';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import Auth from './pages/Auth/Auth'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/singlepost/:id" element={<SinglePost />} />
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          </Route>
      </Routes>

      {/* <Routes>
        <Route index element={<Main />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
        </Route>
      </Routes> */}
      <Footer />
    </div>

  );
}

export default App;
