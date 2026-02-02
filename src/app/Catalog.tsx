'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import '@/styles/catalog.css';
import DeferredBee from '@/components/DeferredBee';
import Pagination from '@/components/Pagination';
import Link from 'next/link';
import products from '@/data/products';
import Footer from '@/components/Footer';
import Image from 'next/image';

const Catalog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [homeMenuOpen, setHomeMenuOpen] = useState(false);
  const homeMenuRef = useRef<HTMLDivElement | null>(null);
  const [itemsPerPage, setItemsPerPage] = useState<number>(8);

  useEffect(() => {
    const handleResize = () => setItemsPerPage(window.innerWidth < 802 ? 6 : 8);
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = useMemo(() => Math.ceil(products.length / itemsPerPage), [itemsPerPage]);
  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return products.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage, itemsPerPage]);

  return (
    <div className='catalog'>
      <DeferredBee />

      <header className="catalog-header">
        <div className="catalog-header-content">
        <li className="logo-header-li"><Link href="/" className="catalog-logo-header">
          <img src='https://i.postimg.cc/PxtsJWs9/logohoney_1.png' alt="Логотип Дом мёда Аршба" width={30} height={28} loading="lazy" decoding="async" /></Link></li>
        
          <button className="catalog-burger" onClick={() => setHomeMenuOpen(true)}>
            <img src="https://i.postimg.cc/2jW5tjX8/burger.png" alt="Меню" width={31} height={14} loading="lazy" decoding="async" />
          </button>
          <nav className="catalog-header-links" aria-label="Основное меню">
          <li><Link href="/about" title="О нашей пасеке и семейном деле в Абхазии">О нашей пасеке в Абхазии</Link></li>
              <li><Link href="/catalog" title="Каталог натурального мёда из Абхазии">Каталог натурального мёда</Link></li>
              <li><Link href="/delivery" title="Условия доставки и оплаты заказа">Доставка и оплата заказа</Link></li>
          </nav>
        </div>
        <hr className='header-hr' />
      </header>

      <div className="categoryData-grid">
        {currentItems.map((product, index) => (
          <div className="categoryData-card" key={index}>
            <div
              className="categoryData-image"
              style={{ backgroundImage: `url(${product.img})` }}
              role="img"
              aria-label={product.title}
            />
            <div className="categoryData-info">
              <h2>{product.title}</h2>
              <p className="subtitle">{product.subtitle}</p>
              <h2>{product.price}</h2>
              <a
                href="https://wa.me/79409948837"
                target="_blank"
                rel="noreferrer noopener"
                className="category-link-button"
              >
                Связаться с продавцом
              </a>
            </div>
          </div>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      {homeMenuOpen && (
        <div
          className="home-modal-overlay"
          onClick={() => setHomeMenuOpen(false)}
        >
          <div
            className="home-modal"
            ref={homeMenuRef}
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="home-modal-list">
            <li><Link href="/">Главная страница сайта</Link></li>
              <li><Link href="/about">О нашей пасеке в Абхазии</Link></li>
              <li><Link href="/catalog">Каталог натурального мёда</Link></li>
              <li><Link href="/delivery">Доставка и оплата заказа</Link></li>
            </ul>
            <button
              className="home-modal-close"
              onClick={() => setHomeMenuOpen(false)}
              aria-label="Закрыть меню"
            >
              Закрыть меню
            </button>
          </div>
        </div>
      )}
  <Footer className="catalog-footer" />

    </div>
  );
};

export default Catalog;
