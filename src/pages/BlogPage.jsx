import { useParams } from "react-router-dom";
import { useState } from "react";

import Dashboard from "/src/components/Dashboard";
import NavBar from "/src/components/NavBar";
import Footer from "/src/components/Footer";
import {blogs} from "../data/blog";

function BlogPage(){
 const { id } = useParams();

 const blog = blogs.find((blog) => blog.id === Number(id));

 if (!blog) {
     return (
       <>
         <NavBar />
 
         <div className="p-10 text-center">
           <h1 className="text-3xl font-bold">Blog not found</h1>
         </div>
 
         <Footer />
       </>
     );
   }

    return(
        <>
        <NavBar />
        <Dashboard />
        <div class="relative z-10 -mt-170 ml-72 w-307 bg-rose-50 px-16 ">
    <div class="container mx-auto px-4 py-8">
        <div
            class="mt-3 bg-rose-50 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div class="">

                <a href="#" class="text-pink-600 hover:text-pink-700 transition duration-500 ease-in-out text-sm">
                    {blog.theme}
                </a>
                <h1 href="#" class="text-gray-900 font-bold text-4xl">{blog.title}</h1>
                <div class="py-5 text-sm font-regular text-gray-900 flex">
                    <span class="mr-3 flex flex-row text-pink-500 hover:text-pink-600 items-center">
                       
                      <i class="fa-solid fa-clock"></i><span class="ml-1 text-black">{blog.minutes} mins ago</span>
                    </span>

                    <a href="#" class="flex flex-row items-center text-pink-500 hover:text-pink-600  mr-3">
                        
                        <i class="fa-solid fa-user"></i><span class="ml-1 text-black">{blog.author}</span></a>

                    <a href="#" class="flex flex-row items-center text-pink-500 hover:text-pink-600">
                       
                        <i class="fa-solid fa-tag"></i><span class="ml-1 text-black">{blog.theme}</span></a>
                </div>
                <hr></hr>
                
                <p class="text-base leading-8 my-5">
                   {blog.content}
                </p>

                <h3 class="text-2xl font-bold my-5">#1. {blog.questionHeadline}</h3>

                <p class="text-base leading-8 my-5">
                    {blog.secondParagraph}
                </p>

                <blockquote class="text-md italic leading-8 my-5 p-5 text-pink-700 font-semibold">{blog.quote}</blockquote>

                
                <p>{blog.conclusion}</p>

                <br/>

                <a href="#"
                    class="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                    {blog.hashtags[0]}
                </a>,
                <a href="#"
                    class="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                    {blog.hashtags[1]}
                </a>,
                <a href="#"
                    class="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                    {blog.hashtags[2]}
                </a>,
                <a href="#"
                    class="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                    {blog.hashtags[3]}
                </a>,
                <a href="#"
                    class="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                    {blog.hashtags[4]}
                </a>

            </div>

        </div>
    </div>
</div>
<Footer/>
        </>
    )
}
export default BlogPage;