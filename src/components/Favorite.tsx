import { Component } from 'react'

interface FavProps{
    type: "dark" | "light"
}



export class Favorite extends Component <FavProps> {
  render() {
    const {type}= this.props
    return (
        <div className={`w-100 h-full m-5 rounded-md shadow-md ${type === "dark" ? "text-white " : "text-black"} `}>
            <div className='my-5'>
                <h1>Favorite</h1>
            </div>
        <div className='flex flex-wrap'>
         <div className="card w-60 m-5 text-center">
            <figure><img src="https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg" alt="opp"/></figure>
            <div className="card-body">
                <h2 className="card-title text-center mb-5">Oppenheimer</h2>
             <div className="card-actions justify-center">
                <button className={`btn ${type === "dark" ? "bg-gray-500 text-white" : "bg-yellow-500"} focus:outline-none hover:bg-orange-700`}>Watch Now</button>
             </div>
            </div>
         </div>

         <div className="card w-60 m-5">
            <figure><img src="https://image.tmdb.org/t/p/w500/gPbM0MK8CP8A174rmUwGsADNYKD.jpg" alt="ele"/></figure>
            <div className="card-body">
                <h2 className="card-title text-center mb-5">Transformer</h2>
             <div className="card-actions justify-center">
                <button className={`btn ${type === "dark" ? "bg-gray-500 text-white" : "bg-yellow-500"} focus:outline-none hover:bg-orange-700`}>Watch Now</button>
             </div>
            </div>
        </div>
        </div>
        </div>
    )
  }
}

export default Favorite