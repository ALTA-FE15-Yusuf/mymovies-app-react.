import React, { Component } from 'react'

interface CardProps {
    id: string,
    image: string,
    title: string,
    price: string,
    type: "dark" | "light"
    onClick: React.MouseEventHandler
}

class Card extends Component<CardProps> {
    render() {

        const { id, image, title, price, type, onClick } = this.props

        return (
            <div id={id} className={`w-60 h-full ${type === "dark" ? 'bg-black border border-white' : 'bg-white'} rounded-md shadow-md`}>
                <div className='mx-5 grid-cols-1'>
                    <div className='my-4 mx-2'>
                        <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank'><img
                            className='rounded-md w-full transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...'
                            src={image} /></a>
                    </div>
                    <div className='grid grid-cols-1 my-5'>
                        <h2 className={`font-semibold ${type === "dark" ? "text-white" : "text-black"}`}>{title}</h2>
                        <p className={`${type === "dark" ? "text-white" : "text-black"}`}>{price}</p>
                    </div>
                    <div className=' mb-5 text-center'>
                        <button onClick={onClick} className={`${type === "dark" ? "bg-gray-500 text-white" : "bg-yellow-500"} focus:outline-none hover:bg-orange-700`}>Favorite</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card