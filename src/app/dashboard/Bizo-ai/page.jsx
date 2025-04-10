"use client"
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function BizoAI() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm BizoAI. How can I help you with your business today?",
      sender: 'ai'
    }
  ]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message
    const newUserMessage = {
      id: messages.length + 1,
      text: message,
      sender: 'user'
    };
    setMessages([...messages, newUserMessage]);
    setMessage('');

    // Simulate AI response after a delay
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        text: "I'm analyzing your query. Can you provide more details about your business needs?",
        sender: 'ai'
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <>
        <title>BIZEYE - BizoAI</title>
        <div className="flex flex-col h-[calc(100vh-120px)]">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-4"
          >
            <h1 className="text-xl sm:text-2xl font-bold">Bizo AI</h1>
            <p className="text-gray-600 text-sm sm:text-base">Your AI business assistant</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-1 bg-white rounded-lg shadow-sm border border-gray-100 p-4 overflow-y-auto mb-4"
          >
            <div className="space-y-4">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs sm:max-w-md md:max-w-lg rounded-lg px-4 py-2 ${msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'}`}>
                    <p className="text-sm sm:text-base">{msg.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSendMessage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex gap-2"
          >
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition"
            >
              Send
            </motion.button>
          </motion.form>
        </div>
    </>
  );
}