import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import {  Routes, Route } from "react-router-dom"
import Logo from "./assets/images/logo.jpg"
import CreatePost from './pages/CreatePost/CreatePost';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/createpost" element={<CreatePost />} />
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
