import { useParams } from "react-router-dom";
import { useState } from "react";

import Dashboard from "/src/components/Dashboard";
import NavBar from "/src/components/NavBar";
import Footer from "/src/components/Footer";
import { cakes } from "../data/cake";

function CakeProductPage() {
  const { id } = useParams();

  const cake = cakes.find((cake) => cake.id === Number(id));

  const [quantity, setQuantity] = useState(1);

  if (!cake) {
    return (
      <>
        <NavBar />

        <div className="p-10 text-center">
          <h1 className="text-3xl font-bold">Cake not found</h1>
        </div>

        <Footer />
      </>
    );
  }

  function addToCart() {
    const cartItem = {
      ...cake,
      quantity,
    };

    console.log("Added to cart:", cartItem);
  }

  return (
    <>
      <NavBar />
      <Dashboard />

      <div className="relative z-10 -mt-170 ml-72 w-307 bg-rose-50 px-6 py-6">
        <div className="container mx-auto px-4 py-8">
          <div className="-mx-4 flex flex-wrap">
            {/* Images */}
            <div className="mb-8 w-full px-4 md:w-1/2">
              <img
                src={cake.image}
                alt={cake.title}
                className="mb-4 h-auto w-full rounded-lg shadow-md"
              />

              <div className="flex justify-center gap-4 overflow-x-auto py-4">
                {[1, 2, 3, 4].map((thumbnail) => (
                  <img
                    key={thumbnail}
                    src={cake.image}
                    alt={`${cake.title} thumbnail ${thumbnail}`}
                    className="size-16 cursor-pointer rounded-md object-cover opacity-60 transition duration-300 hover:opacity-100 sm:size-20"
                  />
                ))}
              </div>
            </div>

            {/* Product details */}
            <div className="w-full px-4 md:w-1/2">
              <h2 className="mb-2 text-3xl font-bold">
                {cake.title}
              </h2>

              <div className="mb-4">
                <span className="mr-2 text-2xl font-bold">
                  {cake.price}
                </span>
              </div>

              <div className="mb-4 flex items-center">
                <div className="flex text-amber-400">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>

                <span className="ml-2 text-gray-600">
                  {cake.rating} ({cake.reviews} reviews)
                </span>
              </div>

              <p className="mb-6 text-gray-700">
                {cake.description}
              </p>

              {/* Quantity */}
              <div className="mb-6">
                <label
                  htmlFor="quantity"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Quantity:
                </label>

                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  value={quantity}
                  onChange={(event) =>
                    setQuantity(
                      Math.max(1, Number(event.target.value))
                    )
                  }
                  className="w-16 rounded-md border border-gray-300 text-center shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200"
                />
              </div>

              {/* Buttons */}
              <div className="mb-6 flex space-x-4">
                <button
                  type="button"
                  onClick={addToCart}
                  className="flex cursor-pointer items-center gap-2 rounded-md bg-indigo-600 px-6 py-2 text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <i className="fas fa-shopping-cart"></i>
                  Add to Cart
                </button>

                <button
                  type="button"
                  className="flex cursor-pointer items-center gap-2 rounded-md bg-gray-200 px-6 py-2 text-gray-800 hover:bg-gray-300 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  <i className="fas fa-heart"></i>
                  Wishlist
                </button>
              </div>

              {/* Flavours */}
              <div>
                <h3 className="mb-2 text-lg font-semibold">
                  Flavours:
                </h3>

                <ul className="list-inside list-disc text-gray-700">
                  {cake.flavours?.map((flavour) => (
                    <li key={flavour}>{flavour}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CakeProductPage;