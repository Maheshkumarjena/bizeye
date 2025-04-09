import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function FinancialAudit() {
  const benefits = [
    {
      title: "Financial Transparency",
      description: "A financial audit provides a clear picture of your business's financial status, increasing trust among investors, stakeholders, and government agencies."
    },
    {
      title: "Legal Compliance",
      description: "It ensures that your business complies with government regulations and tax laws, avoiding any legal issues."
    },
    {
      title: "Detection of Errors & Fraud",
      description: "Audits help identify financial errors, mismanagement, or fraud within the business, ensuring accuracy and accountability."
    },
    {
      title: "Business Growth & Planning",
      description: "A proper audit report provides clarity on the financial position of your business, helping in future planning and investment decisions."
    },
    {
      title: "Tax Savings & Better Budgeting",
      description: "An audit assists in tax planning, preventing unnecessary tax penalties, and improving overall budget management."
    },
    {
      title: "Investor & Bank Confidence",
      description: "If you are looking for loans or want to attract investors, an audited financial statement enhances the credibility of your business."
    },
    {
      title: "Internal Control & Operational Efficiency",
      description: "Audits improve business operations and strengthen financial management by ensuring better internal controls."
    }
  ];

  return (
    <>
      <Head>
        <title>BIZEYE - Financial Audit</title>
      </Head>
      <Layout>
        <div className="space-y-4 sm:space-y-8">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl sm:text-2xl font-bold"
          >
            Financial Audit Consulting
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100"
          >
            <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">How To Benefit Financial Audit Consulting</h2>
            
            <p className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-6">
              A financial audit has several benefits, especially for small and medium enterprises (SMEs). These benefits include:
            </p>
            
            <div className="space-y-3 sm:space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="p-3 sm:p-4 bg-gray-50 rounded-md"
                >
                  <h3 className="font-bold text-blue-600 text-sm sm:text-base">{benefit.title}</h3>
                  <p className="text-gray-700 text-xs sm:text-sm mt-1">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition flex-1 text-center"
            >
              Submit Documents and Data
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-green-600 text-white px-4 py-2 rounded-md font-medium hover:bg-green-700 transition flex-1 text-center"
            >
              Request Financial Audit
            </motion.button>
          </div>
        </div>
      </Layout>
    </>
  );
}