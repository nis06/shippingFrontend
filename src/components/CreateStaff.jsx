
import React from 'react'
import { useState } from 'react';

const CreateStaff = () => {

    const [name,setName]=useState('');
        const [daysAvailable,setDaysAvailable] = useState('')
        const [startTiming,setStartTiming] = useState('')
        const [endTiming,setEndTiming] = useState('')
    
        const submitHandler= (e) => {
            e.preventDefault();
            const requestValues = {
                method:'POST',
                headers:{'Content-Type':"application/json"},
                body:JSON.stringify({name,daysAvailable,startTiming,endTiming})
            };
            fetch('http://localhost:4000/shipping/createStaff',requestValues)
            .then(response => response.json())
            .then(data =>{
                console.log(data);
                alert('created succeccfully')
                setEndTiming('')
                setName('')
                setDaysAvailable('')
                setStartTiming('')
            })
            .catch(e => console.error(e))
        }

  return (
    <div className='mx-4 flex flex-col'>
    <h2 className='text-xl font-semibold'>Create Staff</h2>
    <form onSubmit={submitHandler} className='p-5 flex justify-between ml-10'>
         <input type='text'
          value={name}
           placeholder='Enter name' 
           onChange={(e)=>setName(e.target.value)}
           className=""
            required/>
         <input
         
          type='text' value={daysAvailable} placeholder='Enter availibility' onChange={(e)=>setDaysAvailable(e.target.value)} required/>
        <input 
        
        type='text' value={startTiming} placeholder='Enter timing to start' onChange={(e)=>setStartTiming(e.target.value)} required/>
        <input
         
         type='text' value={endTiming} placeholder='Enter timing to end' onChange={(e)=>setEndTiming(e.target.value)} required/>
        <button type='submit'
        className=' bg-amber-900 text-white px-2 px-3 rounded-md'
        >Create Staff</button>
      </form>
    </div>
  )
}

export default CreateStaff

