import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

const botResponses: Record<string, string> = {
  'hello': 'Hello! How can I help you today?',
  'hi': 'Hi there! What can I assist you with?',
  'services': 'We offer Data Engineering, AI Solutions, Cloud Solutions, and IT Solutions. Would you like to know more about any specific service?',
  'data engineering': 'Our Data Engineering services include Tableau Dashboard Development, Data Pipeline Architecture, ETL Process Optimization, and more. Would you like to schedule a consultation?',
  'ai': 'We provide cutting-edge AI Solutions including Machine Learning Models, Natural Language Processing, Computer Vision Systems, and Predictive Analytics. How can we help with your AI needs?',
  'cloud': 'Our Cloud Solutions cover AWS, Azure, and GCP expertise, Cloud Migration Services, Serverless Architecture, and Cost Optimization. What cloud challenges are you facing?',
  'it': 'We offer comprehensive IT Solutions including Infrastructure Management, Network Security, System Integration, and 24/7 Technical Support. What IT services are you interested in?',
  'pricing': 'Our pricing varies based on your specific needs. I can connect you with our sales team for a customized quote. Would you like me to do that?',
  'contact': 'You can reach us at info@mhktech.com or call +1 (555) 123-4567. We also have offices in San Francisco, New York, and London. Would you like to schedule a meeting?',
  'careers': 'We have several open positions in Data Engineering, AI, Cloud, and IT. Visit our Careers page to see all openings and apply!',
  'default': 'I understand you\'re asking about that. Let me connect you with a specialist who can help you better. Would you like to leave your contact information?'
};

function getBotResponse(userMessage: string): string {
  const lowerMessage = userMessage.toLowerCase();
  
  for (const [key, response] of Object.entries(botResponses)) {
    if (lowerMessage.includes(key)) {
      return response;
    }
  }
  
  return botResponses.default;
}

export function Chatbot({ isOpen, onClose }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m MHK Tech Inc AI Assistant. How can I help you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot typing and response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="text-xl">MHK Tech Inc AI Assistant</h2>
                  <p className="text-sm text-blue-100">Always here to help</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-3 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close chat"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-3 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.sender === 'user' ? 'bg-blue-600' : 'bg-gray-300'
                    }`}>
                      {message.sender === 'user' ? (
                        <User className="w-6 h-6 text-white" />
                      ) : (
                        <Bot className="w-6 h-6 text-gray-700" />
                      )}
                    </div>
                    <div>
                      <div className={`rounded-2xl px-5 py-3 ${
                        message.sender === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-white text-gray-800 border border-gray-200 shadow-sm'
                      }`}>
                        <p className="text-base leading-relaxed">{message.text}</p>
                      </div>
                      <p className="text-xs text-gray-500 mt-2 px-2">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-6 h-6 text-gray-700" />
                  </div>
                  <div className="bg-white rounded-2xl px-5 py-4 border border-gray-200 shadow-sm">
                    <div className="flex space-x-2">
                      <div className="w-2.5 h-2.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2.5 h-2.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2.5 h-2.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-6 bg-white border-t border-gray-200">
              <div className="flex items-center space-x-4">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-base"
                  autoFocus
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim()}
                  className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  <span>Send</span>
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-3 text-center">
                Press Enter to send • This is an AI assistant for demonstration purposes
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}