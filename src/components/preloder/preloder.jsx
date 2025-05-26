"use client"
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion} from 'framer-motion'
import { divider, preloderText1, preloderText2, screenSplitBottom, screenSplitTop, spinerHide } from '../anim'

const Preloder = () => {
  const [index, setIndex] = useState(0);

  const numberPairs = [
  ["0", "0"],
  ["2", "7"],
  ["5", "6"],
  ["9", "8"],
  ["9", "9"],
];


useEffect(() => {
  if (index <= numberPairs.length - 1) {
    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 1500); 
    return () => clearTimeout(timer);
  }
}, [index]);

  return (
    <div className='w-full h-screen '>
      <div  className='w-full h-screen flex  items-center justify-center text-white overflow-hidden'>

        <div className='absolute top-0 w-full h-screen flex'>
          <motion.div 
          variants={screenSplitTop}
          animate="animate"
          exit="exit"
          className='w-full h-screen bg-[#303030]'></motion.div>

          <motion.div 
          variants={screenSplitBottom}
          animate="animate"
          exit="exit"
          className='w-full h-screen bg-[#303030]'></motion.div>
        </div>
        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 gap-1 flex ">
          <motion.div 
          variants={preloderText1}
          initial="hidden"
          animate="visible"
          exit="exit"
          className='relative -left-6 '>
            <h1 className='text-7xl'><span>كارد</span></h1>
          </motion.div>

          <motion.div 
          variants={preloderText2}
          initial="hidden"
          animate="visible"
          exit="exit"
          className='relative -right-0.5 pl-0.25'>
          <h1 className='text-7xl '><span>كي</span></h1>
          </motion.div>
        </div>

        <motion.div 
        variants={divider}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="absolute top-0 left-[50%] transform -translate-x-1/2 origin-center w-[1px] h-screen bg-white">
        </motion.div>

        <motion.div 
        variants={spinerHide}
        initial="initial"
        animate="animate"
        className='absolute bottom-[10%] left-[50%] transform -translate-x-1/2'>
          <div className="w-[50px] h-[50px] border-white border-[2px] border-t-[#303030] rounded-full animate-spin"></div>
        </motion.div>
        
      {index < numberPairs.length ? (
  <AnimatePresence mode="wait">
    <motion.div
      key={index}
      className="absolute left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 text-8xl flex gap-2"
    >
      <motion.span
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {numberPairs[index][0]}
      </motion.span>
      <motion.span
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.1, 
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {numberPairs[index][1]}
      </motion.span>
      </motion.div>
    </AnimatePresence>
      ) : null}

      </div>
    </div>
  )
}

export default Preloder