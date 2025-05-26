"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa";
import { MdLocationOn, MdOutlinePhoneInTalk, MdOutlineMail } from "react-icons/md";
import { childAnim, showUp } from '../anim';

const Contact = () => {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!loader) return null;

  return (
    <motion.div
      className='w-full h-screen text-white flex flex-col'
      variants={showUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3}}
    >
      {/* Top Content */}
      <div className='flex-grow-[4] flex flex-col ml-20 mt-20 gap-10 items-start justify-start'>
        <motion.h3 className='text-4xl text-gray-400' variants={childAnim}>
          من أي مكان في العالم , يسعدنا تواصلك معنا
        </motion.h3>

        <motion.div className='flex items-center gap-5' variants={childAnim}>
          <span><MdLocationOn /></span>
          <p>العراق / شارع الكراده</p>
          <p>Zain-Asiacell-Korek:422</p>
        </motion.div>

        <motion.div className='flex items-center gap-5' variants={childAnim}>
          <span><MdOutlinePhoneInTalk /></span>
          <p>خارج العراق / 009647716404444</p>
        </motion.div>

        <motion.div className='flex items-center gap-5' variants={childAnim}>
          <span><MdOutlineMail /></span>
          <p>qicard@qi.iq</p>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className='flex-1 flex-grow flex justify-between items-center p-5 space-x-8'>
        {/* App Promotion */}
        <motion.div className='flex flex-col space-y-2 max-w-xs' variants={childAnim}>
          <h3 className='text-xl font-bold'>احصل على التطبيق الآن</h3>
          <div className='flex space-x-4'>
            <div className='bg-[#0070C9] text-xl text-white p-3 rounded-md'><FaAppStoreIos /></div>
            <div className='bg-[#34A853] text-xl text-white p-3 rounded-md'><FaGooglePlay /></div>
          </div>
        </motion.div>

        {/* Sections */}
        <motion.div className='hidden sm:block text-white p-2 space-y-1' variants={childAnim}>
          <h3 className='text-3xl text-gray-400'>الأفراد</h3>
          <p className='text-sm'>البطاقات</p>
          <p className='text-sm'>خدمات كي</p>
          <p className='text-sm'>سوبر كي</p>
        </motion.div>

        <motion.div className='hidden sm:block text-white p-2 space-y-1' variants={childAnim}>
          <h3 className='text-3xl text-gray-400'>التجار والشركات</h3>
          <p className='text-sm'>الدفع في المتجر</p>
          <p className='text-sm'>الدفع عبر الإنترنت أو عن طريق التطبيق</p>
          <p className='text-sm'>خدمة الفاتورة</p>
        </motion.div>

        <motion.div className='hidden sm:block text-white p-2 space-y-1' variants={childAnim}>
          <h3 className='text-3xl text-gray-400'>حلول الأعمال</h3>
          <p className='text-sm'>المصارف والمؤسسات المالية</p>
          <p className='text-sm'>مؤسسات الوزارة والدولة</p>
        </motion.div>
      
      </footer>
    </motion.div>
  );
};

export default Contact;