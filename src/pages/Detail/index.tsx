import React from 'react'
import {useState,useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector,useDispatch} from "react-redux"; 
import { toogleMode } from '../../features/modeSlice';
import axios from 'axios'
import Navbar from '../../components/Navbar';

const Detail = () => {

const mode = useSelector((state:any) => state.mode.mode)
const [movie,setMovie] = useState<[]>();
const dispatch = useDispatch();
const location = useLocation();
const id = location?.state?.id;

const getMovie:any = (id:Number) => {
  axios.get('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',{
    headers:{
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YWIyMGZjNGJmZTJlYTI4MWVlOGQwMjM0MzZjNjljZSIsInN1YiI6IjY0ZGY4MDk5ZDEwMGI2MTRiNGNkNzcwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Zr6K9FOHVjzPBqPMiIyd_d_EepaUu3TbDryCyBfSqrI`
    }
  })
      .then((response) => {
          setMovie(response?.data?.results)
      })
      .catch((error) => {
          console.log(error)
      })
}


  return (
    <section className={`${mode === true? "bg-black":"bg-white"} w-full h-full` }>
        <Navbar 
        onChangeMode={() => dispatch(toogleMode())}
        mode={mode}
        />
    <div className={`m-2 rounded-md shadow-md ${mode === true ? "text-white " : "text-black"}`}>
      <div className='mt-5 text-center'>
            <h1>Detailed</h1>
      </div>
      <div className='w-full flex m-5'>
        <div className='w-64 gap-y-5'>
        <img className="rounded my-5 shadow-md" src='https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg'></img>
        </div>
        <div>
        <table className='table-auto text-left w-full m-5'>
            <thead>
                  <th>Oppenheimer</th>
            </thead>

            <tbody>
                <tr>
                    <td>Genres:</td>
                    <td>Drama,History</td>
                </tr>
                <tr>
                    <td>Release Date:</td>
                    <td>19 July 2023 (GB)</td>
                </tr>
                <tr>
                    <td>Runtime:</td>
                    <td>181 Minutes</td>
                </tr>
                <tr>
                    <td>Language:</td>
                    <td>English</td>
                </tr>
                <tr>
                    <td>Overview:</td>
                    <td>The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during
                    World War II</td>
                </tr>
            </tbody>
            <button className={`justify-center my-5 mt-10 text-center w-40 focus:outline-none hover:bg-orange-700 ${mode === true? "bg-gray-500 text-white" : "bg-yellow-500"}`}>Watch</button>
        </table> 
        </div>
      </div>
      </div>

    </section>
  )
}

export default Detail