import React from "react";
import Image from "next/image";
import { education } from "../api/data";
import useInView from "../../hooks/useInView";

const EducationCom = () => {
  const [ref, isInView] = useInView<HTMLDivElement>();

  return (
    <div ref={ref}>
      <div id="EducationCom" className="min-h-full my-10">
        <h1
          className={`text-3xl font-bold text-lime-400 mb-6 text-center ${
            isInView ? "animate-fade-slide-up" : ""
          }`}
        >
          EDUCATION
        </h1>
        <div
          className={`flex flex-wrap gap-8 justify-center my-10 mx-5 ${
            isInView ? "fade-in delay-2" : ""
          }`}
        >
          {education.map((education) => {
            return (
              <div
                className={`flex flex-col justify-center items-center w-auto h-auto gap-5 p-5 bg-gray-900 hover:shadow-2xl hover:shadow-lime-400 transition-shadow rounded-lg md:flex-row hover:-translate-y-0 duration-700 hover:scale-105 ${
                  isInView ? "animate-fade-slide-up" : ""
                }`}
                key={education.id}
              >
                <div className="flex justify-center items-center">
                  <Image
                    src={education.image}
                    alt="logo company"
                    className="w-28 h-28 rounded-lg hover:-translate-y-10 duration-700 hover:scale-125"
                  ></Image>
                </div>
                <div className="max-w-sm h-auto space-y-3">
                  <div className="flex justify-center items-center sm:justify-between">
                    <h2 className="text-white text-2xl font-bold tracking-widest">
                      {education.educationName}
                    </h2>
                  </div>
                  <p className="text-sm text-gray-200">{education.status}</p>
                  <div className="flex justify-around items-center my-2">
                    <p className="text-sm text-gray-200">{education.date}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EducationCom;
