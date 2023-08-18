import { Component } from 'react'

interface DetProps{
    type: "dark" | "light"
}

class Detail extends Component<DetProps> {
  render() {
    const {type}= this.props

    return (
      <div className={`w-100 h-full m-5 rounded-md shadow-md ${type === "dark" ? "text-white " : "text-black"}`}>
        <div className='mt-5 text-center'>
            <h1>Detailed</h1>
        </div>
        <div className='w-80 mx-5'>
        <div className='flex flex-initial w-64 gap-x-5 space-x-5'>
        <img className="rounded-md w-full my-5" src='https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg'></img>
        <table className='table-auto text-left mx-5 w-100'>
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
                    <td>The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II</td>
                </tr>
            </tbody>
            <button className={`justify-center my-5 mt-10 text-center w-40 focus:outline-none hover:bg-orange-700 ${type === "dark" ? "bg-gray-500 text-white" : "bg-yellow-500"}`}>Watch</button>
        </table>

        </div>
        </div>
      </div>
    )
  }
}

export default Detail