
import { Link, NavLink } from 'react-router-dom';

export default function Dashboard(){
return(
    <>
    <div className=" z-40 grid w-72 grid-cols-1 gap-1 h-170 bg-pink-300 p-12 text-lg ">
        <NavLink to="/Home" className="bg-white text-pink-600 hover:bg-gray-100 border-4 border-pink-200  shadow-lg shadow-black/40 hover:shadow-xl hover:shadow-black/50 transition-all duration-300 focus:ring-4 focus:ring-pink-300 focus:ring-offset-1 hover:-translate-y-1   text-pink-400   h-16 w-55 text-center  pt-4 rounded-xl">Home</NavLink>
        <NavLink to="/AllProducts" className="bg-white text-pink-600 hover:bg-gray-100 border-4 border-pink-200  shadow-lg shadow-black/40 hover:shadow-xl hover:shadow-black/50 transition-all duration-300 focus:ring-4 focus:ring-pink-300 focus:ring-offset-1 hover:-translate-y-1   text-pink-400   h-16 w-55 text-center  pt-4 rounded-xl">All Products</NavLink>
        <NavLink to="/About" className="bg-white text-pink-600 hover:bg-gray-100 border-4 border-pink-200  shadow-lg shadow-black/40 hover:shadow-xl hover:shadow-black/50 transition-all duration-300 focus:ring-4 focus:ring-pink-300 focus:ring-offset-1 hover:-translate-y-1   text-pink-400   h-16 w-55 text-center  pt-4 rounded-xl">About</NavLink>
        <NavLink to="/Support" className="bg-white text-pink-600 hover:bg-gray-100 border-4 border-pink-200  shadow-lg shadow-black/40 hover:shadow-xl hover:shadow-black/50 transition-all duration-300 focus:ring-4 focus:ring-pink-300 focus:ring-offset-1 hover:-translate-y-1   text-pink-400   h-16 w-55 text-center  pt-4 rounded-xl">Support</NavLink>
        <NavLink to="/Blog" className="bg-white text-pink-600 hover:bg-gray-100 border-4 border-pink-200  shadow-lg shadow-black/40 hover:shadow-xl hover:shadow-black/50 transition-all duration-300 focus:ring-4 focus:ring-pink-300 focus:ring-offset-1 hover:-translate-y-1   text-pink-400   h-16 w-55 text-center  pt-4 rounded-xl">Blog</NavLink>
    </div>
    
    </>
)
}
