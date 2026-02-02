'use client';

import '@/styles/footer.css';

type FooterProps = {
  className?: string; // любой дополнительный класс
};

const Footer = ({ className = '' }: FooterProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`footer ${className}`.trim()}>
      <div className="footer-content-buttom">
        <div className="footer-content-buttom-policy">
          <p>© Аршба. Дом Мёда, 2025 г. Все права защищены.</p>
          <a href="/privacy-policy" title="Политика конфиденциальности сайта Дом мёда Аршба">Политика конфиденциальности</a>
        </div>
        <button
          className='footer-content-buttom-button'
          onClick={scrollToTop}
          aria-label="Наверх"
        >
          <img src="https://i.postimg.cc/qRL1BH13/up_Button.png" alt="Наверх" width={44} height={44} loading="lazy" decoding="async" />
        </button>
      </div>
    </div>
  );
};

export default Footer;
