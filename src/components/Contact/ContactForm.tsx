import React, { useState, useRef, useEffect } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactFormProps {
  onSubmit: (e: React.FormEvent) => void;
  isMessageSent: boolean;
}

// Replace these with your actual EmailJS credentials
const EMAILJS_PUBLIC_KEY = 'MKBnbaMPFfidF_DMe';
const EMAILJS_SERVICE_ID = 'service_m0kv5u9';
const EMAILJS_TEMPLATE_ID = 'template_ia2a74j';

// Template default values
const TEMPLATE_DEFAULTS = {
  to_email: 'oathooh@gmail.com',
  to_name: 'Seth Athooh',
  from_name: 'Seth Athooh'
};

const ContactForm = ({ isMessageSent, onSubmit }: ContactFormProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      if (!formRef.current) return;

      // Add template default values to the form data
      const formData = new FormData(formRef.current);
      formData.append('to_email', TEMPLATE_DEFAULTS.to_email);
      formData.append('to_name', TEMPLATE_DEFAULTS.to_name);
      
      // Convert FormData to template parameters
      const templateParams = {
        to_email: TEMPLATE_DEFAULTS.to_email,
        to_name: TEMPLATE_DEFAULTS.to_name,
        from_name: formData.get('from_name'),
        reply_to: formData.get('reply_to'),
        subject: `New message from ${formData.get('from_name')}`,
        message: formData.get('message')
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      onSubmit(e);
      formRef.current.reset();
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error('EmailJS Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 sm:p-8 transform hover:scale-[1.02] transition-transform duration-500"
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="from_name" className="block text-sm font-medium text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="reply_to" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="reply_to"
              name="reply_to"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
            placeholder="Your message here..."
          />
        </div>

        {error && (
          <div className="flex items-center space-x-2 text-red-400">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm">{error}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading || isMessageSent}
          className={`
            w-full py-4 rounded-lg font-medium flex items-center justify-center space-x-2
            transition-all duration-300 transform hover:scale-[1.02]
            ${isMessageSent
              ? 'bg-green-500 hover:bg-green-600'
              : isLoading
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
            }
          `}
        >
          {isMessageSent ? (
            <>
              <CheckCircle className="w-5 h-5" />
              <span>Message Sent!</span>
            </>
          ) : isLoading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
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