import React from 'react'

const SeatsPosition = ({option, row, seat, handleSelection, isBooked}) => {
    
  return (
    <div className='seat-list' key={row} style={{ display: "flex", cursor: "pointer" }}>
    {[...Array.from({ length:seat})].map(
      (_, seats) => {
        return (
          <div
            onClick={(e) =>
              handleSelection(option.name, row + 1, seats + 1)
            }
            className={`seat ${
              isBooked(option.name, row + 1, seats + 1)
                ? "booked"
                : "notBooked"
            }`}
            key={seats}
            style={{
              width: "20px",
              height: "20px",
              border: "1px solid",
            }}
          >
            {seats + 1}
          </div>
        );
      }
    )}
  </div>
  )
}

export default SeatsPosition