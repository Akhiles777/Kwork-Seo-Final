'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const BeeAnimation = dynamic(() => import('@/components/BeeAnimation'), { ssr: false });

export default function DeferredBee() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const cb = () => {
      if ('requestIdleCallback' in window) {
        (window as Window & { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback(
          () => setShow(true),
          { timeout: 2000 }
        );
      } else {
        setTimeout(() => setShow(true), 1500);
      }
    };
    if (document.readyState === 'complete') {
      cb();
    } else {
      window.addEventListener('load', cb);
      return () => window.removeEventListener('load', cb);
    }
  }, []);

  return show ? <BeeAnimation /> : null;
}
