"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Svg from './svg';

const WhyUs = () => {

  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loader && (
       <div className="relative w-full h-[200vh] bg-white">
        <div className="text-black sticky top-0 h-screen flex flex-col items-center px-4 text-right">

            <div className="w-full mt-10">
                <h3 className="lg:text-6xl md:text-4xl text-2xl leading-[1.5] mb-10 justefy-center">
                  بدعم شركائنا الموثوقين<br/>
                  <span className='lg:mr-100 lg:mr-80'>نرتقي لنكون من روّاد قطاع التكنولوجيا </span>
                </h3>
            </div>

            <div className='flex flex-col  w-full items-center -top-5'>
              <div className="md:text-3xl font-bold bg-gradient-to-b from-gray-300 to-black rounded-lg shadow-md text-center border border-gray-200 md:mt-20 p-1 ">
                <div className="bg-black text-gray-200 rounded-lg p-6">
                  شركاؤنا في النجاح
                </div>
                 <div className="absolute top-[24rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition">
                  <Svg />
                </div>
              </div>

              <div className="flex md:flex-row flex-col justify-center items-center lg:mt-30 md:mt-20 mt-10 gap-4 w-full">
                <div className="text-black md:p-6 p-2 rounded border border-gray-300 border-[1px] flex-1 lg:h-40 md:h-50 flex flex-col items-start gap-2">
                  <Image alt="MasterCard logo" src="/images/mastercard.png" width={50} height={50} />
                  <h3 className="lg:text-lg text-md font-semibold">ماستركارد</h3>
                  <p className="lg:text-sm text-xs text-gray-700">
                    تفخر موْسستنا بشراكتها الاستراتيجية مع ماستركارد، الشركة الرائدة عالميًا في مجال تكنولوجيا الدفع. نعمل معًا لتوفير حلول مالية آمنة وذكية.
                  </p>
                </div>

                <div className="text-black md:p-6 p-2 rounded border border-gray-300 border-[1px] flex-1 lg:h-40 md:h-50 flex flex-col items-start gap-2">
                  <Image alt="UnionPay logo" src="/images/unionPay.png" width={50} height={50} />
                  <h3 className="lg:text-lg text-md font-semibold">يونيون باي</h3>
                  <p className="lg:text-sm text-xs text-gray-700">
                    شراكتنا مع يونيون باي تمثل التزامًا بتوفير حلول دفع فعالة للمستخدمين في الأسواق الآسيوية. من خلال هذا التعاون، نوفّر مستوى عالٍ من الثقة والمرونة لعملائنا الدوليين.
                  </p>
                </div>

                <div className="text-black md:p-6 p-2 rounded border border-gray-300 border-[1px] flex-1 lg:h-40 md:h-50 flex flex-col items-start gap-2">
                  <Image alt="Visa logo" src="/images/visa.png" width={50} height={50} />
                  <h3 className="lg:text-lg text-md font-semibold">فيزا</h3>
                  <p className="lg:text-sm text-xs text-gray-700">
                    تربطنا شراكة قوية مع شركة فيزا، الرائدة في حلول الدفع الإلكتروني. نسعى معًا إلى تمكين المستخدمين من إجراء معاملاتهم بكل سهولة وأمان، ضمن بيئة مالية متطورة ومبتكرة.
                  </p>
                </div>
              </div>
            <div>

            </div>
          </div>

        </div>
     </div>
      )}
    </>
  );
}  

export default WhyUs;