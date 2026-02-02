import type { Metadata } from "next";
import PrivacyPolicy from "../Privacy";

export const metadata: Metadata = {
  title: "Политика конфиденциальности — Дом мёда Аршба",
  description:
    "Политика конфиденциальности сайта Дом мёда Аршба. Как мы собираем, используем и защищаем ваши данные при заказе натурального мёда из Абхазии.",
  openGraph: {
    title: "Политика конфиденциальности — Дом мёда Аршба",
    description:
      "Политика конфиденциальности сайта Дом мёда Аршба. Защита ваших данных при покупке мёда.",
    url: "https://arshbamed.ru/privacy-policy/",
    siteName: "Дом мёда Аршба",
    type: "website",
    locale: "ru_RU",
  },
  alternates: {
    canonical: "https://arshbamed.ru/privacy-policy/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <PrivacyPolicy />;
}
