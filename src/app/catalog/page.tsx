import type { Metadata } from "next";
import Catalog from "../Catalog";

export const metadata: Metadata = {
  title: "Каталог мёда — Купить в Абхазии | Натуральный горный мёд",
  description:
    "Каталог натурального мёда из Абхазии: горный, альпийский, липовый, каштановый, цветочный и бортевой мёд. Перга, прополис, маточное молочко. Цены и описание.",
  keywords: [
    "каталог меда абхазия",
    "горный мед купить",
    "альпийский мед цена",
    "бортевой мед",
    "липовый мед абхазия",
    "перга прополис",
  ],
  openGraph: {
    title: "Каталог мёда — Дом мёда в Абхазии",
    description:
      "Натуральный мёд из Абхазии: горный, альпийский, липовый. Купить мёд напрямую от пасеки с доставкой.",
    url: "https://arshbamed.ru/catalog/",
    siteName: "Дом мёда Аршба",
    images: [
      {
        url: "https://i.postimg.cc/nr2gWQyk/honey.png",
        width: 1200,
        height: 630,
        alt: "Каталог натурального мёда из Абхазии",
      },
    ],
    type: "website",
    locale: "ru_RU",
  },
  alternates: {
    canonical: "https://arshbamed.ru/catalog/",
  },
};

export default function Page() {
  return <Catalog />;
}
