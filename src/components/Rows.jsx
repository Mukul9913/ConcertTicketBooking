import React from "react";
import SeatsPosition from "./SeatsPosition";

const Rows = ({option, rows, seat, handleSelection, isBooked}) => {
  return (
    <>
      {option?.seatsRow > 1 &&
        [...Array.from({ length:rows})].map((_, row) => {
          return (
            <>
            <div key={row} style={{ display: "flex" }}>
            <SeatsPosition isBooked={isBooked} handleSelection={handleSelection} option={option} row={row} seat={seat}/>
            </div>
            </>
          );
        })}
    </>
  );
};

export default Rows;
