import React from "react";
import Netflix_PNG from "../assets/netflix.png";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Header(): React.JSX.Element {
   return (
      <header className="w-full py-5 px-12 bg-black/50 fixed top-0 z-50">
         <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8 text-sm">
               <Link to="https://netflix.com/browse">
                  <img src={Netflix_PNG} alt="netflix-clone" className="w-28 aspect-auto" />
               </Link>
               <nav className="lg:flex items-center space-x-4 font-medium hidden">
                  <Link to="https://netflix.com/browse" className="link-hover !font-bold text-white hover:!text-white">
                     Home
                  </Link>
                  <Link to="https://netflix.com/browse/genre/83" className="link-hover">
                     TV Shows
                  </Link>
                  <Link to="https://netflix.com/browse/genre/34399" className="link-hover">
                     Movies
                  </Link>
                  <Link to="https://netflix.com/latest" className="link-hover">
                     New & Popular
                  </Link>
                  <Link to="https://netflix.com/browse/my-list" className="link-hover">
                     My List
                  </Link>
                  <Link to="https://netflix.com/browse/original-audio" className="link-hover">
                     Browse by Languages
                  </Link>
               </nav>
               <div className="flex items-center cursor-pointer lg:hidden">
                  <span className="link-hover hover:text-white font-medium">Browse</span>
                  <IoMdArrowDropdown className="text-2xl" />
               </div>
            </div>
            <div className="flex items-center space-x-5">
               <CiSearch className="text-2xl cursor-pointer" />
               <Link to="https://netflix.com/kids" className="text-sm font-medium">
                  Kids
               </Link>
               <IoNotificationsOutline className="text-2xl cursor-pointer" />
               <div className="flex items-center space-x-1 cursor-pointer">
                  <div className="w-8 h-8 bg-[#efefef] rounded overflow-hidden">
                     <img
                        src="https://occ-0-70-1722.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
                        alt=""
                        className="w-full"
                     />
                  </div>
                  <IoMdArrowDropdown className="text-2xl hover:rotate-180 ease-in-out transition" />
               </div>
            </div>
         </div>
      </header>
   );
}
