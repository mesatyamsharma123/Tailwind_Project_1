import React, { useEffect, useState } from 'react'
import moon from '../../assets/moon.svg'
function Header({dark,setDark}) {

 


  const handleChange=()=>{
    setDark((prev)=>(!prev))
  }


  return (
    <header className='flex justify-end'>
    
 <img onClick={handleChange} className=' h-10 border p-1 bg-slate-500 dark:bg-amber-50 rounded-3xl mt-4 mr-7'   src={moon} alt='cs' />
    </header>
  )
}

export default Header
