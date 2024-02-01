import React from 'react'
import CreateStaff from './components/CreateStaff'
import ListOfStaff from './components/ListOfStaff'

const App = () => {
  return (
    <div className='h-full -mt-[32px] w-full mx-auto  bg-amber-400'>
      <h1 className=' flex mt-8  w-full justify-center text-center text-4xl text-slate-950 font-bold'>Shipping System</h1>
      <CreateStaff/>
      <ListOfStaff/>
    </div>
  )
}

export default App

