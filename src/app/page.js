"use client";
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloder from '@/components/preloder/preloder';
import Hero from './hero/page';

export default function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowPreloader(false);
    }, 9000); 
  }, []);

  return (
    <AnimatePresence>
      {showPreloader ?<Preloder key="preloader" /> : <Hero/>}
    </AnimatePresence>
  );
}
