import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import GlassCard from '../components/GlassCard';
import { sendEmail, generateMailtoLink, copyToClipboard, initializeEmailJS, type EmailData } from '../services/emailService';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface FormState {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const { t } = useTranslation();
  
  // Form state
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const [copiedMessage, setCopiedMessage] = useState('');
  const [emailJSAvailable, setEmailJSAvailable] = useState(true);

  // Initialize EmailJS on component mount
  useEffect(() => {
    initializeEmailJS();
    // Check if EmailJS is configured by trying to access environment variables
    const isConfigured = !!(
      import.meta.env.VITE_EMAILJS_SERVICE_ID && 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID && 
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );
    setEmailJSAvailable(isConfigured);
  }, []);

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = t('contact.form.required');
    }
    
    if (!formData.email.trim()) {
      newErrors.email = t('contact.form.required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('contact.form.emailInvalid');
    }
    
    if (!formData.message.trim()) {
      newErrors.message = t('contact.form.required');
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t('contact.form.messageMinLength');
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const emailData: EmailData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim()
      };
      
      const result = await sendEmail(emailData);
      
      if (result.success) {
        setSubmitStatus('success');
        setSubmitMessage(t('contact.form.success'));
        // Reset form on success
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        // Show specific message if EmailJS is not configured
        if (result.message.includes('not configured') || result.message.includes('configuration error')) {
          setSubmitMessage(t('contact.form.emailjsNotConfigured'));
        } else {
          setSubmitMessage(t('contact.form.error'));
        }
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage(t('contact.form.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle mailto link
  const handleMailto = () => {
    const mailtoUrl = generateMailtoLink(formData);
    window.location.href = mailtoUrl;
  };

  // Handle WeChat ID copy
  const handleCopyWechat = async () => {
    const success = await copyToClipboard(t('values.wechat'));
    if (success) {
      setCopiedMessage(t('contact.alternatives.copied'));
      setTimeout(() => setCopiedMessage(''), 2000);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <div className="flex flex-col gap-8">
        {/* Header */}
        <div className="text-center">
          <Title>{t('contact.title')}</Title>
          <p className="text-gray-300 mt-4">{t('contact.description')}</p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Contact Information */}
          <GlassCard className="p-6">
            <Subtitle className="text-xl md:text-2xl mb-4 font-bold">{t('contact.title')}</Subtitle>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-2 flex items-center">
                  <span className="mr-2">📧</span>{t('basicInfo.email')}
                </h4>
                <p className="text-gray-300 break-all">{t('values.email')}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 flex items-center">
                  <span className="mr-2">💬</span>{t('basicInfo.wechat')}
                </h4>
                <p className="text-gray-300">{t('values.wechat')}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 flex items-center">
                  <span className="mr-2">💼</span>{t('basicInfo.position')}
                </h4>
                <p className="text-gray-300">{t('values.title')}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 flex items-center">
                  <span className="mr-2">📍</span>{t('basicInfo.location')}
                </h4>
                <p className="text-gray-300">{t('values.hometown')}</p>
              </div>
            </div>

            {/* Alternative Contact Methods */}
            <div className="mt-8 pt-6 border-t border-gray-700">
              <h4 className="text-lg font-semibold mb-4">{t('contact.alternatives.title')}</h4>
              
              <div className="space-y-3">
                {/* Direct Email Button */}
                <button
                  onClick={handleMailto}
                  className="w-full p-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <span className="mr-3">📧</span>
                    <div className="text-left">
                      <div className="font-medium">{t('contact.alternatives.directEmail')}</div>
                      <div className="text-sm opacity-80">{t('contact.alternatives.directEmailDesc')}</div>
                    </div>
                  </div>
                  <span className="text-sm opacity-80">↗</span>
                </button>

                {/* WeChat Copy Button */}
                <button
                  onClick={handleCopyWechat}
                  className="w-full p-3 bg-green-600 hover:bg-green-700 rounded-lg transition-colors flex items-center justify-between relative"
                >
                  <div className="flex items-center">
                    <span className="mr-3">💬</span>
                    <div className="text-left">
                      <div className="font-medium">{t('contact.alternatives.wechat')}</div>
                      <div className="text-sm opacity-80">
                        {t('contact.alternatives.wechatDesc', { wechat: t('values.wechat') })}
                      </div>
                    </div>
                  </div>
                  <span className="text-sm opacity-80">📋</span>
                  
                  {/* Copy success message */}
                  {copiedMessage && (
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-green-800 text-white px-3 py-1 rounded text-sm">
                      {copiedMessage}
                    </div>
                  )}
                </button>
              </div>
            </div>
          </GlassCard>

          {/* Contact Form */}
          <GlassCard className="p-6">
            <h3 className="text-2xl font-bold gradient-text mb-6">{t('contact.form.message')}</h3>
            
            {/* EmailJS Not Available Warning */}
            {!emailJSAvailable && (
              <div className="mb-4 p-3 bg-blue-900/50 border border-blue-500 rounded-lg text-blue-200">
                <div className="flex items-center">
                  <span className="mr-2">ℹ️</span>
                  <div>
                    <div className="font-medium">Web Email Service Not Available</div>
                    <div className="text-sm opacity-80">Please use the "Direct Email" button below to contact via your email client.</div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-4 p-3 bg-green-900/50 border border-green-500 rounded-lg text-green-200">
                {submitMessage}
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mb-4 p-3 bg-red-900/50 border border-red-500 rounded-lg text-red-200">
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <label className="block text-gray-300 mb-2">{t('contact.form.name')}</label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                    errors.name ? 'focus:ring-red-500 border border-red-500' : 'focus:ring-primary'
                  }`}
                  placeholder={t('contact.form.name')}
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-gray-300 mb-2">{t('contact.form.email')}</label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                    errors.email ? 'focus:ring-red-500 border border-red-500' : 'focus:ring-primary'
                  }`}
                  placeholder={t('contact.form.email')}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-gray-300 mb-2">{t('contact.form.message')}</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className={`w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 transition-colors min-h-[120px] resize-vertical ${
                    errors.message ? 'focus:ring-red-500 border border-red-500' : 'focus:ring-primary'
                  }`}
                  placeholder={t('contact.form.message')}
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={isSubmitting || !emailJSAvailable}
                className={`w-full px-6 py-3 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center ${
                  emailJSAvailable 
                    ? 'bg-primary hover:bg-primary/90' 
                    : 'bg-gray-600 cursor-not-allowed'
                }`}
                title={!emailJSAvailable ? 'Web email service not available - please use direct email option' : ''}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t('contact.form.sending')}
                  </>
                ) : (
                  t('contact.form.submit')
                )}
              </button>
            </form>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default Contact; 