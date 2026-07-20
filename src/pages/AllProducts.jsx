import Dashboard from "/src/components/Dashboard"
import NavBar from "/src/components/NavBar"
import CakeCards from "/src/components/CakeCards"
import {cakes} from "../data/cake"
import useInfiniteScroll from "react-infinite-scroll-hook";

function AllProducts(){

    const [cakeList, setCakeList] = useState(cakes);
    const [hasNextPage, setHasNextPage] = useState(true);
    const [loading, setLoading] = useState(false);

    const fetchMoreData = () =>{
        setLoading(true);
        setTimeout(() => {
            setCakeList((prev) => [...prev, ...cakes.from({length:10})]);
            setLoading(false);
            if(cakeList.length >= 50) setHasNextPage(false);
        },1000)
    }

    const [infinteRef] = useInifinteScroll({
        loading,
        hasNextPage,
        onLoadMore:fetchMoreData,
        dis
    })

    return (
        <>
         <NavBar />
              <Dashboard />
              <div className="relative z-10 -mt-150 ml-72 px-6 bg-rose-50 w-252.5 h-155">
                <h1 className="text-3xl text-slate-800 mb-6 pt-12 pl-12 font-medium">
                  Cake Shop Products
                </h1>
        
                <div className="grid grid-cols-3 gap-8 pr-10 pt-5 pl-10 ">
                  <CakeCards title="Red Velvet Cake" description="blood" image="src/assets/RedVelvetCake.webp" price="£25.99" theme="Birthday" reviews="200" />
                  <CakeCards title="Red Velvet Cake" description="blood" image="src/assets/RedVelvetCake.webp" price="£25.99" theme="Birthday" reviews="200" />
                  <CakeCards title="Red Velvet Cake" description="blood" image="src/assets/RedVelvetCake.webp" price="£25.99" theme="Birthday" reviews="200" />
                </div>
                </div>

        </>
    )
}
export default AllProducts