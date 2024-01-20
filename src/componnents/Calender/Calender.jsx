import './Calender.css'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.module.css'
import { useState } from 'react';


const Calender = () => {

  const [startDate, setStartDate] = useState(new Date()); 

  return (
    <div>
      <ReactDatePicker
        
        className='custom-datepicker'   
        selected={startDate} 
        calendarContainer="inline"
        onChange={(date) => setStartDate(date)}  
      />
    
          
    </div>
  )
}

export default Calender



