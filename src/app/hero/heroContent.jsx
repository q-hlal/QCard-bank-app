"use client";
import { useEffect, useState } from "react";
import useScrollTracker from "../../components/useScrollTracker";
import { motion } from "framer-motion";
import { PiLightningDuotone } from "react-icons/pi";
import { FaShieldAlt } from "react-icons/fa";
import { FaCartShopping , FaMoneyCheckDollar , FaGlobe} from "react-icons/fa6";
import useSplitWords from "../../components/spiltHook";
import { useRouter } from "next/navigation";
import { containerVariants, secondAnimation, thierdAnimation, wordVariants } from "@/components/anim";
import { playClickSound } from "../../components/globalAudio ";

const HeroContent = () => {
  const [loader, setLoader] = useState(false);
  const router = useRouter();

  useScrollTracker();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

    const handleNavigation = (href) => {
      playClickSound();
      router.push(href);
    };

  const firstText = ` الطرق الأسرع والأكثر كفاءة للحرية المالية نُتقن، نُبدع، نؤمّن `
  const secondText = `حرّر إمكانياتك المالية باستخدام بطاقة تمنحك الأمان، الراحة، والمزايا في كل عملية شراء استمتع بإدارة ذكية لمصاريفك اليومية وحقق أهدافك بخطوات مدروسه`;
  const thiredText = ` انضم إلى مجتمع متنامٍ من المستخدمين الذين يثقون في خدماتنا لإدارة أموالهم بذكاء نحن هنا لبناء ثقة تدوم  `;
  const firstWords = useSplitWords(firstText);
  const secondWords = useSplitWords(secondText);
  const thirdWords = useSplitWords(thiredText);

  return (
    loader && (
      <div className="scroll-wrapper min-h-screen">
        <motion.div
          className="section p-20 min-h-[100vh] relative overflow-hidden"
        >
          {/* Hero Section */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            dir="rtl" 
            viewport={{ once: false }} 
            className="
            absolute top-40 left-1/2 transform -translate-x-1/2 text-center px-4 max-w-xl overflow-hidden inline-block"
          >
            <h1 className="
            font-bold text-white mb-4 leading-relaxed flex flex-wrap justify-center
            text-2xl md:text-4xl 
            ">
              {firstWords.map(({ word, id }) => (
                <motion.span key={id} variants={wordVariants} className="ml-3 inline-block">
                  {word}
                </motion.span>
              ))}
            </h1>
            <button 
            onClick={() => handleNavigation("/routes")}
            className="bg-white text-black px-6 py-2 rounded-full font-medium cursor-pointer hover:bg-gray-200 transition duration-300">
              أكتشف المزيد
            </button>
          </motion.div>

          {/* Bottom Right Section */}
          <div className=" absolute bottom-10 right-5 text-right px-4 max-w-xl">
            <div className="flex  items-center justify-center">
              <h3 className="text-2xl font-bold text-white">
                كي<br />كارد
              </h3>
              <motion.p
              className="text-sm ml-4 text-white max-w-100 flex flex-wrap"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible" 
              dir="rtl" 
              viewport={{ once: false }} 
            >
              {secondWords.map(({ word, id }) => (
                <motion.span
                  key={id}
                  variants={wordVariants}
                  className="mr-1 inline-block" 
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>
            </div>
          </div>

          {/* Bottom Left Section */}
          <div className="absolute bottom-10 left-5 text-left px-4 max-w-xl">
              <div className="hidden md:flex items-center justify-center">
              <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible" 
              viewport={{ once: false }} 
              className="text-sm text-white w-100">
               <h3 className="text-2xl font-bold text-white mb-2 ">
                +2,000,000 أكثر من
              </h3>
              <div dir="rtl">
                {thirdWords.map(({ word, id }) => (
                  <motion.span 
                    key={id} 
                    variants={wordVariants} 
                    className="mr-1 inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Other Sections ------------------------------------------------*/}
        <div className="section md:h-screen  flex  items-center justify-center relative text-white">
        <motion.div 
          viewport={{ once : true , amount: 0.8 }}
          variants={secondAnimation}
          initial="hidden"
          whileInView="visible"  
          className="relative w-full h-screen  flex items-center justify-center overflow-hidden"
        >
          
          {/* Fast Payment */}
          <motion.div variants={secondAnimation} className="flex flex-col absolute top-10 md:left-50 left-0 items-center max-w-xs text-center">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center md:text-2xl">
                <PiLightningDuotone />
              </span>
              <h3 className="md:text-lg font-semibold">دفع سريع</h3>
            </div>
            <p className="md:text-sm text-xs md:text-gray-600 text-white">
              تمكنك بطاقة الائتمان من إتمام معاملاتك المالية بسرعة كبيرة، 
              مما يوفر عليك الوقت والجهد، ويسمح لك بالشراء في أي وقت دون الحاجة للانتظار. مع واجهات مستخدم واضحة،
            </p>
          </motion.div>

          {/* Secure */}
          <motion.div variants={secondAnimation} className="flex flex-col absolute top-40 md:right-40  right-0 items-center max-w-xs text-center">
            <div className="flex items-center gap-2 mb-2 ">
              <span className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center md:text-2xl">
                <FaShieldAlt />
              </span>
              <h3 className="md:text-lg font-semibold">آمن ومضمون</h3>
            </div>
            <p className="md:text-sm text-xs md:text-gray-600 text-white">
              تقدم بطاقات الائتمان حماية متقدمة ضد الاحتيال، مع أنظمة تحقق مشددة لضمان سرية معلوماتك، 
              مما يجعل عمليات الشراء أكثر أماناً وموثوقية.
            </p>
          </motion.div>

          {/* Easy to Use */}
          <motion.div variants={secondAnimation} className="flex flex-col absolute md:bottom-20  md:right-30 bottom-50  right-0 items-center max-w-xs text-center">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center md:text-2xl">
                <FaMoneyCheckDollar />
              </span>
              <h3 className="md:text-lg font-semibold">تحكم كامل بالمصاريف</h3>
            </div>
            <p className="md:text-sm text-xs md:text-gray-600 text-white">
              تساعدك بطاقة الائتمان على إدارة نفقاتك بشكل فعال، من خلال تتبع عمليات الشراء وكشف الحسابات المفصل،
              مما يمكنك من التخطيط المالي وتحقيق أهدافك بسهولة.
            </p>
          </motion.div>

          {/* Good for Online Shopping */}
          <motion.div variants={secondAnimation} className="flex flex-col absolute md:bottom-80 md:left-10 bottom-90 left-0 items-center max-w-xs text-center">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center md:text-2xl">
                <FaCartShopping />
              </span>
              <h3 className="md:text-lg font-semibold">مثالي للتسوق عبر الإنترنت</h3>
            </div>
            <p className="md:text-sm text-xs md:text-gray-600 text-white">
              باستخدام بطاقة الائتمان يمكنك التسوق عبر الإنترنت بسهولة، 
              على أغلب المواقع والبرامج المدفوعات بشكل آمن وسريع دون عناء.
            </p>
          </motion.div>

          <motion.div variants={secondAnimation} className="flex flex-col absolute bottom-10 md:left-30 left-0 items-center max-w-xs text-center">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center md:text-2xl">
                <FaGlobe />
              </span>
              <h3 className="md:text-lg font-semibold">لا حدود لآفاقك</h3>
            </div>
            <p className="md:text-sm text-xs md:text-gray-600 text-white">
              مع بطاقة الائتمان، العالم بين يديك. أستلم من أي مكان، حوّل أموالك بسهولة، واستمتع بسهولة وبحماية متقدمة لمعاملاتك محلياً وعالمياً.
            </p>
          </motion.div>
        </motion.div>

        </div>
        <motion.div
        variants={thierdAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{  amount: 0.98 }}
        className="text-4xl p-20 section h-screen text-white flex flex-col justify-center items-center gap-6 relative"
      >
        <h1 className="md:text-6xl text-4xl text-center font-bold">مستقبلك المالي يبدأ الآن</h1>
        <h3 className="md:text-2xl text-xl text-center  font-semibold text-gray-300">
          مع بطاقة الائتمان، الفرص بين يديك
        </h3>
        <p className="md:text-lg text-base  text-gray-400 max-w-2xl text-center mx-auto">
          احصل على بطاقتك اليوم واستمتع بحرية مالية لا مثيل لها. مع كي كارد، 
          تتيح لك البطاقة وتفتح أمامك فرصاً جديدة لتحقيق أهدافك المالية بثقة واستقرار, سارع بالحجز الآن.
        </p>
        
        <div>
          <button 
          onClick={() => handleNavigation("/card")}
          className="md:px-6 py-2 px-2 rounded-full md:font-medium text-lg  bg-yellow-300 text-white z-5 cursor-pointer hover:bg-yellow-400 transition duration-300 md:mt-6">
            أحصل علئ بطاقتك
          </button>
        </div>

        
        <div className="absolute bottom-10 md:left-10 text-white max-w-xs">
          <p className="text-sm text-gray-400 text-center sm:text-left">
            تأسست شركة كي (القطاع المختلط) عام 2007 كمشروع مشترك بين القطاع الخاص وتمثله شركة (الأنظمة العراقية للدفع الإلكتروني) والقطاع الحكومي الذي يمثله أكبر بنك في البلاد وهو مصرف الرافدين ولديه خبرة 14 عاما في مجال الدفع الالكتروني ويعتبر أكبر مصدر وجامع للبطاقات في العراق.
          </p>
        </div>

        <div className="hidden md:flex absolute bottom-10 right-10 text-white max-w-xs ">
          <h3 className="text-2xl font-bold mb-2">كي كارد</h3>
          <p className="text-sm text-gray-400">
          تعمل شركه كي بالتعاون مع مجموعة من المؤسسات والهيئات لتقديم حلول رقمية متطورة تتوافق مع احتياجات السوق الحديث. 
          </p>
        </div>

      </motion.div>
      </div>
    )
  );
};

export default HeroContent;
