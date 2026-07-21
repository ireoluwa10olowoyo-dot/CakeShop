


function NavBar(){

return(
    <>
    <div className=" z-50 flex h-30 items-center bg-pink-100 px-6">
        <div className="mr-160 flex justify-center items-center w-400 relative">
        <img src="src/assets/CakeLogo.webp" className="w-35 h-30 mix-blend-multiply"/><p className="ml-1 text-3xl text-sky-900 ">Cake Shop</p>
        </div>
        <input type="text"className="bg-white rounded-xl w-300 h-8 border-3 border-pink-500 ring-3 ring-offset-2 ring-pink-400 text-lg" /><img className="absolute right-1  w-7 h-7 mix-blend-multiply" src="src/assets/Search.webp"/>
        <div>
            
        </div>
    </div>
    </>
)

}
export default NavBar