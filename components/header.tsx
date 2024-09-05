"use client";

import React, { useState } from 'react'
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/ActiveSectionContext';

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <header className='w-full z-[999] relative'>
      <motion.div className='fixed top-3 left-1/2 -translate-x-1/2 h-[3.5rem] w-full rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem sm:top-6 sm:h-[3.25rem] sm:w-[40rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75'
        initial={{ y: -100, x:"-50%", opacity: 0 }}
        animate={{ y: 0, opacity: 1}}>
      </motion.div>

        <nav className="fixed flex top-[1rem] left-1/2 h-12
          -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial]
          sm:py-0">
          <ul className='flex w-full md:w-[22rem] flex-nowrap items-center
            justify-center text-sm md:text-base font-medium
            text-gray-500 sm:w-[initial] gap-2 md:gap-5'>
            {
              links.map(link => (
                <motion.li className='h-3/4 flex items-center justify-center relative'
                  key={link.hash}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1}}>
                  <Link className={clsx('flex w-full items-center justify-center px-1.5 py-1.5 pb-2 md:px-3 md:py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300', {"text-gray-950 dark:text-gray-200": activeSection === link.name, })}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name)
                    setTimeOfLastClick(Date.now())
                  }}>
                  {link.name}
                  {link.name === activeSection && (
                      <motion.span className='bg-gray-200 rounded-full absolute inset-0 -z-10 dark:bg-gray-800'
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30
                      }}></motion.span>
                  )}
                  </Link>
                </motion.li>
              ))
            }
          </ul>

        </nav>

    </header>
  )
}
