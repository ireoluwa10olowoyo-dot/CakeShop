import Dashboard from "/src/components/Dashboard"
import NavBar from "/src/components/NavBar"
import Footer from "/src/components/Footer"

function About(){
    return (
        <>
         <NavBar />
         <Dashboard />
         <div className="-mt-170 ml-72 px-6 py-40 bg-rose-50 flex justify-content align-items w-310 h-170 ">
            <div className="pr-16">
                <img src="src/assets/AboutCake.webp" className="mix-blend-multiply rounded-full w-150 "/>
            </div>
            <div className="text-slate-800 h-100">
                <span className="text-5xl border-b-2 border-pink-600 uppercase mb-100 font-bold">About Us</span>
                <h1 className="text-3xl pt-5">About Our Cake Shop</h1>
                <p className="text-lg pt-2">At Cake Shop, we're passionate about creating freshly baked cakes and desserts that make every celebration unforgettable. From classic favourites to custom creations, every treat is made with care and the finest ingredients.</p>
            </div>
         </div>
         <Footer/>
        </>
    )
}
export default About