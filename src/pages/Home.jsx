import Dashboard from "/src/components/Dashboard"
import NavBar from "/src/components/NavBar";
import Footer from "/src/components/Footer"
import CakeCards from "/src/components/CakeCards"

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
          <CakeCards title="Red Velvet Cake" description="Our signature Red Velvet Cake features soft, moist layers of rich cocoa-infused sponge, perfectly paired with smooth, creamy cream cheese frosting. Finished with delicate red velvet crumbs, it's a timeless favourite that's perfect for birthdays, celebrations, or simply treating yourself." image="src/assets/RedVelvetCake.webp" price="£25.99" theme="Birthday" reviews="200" />
          <CakeCards title="Red Velvet Cake" description="Our signature Red Velvet Cake features soft, moist layers of rich cocoa-infused sponge, perfectly paired with smooth, creamy cream cheese frosting. Finished with delicate red velvet crumbs, it's a timeless favourite that's perfect for birthdays, celebrations, or simply treating yourself." image="src/assets/RedVelvetCake.webp" price="£25.99" theme="Birthday" reviews="200" />
          <CakeCards title="Red Velvet Cake" description="Our signature Red Velvet Cake features soft, moist layers of rich cocoa-infused sponge, perfectly paired with smooth, creamy cream cheese frosting. Finished with delicate red velvet crumbs, it's a timeless favourite that's perfect for birthdays, celebrations, or simply treating yourself." image="src/assets/RedVelvetCake.webp" price="£25.99" theme="Birthday" reviews="200" />
        </div>
        </div>
        <Footer/>
        </>
    )
}
export default Home