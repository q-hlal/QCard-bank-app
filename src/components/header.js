"use client";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setPlaying } from "@/store/audioSlice";
import Image from "next/image";
import Link from "next/link";
import { playClickSound } from "@/components/globalAudio ";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { buttonNavBarAniamtion, navBarAniamtion } from "./anim";
import { BsArrowUpRight } from "react-icons/bs";


const Header = () => {
  const [ showRoundNav , setShowRoundNav] =useState(null);
  const [showNavBar  , setShowNavBar] =useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const isPlaying = useSelector((state) => state.audio.isPlaying);

  const toggleSound = () => {
    playClickSound(); 
    dispatch(setPlaying(!isPlaying));
  };

  const handleNavigation = (href) => {
    playClickSound();
    router.push(href);
  };

  const shownavbar = () => {
     playClickSound();
     setShowNavBar(!showNavBar);
  };

  useEffect(() => {
  if (!showRoundNav) {
    setShowNavBar(false);
  }
  }, [showRoundNav]);


    useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
setShowRoundNav(scrollTop > window.innerHeight * 0.1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full px-6 py-4 absolute z-100">
      <nav className="flex items-center justify-between space-x-8 w-full">
        {/* Logo */}
        <div className="relative group">
          <Image
            className="border-r border-black p-2"
            src="/images/qcard.png"
            alt="logo img"
            width={60}
            height={60}
          />
          <p className="text-2xl text-white absolute top-[15px] left-[50px] px-5 opacity-0 transform translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]">
            كارد
          </p>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex space-x-10 text-white">
          <Link href="/" onClick={playClickSound} className="hover:text-yellow-300 transition-colors">المنزل</Link>
          <Link href="/merchantsAndCompanies" onClick={playClickSound} className="hover:text-yellow-300 transition-colors">التجار والشركات</Link>
          <Link href="/businessSolutions" onClick={playClickSound} className="hover:text-yellow-300 transition-colors">حلول الأعمال</Link>
          <Link href="/news" onClick={playClickSound} className="hover:text-yellow-300 transition-colors">الأخبار</Link>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <div
            onClick={toggleSound}
            className={`w-10 h-10 rounded-full flex items-center justify-center text-m cursor-pointer transition duration-300 ${
              isPlaying ? "bg-yellow-300 text-white" : "bg-white hover:bg-gray-200"
            }`}
          >
            🎵
          </div>
          <button
            onClick={() => handleNavigation("/card")}
            className="px-6 py-2 rounded-full font-medium bg-yellow-300 text-white cursor-pointer hover:bg-yellow-400 transition duration-300"
          >
            أحصل علئ بطاقتك
          </button>
        </div>
      </nav>

   <AnimatePresence>
      {showRoundNav && (
        <motion.div
          key="round-button"
          onClick={shownavbar}
          variants={buttonNavBarAniamtion}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed top-5 right-10 w-18 h-18 bg-black text-white rounded-full z-50 cursor-pointer flex items-center justify-center"
        >
          <motion.div
            initial={false}
            animate={showNavBar ? "open" : "closed"}
            className="relative w-6 h-6 mt-3"
          >
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 6 },
              }}
              transition={{ duration: 0.3 }}
              className="absolute -left-0.5 w-8 h-1 bg-white rounded"
            />
            <motion.span
              variants={{
                closed: { rotate: 0, y: 10 },
                open: { rotate: -45, y: 6 },
              }}
              transition={{ duration: 0.3 }}
              className="absolute -left-0.5 w-8 h-1 bg-white rounded"
            />
          </motion.div>
        </motion.div>
      )}

        {showNavBar &&  showRoundNav && (
      <motion.div 
        key="nav-menu" 
        variants={navBarAniamtion}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed top-0 left-0 w-full h-screen bg-white  flex flex-col items-center justify-around text-black ">
          <Link href="/" onClick={playClickSound} className="text-3xl flex items-center gap-4">المنزل <BsArrowUpRight/></Link>
          <Link href="/merchantsAndCompanies" onClick={playClickSound} className="text-3xl flex items-center gap-4">التجار والشركات <BsArrowUpRight/></Link>
          <Link href="/businessSolutions" onClick={playClickSound} className="text-3xl flex items-center gap-4">حلول الأعمال <BsArrowUpRight/></Link>
          <Link href="/news" onClick={playClickSound} className="text-3xl flex items-center gap-4">الأخبار <BsArrowUpRight/></Link>
      </motion.div>        
        )}
    </AnimatePresence>
    
    </header>
  );
};

export default Header;
