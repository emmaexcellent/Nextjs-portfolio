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
        After graduating from college, I decided to pursue
        my passion for programming before getting admission
        to study in <span className="font-medium">University</span>.
        I enrolled in a bootcamp and learned{" "}
        <span className='font-medium'>Full-stack Web Development
        </span>.<span className='italic'> My favorite part of
        programming</span> is the Prolem-Solving aspect. I{" "}
        <span className='underline'>love</span> the feeling of
        finally figuring out a solution to a problem. My core
        stack is{" "} <span className='font-medium'>
        React, Nextjs, Nodejs, Django and MongoDB</span>.
        I'm also familiar with TypeScript and Eslint
      </p>
      <p>
        <span className='italic'>Before diving into programming,
        </span>, I enjoy solving mathematics problems, play guitar,
        and playing keyboard. I also enjoy{" "}
        <span className='font-medium'>learning new things</span>.
        I'm currently learning about{" "}
        <span className='font-medium'>how professionals work
        in the field of programming at companies like{" "}
        <span className='uppercase'>Meta & Google</span>.</span>
      </p>
    </motion.section>
  )
}
