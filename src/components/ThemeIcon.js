import React, { useContext } from 'react'
import { MoonIcon } from '@heroicons/react/solid';
import ThemeContext from '../context/ThemeContext';

const ThemeIcon = () => {

  const {darkMode, setDarkMode} = useContext(ThemeContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode); 
  }

  return (
    <button className={`rounded-lg border-1 border-neutral-400 p-2 absolute mr-9 xl:right-32 shadow-lg 
      ${darkMode ? "shadow-gray-800" : null} transition duration-300 hover:scale-110`} 
      onClick={toggleDarkMode}>

      <MoonIcon className={`h-8 w-8 cursor-pointer stroke-1  
        ${darkMode ? "fill-yellow-400 stroke-yellow-400" : "fill-none stroke-neutral-400"}`}/>
    
    </button>
  )
}

export default ThemeIcon
