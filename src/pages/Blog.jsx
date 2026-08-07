import Dashboard from "/src/components/Dashboard"
import NavBar from "/src/components/NavBar"
import BlogCards from "/src/components/BlogCards"
import Footer from "/src/components/Footer"
import {blogs} from "../data/blog"
import { Link, NavLink } from 'react-router-dom';

function Blog(){
    return (
        <>
        <NavBar/>
        <Dashboard/>
         <div class=" -mt-170 ml-72 px-6 pb-10 bg-rose-50 w-307 h-170">
        <h2 class=" text-center text-3xl font-bold  text-slate-800 sm:text-4xl pt-5"> Delicake Blogs</h2>
        <p class="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4"></p>
        
        
        <div class="grid grid-cols-3 gap-4 ">
           {blogs.map((blog)=>(
            <BlogCards key={blog.id} {...blog}/>
           ))}
        </div>
       
        <Footer/>
        </div>
        </>
    )
}
export default Blog