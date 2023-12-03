import React from "react";
import { Link } from "react-router-dom";

const Login = () => {

  const TextStyle = {
    marginTop: "13vw", // Adjusted margin for responsiveness
    fontWeight: "bold"
  };

  const FontColor = {
    color: "#0EEB58"
  };

  const BtnColor = {
    backgroundColor: "rgb(69, 239, 230)",
    border: 'none',
    marginTop: '15vw', // Adjusted margin for responsiveness
    width: '80%', // Adjusted width for responsiveness
    maxWidth: '300px', // Added max-width for responsiveness
    height: '50px',
    borderRadius: '44px'
  };


  return (
    <div className='text-center text-white'>
      <div className='text-center'>
        <img src="Photos/Group 1.png" style={{ height: 'auto', width: "50%", maxWidth: '180px', marginTop: "13vw" }} alt="logo" />
      </div>
      <div style={TextStyle} className="text-spacing">
        <span className="me-1">Feel</span>
        <span className="me-1" style={FontColor}>Safe</span>
        <span>Everywhere</span>
      </div>
      <div style={{marginTop:'5vw'}}>
        <span>#Safe-</span>
        <span className="me-1" style={FontColor}>T</span>
        <span>-Fast</span>
      </div>
      <Link to="/userlogin">
      <button style={BtnColor}>Login</button>
      </Link>
      <div className="mt-3">
        <span className="me-2">New User ?</span>
        <Link to="/register" style={{textDecoration:'none'}}>
          <span style={{ color: "rgb(69, 239, 230)" }}>Register Now</span>
        </Link>
      </div>
    </div>
  );
};

export default Login;
