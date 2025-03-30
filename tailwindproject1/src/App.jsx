import { useEffect, useState } from 'react'

import './App.css'
import Sign from './components/signUp/Sign'
import Header from './components/header/Header'

function App() {

const [dark,setDark]=useState(false || JSON.parse(localStorage.getItem('dark')));
 

// const [dark,setDark]=useState(()=>{
//   return JSON.parse(localStorage.getItem('dark')) ?? false;
// })
  useEffect(()=>{
    localStorage.setItem('dark',JSON.stringify(dark))
    console.log("d")

if(dark){
  document.documentElement.classList.add('dark')
}
else{
  document.documentElement.classList.remove('dark')
}
  },[dark])

  console.log(dark)
 
  return (
    <>
     <div className="dark:bg-slate-800 dark:bg-none  bg-[url('../src/assets/fabric_1.webp')] bg-cover bg-center min-h-screen">

   
   <Header dark={dark} setDark={setDark}/>
   <Sign dark={dark} setDark={setDark}/>

  </div>
    </>
   
  )
}

export default App
