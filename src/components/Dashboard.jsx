
import { Link } from 'react-router-dom';

export default function Dashboard(){
return(
    <>
    <div className="grid grid-col-1 gap-1 p-12 bg-pink-400 w-30 h-150 items-center text-lg pr-60">
        <Link to="/Home" className="bg-white text-pink-600 hover:bg-gray-100 border-4 border-pink-200  shadow-lg shadow-black/40 hover:shadow-xl hover:shadow-black/50 transition-all duration-300 focus:ring-4 focus:ring-pink-300 focus:ring-offset-1 hover:-translate-y-1   text-pink-400   h-16 w-55 text-center  pt-4 rounded-xl">Home</Link>
        <Link to="/AllProducts" className="bg-white text-pink-600 hover:bg-gray-100 border-4 border-pink-200  shadow-lg shadow-black/40 hover:shadow-xl hover:shadow-black/50 transition-all duration-300 focus:ring-4 focus:ring-pink-300 focus:ring-offset-1 hover:-translate-y-1   text-pink-400   h-16 w-55 text-center  pt-4 rounded-xl">All Products</Link>
        <Link to="/About" className="bg-white text-pink-600 hover:bg-gray-100 border-4 border-pink-200  shadow-lg shadow-black/40 hover:shadow-xl hover:shadow-black/50 transition-all duration-300 focus:ring-4 focus:ring-pink-300 focus:ring-offset-1 hover:-translate-y-1   text-pink-400   h-16 w-55 text-center  pt-4 rounded-xl">About</Link>
        <Link to="/Support" className="bg-white text-pink-600 hover:bg-gray-100 border-4 border-pink-200  shadow-lg shadow-black/40 hover:shadow-xl hover:shadow-black/50 transition-all duration-300 focus:ring-4 focus:ring-pink-300 focus:ring-offset-1 hover:-translate-y-1   text-pink-400   h-16 w-55 text-center  pt-4 rounded-xl">Support</Link>
        <Link to="Blog" className="bg-white text-pink-600 hover:bg-gray-100 border-4 border-pink-200  shadow-lg shadow-black/40 hover:shadow-xl hover:shadow-black/50 transition-all duration-300 focus:ring-4 focus:ring-pink-300 focus:ring-offset-1 hover:-translate-y-1   text-pink-400   h-16 w-55 text-center  pt-4 rounded-xl">Blog</Link>
    </div>
    
    </>
)
}
