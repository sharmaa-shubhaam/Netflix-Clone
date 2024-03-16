import React from "react";
import BlackAdam_PNG from "../assets/Black-Adam.png";
import { FaPlay } from "react-icons/fa";
import { GrCircleInformation } from "react-icons/gr";
import { TbReload } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function Hero(): React.JSX.Element {
   return (
      <section className="relative h-[calc(100vh+25px)]">
         <img
            src="https://occ-0-70-1722.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABUTaU9f18EEwul7zTS7NUZQ1XctDlTFDFyekmhZyQHm-ABYSOdAzyDguTwhdHGfghW4EN18MiA4gdQwb2jAxNeV68_HksM6CMzLC.webp?r=6c6"
            alt="Hero section billboard."
            className="w-full h-full object-cover absolute -z-10"
         />
         <div className="py-28 pl-16 flex items-center h-full text-white">
            <div className="space-y-5">
               <div className="space-y-5">
                  <img src={BlackAdam_PNG} alt="black adam" className="w-[300px]" />
                  <h1 className="text-2xl font-semibold">Watch in English, Hindi, Tamil, Telugu</h1>
                  <p className="w-2/4 font-medium">
                     It stars Dwayne Johnson as Teth-Adam / Black Adam, an ancient superhuman who is released from his
                     magic imprisonment by a group of archeologists to free the nation of Kahndaq from the crime
                     syndicate Intergang, whose local leader plans to obtain an ancient relic called the Crown of Sabbac
                     to take control of it.
                  </p>
               </div>
               <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center space-x-6">
                     <Link to="https://www.netflix.com/watch/81416258?trackId=255824129&tctx=0%2C0%2C37bc6c9e-084a-4414-a2ca-ef117a66f69c-143240131%2C37bc6c9e-084a-4414-a2ca-ef117a66f69c-143240131%7C2%2Cunknown%2C%2C%2CtitlesResults%2C%2CVideo%3A81416258%2CdetailsPagePlayButton">
                        <button className="px-7 py-2.5 bg-white text-black rounded-md font-semibold flex items-center space-x-3 hover:bg-white/70">
                           <FaPlay className="text-2xl" />
                           <span>Play</span>
                        </button>
                     </Link>
                     <button className="px-5 py-2.5 bg-[#4b4b4bb0] text-white rounded-md font-semibold flex items-center space-x-3 hover:bg-[#4b4b4bce]">
                        <GrCircleInformation className="text-2xl" />
                        <span>More Info</span>
                     </button>
                  </div>
                  <div className="flex items-center space-x-3">
                     <div className="p-0.5 rounded-full border border-white hover:bg-gray-400/15">
                        <TbReload className="text-[26px] cursor-pointer" />
                     </div>
                     <div className="bg-gray-500/20 pr-16 pl-5 py-1 relative">
                        <span className="h-full p-0.5 bg-white absolute top-0 left-0"></span>
                        <span className="">TV-14</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
