import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Movies from "./components/Movies";
import trendingMovies from "./helper/trendingMovies";
import indianMovies from "./helper/IndianMovies";
import onlyOnNetflix from "./helper/OnlyOnNetflix";
import Footer from "./components/Footer";

export default function App(): React.JSX.Element {
   return (
      <div className="pb-4">
         <Header />
         <Hero />
         <div className="-mt-10 space-y-6">
            <Movies movies={trendingMovies} title="Trending Now" />
            <Movies movies={indianMovies} title="Indian Movies" />
            <Movies movies={onlyOnNetflix} title="Only On Netflix" />
         </div>
         <Footer />
      </div>
   );
}
