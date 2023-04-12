import homeImage from '../assets/HomePageImage.png'
import { Link, useNavigate } from 'react-router-dom';

export interface HomeTypes{
  isLoggedIn:Boolean;
}


export default function Home({isLoggedIn}:HomeTypes)
{
  const navigate = useNavigate();

    return(
        <div className='Home flex flex-col justify-center items-center'>
        <div className='text-white text-3xl font-semibold font-nunito text-left'> Welcome to </div>
        <div className=' text-transparent bg-clip-text bg-gradient-to-r from-purple-bg to-red-bg text-8xl font-cursive pb-8'> Startup Cats </div>
        <img className="max-w-xl" src={homeImage}/>
        <div className=' text-yellow-100 text-xl text-left font-medium font-nunito mb-4'> Build the <i>Purrrrfect</i> team and launch a project.</div>
        <div className='mt-2 w-fit cat-bg-purple font-nunito font-bold text-lg m-2 px-8 py-4 rounded-lg order-0 hover:text-slate-500 text-slate-800 transition' onClick={()=>{navigate("/dashboard")}}> Get Started </div>
      </div>
    )
}