import { Link, NavLink } from 'react-router-dom';


function NavBar(){

return(
    <>
    <div className="fixed top-0 left-0 right-0 z-50 flex h-30 items-center bg-pink-100 gap-60 w-254.2">
        <div className="mr-0 flex justify-center items-center w-400 relative">
        <img src="src/assets/CakeLogo.webp" className="w-35 h-30 mix-blend-multiply"/><p className="ml-1 text-3xl text-sky-900 ">Cake Shop</p>
        </div>
         <div className="flex items-center  justify-center ">
            <NavLink to="/Home" className="text-pink-900 mr-10 text-lg ">Home</NavLink>
            <NavLink to="/AllProducts" className="text-pink-900  w-30 text-lg ">All Products</NavLink>
            <NavLink to="/About" className="text-pink-900  mr-10 text-lg ">About</NavLink>
            <NavLink to="/Support" className="text-pink-900  mr-10 text-lg ">Support</NavLink>
            <NavLink to="/Blog" className="text-pink-900 text-lg">Blog</NavLink>
        </div>
        <input type="text"className="bg-white rounded-xl mr-10 w-285 h-8 border-3 border-pink-500 ring-3 ring-offset-2 ring-pink-400 text-lg" /><img className="absolute right-1  w-7 h-7 mix-blend-multiply" src="src/assets/Search.webp"/>
       
    </div>
    </>
)

}
export default NavBar