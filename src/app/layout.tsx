import '@/styles/global.css';
import { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';

const SITE_URL = 'https://arshbamed.ru';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffc700',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Дом мёда Абхазии — купить натуральный горный мёд',
    template: '%s | Дом мёда Аршба',
  },
  description: 'Лучший абхазский мёд — натуральный, свежий и вкусный. Горный, альпийский и цветочный мёд из экологически чистых мест Абхазии. Заказывайте прямо с сайта!',
  keywords: [
    'купить мед в абхазии',
    'мед из абхазии',
    'натуральный мед из абхазии',
    'альпийский мед в абхазии',
    'горный мед в абхазии',
    'дом меда в абхазии',
    'купить натуральный мед в абхазии',
    'мед абхазия доставка',
    'абхазский мед цена',
  ],
  icons: {
    icon: '/favicon.ico?v=2',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: SITE_URL,
    siteName: 'Дом мёда Аршба',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Дом мёда Абхазии — натуральный горный мёд',
    description: 'Лучший абхазский мёд. Горный, альпийский и цветочный мёд из экологически чистых мест. Заказывайте с сайта!',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    // Добавьте сюда Яндекс.Вебмастер и Google Search Console при необходимости
    // yandex: 'ваш-код',
    // google: 'ваш-код',
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Дом мёда Аршба',
    description: 'Натуральный мёд из Абхазии. Горный, альпийский, липовый и цветочный мёд с пасек Бзыбского ущелья.',
    url: SITE_URL,
    telephone: '+7-940-994-88-37',
    email: 'arshba27@mail.ru',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Республика Абхазия',
      addressLocality: 'Бзыбское ущелье',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.315713,
      longitude: 40.408009,
    },
    image: 'https://i.postimg.cc/nr2gWQyk/honey.png',
    priceRange: '₽₽',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '20:00',
    },
  };

  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://i.postimg.cc" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://i.postimg.cc" />
        <link rel="dns-prefetch" href="https://tile.openstreetmap.org" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
