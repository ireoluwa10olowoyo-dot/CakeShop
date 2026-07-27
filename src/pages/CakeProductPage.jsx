import Dashboard from "/src/components/Dashboard"
import NavBar from "/src/components/NavBar"
import Footer from "/src/components/Footer"

function CakeProductPage(){
return(
    <>
    <NavBar/>
    <Dashboard/>
    <div class="bg-gray-100 relative z-10 -mt-170 ml-72 px-6 py-6 bg-rose-50 w-307">
  <div class="container mx-auto px-4 py-8">
    <div class="flex flex-wrap -mx-4">
     
      <div class="w-full md:w-1/2 px-4 mb-8">
        <img src="src/assets/RedVelvetCake.webp" alt="Product"
                    class="w-full h-auto rounded-lg shadow-md mb-4" id="mainImage"/>
        <div class="flex gap-4 py-4 justify-center overflow-x-auto">
          <img src="src/assets/RedVelvetCake.webp" alt="Thumbnail 1"
                        class="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                        onclick="changeImage(this.src)"/>
          <img src="src/assets/RedVelvetCake.webp" alt="Thumbnail 2"
                        class="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                        onclick="changeImage(this.src)"/>
          <img src="src/assets/RedVelvetCake.webp" alt="Thumbnail 3"
                        class="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                        onclick="changeImage(this.src)"/>
          <img src="src/assets/RedVelvetCake.webp" alt="Thumbnail 4"
                        class="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                        onclick="changeImage(this.src)"/>
        </div>
      </div>

      <div class="w-full md:w-1/2 px-4">
        <h2 class="text-3xl font-bold mb-2">Red Velvet Cake</h2>
        <p class="text-gray-600 mb-4">SKU: WH1000XM4</p>
        <div class="mb-4">
          <span class="text-2xl font-bold mr-2">£349.99</span>
          <span class="text-gray-500 line-through">£399.99</span>
        </div>
        <div class="flex items-center mb-4">
          <div class="flex text-amber-400">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            <span class="ml-2 text-gray-600">4.5 (120 reviews)</span>
        </div>
        <p class="text-gray-700 mb-6">Treat yourself to our delicious Red Velvet Cake, featuring moist layers of velvety sponge, rich cream cheese frosting, and a delicate cocoa flavour. Baked fresh with the finest ingredients, it's the perfect centrepiece for birthdays, weddings, anniversaries, or any special occasion. One bite is all it takes to see why it's one of our best-selling cakes.</p>

        

        <div class="mb-6">
          <label for="quantity" class="block text-sm font-medium text-gray-700 mb-1">Quantity:</label>
          <input type="number" id="quantity" name="quantity" min="1" value="1"
                        class="w-12 text-center rounded-md border-gray-300  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
        </div>

        <div class="flex space-x-4 mb-6">
          <button
                        class="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer">
                         <i class="fas fa-shopping-cart"></i>   
                        Add to Cart
                    </button>
          <button
                        class="bg-gray-200 flex gap-2 items-center  text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 cursor-pointer">
                       
                       <i class="fas fa-heart"></i> Wishlist
                    </button>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-2">Flavours:</h3>
          <ul class="list-disc list-inside text-gray-700">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  </div>
  <Footer/>

    </>
)

}
export default CakeProductPage