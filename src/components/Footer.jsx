import { Link, NavLink } from 'react-router-dom';


function Footer(){
return(
    <>
    <footer class="flex flex-col space-y-10 justify-center m-10 ">

    <nav class="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
        <NavLink to="/Home" className="hover:text-gray-900">Home</NavLink>
        <NavLink to="/AllProducts" className="hover:text-gray-900">All Products</NavLink>
        <NavLink to="/About" className="hover:text-gray-900 ">About</NavLink>
        <NavLink to="/Support" className="hover:text-gray-900">Support</NavLink>
        <NavLink to="/Blog" className="hover:text-gray-900">Blog</NavLink>
    </nav>

    <div class="flex justify-center space-x-5">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
        </a>
        <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
        </a>
    </div>
    <p class="text-center text-gray-700 font-medium">&copy; 2026 Company Ltd. All rights reservered.</p>
</footer>
    </>
)
}
export default Footer