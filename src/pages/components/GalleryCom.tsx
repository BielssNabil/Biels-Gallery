import React from "react";
import Carousel from "./Carousel";
import useInView from "../../hooks/useInView";
import { galleryImages } from "../api/data";

const GalleryCom = () => {
  const [ref, isInView] = useInView<HTMLElement>();

  return (
    <section
      id="Gallery"
      ref={ref}
      className={`max-w-5xl mx-auto py-16 px-6 ${
        isInView ? "animate-fade-slide-up" : ""
      }`}
    >
      <h2 className="text-3xl font-bold text-lime-400 mb-10 text-center">
        MY GALLERY
      </h2>
      <Carousel images={galleryImages} />
    </section>
  );
};

export default GalleryCom;
