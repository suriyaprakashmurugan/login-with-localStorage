import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Col } from 'antd';
import { Link } from 'react-router-dom';


export default function Sigup() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [gen, setGen] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        localStorage.setItem('Name',name);
        localStorage.setItem('Age',date);
        localStorage.setItem('Gender',gen);
        localStorage.setItem('Email',email);
        localStorage.setItem('Password',pwd);
        alert('Your sucessfully ' + name)
        navigate('/')
    }

    return (
        <div className ='logIn'>
            <Col>
            <div className='card'>
            
                <form onSubmit={handleSubmit} autoComplete='false'> 
                    <label className='inp' >Name<br/>
                        <input placeholder='Enter name' className='inputDesign' type='text' onChange={(e)=>setName(e.target.value)}  required/><br/>
                    </label><br/>
                    <div style={{display:"flex"}}>
                    <label className='inp'>age<br/>
                    <input placeholder='Enter age' type='number' className='inp-age' onChange={(e)=>setDate(e.target.value)}/>
                    </label>
                    <label className='inp' style={{marginLeft:'auto'}}>Gender<br/>
                    <select className='inp-age' onChange={(e)=>setGen(e.target.value)}>
                        <option disabled selected>select</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Others</option>
                    </select>
                    </label><br/>
                    </div>
                    <label className='inp' >Email id<br/>
                        <input placeholder='Enter email' className='inputDesign' type='email' onChange={(e)=>setEmail(e.target.value)} required/><br/>
                    
                    </label><br/>
                    <label className='inp' >Password<br/>
                        <input placeholder='Enter password' className='inputDesign' type='Password' onChange={(e)=>setPwd(e.target.value)} required/><br/>
                    
                    </label><br/> 
                    <button type='submit' className='but-Style'>Register</button><br/>
                    <Link className='reg-link' to='/'>Excisting user to Login?</Link>
                </form>
            </div>
            </Col>
        </div>
      )
}

