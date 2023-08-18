import React, { Component } from 'react'

interface NavProps{
  mode:boolean
  onChangeMode:React.MouseEventHandler
}

class Navbar extends Component <NavProps> {


  render() {

    const {mode, onChangeMode}= this.props

    return (
      <nav className={`bg-black shadow-md sticky`}>
        <div className={`flex justify-between h-20 items-center ${mode === true ? "text-white":"text-black"}`}>
        <ul className='flex ms-5'>
          <li>
            <a href="#" className=" p-4 text-white hover:color-orange-500">My Movie</a></li>
          <li>
            <a href="#" className=" p-4 text-white hover:color-orange-500">Movie</a></li>
          <li>
            <a href="Favotire.tsx" className=" p-4 text-white hover:color-orange-500">Favorite</a></li>
        </ul>
        <button
            onClick={onChangeMode}
            className={`w-30 h-10 me-10 ${mode === true ? "bg-white" : "bg-black"}focus:outline-none`}>Change Mode</button>
        
        </div>
      </nav>
    )
  }
}

export default Navbar