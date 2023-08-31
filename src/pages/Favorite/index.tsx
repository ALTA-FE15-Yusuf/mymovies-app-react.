import { useSelector,useDispatch } from "react-redux";
import { Bookstate } from "../../features/modeBookmark";
import Navbar from '../../components/Navbar';
import { toogleMode } from '../../features/modeSlice';

const Favorite = () => {
  const book =useSelector((state:{book:Bookstate}) => state.book)
  const mode = useSelector((state:any) => state.mode.mode)
  const dispatch = useDispatch();
  console.log(book)

  return (
    <section className={`${mode === true ? "bg-black" : "bg-white"}`}>
      <div className='w-screen h-max'>
        <Navbar onChangeMode={() => dispatch(toogleMode())}
        mode={mode}
        />
      </div>
    {book &&
      book?.items?.map((data) => {
        return (
          <div className={`${mode === true ? 'bg-black border border-white' : 'bg-white'}flex flex-wrap item-center w-60 h-max rounded-md shadow-md my-20 mx-10`}>
            <div className="p-5 rounded-md shadow-md border">
              <img src={`https://image.tmdb.org/t/p/w500${data?.image}`} />
            </div>
            <div className="text-center mx-auto mb-10">
                <h3>{data?.title}</h3>
            </div>
          </div>
        );
      })}
  </section>  
  )
}

export default Favorite