import React from 'react'

const Booking = ({setModal}:{setModal:boolean}) => {
  return (
    <div className='absolute translate-1/2' onClick={()=>setModal(false)}>Booking</div>
  )
}

export default Booking