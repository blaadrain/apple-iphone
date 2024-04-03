import { appleImg, bagImg, searchImg } from "../utils";
import { links } from "../constants";

const Navbar = () => {
  return (
    <header className="flex w-full items-center justify-between px-5 py-5 sm:px-10">
      <nav className="screen-max-width grid w-full grid-cols-2 sm:grid-cols-3">
        <img src={appleImg} alt="Apple" width={14} height={18} />
        <div className="flex justify-center gap-x-5 max-sm:hidden">
          {links.map((link) => (
            <p
              className="text-gray cursor-pointer text-sm transition hover:text-white"
              key={link}
            >
              {link}
            </p>
          ))}
        </div>
        <div className="flex justify-end gap-x-5">
          <img src={searchImg} alt="Search" width={18} height={18} />
          <img src={bagImg} alt="Bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
