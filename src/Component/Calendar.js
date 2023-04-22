import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import '../Css/Calendar.css'

export default function Calendarapp() {
  const [value, onChange] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(null)
  const [isCheckedIn, setIsCheckedIn] = useState(false)
  const [isCheckedOut, setIsCheckedOut] = useState(false)
  const [checkInTime, setCheckInTime] = useState(null)
  const [checkOutTime, setCheckOutTime] = useState(null)

const handleClick = (date) => {
  //console.log(date)
  if (date.toDateString() === new Date().toDateString()) {
    
    if (!isCheckedIn && !isCheckedOut) {
      setSelectedDate(date)
      setIsCheckedIn(true)
      setCheckInTime(new Date())
    } else if (isCheckedIn && !isCheckedOut) {
      
      setSelectedDate(date)
      setIsCheckedOut(true)
      setCheckOutTime(new Date())
    } else {
     
      alert('Already checked out ')
    }
  } else {
   
    alert('Only check in/out current date')
  }
}

  return (
    <>
    <div className='calendar-style'>
    <Calendar onClickDay={handleClick}   onChange={onChange} value={value} />
        <div>
          {isCheckedIn && !isCheckedOut && (
            <div>
              Checked in on {selectedDate.toLocaleDateString()} at {checkInTime.toLocaleTimeString()}
            </div>
          )}
          {isCheckedIn && isCheckedOut && (
            <div>
              Checked in on {selectedDate.toLocaleDateString()} at {checkInTime.toLocaleTimeString()}
              <br />
              Checked out on {selectedDate.toLocaleDateString()} at {checkOutTime.toLocaleTimeString()}
            </div>
          )}
        </div>
    
    </div>
    </>
  )
}
