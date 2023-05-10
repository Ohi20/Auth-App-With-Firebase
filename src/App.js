import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs';
import Purchase from './Pages/Categories/Purchase';
import Review from './Pages/Review';
import Home from './Pages/Home/Home';
import Login from './Pages/SignIn/Login';
import Requireauth from './Pages/SignIn/Requireauth';
import SignUp from './Pages/SignIn/SignUp';
import Navbar from './Shared/Navbar';

function App() {
  return (
    <div className='px-10 bg-zinc-100'>
      <Navbar></Navbar>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/purchase" element={<Requireauth><Purchase /></Requireauth>} />
        <Route path="/review" element={<Requireauth><Review/></Requireauth>} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
