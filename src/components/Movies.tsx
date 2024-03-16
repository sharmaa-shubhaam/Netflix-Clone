import React, { useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

type MoviesProps = {
   movies: (string | undefined)[];
   title: string;
};

export default function Movies({ movies, title }: MoviesProps): React.JSX.Element {
   const [showButton, setShowButton] = useState({ left: false, right: true });
   const scroll_ref = useRef<any>(null);

   // scroll function fire when user scroll everytime.
   const scroll = (e: React.UIEvent<HTMLDivElement>) => {
      const scroll_width = e.currentTarget.scrollWidth;
      const client_width = e.currentTarget.clientWidth;
      const scroll_left = e.currentTarget.scrollLeft;

      // if total width of the scroll is equale to client width.
      // client width is fixed and scroll left is chaning when user scroll.
      // according to that I will show left right button.
      if (scroll_width === client_width + scroll_left) setShowButton({ left: true, right: false });
      else if (scroll_left > 120) setShowButton({ left: true, right: true });
      else setShowButton({ left: false, right: true }); // default behaviour
   };

   // scroll back to left with 500px
   const backward = () => (scroll_ref.current.scrollLeft -= 500);

   // scroll forward towards right with 500px
   const forward = () => (scroll_ref.current.scrollLeft += 500);

   return (
      <div className="space-y-2.5">
         <div className="pl-16">
            <h2 className="text-xl font-semibold text-white">{title}</h2>
         </div>
         <div className="w-full relative h-[155px] flex justify-between">
            {showButton.left ? (
               <div className="z-10 bg-black/50 h-full px-0 flex items-center cursor-pointer" onClick={backward}>
                  <IoIosArrowBack className="text-6xl" />
               </div>
            ) : (
               <div />
            )}
            <div
               className="overflow-x-auto absolute px-16 flex space-x-2 scroll-smooth"
               id="movies-scrollbar"
               onScroll={scroll}
               ref={scroll_ref}
            >
               {movies.map((movie, index) => (
                  <img
                     src={movie}
                     key={index}
                     alt="Movies"
                     className="rounded-sm w-[270px] cursor-pointer hover:scale-105 transition-all"
                  />
               ))}
            </div>
            {showButton.right && (
               <div className="z-10 bg-black/50 h-full px-0 flex items-center cursor-pointer" onClick={forward}>
                  <IoIosArrowForward className="text-6xl" />
               </div>
            )}
         </div>
      </div>
   );
}
