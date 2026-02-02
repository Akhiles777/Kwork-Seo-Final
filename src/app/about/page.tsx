import type { Metadata } from "next";
import About from "../About";

export const metadata: Metadata = {
  title: "О нас — Дом мёда в Абхазии | Семейная пасека Аршба",
  description:
    "Дом мёда Аршба — семейная пасека с историей более 37 лет в Абхазии. Узнайте, как мы собираем натуральный альпийский и горный мёд на высоте 2000-2500 метров.",
  keywords: [
    "дом меда абхазия",
    "пасека абхазия",
    "семейная пасека",
    "альпийский мед абхазия",
    "горный мед",
  ],
  openGraph: {
    title: "О нас — Дом мёда Аршба в Абхазии",
    description:
      "Семейная пасека с историей 37 лет. Горный и альпийский мёд из экологически чистых мест Абхазии.",
    url: "https://arshbamed.ru/about/",
    siteName: "Дом мёда Аршба",
    images: [
      {
        url: "https://i.postimg.cc/nr2gWQyk/honey.png",
        width: 1200,
        height: 630,
        alt: "Дом мёда Аршба — натуральный мёд из Абхазии",
      },
    ],
    type: "website",
    locale: "ru_RU",
  },
  alternates: {
    canonical: "https://arshbamed.ru/about/",
  },
};

export default function Page() {
  return <About />;
}
