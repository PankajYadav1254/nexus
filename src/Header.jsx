import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black text-white flex items-center justify-around h-10  ">
      {/* Logo */}
      <div>
        <Link
          to="/"
          className="text-2xl tracking-widest font-tektur shadow-[-20px_0px_10px_purple,20px_0px_10px_purple_inset,-20px_-10px_10px_blue,-20px_-10px_10px_blue_inset] rounded-[50%]"
        >
          NEXUS
        </Link>
      </div>

      {/* Navigation */}
      <div>
        <ul className="flex gap-20">
          <li className="text-1.9xl hover:scale-[1.05] hover:text-blue-700">
            <Link to="/movies">Movies</Link>
          </li>
          <li className="text-1.9xl hover:scale-[1.05] hover:text-blue-700">
            <Link to="/tv-shows">TV Shows</Link>
          </li>
          <li className="text-1.9xl hover:scale-[1.05] hover:text-blue-700">
            <Link to="/login">Sign Up</Link>
          </li>
        </ul>
      </div>

      {/* Search Bar */}
      <div className="flex items-center justify-center">
        <div className="relative">
          <input
            type="text"
            placeholder="   Search..."
            className="px-1 py-0.9 rounded w-60 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;