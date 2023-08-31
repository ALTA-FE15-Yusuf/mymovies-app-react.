import {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch} from "react-redux"; 
import axios from 'axios';
import Card from '../../components/Card';
import Navbar from '../../components/Navbar';
import { toogleMode } from '../../features/modeSlice';


const Home = () => {
  const [movie,setMovie]=useState<[]>();
  const mode = useSelector((state:any) => state.mode.mode)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const getMovie:any = () => {
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

useEffect(() => {
  getMovie();
},[])

const navigateTo = (id: number) => {
  console.log(id)
    navigate(`/detail/${id}`, {
      state: {
        id: id,
      },
    });
  }


  return (
    <section className={`${mode === true ? "bg-black" : "bg-white"}`}>
      <div className='BG width={200} height={200}'>
        <Navbar onChangeMode={() => dispatch(toogleMode())}
        mode={mode}
        />
      </div>

      <div className='flex flex-wrap item-center mx-2 my-5 gap-y-5 gap-x-5'>
          {
            movie && 
            movie?.map((item:any, index) => {
              return (
                <div className='mx-5'>
                  <Card
                    key={index}
                    id={item?.id}
                    poster_path={item?.poster_path}
                    title={item?.title}
                    type={mode === true ? "dark" : "light"}
                    onClick={() => navigateTo(item.id)}
                  />
                </div>
              )
            })
          }
        </div>
      
    </section>
  )
}

export default Home