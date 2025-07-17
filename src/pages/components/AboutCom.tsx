import React from 'react';
import useInView from '../../hooks/useInView';

const AboutCom = () => {
  const [ref, isInView] = useInView<HTMLElement>();

  return (
    <section
      id="about"
      ref={ref}
      className={`max-w-3xl h-auto mx-auto text-center py-16 px-6 relative ${
        isInView ? "fade-in delay-2" : ""
      }`}
    >
      <h2
        className={`text-3xl font-bold text-lime-400 mb-6 ${
          isInView ? "animate-fade-slide-up" : ""
        }`}
      >
        WHO AM I ?
      </h2>
      <p
        className={`text-gray-300 mb-3 text-wrap text-justify indent-7 ${
          isInView ? "animate-fade-slide-up" : ""
        }`}
      >
        Hi! I&apos;am Nabil Satya Pramana, a student with a unique background in Software Engineering and currently studying Government Science at Jenderal Achmad Yani University. Although my academic journey began in technology, I&apos;ve always believed that real change happens when digital innovation meets public services.
      </p>
      <p
        className={`text-gray-300 mb-3 text-justify indent-7 ${
          isInView ? "animate-fade-slide-up" : ""
        }`}
      >
        I&apos;m passionate about exploring how technology can support better governance, empower communities, and create more inclusive policies. Shifting from programming to studying society has given me a broader perspective on how digital and social systems work together.
      </p>
      <p
        className={`text-gray-300 mb-3 text-justify indent-7 ${
          isInView ? "animate-fade-slide-up" : ""
        }`}
      >
        Outside of academia, I enjoy running and being part of the local community in Bandung. These are ways I stay active, meet new people, and maintain a balanced lifestyle. Currently, I&apos;m on a mission to learn, grow, and contribute in any way I can, one step at a time.
      </p>
    </section>
  );
};

export default AboutCom;
