'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';
import { useTheme } from 'next-themes';

export default function Register() {
  const { theme } = useTheme();
  const language='english'

  const backgroundColor = theme === 'dark' ? 'rgba(32, 33, 35, 1)' : 'rgba(243, 243, 243, 1)';
  const formBgColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 1)';
  const labelColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-900';
  const inputBorder = theme === 'dark' ? 'border-gray-100  text-gray-200' : 'border-gray-800 text-gray-900';
  const placeholderText = language === 'hindi' ? 'यहाँ टाइप करें' : 'Enter';

  return (
    <>
      <Head>
        <title>BIZEYE - {language === 'hindi' ? 'रजिस्टर करें' : 'Register'}</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center p-4 transition-colors duration-300" style={{ backgroundColor }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-8 rounded-lg shadow-md w-full max-w-md"
          style={{ backgroundColor: formBgColor }}
        >
          <h1 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6 text-blue-600">
            {language === 'hindi' ? 'खाता बनाएं' : 'Create Account'}
          </h1>

          <form className="space-y-3 sm:space-y-4">
            
            <div>
              <label htmlFor="email" className={`block text-sm font-medium mb-1 ${labelColor}`}>
                {language === 'hindi' ? 'व्यवसाय ईमेल' : 'Business Email'}
              </label>
              <input
                type="email"
                id="email"
                placeholder={language === 'hindi' ? 'अपना व्यवसाय ईमेल दर्ज करें' : 'Enter your bussiness Email'}
                className={`w-full  px-4 py-2 text-sm sm:text-base border ${inputBorder} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 `}
              />
            </div>

            <div>
              <label htmlFor="password" className={`block text-sm font-medium mb-1 ${labelColor}`}>
                {language === 'hindi' ? 'पासवर्ड' : 'Password'}
              </label>
              <input
                type="password"
                id="password"
                placeholder={language === 'hindi' ? 'अपना पासवर्ड दर्ज करें' : 'Enter your password'}
                className={`w-full  px-4 py-2 text-sm sm:text-base border ${inputBorder} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            </div>

            <div>
              <label htmlFor="mobile" className={`block text-sm font-medium mb-1 ${labelColor}`}>
                {language === 'hindi' ? 'मोबाइल नंबर' : 'Mobile Number'}
              </label>
              <input
                type="tel"
                id="mobile"
                placeholder={language === 'hindi' ? 'मोबाइल नंबर' : 'Enter your Mobile Number'}
                className={`w-full  px-4 py-2 text-sm sm:text-base border ${inputBorder} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full  bg-blue-600 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700 transition flex items-center justify-center mt-4"
            >
              {language === 'hindi' ? 'जमा करें' : 'Submit'} <span className="ml-2">→</span>
            </motion.button>
          </form>

          <div className="mt-4 sm:mt-6 text-center">
            <Link
              href="/Login"
              className="text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base"
            >
              {language === 'hindi'
                ? 'पहले से खाता है? लॉगिन करें'
                : 'Already have an account? Login'}
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
}
