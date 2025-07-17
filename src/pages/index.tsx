import Head from 'next/head';
import Intro from "./components/Intro";
import AboutCom from "./components/AboutCom";
import GalleryCom from "./components/GalleryCom";
import EducationCom from "./components/EducationCom";
import ArchiveCom from "./components/ArchiveCom";
import FooterCom from "./components/FooterCom";

export default function Home() {
  return (
    <>
      <Head>
        <title>Biels Gallery</title>
          <meta name="description" content="Personal website & gallery by Bielss Nabil" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:image" content="/preview.jpg" />
      </Head>
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen text-gray-200 font-sans">
        <div>
          <Intro/>
          <AboutCom />
          <EducationCom />
          <GalleryCom />
          <ArchiveCom />
          <FooterCom />
        </div>
      </div>
    </>
  );
}
