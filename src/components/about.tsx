'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />
      <div className="-mt-5 max-w-2xl text-center leading-7">
        <Image
          src="/images/AboutMe.jpg"
          alt="Your Name"
          className="mx-auto mb-4 size-40 rounded-full" // Add your desired styling
        />
        <p className="mb-4">
          I&apos;m Victor Ihetu, I&apos;m a Cloud and Devops Engineer with a
          strong focus on automation, scalability, and infrastructure as code.
          Skilled in AWS, Azure, Kubernetes, Docker, Terraform, and CI/CD
          pipelines. Passionate about building reliable, high-performance
          systems and driving cloud-native solutions to streamline deployments
          and enhance system reliability.
        </p>
      </div>
      <Skills />
    </motion.section>
  );
};
