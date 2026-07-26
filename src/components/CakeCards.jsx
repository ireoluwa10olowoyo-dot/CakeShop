

function CakeCards({title,description,image,price,theme,reviews}){



return(
    <>
        <div class="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                <div class="relative overflow-hidden h-80">
                    <img src={image}
                         alt="Cake" 
                         class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div class="absolute top-4 right-4">
                        <button class="bg-white/90 text-gray-800 p-2 rounded-full shadow-md transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-500 hover:text-white focus:bg-red-500 cursor-pointer">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                    <div class="absolute bottom-0 left-0 right-0 p-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <button class="w-full bg-pink-500 text-white py-2 rounded-lg font-medium hover:bg-pink-700 transition-colors duration-300 flex items-center justify-center cursor-pointer focus:bg-pink-700 gap-2">
                            <i class="fas fa-shopping-cart"></i> Purchase
                        </button>
                    </div>
                    <span class="absolute top-4 left-4 bg-pink-400 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse-slow">{theme}</span>
                </div>
                <div class="p-5">
                    <div class="flex justify-between items-start">
                        <div>
                            <h3 class="text-lg font-bold text-slate-800">{title}</h3>
                            <p class="text-slate-500 text-sm">{description}</p>
                        </div>
                        <div class="text-right">
                            <p class="text-lg font-bold text-pink-500">{price}</p>
                            
                        </div>
                    </div>
                    <div class="mt-3 flex items-center">
                        <div class="flex text-amber-400">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                        <span class="text-slate-500 text-xs ml-2">({reviews} reviews)</span>
                    </div>
                </div>
            </div>
    
    </>
)

}
export default CakeCards