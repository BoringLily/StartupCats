import homeImage from '../assets/HomePageImage.png'



export default function Home()
{
    return(
        <div className='Home'>
        <div className='text-white text-3xl font-semibold font-nunito text-left'> Welcome to </div>
        <div className=' text-transparent bg-clip-text bg-gradient-to-r from-purple-bg to-red-bg text-8xl font-cursive pb-8'> Startup Cats </div>
        <img className="max-w-xl" src={homeImage}/>
        <div className=' text-yellow-100 text-xl text-left font-medium font-nunito'> Build the <i>Purrrrfect</i> team and launch a project.</div>
        <button className='text-black font-nunito font-bold text-lg m-4 px-8 py-4 rounded-lg bg-gradient-to-r from-purple-200 to-pink-200 border-0 focus-within:border-0 hover:shadow-md hover:shadow-pink-300 hover:transition-shadow'> Get Started </button>
      </div>
    )
}