import { Component } from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
import "./App.css"
import Detail from './components/Detail'
import Favorite from './components/Favorite'
import axios from 'axios'



interface DarkModeState {
  mode: boolean,
  popup: boolean,
  count: number,
  data:any,
  Authentication:any,
}

class App extends Component<DarkModeState> {

  state = {
    mode: false,
    popup: false,
    count: 0,
    data: []
  }

  changeMode() {
    this.setState({ mode: !this.state.mode })
  }

  showPopup() {
    this.setState({ popup: true })
  }
  getMovie() {
    axios.get('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',{
      headers:{
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YWIyMGZjNGJmZTJlYTI4MWVlOGQwMjM0MzZjNjljZSIsInN1YiI6IjY0ZGY4MDk5ZDEwMGI2MTRiNGNkNzcwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Zr6K9FOHVjzPBqPMiIyd_d_EepaUu3TbDryCyBfSqrI`
      }
    })
        .then((response) => {
            this.setState({ data: response?.data?.results })
            console.log("data")
        })
        .catch((error) => {
            console.log(error)
        })
}

componentDidMount(): void {
    this.getMovie()
}

  render() {
    const { mode, data} = this.state
    return (
      <section className={`${mode === true ? "bg-black" : "bg-white"}`}>
        <div className='BG'>
          <Navbar 
          onChangeMode={() => this.changeMode()}
          mode = {mode} />
        </div>  

        <div className='flex flex-wrap item-center mx-2 my-5 gap-y-5 gap-x-5'>
          {
            data && 
            data?.map((item:any, index) => {
              return (
                <div className='mx-5'>
                  <Card
                    key={index}
                    id={item.id.toString()}
                    poster_path={item?.poster_path}
                    title={item?.title}
                    type={mode === true ? "dark" : "light"}
                    onClick={() => alert('Added to Favorite')}
                  />
                </div>
              )
            })
          }
        </div>
        <div className='my-5 grid grid-cols-1 ms-5'>
          <Detail 
          type={mode === true ? "dark" : "light"}/>
        </div>
        <div className='grid grid-cols-1 gap-x-5'>
          <Favorite 
          type={mode === true ? "dark" : "light"}/>
        </div>

      </section>
    )
  }
}

export default App














