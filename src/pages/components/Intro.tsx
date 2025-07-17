import React from "react";
import Image from "next/image";
import MyImg from "../../../public/intro.png";
import useInView from "../../hooks/useInView";

const Intro = () => {
  const [ref, isInView] = useInView<HTMLDivElement>();

  return (
    <div className="bg-[url('/white-texture.jpg')] bg-cover bg-center" ref={ref}>
      <div
        className="grid grid-cols-1 md:grid-cols-2 flex-wrap gap-4 px-5 py-10 min-h-screen"
        id="intro"
      >
        <div className={`flex items-center justify-center ${isInView ? "fade-in" : ""}`}>
          <div>
            <div className="flex mt-1">
              <h1 className="flex-none text-5xl mr-4 font-semibold text-gray-900">
                WELCOME TO
              </h1>
            </div>
            <h1 className="font-bold font-serif text-6xl bg-clip-text text-lime-400">
              BIELS GALLERY
            </h1>

            <h3 className="text-2xl text-gray-900 font-semibold">
              Gallery of Nabil Satya Pramana
            </h3>
          </div>
        </div>
        <div className={`flex items-center justify-start border-4 border-double border-lime-400 rounded-4xl ${isInView ? "fade-in" : ""}`}>
          <Image src={MyImg} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
