"use client"
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function page() {
  const services = [
    "Financial Audit Consulting",
    "Business Growth Audit / Consulting",
    "Compliance & Legal Audit / Consulting",
    "Marketing Audit Consulting",
    "Operational Audit \\ Consulting"
  ];

  return (
    <>
      <Head>
        <title>BIZEYE - Services</title>
      </Head>
        <div className="space-y-4 sm:space-y-6">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl sm:text-2xl font-bold"
          >
            BiZEYE Services
          </motion.h1>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100 cursor-pointer"
              >
                <h3 className="text-base sm:text-lg font-medium">{service}</h3>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-3 sm:mt-4 text-blue-600 text-sm font-medium hover:text-blue-800 flex items-center"
                >
                  Learn more <span className="ml-1">→</span>
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
    </>
  );
}