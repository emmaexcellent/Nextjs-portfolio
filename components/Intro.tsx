"use client";

import Image from 'next/image';
import pic from '@/public/emma.jpeg';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { useSectionInView } from '@/lib/Hooks';
import { useActiveSectionContext } from '@/context/ActiveSectionContext';

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const {
    setActiveSection,
    setTimeOfLastClick
  } = useActiveSectionContext();

  return (
    <section ref={ref} id='home' className='w-full mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}>
            <Image
              src={pic}
              alt='Emmanuel Excellent'
              width={200}
              height={200}
              quality={95}
              priority={true}
              className='h-60 w-60 rounded-full object-cover border-[0.30rem] border-white shadow-xl'
            />
          </motion.div>
          <motion.span
            className='absolute text-4xl bottom-2 right-5'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}>
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1 className='mb-10 mt-4 px-2 md:px-8'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}>
        <p className="text-center font-semibold text-2xl">
          Hi, I'm Emmanuel Excellent.
          <br />
          <span className="font-medium text-lg">
            A Full-Stack Developer with 6 years of experience, passionate about crafting beautiful, modern, and responsive websites & apps. From mobile apps to full-scale web platforms, I leverage the latest and most trusted frameworks, including AI and Web3, to create cutting-edge solutions that meet today’s tech demands.
          </span>
        </p>
      </motion.h1>

      <motion.div
        className='flex sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}>
        <Link href="#contact"
          className="group bg-gray-800 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now);
          }}>
          <span className="hidden md:block">Contact me here</span>
          <FaPhoneAlt size={20} className="md:hidden" />
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border borderBlack dark:bg-white/10'
          href="/Resume.pdf" download>
            <span className="hidden md:block" >Check Resume</span>
            
          <FaEye size={20} className="md:hidden" />
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a className='bg-white p-4 flex text-gray-700 items-center gap-2 rounded-full focus:scale-110 hover:scale-110 hover:text-gray-950 active:scale-105 transition cursor-pointer border borderBlack dark:bg-white/10 dark:text-white/60'
          href='https://linkedin.com/in/emmanuel-excellent' target='_blank'>
          <BsLinkedin />
        </a>

        <a className='bg-white p-4 flex text-gray-700 items-center gap-2 rounded-full text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] active:scale-105 hover:text-gray-950 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
          href='https://github.com/emmaexcellent' target='_blank'>
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
