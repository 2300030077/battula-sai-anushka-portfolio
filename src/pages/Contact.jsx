import { useState } from 'react';
import SectionCard from '../components/SectionCard';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send, Loader2, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  // ============================================
  // EMAILJS CONFIGURATION - SETUP REQUIRED
  // ============================================
  // 
  // STEP 1: Get your Public Key
  //   → Go to: https://dashboard.emailjs.com/admin/account
  //   → Scroll to "Public Key" section
  //   → Copy the key (looks like: AbCdEf123456)
  //
  // STEP 2: Get your Service ID
  //   → Go to: https://dashboard.emailjs.com/admin/integration
  //   → Under "Email Services", find your service
  //   → Copy the Service ID (looks like: service_abc123)
  //
  // STEP 3: Get your Template ID
  //   → Go to: https://dashboard.emailjs.com/admin/template
  //   → Click on your template
  //   → Copy the Template ID (looks like: template_xyz789)
  //
  // STEP 4: Replace the values below with your actual credentials:
  // ============================================
  
  const EMAILJS_SERVICE_ID = 'service_uektpuo';        // ← Paste your Service ID here
  const EMAILJS_TEMPLATE_ID = 'template_jn2cf0p';      // ← Paste your Template ID here
  const EMAILJS_PUBLIC_KEY = 'uTo0jwrRiMrAaCeY3';        // ← Paste your Public Key here
  const RECIPIENT_EMAIL = 'saianushka1825@gmail.com';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Check if EmailJS is configured
    if (
      EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID_HERE' ||
      EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID_HERE' ||
      EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY_HERE' ||
      !EMAILJS_SERVICE_ID ||
      !EMAILJS_TEMPLATE_ID ||
      !EMAILJS_PUBLIC_KEY
    ) {
      setErrors({
        submit: (
          <div className="text-left">
            <p className="font-semibold mb-2">⚠️ EmailJS not configured yet!</p>
            <p className="text-sm mb-2">Please follow these steps:</p>
            <ol className="text-sm list-decimal list-inside space-y-1">
              <li>Get your Public Key from: <a href="https://dashboard.emailjs.com/admin/account" target="_blank" rel="noopener noreferrer" className="text-primary-600 underline">EmailJS Account Settings</a></li>
              <li>Get your Service ID from: <a href="https://dashboard.emailjs.com/admin/integration" target="_blank" rel="noopener noreferrer" className="text-primary-600 underline">EmailJS Integration</a></li>
              <li>Get your Template ID from: <a href="https://dashboard.emailjs.com/admin/template" target="_blank" rel="noopener noreferrer" className="text-primary-600 underline">EmailJS Templates</a></li>
              <li>Open <code className="bg-gray-100 px-1 rounded">src/pages/Contact.jsx</code> and replace the placeholder values on lines 28-30</li>
            </ol>
          </div>
        ),
      });
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      // Prepare email template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: RECIPIENT_EMAIL,
        message: formData.message,
        reply_to: formData.email,
      };

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      
      // Provide helpful error messages
      let errorMessage = 'Failed to send message. Please try again.';
      
      if (error.text) {
        if (error.text.includes('Public Key')) {
          errorMessage = 'Invalid Public Key. Please check your EmailJS Public Key in Account → General settings.';
        } else if (error.text.includes('Service')) {
          errorMessage = 'Invalid Service ID. Please check your EmailJS Service ID.';
        } else if (error.text.includes('Template')) {
          errorMessage = 'Invalid Template ID. Please check your EmailJS Template ID.';
        } else {
          errorMessage = error.text;
        }
      }
      
      setErrors({ submit: errorMessage });
    } finally {
      setIsLoading(false);
    }
  };
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'saianushka1825@gmail.com',
      href: 'mailto:saianushka1825@gmail.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 6281500214',
      href: 'tel:+916281500214',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/anushka-battula',
      href: 'https://linkedin.com/in/anushka-battula',
      target: '_blank',
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/2300030077',
      href: 'https://github.com/2300030077',
      target: '_blank',
      color: 'from-gray-700 to-gray-900',
    },
  ];

  return (
    <SectionCard title="Get In Touch" kicker="">
      <div className="space-y-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg text-gray-600 leading-relaxed"
        >
          I'm open to collaboration, UI engineering roles, and freelance projects.
      Reach out directly through any channel below.
        </motion.p>

        <div className="grid gap-4 sm:grid-cols-2">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.target}
                rel={method.target ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group p-4 sm:p-6 bg-white rounded-2xl border border-gray-200 shadow-soft hover:shadow-soft-lg transition-all"
              >
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${method.color} mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="text-white" size={24} />
                </div>
                <p className="text-xs sm:text-sm text-gray-500 mb-1">{method.label}</p>
                <p className="text-base sm:text-lg font-semibold text-gray-900 break-words">{method.value}</p>
              </motion.a>
            );
          })}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="pt-8 border-t border-gray-200"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Send me a message</h3>
          
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="p-6 sm:p-8 bg-gradient-to-br from-primary-50 to-pink-50 rounded-2xl border border-primary-100 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4"
                >
                  <CheckCircle2 className="text-white" size={32} />
                </motion.div>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  Message Sent Successfully 🎉
                </h4>
                <p className="text-sm sm:text-base text-gray-600">
                  I'll get back to you as soon as possible!
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border text-sm sm:text-base ${
                      errors.name
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                        : 'border-gray-200 focus:border-primary-500 focus:ring-primary-500'
                    } focus:outline-none focus:ring-2 transition-colors`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-600"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border text-sm sm:text-base ${
                      errors.email
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                        : 'border-gray-200 focus:border-primary-500 focus:ring-primary-500'
                    } focus:outline-none focus:ring-2 transition-colors`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-600"
                    >
                      {errors.email}
                    </motion.p>
                  )}
    </div>

    <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border text-sm sm:text-base ${
                      errors.message
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                        : 'border-gray-200 focus:border-primary-500 focus:ring-primary-500'
                    } focus:outline-none focus:ring-2 transition-colors resize-none`}
                    placeholder="Tell me about your project or just say hello..."
                  />
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-600"
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </div>

                {errors.submit && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm bg-red-50 p-4 rounded-xl border border-red-200"
                  >
                    {typeof errors.submit === 'string' ? (
                      <p className="text-red-600">{errors.submit}</p>
                    ) : (
                      <div className="text-red-600">{errors.submit}</div>
                    )}
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-primary text-white rounded-xl text-sm sm:text-base font-semibold shadow-soft hover:shadow-soft-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
    </div>
  </SectionCard>
);
};

export default Contact;
