"use client";

import SectionHeading from './SectionHeading'
import { motion } from "framer-motion";
import { useSectionInView } from '@/lib/Hooks';

export default function About() {
  const { ref } = useSectionInView("About", 0.75);
  return (
    <motion.section
      ref={ref}
      id='about'
      className='mb-28 max-w-[45rem] text-center
      leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}>
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
      After graduating from college, I followed my passion for programming before gaining admission to study at 
      <span className="font-medium">university</span>. I took a proactive step by enrolling in a bootcamp, where I 
      mastered <span className='font-medium'>Full-Stack Web Development</span>. <span className='italic'>
      What excites me most about programming</span> is the problem-solving aspect — the thrill of cracking a complex 
      challenge is something I <span className='underline'>truly enjoy</span>. My core stack includes 
      <span className='font-medium'>Frontend, Backend, App Development</span>, with strong proficiency in 
      <span className='font-medium'>React, ReactNative, Solidity, TypeScript</span> and <span className='font-medium'>ESLint</span>.
    </p>
    <p>
      <span className='italic'>Before diving deep into coding</span>, I had a passion for solving mathematics problems, 
      playing the guitar, and exploring the keyboard. Along with building technology, I have a continuous hunger for 
      <span className='font-medium'>learning new skills</span> and expanding my horizons. Currently, I’m exploring how 
      professionals at leading tech companies like <span className='uppercase'>Meta</span> and 
      <span className='uppercase'>Google</span> approach development and innovation.
    </p>

    </motion.section>
  )
}
