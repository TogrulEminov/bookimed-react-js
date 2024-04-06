import { Link, NavLink } from 'react-router-dom';
import Logo from '../Components/Logo';
import leads from '../assets/svg/leads.svg';
import clinic from '../assets/svg/clinic.svg';
const Header = () => {
  return (
    <header className="max-w-full lg:max-w-[150px] w-full h-full lg:h-screen bg-white shadow-xl">
      <nav className="pb-5 h-full">
        <Logo />
        <ul className="flex items-center justify-center md:gap-x-5 lg:block py-5">
          <li className="mx-5 sm:mx-10 lg:mx-0 lg:mb-2">
            <NavLink
              to="/available-leads"
              className="flex flex-col gap-y-2 justify-center text-sm md:text-base px-3 items-center hover:bg-[#e6e3e36b] py-2">
              <img src={leads} className="w-5 h-5 mb-1" alt="" />
              <span className="font-serif">Available Leads</span>
            </NavLink>
          </li>
          <li className="mx-5 sm:mx-10  lg:mx-0 lg:mb-2">
            <NavLink
              to="/clinic"
              className="flex flex-col gap-y-2 justify-center text-sm md:text-base px-3 items-center hover:bg-[#e6e3e36b] py-2">
              <img src={clinic} className="w-5 h-5 mb-1" alt="" />
              <span className="font-serif">Clinic</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
