import React from "react";
import Cta from "../buttons/Cta";

export default function Hero() {
  return (
    <div className="relative bg-black">
      <div className="absolute top-0 right-0 left-0 hidden md:block h-40 bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm"></div>
      <div className="absolute bottom-0 right-0 left-0 h-40 hidden md:block bg-gradient-to-t from-white/5 to-white/0 backdrop-blur-sm"></div>
      <div className="c-container grid grid-cols-1 md:grid-cols-2">
        <div className="md:min-h-screen flex justify-center flex-col gap-8 py-20 pt-48">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading text-white">
            Crafting top-tier AI-centric Webapps
          </h1>
          <p className="font-body text-white/80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, cum
            incidunt mollitia quae ullam animi ipsa, quod facere repudiandae eum
            veniam ipsum placeat ad consectetur quia fugit officia. Qui, vero.
          </p>
          <div>
            <Cta>Get in touch</Cta>
          </div>
        </div>
      </div>
    </div>
  );
}
