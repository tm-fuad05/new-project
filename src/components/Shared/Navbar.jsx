import { NavLink } from "react-router-dom";
import "./Styles/style.css";
import { GoArrowRight } from "react-icons/go";

const Navbar = () => {
  const navMenu = (
    <>
      <NavLink
        className="before:w-0 hover:before:w-full before:bg-primary before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-primary transition-all duration-300 before:left-0 cursor-pointer capitalize"
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className="before:w-0 hover:before:w-full before:bg-primary before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-primary transition-all duration-300 before:left-0 cursor-pointer capitalize"
        to={"about"}
      >
        About
      </NavLink>
      <NavLink
        className="before:w-0 hover:before:w-full before:bg-primary before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-primary transition-all duration-300 before:left-0 cursor-pointer capitalize"
        to={"services"}
      >
        Services
      </NavLink>

      <NavLink
        className="before:w-0 hover:before:w-full before:bg-[#64E79E] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#64E79E] transition-all duration-300 before:left-0 cursor-pointer capitalize"
        to={`portfolio`}
      >
        Portfolio
      </NavLink>

      <NavLink
        className="before:w-0 hover:before:w-full before:bg-primary before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-primary transition-all duration-300 before:left-0 cursor-pointer capitalize"
        to={"pages"}
      >
        Pages
      </NavLink>
      <NavLink
        className="before:w-0 hover:before:w-full before:bg-primary before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-primary transition-all duration-300 before:left-0 cursor-pointer capitalize"
        to={"blog"}
      >
        Blog
      </NavLink>
    </>
  );

  return (
    <div className="px-20 pt-10 relative z-30">
      <div className="gradient-border">
        <nav className="gradient-border-inner  py-2 px-2 pl-7 justify-between items-center flex">
          <a href="/" className="text-2xl font-medium text-white">
            Logo <span className="text-primary">Here</span>
          </a>
          <ul className="flex gap-5 justify-center text-white text-lg font-light">
            {navMenu}
          </ul>
          <div className="flex gap-3 items-center">
            <button className="border border-primary rounded-full py-3 px-6 text-primary hover:bg-primary hover:text-white transition-all duration-300 font-medium">
              Log In
            </button>
            <button className="bg-white rounded-full py-1.5 pl-4 pr-1 flex items-center gap-2 font-medium group">
              Request a Demo{" "}
              <GoArrowRight className="bg-primary rounded-full p-1.5 my-  text-black text-[40px] group-hover:translate-x-2 duration-300" />
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
