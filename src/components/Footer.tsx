import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineCopyright } from "react-icons/ai";

export default function Footer(): React.JSX.Element {
   return (
      <footer className="pt-24 pl-6 md:pl-0">
         <div className="max-w-5xl m-auto space-y-4">
            <nav className="flex items-center space-x-8 text-white">
               <Link to="/">
                  <FaFacebookF className="text-2xl" />
               </Link>
               <Link to="/">
                  <IoLogoInstagram className="text-2xl" />
               </Link>
               <Link to="/">
                  <FaTwitter className="text-2xl" />
               </Link>
               <Link to="/">
                  <FaYoutube className="text-2xl" />
               </Link>
            </nav>
            <nav className="text-sm text-gray-500 grid grid-cols-2 md:grid-cols-4 gap-y-3">
               <Link to="https://netflix.com/browse/audio-description" className="hover:underline">
                  Audio Description
               </Link>
               <Link to="https://help.netflix.com" className="hover:underline">
                  Help Center
               </Link>
               <Link to="https://netflix.com/redeem" className="hover:underline">
                  Gift Cards
               </Link>
               <Link to="https://media.netflix.com" className="hover:underline">
                  Media Center
               </Link>
               <Link to="https://netflix.com/browse" className="hover:underline">
                  Investor Relations
               </Link>
               <Link to="https://jobs.netflix.com" className="hover:underline">
                  Jobs
               </Link>
               <Link to="https://netflix.shop.com" className="hover:underline">
                  Netflix Shop
               </Link>
               <Link to="https://help.netflix.com/legal/termsofuse" className="hover:underline">
                  Terms of Use
               </Link>
               <Link to="https://help.netflix.com/legal/privacy" className="hover:underline">
                  Privacy
               </Link>
               <Link to="https://help.netflix.com/legal/notices" className="hover:underline">
                  Legal Notices
               </Link>
               <Link to="https://netflix.com/cookies" className="hover:underline">
                  Cookie Prefrences
               </Link>
               <Link to="https://help.netflix.com/legal/corpinfo" className="hover:underline">
                  Corporate Information
               </Link>
               <Link to="https://help.netflix.com/contactus" className="hover:underline">
                  Contact Us
               </Link>
               <Link to="https://netflix.com/adchoices" className="hover:underline">
                  Ad Choices
               </Link>
            </nav>
            <div>
               <button className="border border-gray-500 text-gray-500 p-1.5 text-sm hover:text-white">
                  Service Code
               </button>
            </div>
            <div className="flex items-center text-xs space-x-2 text-gray-500">
               <AiOutlineCopyright />
               <span>1997-2024 Netflix, Inc.</span>
            </div>
         </div>
      </footer>
   );
}
