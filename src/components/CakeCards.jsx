import { NavLink } from "react-router-dom";

function CakeCards({
  id,
  title,
  description,
  image,
  price,
  theme,
  reviews,
}) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative h-80 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="absolute right-4 top-4">
          <button
            type="button"
            className="translate-y-2 cursor-pointer rounded-full bg-white/90 p-2 text-gray-800 opacity-0 shadow-md transition-all duration-300 hover:bg-red-500 hover:text-white group-hover:translate-y-0 group-hover:opacity-100"
          >
            <i className="fas fa-heart"></i>
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 translate-y-10 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <NavLink
            to={`/cake/${id}`}
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-pink-500 py-2 font-medium text-white transition-colors duration-300 hover:bg-pink-700"
          >
            <i className="fas fa-shopping-cart"></i>
            Purchase
          </NavLink>
        </div>

        <span className="absolute left-4 top-4 rounded-full bg-pink-400 px-2 py-1 text-xs font-bold text-white">
          {theme}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-800">{title}</h3>

            <p className="text-sm text-slate-500">
              {description}
            </p>
          </div>

          <div className="text-right">
            <p className="text-lg font-bold text-pink-500">{price}</p>
          </div>
        </div>

        <div className="mt-3 flex items-center">
          <div className="flex text-amber-400">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
          </div>

          <span className="ml-2 text-xs text-slate-500">
            ({reviews} reviews)
          </span>
        </div>
      </div>
    </div>
  );
}

export default CakeCards;