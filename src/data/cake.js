export const cakes = [
  {
    id: 1,
    title: "Red Velvet Cake",
    description:
      "Soft red velvet sponge paired with smooth cream cheese frosting and finished with red velvet crumbs.",
    image: "/src/assets/RedVelvetCake.webp",
    price: "£14.00",
    theme: "Birthday",
    reviews: 40,
    rating: 4.5,
    flavours: ["Classic", "Chocolate", "Vanilla", "Strawberry"],
  },
  {
    id: 2,
    title: "Chocolate Cake",
    description:
      "Rich chocolate sponge layered with smooth chocolate buttercream and finished with chocolate decorations.",
    image: "/src/assets/ChocolateCake.webp",
    price: "£16.00",
    theme: "Celebration",
    reviews: 52,
    rating: 4.7,
    flavours: ["Milk Chocolate", "Dark Chocolate", "Caramel"],
  },
  {
    id: 3,
    title: "Vanilla Cake",
    description:
      "Light vanilla sponge filled with smooth vanilla buttercream, perfect for birthdays and celebrations.",
    image: "/src/assets/VanillaCake.webp",
    price: "£13.00",
    theme: "Birthday",
    reviews: 35,
    rating: 4.4,
    flavours: ["Vanilla", "Lemon", "Strawberry"],
  },
  {
    id: 4,
    title: "Strawberry Cake",
    description:
      "Soft strawberry sponge layered with strawberry buttercream and decorated with fresh strawberries.",
    image: "/src/assets/StrawberryCake.webp",
    price: "£15.00",
    theme: "Summer",
    reviews: 31,
    rating: 4.5,
    flavours: ["Strawberry", "Vanilla", "White Chocolate"],
  },
  {
    id: 5,
    title: "Lemon Cake",
    description:
      "Fresh lemon sponge layered with smooth lemon buttercream for a light and refreshing flavour.",
    image: "/src/assets/LemonCake.webp",
    price: "£13.50",
    theme: "Summer",
    reviews: 27,
    rating: 4.3,
    flavours: ["Lemon", "Vanilla", "Lemon and Raspberry"],
  },
  {
    id: 6,
    title: "Carrot Cake",
    description:
      "A moist spiced carrot sponge with smooth cream cheese frosting and a delicate walnut topping.",
    image: "/src/assets/CarrotCake.webp",
    price: "£14.50",
    theme: "Classic",
    reviews: 46,
    rating: 4.6,
    flavours: ["Classic Carrot", "Walnut", "Orange"],
  },
  {
    id: 7,
    title: "Black Forest Cake",
    description:
      "Chocolate sponge layered with cherry filling and fresh cream, finished with chocolate shavings.",
    image: "/src/assets/BlackForestCake.webp",
    price: "£18.00",
    theme: "Luxury",
    reviews: 38,
    rating: 4.7,
    flavours: ["Chocolate Cherry", "Dark Chocolate", "Vanilla"],
  },
  {
    id: 8,
    title: "Victoria Sponge Cake",
    description:
      "A traditional vanilla sponge filled with strawberry jam and smooth vanilla buttercream.",
    image: "/src/assets/VictoriaSpongeCake.webp",
    price: "£12.00",
    theme: "Classic",
    reviews: 61,
    rating: 4.8,
    flavours: ["Strawberry Jam", "Raspberry Jam", "Vanilla"],
  },
  {
    id: 9,
    title: "Coffee Cake",
    description:
      "A rich coffee-flavoured sponge layered with smooth coffee buttercream and finished with walnuts.",
    image: "/src/assets/CoffeeCake.webp",
    price: "£15.50",
    theme: "Classic",
    reviews: 29,
    rating: 4.4,
    flavours: ["Coffee", "Mocha", "Coffee and Walnut"],
  },
  {
    id: 10,
    title: "Biscoff Cake",
    description:
      "A soft caramel sponge layered with Biscoff buttercream and topped with Biscoff biscuit crumbs.",
    image: "/src/assets/BiscoffCake.webp",
    price: "£17.00",
    theme: "Popular",
    reviews: 73,
    rating: 4.9,
    flavours: ["Biscoff", "Caramel", "Vanilla"],
  },
  {
    id: 11,
    title: "Cookies and Cream Cake",
    description:
      "Chocolate sponge filled with cookies-and-cream frosting and decorated with crushed cookies.",
    image: "/src/assets/CookiesAndCreamCake.webp",
    price: "£17.50",
    theme: "Popular",
    reviews: 58,
    rating: 4.8,
    flavours: ["Cookies and Cream", "Chocolate", "Vanilla"],
  },
  {
    id: 12,
    title: "Salted Caramel Cake",
    description:
      "Soft vanilla sponge layered with salted caramel buttercream and finished with caramel drizzle.",
    image: "/src/assets/SaltedCaramelCake.webp",
    price: "£16.50",
    theme: "Luxury",
    reviews: 49,
    rating: 4.7,
    flavours: ["Salted Caramel", "Vanilla Caramel", "Chocolate Caramel"],
  },
];

// The first three objects from cakes
export const cakeHome = cakes.slice(0, 3);