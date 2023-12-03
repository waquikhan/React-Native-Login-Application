import React from 'react';

const AllowPage = () => {
  return (
    <div className='text-center text-white'>
      <h4 style={{ marginTop: '333px' }}>We need access to your contacts?</h4>
      <div style={{ color: 'white' }} className='d-flex justify-content-center w-60'>
        <div className='w-60 mt-3 d-flex '>
          <button className=' p-4' style={{ backgroundColor: 'rgb(69, 239, 230)' }}>
            <span className='bi bi-check2 p-2 m-2' style={{ backgroundColor: 'rgb(69, 239, 230)' }}></span>
            Allow
          </button>
          <button className='p-4' style={{ backgroundColor: 'rgb(35, 30, 58)', color: 'grey' }}>
            <span className='bi bi-x p-2 m-2' style={{ backgroundColor: 'rgb(35, 30, 58)', color: 'grey' }}></span>
            Deny
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllowPage;