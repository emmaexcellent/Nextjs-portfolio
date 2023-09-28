"use client"

import SectionHeading from './SectionHeading'
import { projectsData } from "@/lib/data";
import Project from './Project';
import { useSectionInView } from '@/lib/Hooks';
import React from 'react';

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section
      ref={ref}
      id='projects'
      className='text-center mb-28 sm:mb-40 scroll-mt-28'>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {
          projectsData.map((project, index) =>(
            <React.Fragment key={index}>
              <Project {...project}/>
            </React.Fragment>
          ))
        }
      </div>
    </section>
  )
}


