'use client';
import Header from '@/components/header';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { childAnim, showUp } from '@/components/anim';

const NewsPage = () => {
  const [loader, setLoader] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!loader) return null;

return (
    <div className='min-h-screen w-full bg-black'>
      <Header />
      <motion.div
        variants={showUp}
        initial="hidden"
        animate="visible"
        className='flex min-h-screen items-center justify-end flex-col h-full pt-30 p-4'
      >
        <div className='flex flex-col lg:flex-row w-full gap-4 items-start text-white'>
          <motion.div variants={childAnim} className='flex flex-col w-full lg:w-2/3 items-end'>
            <h3 className='text-3xl font-bold mb-2'>أحدث الأخبار </h3>
            <div className='w-full border rounded-lg overflow-hidden relative h-72'>
              <Image 
                alt='صورة خبر رئيسية' 
                src="/images/news1.jpg" 
                fill                
                className='object-cover z-1' 
              />
            </div>
            <p className='mt-2 text-right text-lg leading-relaxed '>
              تعاون رائع وخدمات لملايين العملاء! بطاقة Qi ,  ديجاتل زون , سوبرسيل
            </p>
          </motion.div>

          <motion.div variants={childAnim} className='flex flex-col w-full lg:w-1/3 gap-4 items-end'>
            <div className='w-full'>
              <div className='w-full h-32 border rounded-lg overflow-hidden relative'>
                <Image 
                  alt='خبر صغير' 
                  src="/images/news2.jpg" 
                  fill 
                  className='object-cover z-1' 
                />
              </div>
              <p className="mt-1 text-sm text-right">
                أكبر شركة تكنولوجيا مالية، 'Qi' تفوز بجائزة LEAP لتحسين خدمة العملاء
              </p>
            </div>

            <div className='w-full'>
              <div className='w-full h-48 border rounded-lg overflow-hidden relative'>
                <Image 
                  alt='خبر متوسط' 
                  src="/images/news3.jpg" 
                  fill 
                  className='object-cover z-1' 
                />
              </div>
              <p className="mt-1 text-sm text-right">
                قصه نجاح كي في الأستحواذ عل ديجاتل زون
              </p>
            </div>
          </motion.div>
        </div>

        <div className='flex flex-col md:flex-row w-full justify-around mt-8 gap-6 text-white'>
          <motion.div variants={childAnim} className='flex flex-col items-center w-full md:w-1/3'>
            <div className="relative w-full h-40 border rounded-lg overflow-hidden">
              <Image src="/images/news4.png" alt='خبر 4' fill className="object-cover" />
            </div>
            <p className="mt-2 text-center text-sm">الوطني من ايرثلنك وديجاتل زون من كي</p>
          </motion.div>

          <motion.div variants={childAnim} className='flex flex-col items-center w-full md:w-1/3'>
            <div className="relative w-full h-40 border rounded-lg overflow-hidden">
              <Image src="/images/news5.jpg" alt='خبر 5' fill className="object-cover" />
            </div>
            <p className="mt-2 text-center text-sm">
              البريد العراقي يطلق خدمة بطاقات الدفع الإلكتروني بالتعاون مع الشركة الدولية للبطاقات الذكية (Qi).
            </p>
          </motion.div>

          <motion.div variants={childAnim} className='flex flex-col items-center w-full md:w-1/3'>
            <div className="relative w-full h-40 border rounded-lg overflow-hidden">
              <Image src="/images/news6.jpg" alt='خبر 6' fill className="object-cover" />
            </div>
            <p className="mt-2 text-center text-sm">
              شركة التكنولوجيا المالية للعام وجائزة البطاقة الأكثر ابتكارًا - العراق 2023
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default NewsPage;
