"use client";
import { childAnim, showUp } from "@/components/anim";
import Header from "@/components/header";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {motion} from 'framer-motion'

const Page = () => {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!loader) return null;

  return (
    <div className="w-full min-h-screen bg-black text-white">
      <Header/>
      <motion.div 
      variants={showUp}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-6  pt-30 p-4">
        <motion.div variants={childAnim} className="relative w-full h-[50vh] rounded-xl overflow-hidden">
          <Image
            alt="business Img"
            src="/images/business1.jpg"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-end">
            <h3 className="text-4xl md:text-5xl font-bold text-white mr-10">حلول الأعمال</h3>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6">
          <motion.div variants={childAnim} className="w-full md:w-1/2 flex flex-col bg-white/10 rounded-xl overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                alt="business Img"
                src="/images/business3.jpg"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 text-white bg-gray-800" >
              <h3 className="text-xl font-semibold mb-2">الوزارات والمؤسسات الحكومية</h3>
              <p className="text-sm leading-relaxed text-gray-400">
             نقدم لعملائنا من الوزارات والمؤسسات الحكومية مجموعة متنوعة من الخدمات التي تساعد في إتمام المدفوعات الإلكترونية  
              </p>
            </div>
          </motion.div>

          <motion.div variants={childAnim} className="w-full md:w-1/2 flex flex-col bg-white/10 rounded-xl overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                alt="business Img"
                src="/images/business2.jpg"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 text-white bg-gray-800">
              <h3 className="text-xl font-semibold mb-2">البنوك والمؤسسات المالية</h3>
              <p className="text-sm leading-relaxed text-gray-400">
                حلول ذكية تعزز الأداء وتدعم التحول الرقمي لرفع كفاءة المؤسسات وتعزيز
                التنافسية في السوق.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Page;
