import React, { Component } from 'react'
import { Link } from 'react-router-dom';

interface CardProps {
    id: string,
    poster_path: string,
    title: string,
    type: "dark" | "light"
    onClick: React.MouseEventHandler
}

class Card extends Component<CardProps> {
    render() {

        const { id, poster_path, title, type, onClick } = this.props

        return (
            <div id={id} className={`w-60 h-full ${type === "dark" ? 'bg-black border border-white' : 'bg-white'} rounded-md shadow-md`}>
                <div className='p-1'>
                    <div className='mx-2 p-4'>
                        <Link to={`/Detail/${id}`} target='_self'><img
                            className='rounded-md w-full transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...'
                            src={`https://image.tmdb.org/t/p/w500/${poster_path}`} /></Link>
                    </div>
                    <div className='my-5'>
                        <h2 className={`font-semibold ${type === "dark" ? "text-white" : "text-black"}`}>{title}</h2>
                    </div>
                    <div className='mb-5 text-center'>
                        <button onClick={onClick} className={`${type === "dark" ? "bg-gray-500 text-white" : "bg-yellow-500"} focus:outline-none hover:bg-orange-700`}>Favorite</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card