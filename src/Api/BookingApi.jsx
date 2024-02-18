import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookingCard from '../componnents/BookingCard/BookingCard';

export default function BookingApi() {

    const [Booking, setBooking] = useState([]);
    const token = localStorage.getItem('token');

  useEffect(() => {

    const config = {
      headers: {
        'Accept': 'application/json',
        'Authorization':token,
      }
    };
    // استرجاع البيانات من API باستخدام axios
    axios.get('http://127.0.0.1:8000/api/bookings' , config)
      .then(response => setBooking(response.data.data))
      .then(response => console.log(Booking))
      .catch(error => console.error(error));
      
  }, []);

  return (
    <div>
        {Booking.map(item => (
        <div key={item.id}>
         <BookingCard
          id={item.id}
          name={item.name}
          Phone={item.phone}
          Check_in={item.check_in}
          Room_type={item.roomtype}
          E_mail={item.email}
          Check_out={item.check_out}
          guests_Number={item.guest_number}
          Description={item.description}
          />
        </div>
        
      ))
      }
    </div>
  )
}
