import React from "react";
import Cta from "../buttons/Cta";
import { CardBody, CardContainer, CardItem } from "../cards/3DCard";
import { FaAws } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

export default function Hero() {
  return (
    <div className="relative bg-black pb-8 md:pb-40">
      {/* <div className="absolute top-0 right-0 left-0 hidden md:block h-40 bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm"></div> */}
      {/* <div className="absolute bottom-0 right-0 left-0 h-40 hidden md:block bg-gradient-to-t from-white/5 to-white/0 backdrop-blur-sm"></div> */}
      <div className="c-container">
        <div className="space-y-8 pb-0 pt-20 md:pt-60">
          <h1 className="text-4xl sm:text-4xl text-center md:text-6xl font-heading text-white">
            Crafting top-tier, AI-centric Webapps
          </h1>
          <p className="font-body sm:text-base text-white/80 text-center max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, cum
            incidunt mollitia quae ullam animi ipsa, quod facere repudiandae eum
            veniam ipsum placeat ad consectetur quia fugit officia. Qui, vero.
            veniam ipsum placeat ad consectetur quia fugit officia.
          </p>
          <div className="flex justify-center pt-4 items-center">
            <Cta>Get in touch</Cta>
          </div>
        </div>
      </div>
      <div className="c-container-md sm:pt-14">
        <CardContainer className="w-full">
          <CardBody className="w-full grid grid-cols-12 gap-4">
            <CardItem
              translateZ="30"
              className="w-full col-span-6 sm:col-span-3"
            >
              <div className="h-72 w-full flex justify-center items-center bg-primary rounded-lg">
                <img
                  src="/assets/chatbot.png"
                  alt="chatbot"
                  className="w-28 h-auto duration-700"
                />
              </div>
            </CardItem>
            <CardItem
              translateZ="10"
              className="col-span-6 hidden sm:block h-full w-full"
            >
              <div className="bg-[#121316] rounded-lg h-96 w-full"></div>
            </CardItem>
            <div className="h-full w-full gap-4 col-span-6 sm:col-span-3 grid grid-cols-2">
              <CardItem
                className="h-20 flex justify-center items-center w-full rounded-lg"
                translateZ="40"
              >
                <FaAws className="text-4xl text-orange-300" />
              </CardItem>
              <CardItem
                className="bg-primary w-full rounded-lg h-20 flex justify-center items-center"
                translateZ="40"
              >
                <FaAws className="text-4xl text-orange-300" />
              </CardItem>
              <CardItem
                className="bg-primary w-full rounded-lg h-20 flex justify-center items-center"
                translateZ="20"
              >
                <FaAws className="text-4xl text-orange-300" />
              </CardItem>
              <CardItem
                className="h-20 w-full flex justify-center items-center rounded-lg"
                translateZ="30"
              >
                <TbBrandNextjs className="text-white text-4xl" />
              </CardItem>
              <CardItem
                className="bg-[#121316] sm:bg-primary col-span-2 py-36 w-full rounded-lg"
                translateZ="30"
              >
                <p></p>
                {/* <RiAiGenerate /> */}
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
}
