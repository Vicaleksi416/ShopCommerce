import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <nav className="flex items-center justify-around h-20 max-w-6xl mx-auto">
        <Link to={'/'}>
          <div className="ml-5">
            <h1 className="text-red-900 font-bold text-2xl md:text-3xl cursor-pointer tracking-wide">
              REACT REDUX SHOPPING CART
            </h1>
          </div>
        </Link>
        <ul className="flex items-center space-x-6 text-gray-800 font-semibold">
          <Link to={'/'}>
            <li className="cursor-pointer text-lg md:text-xl">Home</li>
          </Link>
          <Link to={'/cart'}>
            <li className="cursor-pointer text-lg md:text-xl">Cart</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
