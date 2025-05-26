"use client"
import React, { useEffect, useState } from 'react'
import useScrollTracker from '../../components/useScrollTracker';
import { motion } from "framer-motion";
import Header from '@/components/header';
import { childAnim, showUp } from '../anim';

const AboutContent = () => {
  const [loader, setLoader] = useState(false);



  useScrollTracker();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    loader && (
      <div className="w-full h-[300vh] flex">
        <Header/>
        <div className="w-full text-white">
          {/* SECTION 1 */}
            <motion.div
            className="w-full h-auto min-h-screen flex flex-col items-center justify-center px-4 py-16 relative gap-10 sm:h-[100vh] sm:flex sm:justify-center"
            variants={showUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.div
              variants={childAnim}
              className="text-center space-y-4 max-w-md z-10"
            >
              <h1 className="text-3xl sm:text-4xl font-bold">بطاقه بدل النقود</h1>
              <h3 className="text-gray-400 text-base sm:text-xl">
                استبدل النقود الورقية ببطاقتك الذكية وابدأ باستخدامها في جميع عمليات الشراء والدفع اليومية بكل سهولة وأمان.
              </h3>
              <span className="inline-block px-6 py-2 border border-white bg-white text-black rounded-full">
                تعرف علئ المزيد
              </span>
            </motion.div>

            <motion.div
              variants={childAnim}
              className="sm:absolute sm:bottom-10 sm:left-10 text-center sm:text-left max-w-sm space-y-2"
            >
              <h3 className="text-lg sm:text-xl font-semibold">تحرر من حمل النقود</h3>
              <p className="text-gray-400 text-sm">
                ودّع التعاملات التقليدية وابدأ تجربة جديدة مع بطاقة تمنحك مرونة تامة في الإنفاق والتنقل بدون عناء.
              </p>
            </motion.div>

            <motion.div
              variants={childAnim}
              className="sm:absolute sm:bottom-10 sm:right-10 text-center sm:text-right max-w-sm space-y-2"
            >
              <p className="text-gray-400 text-sm">
                تم تصميم البطاقة لتناسب أسلوب حياتك العصري وتمنحك تحكمًا كاملاً بمصروفاتك.
              </p>
            </motion.div>
          </motion.div>


          {/* SECTION 2 */}
          <motion.div
            className="relative  w-full h-[100vh] flex flex-col items-center  justify-center"
             variants={showUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.85 }}
          >
            <motion.div
              variants={childAnim}
              className="text-center space-y-4 max-w-md sm:mr-10 "
            >
              <h1 className="text-2xl sm:text-4xl font-bold">بطاقه لكل شيْ</h1>
              <h3 className="text-gray-400 text-sm sm:text-lg">
                بطاقات متنوعه تغنيك عن العديد من الأدوات، صممت لتلائم احتياجاتك المختلفة في التسوق، النقل، والعمليات المالية اليومية.
              </h3>
              <span className="inline-block px-4 py-1  border border-white bg-white text-black rounded-full">
                تعرف علئ المزيد
              </span>
            </motion.div>

            <div className=" md:max-w-150 max-w-sm  text-center text-gray-400 mt-20 md:mt-50">
             <motion.p className='md:text-md text-sm absoulte'>
              مع بطاقتنا المتعددة الاستخدامات، يمكنك تبسيط حياتك اليومية بكل سهولة. سواء كنت تتسوق من المتاجر المحلية أو الإلكترونية، تستخدم وسائل النقل العامة، أو تدير نفقاتك الشخصية، توفر لك البطاقة حلاً شاملاً يجمع بين الراحة والأمان. لا حاجة لحمل العديد من الأدوات أو القلق بشأن طرق الدفع المختلفه.
            </motion.p>
            </div>
          </motion.div>

          {/* SECTION 3 */}
          <motion.div
            className="relative w-full h-[100vh] flex flex-col items-center justify-center"
            variants={showUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.85 }}
          >
            <motion.div variants={childAnim} className="text-center space-y-4 max-w-md">
              <h1 className="md:text-4xl text-2xl font-bold">بطاقه الاعمال المميزه</h1>
              <h3 className="text-gray-400 md:text-lg text-sm">
                مصممة لرواد الأعمال وأصحاب المشاريع، هذه البطاقة توفر مزايا حصرية وخدمات مخصصة لدعم أعمالك وتحقيق طموحاتك.
              </h3>
              <span className="inline-block px-6 py-2 border border-white bg-white text-black rounded-full">
                تعرف علئ المزيد
              </span>
            </motion.div>
              <p 
              variants={childAnim} 
              className=" absolute bottom-7 text-gray-400 text-sm md:max-w-150 max-w-xs">
                تمنحك بطاقة كبار الشخصيات تجربة مميزة من خلال خدمات حصرية، دعم شخصي، عروض خاصة، وأولوية في الوصول إلى أحدث المنتجات والخدمات. إنها الخيار الأمثل لأصحاب المشاريع الذين يسعون للتميز والنمو.
              </p>
          </motion.div>
        </div>
      </div>
    )
  );
}

export default AboutContent;
