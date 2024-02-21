import React from 'react';
import { TextField, Container } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const BtnColor = {
    backgroundColor: "rgb(69, 239, 230)",
    border: 'none',
    marginTop: '3rem',
    width: '100%', 
    height: '50px',
    borderRadius: '44px'
  };

  return (
    <Container className=' container-fluid text-white mt-4 w-100'>
      <h2 className='text-center'>Login Page</h2>
      <div className='text-center'>
        <img src="Photos/image 1.png" style={{ height: 'auto', maxWidth: '100%', marginTop: "3rem" }} alt="logo" />
      </div>
      <div style={{width:""}}>
        <h4>Login</h4>
        <p style={{ color: 'grey' }}>Please Sign In to your account</p>
      </div>
      <div className='w-100'>
        <TextField
          className="textfield"
          id="filled-basic"
          label="Email/Phone Number"
          variant="filled"
          fullWidth
          style={{ marginTop:'2rem', color: 'white', borderRadius: '40px' }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <EmailIcon color="disabled" style={{ color: 'grey' }} />
              </InputAdornment>
            ),
          }}
          InputLabelProps={{
            style: { color: 'grey' },
          }}
        />
        <TextField
          id="filled-basic"
          label="Enter Password"
          variant="filled"
          fullWidth
          style={{  marginTop:'2rem', color: 'white', borderRadius: '40px' }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <VisibilityOffIcon color="disabled" style={{ color: 'grey', marginLeft: '6px' }} />
              </InputAdornment>
            ),
          }}
          InputLabelProps={{
            style: { color: 'grey' },
          }}
        />
      </div>

      <Link to="/authenication" >
      <button style={BtnColor}>Login</button>
      </Link>
      <Link to="/register" style={{textDecoration:'none'}} className='text-center'>
          <p style={{ color: "rgb(69, 239, 230)"}}>Sign-Up</p>
        <p className='text-center' style={{ color: "rgb(69, 239, 230)", marginTop: '1rem' }}>Forgot Password</p>
      </Link>
    </Container>
  );
};

export default LoginPage;