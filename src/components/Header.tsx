import React from "react";
import Netflix_PNG from "../assets/netflix.png";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";

export default function Header(): React.JSX.Element {
   return (
      <header className="w-full py-5 px-12 bg-black/50 fixed top-0 z-50">
         <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8 text-sm">
               <Link to="https://netflix.com/browse">
                  <img src={Netflix_PNG} alt="netflix-clone" className="w-28 aspect-auto" />
               </Link>
               <nav className="flex items-center space-x-4 font-medium">
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
            </div>
            <div className="flex items-center space-x-5">
               <CiSearch className="text-2xl cursor-pointer" />
               <Link to="https://netflix.com/kids" className="text-sm font-medium">
                  Kids
               </Link>
               <IoNotificationsOutline className="text-2xl cursor-pointer" />
            </div>
         </div>
      </header>
   );
}
