import { useRef, useState } from "react";
import {
  HomeIcon,
  MailOpenIcon,
  PencilAltIcon,
  LoginIcon,
  LogoutIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import NavbarSingleItem from "./NavbarSingleItem";

function Navbar() {
  const ulRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    if (!isOpen) {
      ulRef.current.classList.remove("translate-x-full");
      ulRef.current.classList.add("translate-x-0");
      setIsOpen(true);
    } else {
      ulRef.current.classList.add("translate-x-full");
      ulRef.current.classList.remove("translate-x-0");
      setIsOpen(false);
    }
  };
  return (
    <header
      className=" fixed
    w-full
    flex
    justify-between
    items-center
    px-4
    md:px-12
    transition-all
    duration-200
    h-24  
    bg-[#231a1a9c]"
    >
      <a href="#">
        <img className="h-12" src="logo.svg" alt="logo" />
      </a>
      <nav>
        <button className="md:hidden" onClick={handleClick}>
          <MenuIcon className="h-10 w-10 text-[#709c9c]" />
        </button>
        <ul
          ref={ulRef}
          className="
          fixed
          left-0
          right-0
          min-h-screen
          px-4
          pt-8
          space-y-12
          transform
          transition
          duration-300
          translate-x-full
          md:relative md:flex md:space-x-10 md:min-h-0 md:px-0 md:py-0 md:space-y-0 md:translate-x-0
        bg-[#231a1a9c]
        md:bg-transparent
        "
        >
          <li>
            <a>
              <NavbarSingleItem Icon={HomeIcon} title={"Home"} />
            </a>
          </li>
          <li>
            <a>
              <NavbarSingleItem Icon={PencilAltIcon} title={"Write"} />
            </a>
          </li>
          <li>
            <a>
              <NavbarSingleItem Icon={LogoutIcon} title={"Logout"} />
            </a>
          </li>
          <li>
            <a>
              <NavbarSingleItem Icon={MailOpenIcon} title={"Contact"} />
            </a>
          </li>
          <li>
            <img
              className="border-[#fca5a5] border-2 h-12 w-12 sm:h-20 sm:w-20  rounded-full cursor-pointer hover:animate-pulse "
              src="https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc5NjQ1ODEzMTgwNDA5Njc0/the-tragedy-of-eren-yeager-how-the-character-changes-throughout-attack-on-titan.jpg "
              alt="pfp"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;