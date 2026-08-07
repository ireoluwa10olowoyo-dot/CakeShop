import { Link, NavLink } from 'react-router-dom';


function Footer(){
return(
    <>
    <div class="bg-rose-50">
    <div class="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
        <div class="p-5 ">
            <h3 class=" relative z-10 font-bold text-xl text-indigo-600">Company Name</h3>
        </div>
        <div class="p-5">
            <div class="relative z-10 text-sm uppercase text-indigo-600 font-bold">Resources</div>
            <a class="relative z-10 my-3 block" href="/#">Documentation <span class="text-teal-600 text-xs p-1"></span></a><a
                class="relative z-10 my-3 block" href="/#">Tutorials <span class="text-teal-600 text-xs p-1"></span></a><a
                class="relative z-10 my-3 block" href="/#">Support <span class="text-teal-600 text-xs p-1">New</span></a>
        </div>
        <div class="p-5">
            <div class="text-sm uppercase text-indigo-600 font-bold">Support</div>
            <a class=" relative z-10 my-3 block" href="/#">Help Center <span class="text-teal-600 text-xs p-1"></span></a><a
                class="relative z-10 my-3 block" href="/#">Privacy Policy <span class="text-teal-600 text-xs p-1"></span></a><a
                class="relative z-10 my-3 block" href="/#">Conditions <span class="text-teal-600 text-xs p-1"></span></a>
        </div>
        <div class="p-5">
            <div class="text-sm uppercase text-indigo-600 font-bold">Contact us</div>
            <a class="relative z-10 my-3 block" href="/#">XXX XXXX, Floor 4 San Francisco, CA
                <span class="relative z-10 text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">contact@company.com
                <span class="relative z-10 text-teal-600 text-xs p-1"></span></a>
        </div>
    </div>
</div>

<div class=" pt-2">
    <div class="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col
      max-w-screen-lg items-center">
        <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            
        </div>
        <div class=" relative z-10 my-5">© Copyright 2026. All Rights Reserved.</div>
    </div>
</div>


    </>
)
}
export default Footer