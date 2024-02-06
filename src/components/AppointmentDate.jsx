import React from 'react'
import {worktimes} from '../data'


const AppointmentDate = () => {
  return (
    <div>
      <input type="date" name='date'/>

      {/* Scroll vertically for time slot */}
      <div className="time">
        <div>
          {
           
            worktimes.map((day) => (
             <div className='times'>
              {day.time}
             </div> 
            ))
   
          }
        </div>

      </div>

    </div>
  )
}

export default AppointmentDate