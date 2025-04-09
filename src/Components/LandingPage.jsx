'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const LandingPage = () => {

  const language='hindi'

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.4 } },
    hover: { scale: 1.05 },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.3 } },
  };

  return (
    <motion.div
      className="flex items-center justify-center min-h-screen lg:max-h-screen font-sans p-5 transition-all duration-300 bg-[rgba(243,243,243,1)] text-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <div className="flex flex-col md:flex-row items-center max-w-7xl w-full mx-auto">
        <motion.div
          className="text-center md:text-left mb-8 md:mb-0 md:pr-10"
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={logoVariants}>
            <Image
              src="/bizeye-logo.png"
              alt="Bizeye Logo"
              width={150}
              height={50}
            />
          </motion.div>

          <motion.h1
            className="text-4xl font-bold mt-8 text-blue-600"
            variants={textVariants}
          >
            {language === 'hindi' ? 'बिज़आई में आपका स्वागत है' : 'Welcome To BIZEYE'}
          </motion.h1>

          <motion.p className="mt-4" variants={textVariants}>
            {language === 'hindi'
              ? 'बस कुछ कदम पीछे हटें और अपने व्यवसाय को अगले स्तर तक बढ़ाएं'
              : 'Just Some Steps Back click and grow your business to the next level'}
          </motion.p>

          <motion.button
            className="bg-blue-600 text-white py-3 px-8 rounded mt-8 w-full md:w-auto hover:bg-blue-700 transition"
            variants={buttonVariants}
            whileHover="hover"
            whileTap={{ scale: 0.9 }}
          >
            <Link href='/Login'>
            {language === 'hindi' ? 'लॉग इन करें' : 'Login'}
            </Link>
          </motion.button>

          <p className="text-center font-bold lg:text-start mt-4">
            {language === 'hindi' ? 'या' : 'OR'}
          </p>

        
          <motion.button
            className="border border-blue-600 text-blue-600 py-3 px-8 rounded mt-4 w-full md:w-auto hover:bg-blue-50 transition"
            variants={buttonVariants}
            whileHover="hover"
            whileTap={{ scale: 0.9 }}
          >
            <Link href='/Register'>
            {language === 'hindi' ? 'खाता बनाएं' : 'Create Account'}
            </Link>
          </motion.button>
        </motion.div>

        <motion.div
          className="flex justify-end items-center mt-8 md:mt-0"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <Image
            src="/workflow-Photoroom.png"
            alt="Workflow Illustration"
            width={900}
            height={300}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LandingPage;
