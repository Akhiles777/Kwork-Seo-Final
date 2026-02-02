import type { Metadata } from "next";
import Delivery from "../Delivery";

export const metadata: Metadata = {
  title: "Доставка и оплата — Купить мёд в Абхазии | Дом мёда Аршба",
  description:
    "Условия доставки и оплаты натурального мёда из Абхазии. Почта России, СДЭК, самовывоз в Бзыбском ущелье. Оплата при получении. Закажите мёд с доставкой по России.",
  keywords: [
    "доставка меда абхазия",
    "доставка меда по россии",
    "мед сдэк",
    "самовывоз мед абхазия",
    "оплата при получении мед",
  ],
  openGraph: {
    title: "Доставка и оплата — Дом мёда в Абхазии",
    description:
      "Доставка Почтой России, СДЭК и самовывоз. Условия оплаты натурального мёда из Абхазии.",
    url: "https://arshbamed.ru/delivery/",
    siteName: "Дом мёда Аршба",
    images: [
      {
        url: "https://i.postimg.cc/nr2gWQyk/honey.png",
        width: 1200,
        height: 630,
        alt: "Доставка и оплата мёда из Абхазии",
      },
    ],
    type: "website",
    locale: "ru_RU",
  },
  alternates: {
    canonical: "https://arshbamed.ru/delivery/",
  },
};

export default function Page() {
  return <Delivery />;
}
