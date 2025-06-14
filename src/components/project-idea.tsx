'use client';

import { motion } from 'framer-motion';

export const ProjectIdea = () => {
  return (
    <motion.section
      id="project-idea"
      className="my-10 flex w-full flex-col items-center text-white"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      {/* Central Wrapper for Alignment */}
      <div className="w-full max-w-7xl px-6">
        {/* Project Idea Title */}
        <h2 className="mb-8 text-center text-4xl font-semibold">
          Project Idea
        </h2>

        <motion.div className="flex w-full flex-col items-center md:flex-row md:space-x-8">
          {/* Left Section (Image) */}
          <div className="w-full md:w-1/2">
            <motion.img
              src="/images/Payora.webp" // Replace with your image path
              alt="AI-Powered Investment"
              className="h-auto w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Right Section (Text Content) */}
          <div className="mt-6 w-full text-center md:mt-0 md:w-1/2 md:text-left">
            <h3 className="mb-4 text-3xl font-semibold">
              AI-Powered Investment Solution
            </h3>
            <p className="mb-4 text-lg">
              This project combines AI with financial technology to offer
              personalized investment insights and optimize payment processing
              for Nigerians. Using machine learning algorithms, the system
              analyzes user spending patterns, market trends, and investment
              opportunities, providing tailored recommendations to maximize
              returns. Additionally, it integrates an AI-driven payment gateway
              that ensures secure, real-time transactions with fraud detection,
              making it easier for individuals and businesses to invest and
              manage finances securely in a fast-evolving Nigerian economy.
            </p>
          </div>
        </motion.div>

        {/* How It Works Section */}
        <div className="mt-8 text-center">
          <h3 className="mb-4 text-xl font-semibold">How It Works</h3>
          <ul className="list-inside list-disc space-y-2 text-gray-200">
            <li>AI Matching: Analyzes spending patterns and market trends</li>
            <li>Investment Insights: Provides tailored recommendations</li>
            <li>
              Payment Gateway: Real-time, secure transactions with fraud
              detection
            </li>
            <li>
              Optimized Finance: Easy management of investments and payments
            </li>
          </ul>
        </div>

        {/* Key Benefits Section */}
        <div className="mt-8 text-center">
          <h3 className="mb-4 text-xl font-semibold">Key Benefits</h3>
          <ul className="flex flex-wrap justify-center gap-4 text-gray-200">
            <li className="rounded-lg bg-blue-500 px-4 py-2 text-white">
              Personalized Investment Insights
            </li>
            <li className="rounded-lg bg-green-500 px-4 py-2 text-white">
              AI-driven Payment Solutions
            </li>
            <li className="rounded-lg bg-purple-500 px-4 py-2 text-white">
              Real-time Fraud Detection
            </li>
            <li className="rounded-lg bg-yellow-500 px-4 py-2 text-white">
              Optimized Financial Management
            </li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
};
