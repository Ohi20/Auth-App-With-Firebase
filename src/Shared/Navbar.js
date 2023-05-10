import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo1 from "../Assets/images/logo1.png";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';

// variables for theme change
const THEMES = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"];

const Navbar = () => {
  const [user] = useAuthState(auth);
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
            <a className="btn btn-ghost normal-case text-2xl">BulkArt</a>
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
                <svg className="text-white" xmlns="http://www.w3.org/2000/svg" fill = '#fff' width="32" height="32" viewBox="0 0 32 32" aria-labelledby="title">
                  <title id="title">Umbrella Icon</title>
                  <path d="M27 14h5c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2v0zM27 14c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2v0 14c0 1.112-0.895 2-2 2-1.112 0-2-0.896-2-2.001v-1.494c0-0.291 0.224-0.505 0.5-0.505 0.268 0 0.5 0.226 0.5 0.505v1.505c0 0.547 0.444 0.991 1 0.991 0.552 0 1-0.451 1-0.991v-14.009c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2c0-5.415 6.671-9.825 15-9.995v-1.506c0-0.283 0.224-0.499 0.5-0.499 0.268 0 0.5 0.224 0.5 0.499v1.506c8.329 0.17 15 4.58 15 9.995h-5z" />
                </svg>
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