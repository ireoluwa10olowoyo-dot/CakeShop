import Dashboard from "/src/components/Dashboard"
import NavBar from "/src/components/NavBar"
import BlogCards from "/src/components/BlogCards"

function Blog(){
    return (
        <>
        <NavBar/>
        <Dashboard/>
         <div class="text-center">
        <h2 class="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl"> Cake Shop Blogs</h2>
        <p class="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">  </p>
        </div>
        <BlogCards title="Best Cake" description=image, profile,author,date,minutes, theme />
        </>
    )
}
export default Blog