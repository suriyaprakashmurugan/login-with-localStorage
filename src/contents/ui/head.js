import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Head() {
  const [user, setUser] = useState('');
  useEffect(()=>{
     setUser(localStorage.getItem('Name'))
  },[])
  return (
    <>
        <div className='nav'>
            <h2>Welcome {user}</h2>
            <h3>{user}</h3>
            <ul className='nav-list'>
                <li><i class="fa-solid fa-handshake-angle"></i>Help</li>
                <li><button><Link to='/'> <i class="fa-solid fa-user"></i><i class="fa-solid fa-bars"></i>Logout</Link></button></li>
            </ul>
            <a href='/' className='resicon'>open request<Link to='/'> <i class="fa-solid fa-user">  </i><i class="fa-solid fa-bars"></i>Logout</Link></a>
            
        </div>
    </>
  )
}