import React from 'react'
import Rows from './Rows'

const SeatMap = ({option, handleSelection, isBooked}) => {
  return (
    <>
    <div className='row-container'>
    <Rows isBooked={isBooked} handleSelection={handleSelection} option={option} rows={option.seatsRow} seat={option.seatPerRow} />
    </div>    
    </>
    )
}

export default SeatMap