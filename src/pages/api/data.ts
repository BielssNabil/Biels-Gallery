import data from "./data.json";
import education1 from "../../../public/logosmkn1cimahi.png";
import education2 from "../../../public/logounjani.jpeg";

import type { NextApiRequest, NextApiResponse } from 'next';
import type { StaticImageData } from "next/image";

type EducationItemType = {
  id: number;
  educationName: string;
  status: string;
  date: string;
  image?: StaticImageData;
};

type EducationType = {
  education: Array<Omit<EducationItemType, 'image'>>;
};

const typedData = data as unknown as EducationType;

export const education: EducationItemType[] = typedData.education.map((edu, index) => ({
  ...edu,
  image: [education1, education2][index]
}));

export const archiveFiles = [
  {
    name: "LAPORAN KEGIATAN KUNJUNGAN LUBANG BUAYA & RUMAH SASMITA LOKA.pdf",
    url: "/task/LAPORAN KEGIATAN KUNJUNGAN LUBANG BUAYA & RUMAH SASMITA LOKA.pdf"
  },
  {
    name: "MakalahKelompok1_NegaraKesatuan_Fiks.pdf",
    url: "/task/MakalahKelompok1_NegaraKesatuan_Fiks.pdf"
  },
  {
    name: "TEKNOLOGI PEMERINTAHAN & POLITIK PEMERINTAHAN.pdf",
    url: "/task/TEKNOLOGI PEMERINTAHAN & POLITIK PEMERINTAHAN.pdf"
  },
  {
    name: "Pemerintahan Daerah.pdf",
    url: "/task/Pemerintahan Daerah.pdf"
  },
  {
    name: "Kewenangan Pemerintah (2).pdf",
    url: "/task/Kewenangan Pemerintah (2).pdf"
  },
  {
    name: "TEKNOLOGI PEMERINTAHAN & POLITIK PEMERINTAHAN.pdf",
    url: "/task/Demokrasi & Perkembangannya di indonesia (2).pdf"
  }
];

export const galleryImages = [
  { src: "/images/WhatsApp Image 2025-07-17 at 09.25.11.jpeg", alt: "Image 1" },
  { src: "/images/WhatsApp Image 2025-07-17 at 09.25.43 (1).jpeg", alt: "Image 2" },
  { src: "/images/WhatsApp Image 2025-07-17 at 09.25.43.jpeg", alt: "Image 3" },
  { src: "/images/WhatsApp Image 2025-07-17 at 09.25.44 (1).jpeg", alt: "Image 4" },
  { src: "/images/WhatsApp Image 2025-07-17 at 09.25.44.jpeg", alt: "Image 5" },
  { src: "/images/WhatsApp Image 2025-07-17 at 09.25.53 (1).jpeg", alt: "Image 6" },
  { src: "/images/WhatsApp Image 2025-07-17 at 09.25.53 (2).jpeg", alt: "Image 7" },
  { src: "/images/WhatsApp Image 2025-07-17 at 09.25.53.jpeg", alt: "Image 8" },
  { src: "/images/WhatsApp Image 2025-07-17 at 09.25.54 (1).jpeg", alt: "Image 9" },
  { src: "/images/WhatsApp Image 2025-07-17 at 09.25.54.jpeg", alt: "Image 10" },
  { src: "/images/WhatsApp Image 2025-07-17 at 09.25.55 (1).jpeg", alt: "Image 11" },
  { src: "/images/WhatsApp Image 2025-07-17 at 09.25.55 (2).jpeg", alt: "Image 12" },
  { src: "/images/WhatsApp Image 2025-07-17 at 09.25.55 (3).jpeg", alt: "Image 13" },
  { src: "/images/WhatsApp Image 2025-07-17 at 09.25.55.jpeg", alt: "Image 14" },
  { src: "/images/WhatsApp Image 2025-07-17 at 09.25.56 (1).jpeg", alt: "Image 15" },
  { src: "/images/WhatsApp Image 2025-07-17 at 09.25.56 (2).jpeg", alt: "Image 16" },
  { src: "/images/WhatsApp Image 2025-07-17 at 09.25.56.jpeg", alt: "Image 17" },
  { src: "/images/WhatsApp Image 2025-07-17 at 09.25.57 (1).jpeg", alt: "Image 18" },
  { src: "/images/WhatsApp Image 2025-07-17 at 09.25.57.jpeg", alt: "Image 19" },
  { src: "/images/WhatsApp Image 2025-07-17 at 09.25.58 (1).jpeg", alt: "Image 20" },
  { src: "/images/WhatsApp Image 2025-07-17 at 09.25.58 (2).jpeg", alt: "Image 21" },
  { src: "/images/WhatsApp Image 2025-07-17 at 09.25.58.jpeg", alt: "Image 22" },
  { src: "/images/WhatsApp Image 2025-07-17 at 09.25.59 (1).jpeg", alt: "Image 23" },
  { src: "/images/WhatsApp Image 2025-07-17 at 09.25.59 (2).jpeg", alt: "Image 24" },
  { src: "/images/WhatsApp Image 2025-07-17 at 09.25.59.jpeg", alt: "Image 25" },
  { src: "/images/WhatsApp Image 2025-07-17 at 09.26.00 (1).jpeg", alt: "Image 26" },
  { src: "/images/WhatsApp Image 2025-07-17 at 09.26.00 (2).jpeg", alt: "Image 27" },
  { src: "/images/WhatsApp Image 2025-07-17 at 09.26.00.jpeg", alt: "Image 28" },
  { src: "/images/WhatsApp Image 2025-07-17 at 09.26.01 (1).jpeg", alt: "Image 29" },
  { src: "/images/WhatsApp Image 2025-07-17 at 09.26.01 (2).jpeg", alt: "Image 30" },
  { src: "/images/WhatsApp Image 2025-07-17 at 09.26.01.jpeg", alt: "Image 31" }
];
