import { useState } from "react";
import SeatMap from "./SeatMap";
function TicketBooking() {
  const seatOptions = [
    { name: "VIP", seatsRow: 4, seatPerRow: 4 },
    { name: "General", seatsRow: 6, seatPerRow: 6 },
    { name: "Economy", seatsRow: 8, seatPerRow: 8 },
  ];
  const [bookingOption, setBookingOption] = useState(seatOptions);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const handleSelection = (option, row, seat) => {
    const key = `${option}-${row}-${seat}`;
    setSelectedSeats((prev) => {
      const updatedSeat = { ...prev };
      if (updatedSeat[key]) {
        delete updatedSeat[key];
      } else {
        if (Object.keys(updatedSeat).length < 5) {
          updatedSeat[key] = true;
        } else {
          alert("Maximum 5 seats can be booked");
        }
      }
      return updatedSeat;
    });
  };

  const handleSubmit = () => {
    const seats = Object.keys(selectedSeats)
      .map((seat) => seat.replace("-", ",Row ").replace("-", ", seat no. "))
      .join("\n");
    alert("Confirm Booking:\n" + seats);
  };
  const isBooked = (option, row, seat) => {
    return selectedSeats[`${option}-${row}-${seat}`];
  };
  return (
    <>
      {bookingOption.length > 1 &&
        bookingOption.map((option, index) => {
          return (
            <>
              <div key={option.name} className="seats-container"> 
                <h2> {option.name}</h2>
                <SeatMap isBooked={isBooked} handleSelection={handleSelection} option={option}/>
              </div>
            </>
          );
        })}
      <button className="book-btn" onClick={handleSubmit}>
        Confirm Booking
      </button>
    </>
  );
}

export default TicketBooking;
