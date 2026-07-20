import Dashboard from "/src/components/Dashboard"
import NavBar from "/src/components/NavBar"
import BlogCards from "/src/components/BlogCards"

function Blog(){
    return (
        <>
        <NavBar/>
        <Dashboard/>
         <div class="relative z-10 -mt-150 ml-72 px-6 pb-10 bg-rose-50 w-252 h-160">
        <h2 class=" text-center text-3xl font-bold  text-slate-800 sm:text-4xl pt-5"> Cake Shop Blogs</h2>
        <p class="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4"></p>
        
        <div class="grid grid-cols-3 gap-4 ">
            <BlogCards title="Best Cake" description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum." image="src/assets/RedVelvetCake.webp" profile="" author="Franz Ferdinand" date="Mar 16, 2020" minutes="15" theme="article" />
            <BlogCards title="Best Cake" description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum." image="src/assets/RedVelvetCake.webp" profile="" author="Franz Ferdinand" date="Mar 16, 2020" minutes="15" theme="article" />
            <BlogCards title="Best Cake" description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum." image="src/assets/RedVelvetCake.webp" profile="" author="Franz Ferdinand" date="Mar 16, 2020" minutes="15" theme="article" />
        </div>
        </div>
        </>
    )
}
export default Blog