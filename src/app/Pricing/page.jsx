import Layout from '@/Components/layout';
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "0",
      description: "Free Business Score And Basic Business Reports",
      features: ["Basic reports", "Business score", "Limited access"]
    },
    {
      name: "Starter",
      price: "999",
      description: "AI Reports + Business Score other basic Features",
      features: ["AI reports", "Business score", "Basic features", "Email support"]
    },
    {
      name: "Growth",
      price: "7999",
      description: "AI Reports + Human Call 20 Min Premium Features",
      features: ["All Starter features", "20 min expert call", "Premium features", "Priority support"]
    },
    {
      name: "Pro",
      price: "Custom",
      description: "AI Reports + Human Call /24x7 chat Dedicate Person",
      features: ["All Growth features", "24/7 dedicated support", "Custom solutions", "Enterprise-grade"]
    }
  ];

  return (
    <>
      <Head>
        <title>BIZEYE - Pricing</title>
      </Head>
      <Layout>
        <div className="space-y-6">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl sm:text-2xl font-bold"
          >
            Pricing Plan
          </motion.h1>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                className={`p-4 sm:p-6 rounded-lg shadow-sm border ${index === 2 ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'}`}
              >
                <h3 className={`text-lg sm:text-xl font-bold mb-2 ${index === 2 ? 'text-blue-600' : ''}`}>{plan.name}</h3>
                <p className="text-2xl sm:text-3xl font-bold mb-2">
                  {plan.price === "Custom" ? plan.price : `₹${plan.price}`}
                </p>
                <p className="text-sm sm:text-base text-gray-600 mb-4">{plan.description}</p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-xs sm:text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-2 px-4 rounded-md font-medium transition ${index === 2 ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                >
                  Choose Plan
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Layout>
    </>
  );
}