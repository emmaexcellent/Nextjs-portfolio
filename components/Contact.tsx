"use client";

import React from 'react'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/Hooks';
import { sendEmail } from "@/actions/SendEmail";
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id='contact'
      className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}>
      <SectionHeading>Contact Me</SectionHeading>
      <p className='text-gray-700b -mt-6 dark:text-white/80'>
        Please contact me directly at <a className='underline' href='mailto:example@gmail.com'>emmaexcellent030@gmail.com</a> or through this form</p>
      <form className='mt-10 flex flex-col dark:text-black'
        action={async (formData) =>{
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully!")
        }}>
        <input type='email' name='senderEmail' placeholder='Your Email' className='h-14 px-4 rounded-lg borderBlack mb-2 dark:bg-white dark:bg-opacity/80 dark:focus:bg-opacity-100 transition-all dark:outline-none' required maxLength={500}/>
        <textarea name='message' placeholder='Your message' className='h-52 rounded-lg borderBlack p-4 mb-3 dark:bg-opacity/80 dark:focus:bg-opacity-100 transition-all dark:outline-none' required maxLength={500}/>
        <SubmitBtn />
      </form>
    </motion.section>
  )
}
