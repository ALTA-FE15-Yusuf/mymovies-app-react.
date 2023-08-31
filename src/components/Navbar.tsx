import React,{FC} from 'react'

interface NavProps{
  mode:boolean
  onChangeMode:React.MouseEventHandler
}

const Navbar:FC<NavProps> = ({mode,onChangeMode}) => {
  return (

    <nav className={`bg-black shadow-md w-full`}>
      <div className={`flex justify-between h-20 items-center ${mode === true ? "text-white":"text-black"}`}>
      <ul className='flex ms-5'>
        <li>
          <a href="/" className=" p-4 text-white hover:color-orange-500">My Movie</a></li>
        <li>
          <a href="#" className=" p-4 text-white hover:color-orange-500">Favorite</a></li>
      </ul>
      <button
          onClick={onChangeMode}
          className={`w-30 h-10 me-10 ${mode === true? "bg-gray-500 text-white" : "bg-yellow-500"}focus:outline-none`}>Change Mode</button>
      
      </div>
    </nav>
  )
}


export default Navbar