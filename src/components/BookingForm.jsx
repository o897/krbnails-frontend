import { useState } from 'react'

const BookingForm = () => {
    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');


    const handleSubmit = () => {
        try {

        } catch(error) {
            
        }
    }
  return (
    <div>
        <h1>Book your Appointment</h1>

        <form onSubmit={handleSubmit}>
          
          
          <input type="text"
          placeholder='name'
          onChange={ (e) => setName(e.target.value)}
          value={name}/>

          <input type="text"
          placeholder='number'
          onChange={ (e) => setPhone(e.target.value)}
          value={phone}

          />

        </form>
    </div>
  )
}

export default BookingForm