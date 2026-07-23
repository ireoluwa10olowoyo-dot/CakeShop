import Dashboard from "/src/components/Dashboard"
import NavBar from "/src/components/NavBar"
import CakeCards from "/src/components/CakeCards"
import {cakes} from "../data/cake"
import useInfiniteScroll from "react-infinite-scroll-hook";
import React,{useState,useEffect, useContext, createContext} from 'react';
import Footer from "/src/components/Footer"

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

    const [infinteRef] = useInfiniteScroll({
        loading,
        hasNextPage,
        onLoadMore:fetchMoreData,
        disabled:false,
        rootMargin: "0px 0px 200px 0px",
    });

    return (
        <>
         <NavBar />
              <Dashboard />
              <div className="relative z-10 -mt-170 ml-72 px-6 py-6 bg-rose-50 w-307">
              <h1 className="text-center text-3xl font-bold  text-slate-800 sm:text-4xl pb-8">All Products</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cakes.map((cake) => (
                    <CakeCards 
                    title={cake.title}
                    description={cake.description}
                    image={cake.image}
                    price={cake.price}
                    theme={cake.theme}
                    reviews={cake.reviews}
                    />
                ))}

                </div>
                </div>
                <Footer/>
        </>
    )
}
export default AllProducts