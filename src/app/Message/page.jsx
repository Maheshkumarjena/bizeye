'use client'
import { motion } from 'framer-motion';

export default function page() {
  const messages = [
    {
      id: 1,
      content: "this is important message for bizeye team do not ignore any tax valuation this is important topic and hardly strong important message agrovision plz do not ignore this is for furu re and growth"
    },
    {
      id: 2,
      content: "this is important message for bizeye team do not ignore any tax valuation this is important topic and hardly strong important message agrovision plz do not ignore this is for furu re and growth"
    },
    {
      id: 3,
      content: "this is important message for bizeye team do not ignore any tax valuation this is important topic and hardly strong important message agrovision plz do not ignore this is for furu re and growth"
    },
    {
      id: 4,
      content: "this is important message for bizeye team do not ignore any tax valuation this is important topic and hardly strong important message agrovision plz do not ignore"
    }
  ];

  return (
    <>
        <title>BIZEYE - Messages</title>
        <div className="space-y-4 sm:space-y-6">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl sm:text-2xl font-bold"
          >
            Message
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100"
          >
            <h2 className="text-lg font-medium mb-3 sm:mb-4">New Message</h2>
            <div className="space-y-3 sm:space-y-4">
              {messages.map((message) => (
                <motion.div 
                  key={message.id}
                  whileHover={{ scale: 1.01 }}
                  className="p-3 sm:p-4 bg-gray-50 rounded-md"
                >
                  <p className="text-gray-700 text-sm sm:text-base">{message.content}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      
    </>
  );
}