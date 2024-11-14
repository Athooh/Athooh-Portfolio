import React from 'react';
import { Send, CheckCircle } from 'lucide-react';

interface ContactFormProps {
  onSubmit: (e: React.FormEvent) => void;
  isMessageSent: boolean;
}

const ContactForm = ({ onSubmit, isMessageSent }: ContactFormProps) => {
  return (
    <form
      onSubmit={onSubmit}
      className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 sm:p-8 transform hover:scale-[1.02] transition-transform duration-500"
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
            placeholder="Project Inquiry"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Message
          </label>
          <textarea
            id="message"
            required
            rows={4}
            className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
            placeholder="Your message here..."
          />
        </div>

        <button
          type="submit"
          className={`
            w-full py-4 rounded-lg font-medium flex items-center justify-center space-x-2
            transition-all duration-300 transform hover:scale-[1.02]
            ${isMessageSent
              ? 'bg-green-500 hover:bg-green-600'
              : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
            }
          `}
        >
          {isMessageSent ? (
            <>
              <CheckCircle className="w-5 h-5" />
              <span>Message Sent!</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;