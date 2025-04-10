"use client"
import { motion } from 'framer-motion';

export default function Expert() {
  const experts = [
    {
      name: "Bapu Tapkir",
      role: "Financial Expert",
      availability: "Available now",
      rating: 4.8
    },
    {
      name: "Yogesh Gore",
      role: "Business Growth",
      availability: "Available in 30 min",
      rating: 4.9
    },
    {
      name: "AgroVision Team",
      role: "Technical Support",
      availability: "Available 24/7",
      rating: 4.7
    }
  ];

  return (
    <>
        <title>BIZEYE - Talk To Expert</title>
        <div className="space-y-6">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl sm:text-2xl font-bold"
          >
            Talk To Expert
          </motion.h1>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {experts.map((expert, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-4">
                    {expert.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold">{expert.name}</h3>
                    <p className="text-sm text-gray-600">{expert.role}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className={`text-xs px-2 py-1 rounded-full ${expert.availability.includes('now') ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {expert.availability}
                  </span>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-sm">{expert.rating}</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-blue-600 text-white py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
                  >
                    Chat
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gray-100 text-gray-800 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition"
                  >
                    Call
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
    </>
  );
}