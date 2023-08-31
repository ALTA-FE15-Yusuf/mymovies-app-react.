import {useState,useEffect} from 'react';
import {useNavigate,NavigateFunction,useLocation } from 'react-router-dom';
import { useSelector,useDispatch} from "react-redux"; 
import { toogleMode } from '../../features/modeSlice';
import axios from 'axios'
import Navbar from '../../components/Navbar';
import { Item,Bookstate,addBook } from '../../features/modeBookmark';

const Detail = () => {

const mode = useSelector((state:any) => state.mode.mode)
const navigate:NavigateFunction = useNavigate()

const [data,setData]=useState<any>([]);
const dispatch = useDispatch();
const book =useSelector((state:{book:Bookstate}) => state.book)
const location = useLocation();
const id = location?.state?.id;


const getMovie = (id:number) => {
  axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`,{
    headers:{
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YWIyMGZjNGJmZTJlYTI4MWVlOGQwMjM0MzZjNjljZSIsInN1YiI6IjY0ZGY4MDk5ZDEwMGI2MTRiNGNkNzcwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Zr6K9FOHVjzPBqPMiIyd_d_EepaUu3TbDryCyBfSqrI`
    }
  })
      .then((response) => {
          setData(response?.data)
      })
      .catch((error) => {
          console.log(error)
      })
}
useEffect(() => {
  getMovie(id)
},[])

const handleAddBook=(data:any) => {
  const newItem: Item[] | any= {
    id:data.id,
    title:data.title,
    image:data.poster_path
  }
  dispatch(addBook(newItem));
  localStorage.setItem('items', book.items)
  
  navigate('/Favorite')


}



  return (
    <section className={`${mode === true? "bg-black":"bg-white"} w-full` }>
        <Navbar 
        onChangeMode={() => dispatch(toogleMode())}
        mode={mode}
        />
        <div className={`my-5 rounded-md shadow-md ${mode === true ? "text-white " : "text-black"}`}>
            <div className='mt-5 text-center'>
              <h1>{data?.original_title}</h1>
            </div>
             <div className='w-full flex m-5'>
             <div className='w-96 gap-y-5'>
             <img className="rounded my-5 shadow-md" src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}></img>
            </div>
            <div>
            <table className= 'text-left m-5'>
              <thead>
                    <th>Detail</th>
              </thead>
  
              <tbody>
                  <tr>
                      <td>Genres :</td>
                      <td>{data?.genres?.a}</td>
                  </tr>
                  <tr>
                      <td>Release :</td>
                      <td> {data?.release_date}</td>
                  </tr>
                  <tr>
                      <td>Runtime :</td>
                      <td> {data?.runtime} Minutes</td>
                  </tr>
                  <tr>
                      <td>Language:</td>
                      <td>{data?.original_language} (English)</td>
                  </tr>
                  <tr>
                      <td>Overview:</td>
                      <td>{data?.overview}</td>
                  </tr>
              </tbody>
          </table>
          <div className='text-left mx-5 my-10'>
          <button 
          onClick={()=>handleAddBook(data)}
          className={`w-40 focus:outline-none hover:bg-orange-700 ${mode === true? "bg-gray-500 text-white" : "bg-yellow-500"}`}>Add to Favorite</button>
          </div>
          </div>
        </div>
        </div>



    </section>
  )
}

export default Detail