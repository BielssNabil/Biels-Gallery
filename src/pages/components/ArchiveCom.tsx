import React, { useState, useEffect } from "react";
import { archiveFiles } from "../api/data";
import useInView from "../../hooks/useInView";

const ArchiveCom = () => {
  const [ref, isInView] = useInView<HTMLDivElement>();
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      setIsAndroid(/Android/i.test(navigator.userAgent));
    }
  }, []);

  return (
    <div ref={ref} className={`min-h-full py-10 ${isInView ? "animate-fade-slide-up" : ""}`}>
      <h1 className="text-3xl font-bold text-lime-400 mb-6 text-center">
        TASK ARCHIVE
      </h1>
      <div className="flex flex-wrap gap-8 justify-center my-10 mx-5 fade-in delay-2 max-w-full">
        {archiveFiles.slice(0, 4).map((file, index) => (
          <div
            key={index}
            className="hover:scale-105 hover:shadow-lime-400 transition-shadow w-1/3 sm:w-48 p-4 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow flex flex-col items-center"
            onClick={() => window.open(file.url, "_blank")}
          >
            <div className="max-w-full max-h-48 mb-2 overflow-hidden rounded-md shadow-md border border-gray-200 bg-white" style={{ height: "150px" }}>
              {isAndroid ? (
                <div className="flex justify-center items-center h-full w-full text-gray-500 font-semibold select-none">
                  PDF Preview Unavailable on Android
                </div>
              ) : (
                <embed
                  src={file.url}
                  type="application/pdf"
                  width="100%"
                  height="150px"
                  style={{ transformOrigin: "top left" }}
                />
              )}
            </div>
            <div className="text-center text-sm font-semibold truncate w-full text-gray-800">{file.name}</div>
          </div>
        ))}
        <div className="hover:scale-105 hover:shadow-lime-400 transition-shadow w-1/3 sm:w-48 p-4 justify-center items-center flex bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow">
          <a
            href="/full-archive"
            className="text-lime-400 hover:text-lime-600 font-semibold"
          >
            See All
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArchiveCom;
