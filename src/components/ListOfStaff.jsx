

import React, { useEffect, useState } from 'react'

const ListOfStaff = () => {
    const [staffList,setStaffList]= useState([])
    const [updateStaff,setUpdatedStaffData] = useState({});


    useEffect(()=>{
        fetch('http://localhost:4000/shipping/readStaff')
        .then(response => response.json())
        .then(data => {
            setStaffList(data.data)
        })
        .catch(e=>console.error(e))
    })


    const deleteHandler= async (id) =>{
        try{
            const requestValues= {
                method:'DELETE'  
            };
            const response = await fetch (`http://localhost:4000/shipping/deleteStaff/${id}`,requestValues)
            if(response.ok){
                setStaffList(staffList.filter(staff => staff._id !==id));
                alert('deleted successfully')
            }else{
                alert('failed to delete staff')
            }
        }catch(e){
            console.error(e)
        }
    }

    const updateHandler = async(id) => {
       try{
        const requestValues= {
            method:'PUT'  ,
            headers: {'Content-Type':"application/json"},
            body:JSON.stringify(updateStaff[id])
        };
         fetch (`http://localhost:4000/shipping/updateStaff/${id}`,requestValues)
         .then(response=> {
            if(response.ok){
                setStaffList(staffList.map(staff => staff._id === id ? {...staff, ...updateStaff[id]} : staff));
                alert('updated successfully')
            }else{
                alert('failed to update staff')
            }
         })
         .catch(e=>console.error)
      
        }catch(e){
        console.error(e);
       }
    }

    const changeHandeler = (id,field,value)=>{
        setUpdatedStaffData({
            ...updateStaff,
            [id]:{
                ...updateStaff[id],
                [field]:value
            }
        })

    }


  return (
    <div className='w-11/12 mx-auto'>
      <h2 className='text-amber-900 font-semibold flex justify-center text-4xl'>Staff List</h2>
      <ul>
            {
                staffList.map(staff => (
                    <li key={staff._id}>
                        <div className='flex justify-between text-xl'>
                            <strong>Name: {staff.name}</strong><br/>
                            <strong>Availibility: </strong>
                            <input
                            className='my-1 mx-2'
                            onChange={(e)=>{changeHandeler(staff._id,'daysAvailable',e.target.value)}}
                             type='text' defaultValue={staff.daysAvailable}></input>
                            <strong>Start time: </strong>
                            <input type='text'
                            onChange={(e)=>{changeHandeler(staff._id,'startTiming',e.target.value)}}
                             defaultValue={staff.startTiming} />
                            <strong>End Time:</strong>
                            <input type='text'
                            onChange={(e)=>{changeHandeler(staff._id,'endTiming',e.target.value)}}
                             defaultValue={staff.endTiming}/>


                        </div>
                        <div className='flex justify-start py-5'>

                        <button
                        className=' bg-amber-900 text-white px-2 px-3 rounded-md mx-6 '
                         onClick={()=>deleteHandler(staff._id)}>Delete</button>
                        <button
                        className=' bg-amber-900 text-white px-2 px-3 rounded-md'
                         onClick={()=>updateHandler(staff._id)}>Update</button>

                        </div>
                       
                    </li>
                ))
            }
      </ul>
    </div>
  )
}

export default ListOfStaff
