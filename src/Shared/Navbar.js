import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo1 from "../Assets/images/logo1.png";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';

// variables for theme change
const THEMES = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"];

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const handleThemeChange = (e) => {
    const val = e.target.getAttribute('data-set-theme');
    setTheme(val)
  }

  // const userName = user.displayName;
  const logout = () => {
    signOut(auth);
  }

  return (
    <header className='bg-base-100 py-2 sticky top-0 z-50'>
      <div className='container'>
        <div className="navbar px-0">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-circle btn-primary lg:hidden mr-1">
                <i className='bi bi-list text-2xl'></i>
              </label>
              {/* lobile content */}
              <ul tabIndex={0} className="dropdown-content mt-1 w-52 menu menu-compact p-2 bg-base-200 shadow rounded-box">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/purchase'>Purchase</Link></li>
                <li><Link to='/review'>Review</Link></li>
                <li><Link to='/blogs'>Blogs</Link></li>
                <li>{user ? <button onClick={logout} className="btn btn-error text-white">Sign Out</button> : <Link to="/login">Login</Link>}</li>
              </ul>
            </div>
            <img className='invisible lg:visible md:visible' src={logo1} alt='' />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0 font-medium">
              {/* large content */}
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/purchase'>Purchase</Link></li>
              <li><Link to='/review'>Review</Link></li>
              <li><Link to='/blogs'>Blogs</Link></li>
              <li>{user ? <button onClick={logout} className="btn btn-error text-white">Sign Out</button> : <Link to="/login">Login</Link>}</li>
            </ul>
          </div>

          {/* theme */}
          <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn">
                Change Themes
              </label>
              <ul tabIndex={0} className="dropdown-content mt-1 w-52 max-h-96 overflow-y-auto menu menu-compact p-2  bg-base-200 shadow rounded-box">
                {
                  THEMES.map((theme, i) => <li key={theme + i}><button data-set-theme={theme} onClick={handleThemeChange} className="font-medium capitalize">{i + 1 + '. ' + theme}</button></li>)
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;