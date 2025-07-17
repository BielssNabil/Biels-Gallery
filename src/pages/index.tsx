import Intro from "./components/Intro";
import AboutCom from "./components/AboutCom";
import GalleryCom from "./components/GalleryCom";
import EducationCom from "./components/EducationCom";
import ArchiveCom from "./components/ArchiveCom";
import FooterCom from "./components/FooterCom";

export default function Home() {
  return (
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
  );
}
