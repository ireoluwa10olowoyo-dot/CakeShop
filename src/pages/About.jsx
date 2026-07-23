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
                <img src="src/assets/AboutCake.webp" className="mix-blend-multiply rounded-full "/>
            </div>
            <div className="text-slate-800 h-100">
                <span className="text-5xl border-b-2 border-pink-600 uppercase mb-100 font-bold">About Us</span>
                <h1 className="text-3xl pt-5">About Our Cake Shop</h1>
                <p className="textxl pt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi
                doloremque, fugiat illum magni minus nisi nulla numquam obcaecati placeat quia, repellat tempore
                voluptatum.</p>
            </div>
         </div>
         <Footer/>
        </>
    )
}
export default About