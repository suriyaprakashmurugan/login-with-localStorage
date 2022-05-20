import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Col } from 'antd';
import { Link } from 'react-router-dom';


export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [lPassword, setLpassword] = useState('');
    
    const Name = localStorage.getItem('Email');
    const Password = localStorage.getItem('Password');
        
    const handleSubmit = () =>
        {
        if((email === Name) && (lPassword === Password))
            { 
                alert(`login sucessfully ${email}`)
                navigate('/content');
            }
        else{
            alert('User name or Passwart incorrect')
            }
        }


  return (
    <div className ='logIn'>
        <Col>
        <div className='card'>
        
            <form onSubmit={handleSubmit} autoComplete='false'> 
                <label className='inp'>Email<br/>
                    <input className='inputDesign' type='email' onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email ' required/><br/>
                
                </label><br/>
                <label className='inp'>Password<br/>
                    <input className='inputDesign' type='Password' onChange={(e)=>setLpassword(e.target.value)} placeholder='Enter your password' required/><br/>
                
                </label><br/> 
                <button type='submit' className='but-Style'>login</button><br/>
                <Link className='reg-link' to='/sigup'>Your new user please Register here?</Link>
            </form>
        </div>
        </Col>
    </div>
  )
}