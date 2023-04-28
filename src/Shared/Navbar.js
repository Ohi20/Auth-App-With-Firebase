import React from 'react';
import { Link } from 'react-router-dom';
import van from "../Assets/images/van.jpg";
import logo1 from "../Assets/images/logo1.png";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {

  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  }

  let secondCounter = 60;
  let minuteCounter = 0;
  let hourCounter = 0;

setInterval(() => {
		if(secondCounter>0){
			secondCounter--
		}
    if(secondCounter===0){
      minuteCounter = minuteCounter -1; 
    }
  document.getElementById('counterElement').style.setProperty('--value', secondCounter)
}, 1000);


    return (
        <div class="navbar mt-6 bg-zinc-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" className="menu menu-compact text-white dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box font-bold w-52">
              <li><Link to="/">Home</Link></li>
              <li tabindex="0">
                <Link className="justify-between" to="/categories">
                  Categories
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                </Link>
                <ul class="p-2 bg-white">
                  <li><Link to="/purchase">Purchase</Link></li>
                  <li><Link to="/review">Review</Link></li>
                </ul>
              </li>
              <li tabindex="0">
                <Link className="justify-between" to="/blogs">
                  Docs
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                </Link>
                <ul class="p-2 bg-white">
                  <li><Link to="/blogs">Blogs</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                </ul>
              </li>
              <li>{user ?  <button onClick={logout} className="btn btn-error text-white">Sign Out</button> : <Link to="/login">Login</Link>}</li>
            </ul>
          </div>
          <div className="normal-case flex">
            <div>
            <img className='w-4/5' src={logo1} alt='logo'/>
            
            </div>
          </div>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal font-bold text-xl p-0">
          <li><Link to="/">Home</Link></li>
            <li tabindex="0">
              <a>
                Categories
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul class="p-2 bg-white">
                <li><Link to="/purchase">Purchase</Link></li>
                <li><Link to="/review">Review</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
              </ul>
            </li>
            <li tabindex="0">
              <a>
                Docs
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul class="p-2 bg-white">
                <li><Link to="/blogs">Blogs</Link></li>
                <li><Link to="/about">About Us</Link></li>
              </ul>
            </li>
            <li>{user ?  <button onClick={logout} className="btn btn-error text-white">Sign Out</button> : <Link to="/login">Login</Link>}</li>
          </ul>
        </div>
        
        
  <div className='navbar-end'>
    <h2>Offer Ends In :</h2>
  <span  class="countdown font-mono text-2xl">
  <span style={{'--value':'10'}}></span>h
  <span style={{'--value':'24'}}></span>m
  <span id='counterElement' style={{'--value':'60'}}></span>s
</span>
  </div>
</div>
        
      
    );
};

export default Navbar;