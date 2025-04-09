export default function Help() {
    const supportOptions = [
      {
        name: "Whatsapp",
        description: "Chat with our support team on WhatsApp"
      },
      {
        name: "Live Chat",
        description: "Get instant help with our live chat support"
      },
      {
        name: "Mail Drop",
        description: "Send us an email and we'll get back to you"
      }
    ];
  
    return (
      <>
        <Head>
          <title>BIZEYE - Help & Support</title>
        </Head>
        <Layout>
          <div className="space-y-4 sm:space-y-6">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl sm:text-2xl font-bold"
            >
              Help
            </motion.h1>
  
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100"
            >
              <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Choose Your Support</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {supportOptions.map((option, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    className="p-4 sm:p-6 border border-gray-200 rounded-lg cursor-pointer hover:border-blue-300"
                  >
                    <h3 className="text-base sm:text-lg font-medium mb-2">{option.name}</h3>
                    <p className="text-gray-600 text-sm sm:text-base">{option.description}</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-3 sm:mt-4 text-blue-600 text-sm font-medium hover:text-blue-800 flex items-center"
                    >
                      Contact {option.name} <span className="ml-1">→</span>
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </Layout>
      </>
    );
  }