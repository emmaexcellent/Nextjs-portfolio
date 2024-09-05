import Header from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import ActiveSectionContextPorvider from '@/context/ActiveSectionContext'
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/Footer'
import ThemeSwitch from '@/components/ThemeSwitch'
import ThemeContextProvider from '@/context/ThemeContext'



export const metadata: Metadata = {
  title: 'Emmanuel Excellent | Personal Portfolio ',
  description: 'Emmanuel Excellent is a full stack Developer with 6 years of experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
          <div className='bg-[#f1c8ca] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]'>
          </div>
          <div className='bg-[#c7c1f8] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]'>
          </div>
          <ThemeContextProvider>
            <ActiveSectionContextPorvider>
              <Header />
              {children}
              <Toaster position="top-right" />
              <Footer />
              <ThemeSwitch/>
            </ActiveSectionContextPorvider>
          </ThemeContextProvider>
      </body>
    </html>
  )
}
