import Dashboard from "/src/components/Dashboard"
import NavBar from "/src/components/NavBar";
import Footer from "/src/components/Footer"
import CakeCards from "/src/components/CakeCards"
import {cakeHome} from "../data/cake"

function Home(){
    return (
        <>
        <NavBar />
      <Dashboard />
      <div className="relative z-10 -mt-170 ml-72 px-6 bg-rose-50 w-310 h-180 ">
        <h1 className="text-3xl text-slate-800 mb-6 pt-12 pl-12 font-medium">
          Celebration Cakes
        </h1>

        <div className="grid grid-cols-3 gap-8 pr-10 pt-5 pl-10 ">
          {cakeHome.map((cake)=>(
            <CakeCards key={cake.id} {...cake}/>
          ))}
        </div>
        </div>
        <Footer/>
        </>
    )
}
export default Home