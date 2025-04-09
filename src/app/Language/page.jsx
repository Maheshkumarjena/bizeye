import Layout from '@/Components/layout';
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function Language() {
  const languages = ["English", "Hindi", "Marathi", "Gujarati", "Tamil", "Telugu"];

  return (
    <>
      <Head>
        <title>BIZEYE - Language Settings</title>
      </Head>
      <Layout>
        <div className="space-y-4 sm:space-y-6">
          <div className="flex justify-between items-center">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl sm:text-2xl font-bold"
            >
              Language
            </motion.h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
            {/* Side Menu */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="w-full lg:w-64 bg-white p-3 sm:p-4 rounded-lg shadow-sm border border-gray-100"
            >
              <ul className="space-y-1 sm:space-y-2">
                <motion.li whileHover={{ x: 5 }}>
                  <a href="#" className="block px-3 sm:px-4 py-2 rounded-md text-sm sm:text-base hover:bg-gray-100">My Account</a>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <a href="#" className="block px-3 sm:px-4 py-2 rounded-md text-sm sm:text-base hover:bg-gray-100">Privacy & Safety</a>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <a href="#" className="block px-3 sm:px-4 py-2 rounded-md text-sm sm:text-base hover:bg-gray-100">Billing / Pricing</a>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <a href="#" className="block px-3 sm:px-4 py-2 rounded-md text-sm sm:text-base bg-blue-100 text-blue-600">Language</a>
                </motion.li>
              </ul>
            </motion.div>

            {/* Main Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex-1 bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100"
            >
              <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Choose Your Language</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {languages.map((language, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className={`p-3 sm:p-4 border rounded-md cursor-pointer ${language === 'English' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
                  >
                    <div className="flex items-center">
                      {language === 'English' && (
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      )}
                      <span className={`text-sm sm:text-base ${language === 'English' ? 'font-medium text-blue-600' : ''}`}>{language}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 sm:mt-6 bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition"
              >
                Update
              </motion.button>
            </motion.div>
          </div>
        </div>
      </Layout>
    </>
  );
}