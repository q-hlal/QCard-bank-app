"use client";
import Header from '@/components/header';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { childAnim, showUp } from '@/components/anim';

const page = () => {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!loader) return null;

  const data = [
    {
      title: "دفع داخل المتجر",
      desc: "تقدم بطاقة Qi لعملائها من التجار حلول الدفع الإلكتروني من خلال أجهزة نقاط البيع المجهزة بأحدث الميزات التكنولوجية وبدعم من تقنيات التحقق.",
      img: "/images/merchants1.jpg"
    },
    {
      title: "الدفع عبر الإنترنت أو من خلال التطبيق",
      desc: "تقدم Qi Card حلول التجارة الإلكترونية التي تمكّن عملاءنا من التجار من قبول المدفوعات من أي مكان في العالم من خلال بوابة الدفع الإلكترونية Qi Card المتصلة بفيسا وماستركارد.",
      img: "/images/merchants2.jpg"
    },
    {
      title: "صرف الرواتب للموظفين",
      desc: "تحويل عمليات دفع الرواتب من النقد إلى إلكتروني، حيث يتم إيداع رواتب الموظفين مباشرة في حساباتهم الإلكترونية.",
      img: "/images/merchants3.jpg"
    },
    {
      title: "خدمة الفوترة",
      desc: "خدمة الفوترة هي عملية إصدار فواتير مفصلة تحتوي على تفاصيل المشتريات أو الخدمات المقدمة للعملاء، بما في ذلك الأسعار والكميات والمبالغ المستحقة.",
      img: "/images/merchants4.jpg"
    }
  ];

 

  return (
    <div className='w-full min-h-screen bg-black'>
      <Header />
      <motion.div
        variants={showUp}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-30 p-4"
      >
        {data.map((item, index) => (
          <motion.div
            key={index}
            variants={childAnim}
            style={{direction : 'rtl'}}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-md "
          >
            <div className="relative w-full h-48">
              <Image
                alt={item.title}
                src={item.img}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 text-white">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed text-gray-400">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default page;
