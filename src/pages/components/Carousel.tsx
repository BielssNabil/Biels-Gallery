import React, { useState } from "react";

interface CarouselProps {
  images: { src: string; alt: string }[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previewOpen, setPreviewOpen] = useState(false);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const openPreview = () => {
    setPreviewOpen(true);
  };

  const closePreview = () => {
    setPreviewOpen(false);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <div className="flex items-center justify-center">
          <button
            onClick={prevSlide}
            className="bg-lime-400 text-gray-900 rounded-full p-2 hover:bg-lime-300 transition mr-4"
            aria-label="Previous Slide"
          >
            &#10094;
          </button>
          <div
            className="w-48 h-48 rounded-lg cursor-pointer border-4 border-lime-400 flex items-center justify-center"
            onClick={openPreview}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
            }}
          >
            <img
              src={images[currentIndex % 10].src}
              alt={images[currentIndex % 10].alt}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
          <button
            onClick={nextSlide}
            className="bg-lime-400 text-gray-900 rounded-full p-2 hover:bg-lime-300 transition ml-4"
            aria-label="Next Slide"
          >
            &#10095;
          </button>
        </div>
        <div
          className="mt-4 flex justify-center space-x-4"
        >
          {images.length > 10 ? (
            <>
              {images.slice(0, 10).map((image, index) => (
                <div
                  key={index}
                  className={`w-12 h-12 rounded-lg cursor-pointer border-2 ${
                    index === currentIndex ? "border-lime-400" : "border-transparent"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  style={{ transition: "transform 0.3s ease" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
              ))}
              <div
                key="more"
                className="w-auto h-12 px4 rounded-lg cursor-pointer border-2 border-transparent flex items-center justify-center bg-gray-800 text-lime-400 font-bold text-sm hover:bg-gray-700 transition"
                onClick={() => window.location.href = "/gallery"}
              >
                See All
              </div>
            </>
          ) : (
            images.map((image, index) => (
              <div
                key={index}
                className={`w-12 h-12 rounded-lg cursor-pointer border-2 ${
                  index === currentIndex ? "border-lime-400" : "border-transparent"
                }`}
                onClick={() => setCurrentIndex(index)}
                style={{ transition: "transform 0.3s ease" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            ))
          )}
        </div>
      </div>

      {previewOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={closePreview}
        >
          <div
            className="relative bg-gray-900 rounded-lg p-4 max-w-3xl max-h-3xl shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closePreview}
              className="absolute top-2 right-2 text-white bg-gray-800 bg-opacity-75 rounded-full p-2 hover:bg-opacity-100 transition"
              aria-label="Close Preview"
            >
              &#10005;
            </button>
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
              style={{ touchAction: "none" }}
              onWheel={(e) => {
                e.preventDefault();
                const img = e.currentTarget;
                const scale = Number(img.style.scale) || 1;
                let newScale = scale - e.deltaY * 0.01;
                newScale = Math.min(Math.max(newScale, 1), 3);
                img.style.transform = `scale(${newScale})`;
                img.style.scale = newScale.toString();
                img.style.transform = `scale(${newScale})`;
                img.style.scale = newScale.toString();
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
