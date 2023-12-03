import React from 'react';
import { TextField, Typography, Container } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import InputAdornment from '@mui/material/InputAdornment';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FaxIcon from '@mui/icons-material/Fax';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const RegistrationPage1 = () => {
  const BtnColor = {
    backgroundColor: "rgb(69, 239, 230)",
    border: 'none',
    marginTop: '1.5rem', // Adjusted margin for responsiveness
    width: '100%', // Adjusted width for responsiveness
    height: '50px',
    borderRadius: '44px'
  };

  return (
    <Container className='container-fluid text-white mt-4 w-100'>
      <Typography variant='h4' gutterBottom style={{ color: 'rgba(255, 255, 255, 1)', textAlign: 'center', marginTop: '2rem', fontWeight: '500' }}>Registration</Typography>
      <div className='text-center'>
        <img src="Photos/image 2.png" style={{ height: 'auto', width: "70%", maxWidth: '270px', marginTop: "1.5rem" }} alt="logo" />
      </div>
      <div className='mt-2'>
        <h4 style={{ color: 'white' }}>Create Account</h4>
        <p style={{ color: 'grey' }}>Please fill the inputs below</p>
      </div>
      <div className='w-100 '>
      <TextField  className="textfield" id="filled-basic" label="User Name" variant="filled" fullWidth  
        style={{marginBottom:"20px", color: 'white', borderRadius:'10px'}}
        InputProps={{
        endAdornment: (
        <InputAdornment position="end"> 
            <PermIdentityIcon color="disabled" style={{ color: 'grey' , marginLeft:'6px'}} />
        </InputAdornment>
        ),
        }}
        InputLabelProps={{
            style: { color: 'grey' },
          }}
          />
        <TextField  className="textfield" id="filled-basic" label="Email" variant="filled" fullWidth  
        style={{marginBottom:"20px", color: 'white', borderRadius:'10px'}}
        InputProps={{
        endAdornment: (
          <InputAdornment position="end"> 
            <EmailIcon color="disabled" style={{ color: 'grey' , marginLeft:'6px'}} />
          </InputAdornment>
        ),
        }}
        InputLabelProps={{
            style: { color: 'grey' },
          }}
        />
        <TextField  className="textfield" id="filled-basic" label="Phone Number" variant="filled" fullWidth  
        style={{marginBottom:"20px", color: 'white', borderRadius:'10px'}}
        InputProps={{
        endAdornment: (
          <InputAdornment position="end"> 
            <LocalPhoneIcon color="disabled" style={{ color: 'grey' , marginLeft:'6px'}} />
          </InputAdornment>
        ),
        }}
        InputLabelProps={{
            style: { color: 'grey' },
          }}
        />
        <TextField  className="textfield" id="filled-basic"  label="IMEI Number 1 *" variant="filled" fullWidth  
        style={{marginBottom:"20px", color: 'white', borderRadius:'10px'}}
        InputProps={{
        endAdornment: (
          <InputAdornment position="end"> 
            <FaxIcon color="disabled" style={{ color: 'grey' , marginLeft:'6px'}} />
          </InputAdornment>
        ),
        }}
        InputLabelProps={{
            style: { color: 'grey' },
          }}
        />
        <TextField  className="textfield" id="filled-basic"  label="IMEI Number 2 " variant="filled" fullWidth  
        style={{marginBottom:"20px", color: 'white', borderRadius:'10px'}}
        InputProps={{
        endAdornment: (
          <InputAdornment position="end"> 
            <FaxIcon color="disabled" style={{ color: 'grey' , marginLeft:'6px'}} />
          </InputAdornment>
        ),
        }}
        InputLabelProps={{
            style: { color: 'grey' },
          }}
        />
        <TextField  className="textfield" id="filled-basic"  label="IMEI Number 3 (Optionsal)" variant="filled" fullWidth  
        style={{marginBottom:"20px", color: 'white', borderRadius:'10px'}}
        InputProps={{
        endAdornment: (
          <InputAdornment position="end"> 
            <FaxIcon color="disabled" style={{ color: 'grey' , marginLeft:'6px'}} />
          </InputAdornment>
        ),
        }}
        InputLabelProps={{
            style: { color: 'grey' },
          }}
        />
        <div className=' d-flex justify-content-between w-100 me-2 mb-2' style={{color:'grey'}}>
            <div>Government ID Proof</div>
            <div>
            <select style={{color:'grey',padding:'4px', float:'right'}}>
                <option value='-1'>Aadhar Card</option>
            </select>
            </div>
        </div>
        <div className='w-100 '>
        <TextField  className="textfield" id="filled-basic"  label="Enter above ID Number" variant="filled" fullWidth  
        style={{marginBottom:"20px", color: 'white', borderRadius:'10px'}} 
        InputLabelProps={{
            style: { color: 'grey' },
          }}
        />
        <TextField  className="textfield" id="filled-basic"  label="Address" variant="filled" fullWidth  
        style={{marginBottom:"20px", color: 'white', borderRadius:'10px'}}
        InputLabelProps={{
            style: { color: 'grey' },
          }}
        />
        
        <TextField  label="Address Proof" variant="filled" fullWidth  
        style={{marginBottom:"20px", color: 'grey', borderRadius:'10px'}}
        InputProps={{
        endAdornment: (
          <InputAdornment position="end" style={{color:'grey'}} > Upload
            <CloudUploadIcon color="disabled" style={{ color: 'grey' , marginLeft:'6px'}} />
          </InputAdornment>
        ),
         }}
         InputLabelProps={{
            style: { color: 'grey' },
          }}
         />
        <TextField id="filled-basic" label="Create Password" variant="filled" fullWidth 
        style={{marginBottom:"20px", color: 'grey', borderRadius:'10px'}}
        InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <VisibilityOffIcon color="disabled" style={{ color: 'grey' , marginLeft:'6px'}}/>
          </InputAdornment>
        ),
        }} 
        InputLabelProps={{
            style: { color: 'grey' },
          }}
        />
        <TextField id="filled-basic" label="Re-Enter Password" variant="filled" fullWidth 
        style={{marginBottom:"20px" , color: 'grey', borderRadius:'10px'}}
        InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <VisibilityOffIcon color="disabled" style={{ color: 'grey' , marginLeft:'6px'}}/>
          </InputAdornment>
        ),
        }}
        InputLabelProps={{
            style: { color: 'grey' },
          }}
        />

        <TextField label="Referral Code (Optional)" variant='filled' fullWidth
        style={{marginBottom:"20px"}}
        InputLabelProps={{
            style: { color: 'grey' },
          }}
        />
        </div>
    <div className=' w-100 d-flex '>
        <input type="checkbox" className='mb-3 me-2' />
        <p className='me-1' style={{color:"grey"}}>I agree to the </p>
        <p style={{color:"rgb(69, 239, 230)"}}> Terms & Conditions</p>
    </div>
    </div>
      <button style={BtnColor}>Register</button>

      <div className='d-flex mt-2 justify-content-center'>
        <p className='me-1 ' style={{ color: 'grey' }}>Already have an account?</p>
        <p style={{ color: "rgb(69, 239, 230)" }}>Sign In</p>
      </div>
    </Container>
  );
};

export default RegistrationPage1;
