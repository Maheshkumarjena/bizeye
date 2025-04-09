import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function Setting() {
  const menuItems = [
    "My Account",
    "Privacy & Safety",
    "Billing",
    "Language"
  ];

  return (
    <>
      <Head>
        <title>BIZEYE - Settings</title>
      </Head>
      <Layout>
        <div className="space-y-4 sm:space-y-6">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl sm:text-2xl font-bold"
          >
            Setting
          </motion.h1>

          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
            {/* Side Menu */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="w-full lg:w-64 bg-white p-3 sm:p-4 rounded-lg shadow-sm border border-gray-100"
            >
              <ul className="space-y-1 sm:space-y-2">
                {menuItems.map((item, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                  >
                    <a href="#" className={`block px-3 sm:px-4 py-2 rounded-md text-sm sm:text-base ${index === 0 ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}>
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Main Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex-1 bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100"
            >
              <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">My Account</h2>
              
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="Placeholder" 
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email ID</label>
                  <input 
                    type="email" 
                    placeholder="Placeholder" 
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                  <input 
                    type="text" 
                    placeholder="Placeholder" 
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                  <input 
                    type="tel" 
                    placeholder="Placeholder" 
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-3 sm:mt-4 bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition"
                >
                  Update
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </Layout>
    </>
  );
}