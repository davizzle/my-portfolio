// import Link from 'next/link';

// import { buttonVariants } from '@/components/button';
import { Icons } from '@/components/icons';
// import { cn } from '@/lib/utils';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'Project Idea',
    hash: '#project-idea',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/images/AMNI-Intranet.webp',
    title: 'AMNI Intranet',
    description:
      'A Next.js Intranet website, packed with features like TypeScript, Tailwind CSS, Next-auth, Eslint, and more.',
    technologies: ['Next.js', 'Tailwind', 'Next-auth', 'Prisma'],
    links: {
      preview: 'https://amni-kappa.vercel.app',
      github: 'https://github.com/Tobey14/amni',
    },
  },
  {
    image: '/images/RoboFriends.webp',
    title: 'RoboFriends',
    description:
      'RoboFriends is an app developed using React.js and Tailwind.css',
    technologies: ['Next.js', 'TypeScript', 'Tailwind'],
    links: {
      preview: 'https://davizzle.github.io/RoboFriends/',
      github: 'https://github.com/davizzle/RoboFriends',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'Cloud & DevOps Engineer',
    company: 'Freelancing, remote',
    description:
      'As a freelance Cloud & DevOps Engineer, I specialize in automating infrastructure, optimizing cloud resources, and implementing CI/CD pipelines. I have worked on projects focusing on scalable, high-performance systems using AWS, Azure, Kubernetes, Docker, Terraform, and other cloud-native tools, ensuring system reliability and cost-efficiency.',
    period: '2023 - Present',
    technologies: [
      'AWS',
      'Azure',
      'Kubernetes',
      'Docker',
      'Terraform',
      'CI/CD',
      'Linux',
    ],
  },
  {
    title: 'Cloud & DevOps Engineer',
    company: 'Peerless, remote',
    description:
      'Specialized in deploying containerized robust applications with a microservice architecture. Setup on scalable, high-performance environment using OpenShift, Kubernetes, Docker, Terraform, and other cloud-native tools.',
    period: '2023 - 2024',
    technologies: ['Kubernetes', 'Docker', 'Terraform', 'CI/CD'],
  },
  {
    title: 'Frontend developer & UI designer',
    company: 'webraiders, remote',
    description:
      'As a freelancer, I specialized in frontend website development using React/Typescript. I undertook projects, collaborating with the design team, to the backend engineering to final implementation, ensuring client satisfaction.',
    period: '2023',
    technologies: ['React.js', 'Next.js', 'TypeScript', 'Tailwind'],
  },
] as const;

export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.sass className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.redux className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.nestjs className="size-12" /> },
  { icon: <Icons.prisma className="size-12" /> },
  { icon: <Icons.docker className="size-12" /> },
] as const;
