'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';

export default function Login() {
  const language = '';

  return (
    <>
      <Head>
        <title>BIZEYE - {language === 'hindi' ? 'लॉगिन' : 'Login'}</title>
      </Head>

      <div
        className="min-h-screen flex items-center justify-center p-4"
        style={{ backgroundColor: 'rgba(243, 243, 243, 1)' }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-8 rounded-lg shadow-md w-full max-w-md"
          style={{ backgroundColor: 'rgba(255, 255, 255, 1)' }}
        >
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">
              {language === 'hindi' ? 'बिजआई में आपका स्वागत है' : 'Welcome To BIZEYE'}
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              {language === 'hindi'
                ? 'हमें खुशी है कि आप वापस आए हैं'
                : 'We are glad to know that you are back'}
            </p>
          </div>

          <form className="space-y-4 sm:space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700">
                {language === 'hindi' ? 'व्यवसाय ईमेल' : 'Business Email'}
              </label>
              <input
                type="email"
                id="email"
                placeholder={language === 'hindi' ? 'अपना व्यवसाय ईमेल दर्ज करें' : 'Enter your Business Email'}
                className="w-full px-4 py-2 text-sm sm:text-base border border-gray-300 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1 text-gray-700">
                {language === 'hindi' ? 'पासवर्ड' : 'Password'}
              </label>
              <input
                type="password"
                id="password"
                placeholder={language === 'hindi' ? 'अपना पासवर्ड दर्ज करें' : 'Enter your password'}
                className="w-full px-4 py-2 text-sm sm:text-base border border-gray-300 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700 transition flex items-center justify-center"
            >
              {language === 'hindi' ? 'लॉगिन करें' : 'Login'} <span className="ml-2">→</span>
            </motion.button>
          </form>

          <div className="flex items-center my-4 sm:my-6">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-sm sm:text-base text-gray-600">
              {language === 'hindi' ? 'या' : 'OR'}
            </span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          <Link
            href="/Register"
            className="block text-center text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base"
          >
            {language === 'hindi' ? 'नया खाता बनाएं' : 'Create Account'}
          </Link>
        </motion.div>
      </div>
    </>
  );
}
