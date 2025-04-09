import { motion } from 'framer-motion';
import Head from 'next/head';
import Layout from '@/Components/layout';

export default function Reports() {
  const reports = [
    {
      name: "Tax Reports April 2025",
      status: "Available",
      category: "Tax Reports",
      date: "20 Jan, 2022",
      id: "39842-231"
    },
    {
      name: "Audit Reports March 2025",
      status: "In Review",
      category: "Audit Reports",
      date: "22 Feb, 2022",
      id: "39842-231"
    },
    {
      name: "Audit Reports March 2025",
      status: "In Review",
      category: "Audit Reports",
      date: "22 Feb, 2022",
      id: "39842-231"
    },
    {
      name: "Audit Reports March 2025",
      status: "In Review",
      category: "Audit Reports",
      date: "22 Feb, 2022",
      id: "39842-231"
    },
    {
      name: "Audit Reports March 2025",
      status: "In Review",
      category: "Audit Reports",
      date: "22 Feb, 2022",
      id: "39842-231"
    }
  ];

  return (
    <>
      <Head>
        <title>BIZEYE - Reports</title>
      </Head>
      <Layout>
        <div className="space-y-4 sm:space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl sm:text-2xl font-bold"
            >
              Business Reports
            </motion.h1>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition w-full sm:w-auto"
            >
              Add Report Request
            </motion.button>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
          >
            <div className="p-3 sm:p-4 border-b">
              <h3 className="text-sm font-medium text-gray-500">Data Reports Months</h3>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reports</th>
                    <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">Categories</th>
                    <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">Date</th>
                    <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">ID</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {reports.map((report, index) => (
                    <motion.tr 
                      key={index}
                      whileHover={{ backgroundColor: "rgba(243, 244, 246, 1)" }}
                      className="transition"
                    >
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{report.name}</td>
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${report.status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                          {report.status}
                        </span>
                      </td>
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden sm:table-cell">{report.category}</td>
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden sm:table-cell">{report.date}</td>
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden sm:table-cell">{report.id}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="px-4 sm:px-6 py-3 border-t flex justify-between items-center">
              <div className="flex space-x-1 sm:space-x-2">
                {[1, 2, 3, 4, '⋯', 10].map((item, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-md text-xs sm:text-sm
                      ${item === 1 ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}`}
                  >
                    {item}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Layout>
    </>
  );
}