import React from 'react';
import { Link } from 'react-router-dom';

const Drawer = () => {

  const mystyle = {
    backgroundImage: `url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8dfe2f40-686e-4faa-b166-1a2277e1bd3f/db44uqu-b9d8ee8d-1926-4696-bf9c-6ee7d6950e3d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhkZmUyZjQwLTY4NmUtNGZhYS1iMTY2LTFhMjI3N2UxYmQzZlwvZGI0NHVxdS1iOWQ4ZWU4ZC0xOTI2LTQ2OTYtYmY5Yy02ZWU3ZDY5NTBlM2QuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1NdaffhHew6ipGkT0WjRPuwWTXYEMc2EPFSQdEjgGQg")`,
    backgroundSize: 'cover',
    backgroundRepeat  : 'no-repeat',
    backgroundPosition: 'center'
  };


  // backgroundImage: `url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8dfe2f40-686e-4faa-b166-1a2277e1bd3f/db44uqu-b9d8ee8d-1926-4696-bf9c-6ee7d6950e3d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhkZmUyZjQwLTY4NmUtNGZhYS1iMTY2LTFhMjI3N2UxYmQzZlwvZGI0NHVxdS1iOWQ4ZWU4ZC0xOTI2LTQ2OTYtYmY5Yy02ZWU3ZDY5NTBlM2QuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1NdaffhHew6ipGkT0WjRPuwWTXYEMc2EPFSQdEjgGQg")`
    return (
        <div>
        <div className='text-center'>
        <h2 className='text-xl font-bold my-10 '>Here are some blogs for you</h2>
      </div>
            <div style={ mystyle }>

            <div class="drawer">
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content text-center my-10">
    <h2 className='text-xl text-white font-bold'>Open drawer for some reads</h2>
    <label for="my-drawer" className="btn btn-outline drawer-button text-white">Grab</label>
  </div> 
  <div className="drawer-side">
    <label for="my-drawer" class="drawer-overlay"></label>
    <ul className="menu p-4 bg-black text-white overflow-y-auto w-80  text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to='/blogs'>Painting Fosters Creative Growth</Link></li>
      <li><Link to='/blogs'>Painting Strengthens Memory</Link></li>
      <li><Link to='/blogs'>Builds Problem-Solving and Motor Skills</Link></li>
      <li><Link to='/blogs'>Painting Provides Stress Relief</Link></li>
      <li><Link to='/blogs'>Promotes an Optimistic Attitude</Link></li>
      <li><Link to='/blogs'>Painting Nurtures Emotional Growth</Link></li>
      <li><Link to='/blogs'>Paintings increase cultural appreciation</Link></li>
      <li><Link to='/blogs'>Painting helps you communicate emotions</Link></li>
      <li><Link to='/blogs'>Paintings help people learn history</Link></li>
      <li><Link to='/blogs'>Looking at paintings increases blood flow to the brain</Link></li>
      <li><Link to='/blogs'>Painting can improve self-esteem</Link></li>
      
    </ul>
  </div>
</div>
            </div>

            {/* <div>
            <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col items-center justify-center">
    {/* <!-- Page content here --> 
    <label for="my-drawer-2 my-drawer" class="btn btn-primary drawer-button">Open drawer</label>
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
       <!-- Sidebar content here --> 
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  
  </div>
</div>
            </div> */}
        </div>
    );
};

export default Drawer;