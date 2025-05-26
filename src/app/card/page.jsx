"use client";
import React, { useEffect, useState } from 'react';
import { FaRegCreditCard } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa'; 
import { useRouter } from 'next/navigation';
import { playClickSound } from '../../components/globalAudio ';

const Page = () => {
  const [loader, setLoader] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = (href) => {
    playClickSound();
    setSuccess(true);
    setTimeout(() => {
      router.push(href);
    }, 2000); 
  };

  if (!loader) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-white flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-xl p-8 max-w-2xl w-full">

        {/* Top Icon and Heading */}
        <div className="text-center mb-8">
          <FaRegCreditCard className="text-yellow-400 text-6xl mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-800">طلب بطاقة الائتمان</h1>
          <p className="text-gray-600 mt-2">
            ابدأ رحلتك نحو الحرية المالية — تقديم سريع، وصول فوري افتراضي، ومكافآت رائعة في انتظارك.
          </p>
        </div>

        {/* Illustration */}
        <div className="flex justify-center mb-8">
          <img
            src="https://cdn-icons-png.flaticon.com/512/633/633611.png"
            alt="بطاقة ائتمان"
            className="w-60 h-60 object-contain"
          />
        </div>

        {/* Benefits */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">لماذا تطلب بطاقتنا؟</h2>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <span className="w-6 h-6 rounded-full bg-yellow-400 text-white text-sm flex items-center justify-center">✓</span>
              <p className="text-gray-700">بدون رسوم سنوية وموافقة فورية للمؤهلين.</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-6 h-6 rounded-full bg-yellow-400 text-white text-sm flex items-center justify-center">✓</span>
              <p className="text-gray-700">سرعة وأمان في كل عملية مالية.</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-6 h-6 rounded-full bg-yellow-400 text-white text-sm flex items-center justify-center">✓</span>
              <p className="text-gray-700">تحكم في مصروفاتك من خلال تطبيقنا الذكي.</p>
            </li>
          </ul>
        </div>

        {/* Success Message */}
        {success && (
          <div className="flex items-center justify-center mb-4 text-green-600 text-lg font-semibold transition">
            <FaCheckCircle className="mr-2 text-2xl" />
            تم إرسال الطلب بنجاح!
          </div>
        )}

        {/* Button */}
        {!success && (
          <div className="text-center">
            <button
              onClick={() => handleClick("/")}
              className="cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded-xl text-sm font-medium transition"
            >
              طلب البطاقة الآن
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
