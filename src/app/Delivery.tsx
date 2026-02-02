'use client';

import { useState, useRef } from 'react';
import '@/styles/delivery.css';
import Link from 'next/link';
import DeferredBee from '@/components/DeferredBee';
import Footer from '@/components/Footer';
import Image from 'next/image';

const position: [number, number] = [43.315713, 40.408009];

const Delivery = () => {
  const [homeMenuOpen, setHomeMenuOpen] = useState(false);
  const homeMenuRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className='delivery'>
      <DeferredBee />

      <header className="delivery-header">
        <div className="delivery-header-content">

        <li className="logo-header-li"><Link href="/"  className="delivery-logo-header">
        <Image src='https://i.postimg.cc/PxtsJWs9/logohoney_1.png' alt="Логотип Дом мёда Аршба" width={30} height={28} loading="lazy" decoding="async" /></Link></li>

          <button className="delivery-burger" onClick={() => setHomeMenuOpen(true)}>
            <Image src="https://i.postimg.cc/2jW5tjX8/burger.png" alt="Меню" width={31} height={14} loading="lazy" decoding="async" />
          </button>
          <nav className="delivery-header-links" aria-label="Основное меню">
          <li><Link href="/about" title="О нашей пасеке и семейном деле в Абхазии">О нашей пасеке в Абхазии</Link></li>
              <li><Link href="/catalog" title="Каталог натурального мёда из Абхазии">Каталог натурального мёда</Link></li>
              <li><Link href="/delivery" title="Условия доставки и оплаты заказа">Доставка и оплата заказа</Link></li>
          </nav>
        </div>
      </header>

      <section className="delivery-fourth-block" style={{ backgroundImage: `url('https://i.postimg.cc/rpt6ps48/delivery_Photo.png')` }} >
        <div className="delivery-story-content">
          <h4 className="text-gray-600 mb-6" data-aos="fade-up">Доставка</h4>
          <h3 className="text-2xl font-semibold mb-4" data-aos="fade-up">
            Быстрая доставка по России и возможность самовывоза в Абхазии.
          </h3>
          <p className="text-gray-600 mb-6" data-aos="fade-up">
            Мы тщательно упаковываем каждую баночку мёда, чтобы сохранить вкус, аромат и полезные свойства продукта. Доставка осуществляется Почтой России или транспортной компанией СДЭК. Оплата при получении — удобно и безопасно.
          </p>
        </div>
      </section>

      <div className="beeDelivery">
        <Image src="https://i.postimg.cc/VNN6Zj3y/bee_Delivery.png" alt="" width={200} height={150} loading="lazy" decoding="async" />
      </div>

      <div className="delivery-info">
        <div className="delivery-info-up">
          <Image src="https://i.postimg.cc/kgG3kfXt/check.png" alt="" width={24} height={24} loading="lazy" decoding="async" />
          <div className="delivery-info-h2-p">
            <h2>Отправка Почтой России и СДЭК</h2>
            <p className='delivery-info-p'>
              Доставка по всей России — транспортной компанией СДЭК или Почтой России. Сроки и стоимость зависят от вашего региона.
              Для уточнения деталей доставки
              <a
                href="https://wa.me/794029382983"
                target="_blank"
                rel="noopener noreferrer"
                className="phone-contact"
              >
                написать в WhatsApp <img src="https://i.postimg.cc/nL96pJqk/Arrow-11.png" alt="" className='arrow-address' width={12} height={12} loading="lazy" decoding="async" />
              </a>
            </p>
          </div>
        </div>

        <div className="delivery-info-buttom">
          <Image src="https://i.postimg.cc/kgG3kfXt/check.png" alt="" width={24} height={24} loading="lazy" decoding="async" />
          <div className="delivery-info-h2-p">
            <h2>Самовывоз в Абхазии</h2>
            <p className='delivery-info-p'>
              Забрать продукцию можно непосредственно в Доме Мёда — Республика Абхазия, Бзыбское ущелье. Свежий мёд с пасеки, без дополнительной наценки за доставку.
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`}
                target="_blank"
                rel="noopener noreferrer"
                className="phone-contact"
              >
                Построить маршрут <img src="https://i.postimg.cc/nL96pJqk/Arrow-11.png" alt="" className='arrow-address' width={12} height={12} loading="lazy" decoding="async" />
              </a>
            </p>
          </div>
        </div>
      </div>

      {homeMenuOpen && (
        <div className="home-modal-overlay" onClick={() => setHomeMenuOpen(false)}>
          <div className="home-modal" ref={homeMenuRef} onClick={(e) => e.stopPropagation()}>
            <ul className="home-modal-list">
            <li><Link href="/">Главная страница сайта</Link></li>
              <li><Link href="/about">О нашей пасеке в Абхазии</Link></li>
              <li><Link href="/catalog">Каталог натурального мёда</Link></li>
              <li><Link href="/delivery">Доставка и оплата заказа</Link></li>
            </ul>
            <button className="home-modal-close" onClick={() => setHomeMenuOpen(false)} aria-label="Закрыть меню">
              Закрыть меню
            </button>
          </div>
        </div>
      )}
      <Footer className='delivery-footer'/>
    </div>
  );
};

export default Delivery;
