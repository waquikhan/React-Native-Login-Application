import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'



const Onboarding = () => {

  const navigate = useNavigate();

  useEffect(()=>{
    const timeout = setTimeout(()=>{
      navigate("/login")
    }, 3000)
    return() => clearTimeout(timeout)
  })

  return (
    <div className='text-center '>
        <img src="Photos/Group 1.png" style={{height:'285.55px', width:"180px", marginTop:"257px"}} alt="logo" />
    </div>
  )
}

export default Onboarding
