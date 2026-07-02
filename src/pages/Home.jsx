import Dashboard from "/src/components/Dashboard"
import NavBar from "/src/components/NavBar"
import CakeCards from "/src/components/CakeCards"

function Home(){
    return (
        <>
        <NavBar />
      <Dashboard />
      <div className="relative z-10 -mt-150 ml-72 px-6 bg-rose-50 w-300 h-155">
        <h1 className="text-3xl text-slate-800 mb-6 pt-12 pl-12 ">
          Celebration Cakes
        </h1>

        <div className="flex flex-wrap justify-center gap-6 pr-60 pt-5">
          <CakeCards title="Red Velvet Cake" description="blood" image="src/assets/RedVelvetCake.webp" price="£25.99" theme="Birthday" reviews="200" />
          <CakeCards title="Red Velvet Cake" description="blood" image="src/assets/RedVelvetCake.webp" price="£25.99" theme="Birthday" reviews="200" />
          <CakeCards title="Red Velvet Cake" description="blood" image="src/assets/RedVelvetCake.webp" price="£25.99" theme="Birthday" reviews="200" />
        </div>
        </div>
    
        </>
    )
}
export default Home