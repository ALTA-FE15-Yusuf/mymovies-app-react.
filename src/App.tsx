import { Component } from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
import "./App.css"
import data from "../src/dummy/Movie.json"
import Detail from './components/Detail'
import Favorite from './components/Favorite'



interface DarkModeState {
  mode: boolean,
  popup: boolean,
  count: number
}

class App extends Component<DarkModeState> {

  state = {
    mode: false,
    popup: false,
    count: 0
  }

  changeMode() {
    this.setState({ mode: !this.state.mode })
  }

  showPopup() {
    this.setState({ popup: true })
  }

  render() {
    const { mode} = this.state
    return (
      <section className={`${mode === true ? "bg-black" : "bg-white"}`}>
        <div className='BG'>
          <Navbar 
          onChangeMode={() => this.changeMode()}
          mode = {mode} />
        </div>  

        <div className='flex flex-wrap item-center mx-2 my-5 gap-y-5 gap-x-5'>
          {
            data.map((item, index) => {
              return (
                <div className='mx-5'>
                  <Card
                    key={index}
                    id="Movie"
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    type={mode === true ? "dark" : "light"}
                    onClick={() => alert('Added to Favorite')}
                  />
                </div>
              )
            })
          }
        </div>
        <div className='my-5 grid grid-cols-1 ms-5 space-y-5'>
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














