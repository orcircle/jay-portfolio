import emailjs from '@emailjs/browser';

// EmailJS configuration
// You need to replace these with your actual EmailJS configuration
// Visit https://www.emailjs.com/ to set up your account and get these values
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_dcyftja';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_xxxxxxx';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'xxxxxxxxxxxxxxx';

// Check if EmailJS is properly configured
const isEmailJSConfigured = () => {
  return EMAILJS_SERVICE_ID !== 'service_xxxxxxx' && 
         EMAILJS_TEMPLATE_ID !== 'template_xxxxxxx' && 
         EMAILJS_PUBLIC_KEY !== 'xxxxxxxxxxxxxxx' &&
         EMAILJS_SERVICE_ID && 
         EMAILJS_TEMPLATE_ID && 
         EMAILJS_PUBLIC_KEY;
};

export interface EmailData {
  name: string;
  email: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
}

/**
 * Initialize EmailJS with your public key
 * This should be called once when your app starts
 */
export const initializeEmailJS = () => {
  if (isEmailJSConfigured()) {
    try {
      emailjs.init(EMAILJS_PUBLIC_KEY);
      console.log('EmailJS initialized successfully');
    } catch (error) {
      console.warn('EmailJS initialization failed:', error);
    }
  } else {
    console.warn('EmailJS not configured. Web email sending will be disabled.');
  }
};

/**
 * Send email using EmailJS service
 * @param emailData The email data to send
 * @returns Promise with success status and message
 */
export const sendEmail = async (emailData: EmailData): Promise<EmailResponse> => {
  try {
    // Check if EmailJS is configured
    if (!isEmailJSConfigured()) {
      return {
        success: false,
        message: 'EmailJS not configured. Please use the direct email option instead.'
      };
    }

    // Validate input data
    if (!emailData.name.trim() || !emailData.email.trim() || !emailData.message.trim()) {
      return {
        success: false,
        message: 'All fields are required'
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailData.email)) {
      return {
        success: false,
        message: 'Invalid email format'
      };
    }

    // Validate message length
    if (emailData.message.trim().length < 10) {
      return {
        success: false,
        message: 'Message too short'
      };
    }

    // Prepare template parameters
    const templateParams = {
      from_name: emailData.name,
      from_email: emailData.email,
      message: emailData.message,
      to_name: 'Jay Yuan', // Your name
      to_email: 'jieyuanprivate@gmail.com', // Your email
      reply_to: emailData.email,
    };

    // Send email via EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    if (response.status === 200) {
      return {
        success: true,
        message: 'Email sent successfully'
      };
    } else {
      return {
        success: false,
        message: 'Failed to send email'
      };
    }
  } catch (error) {
    console.error('Email service error:', error);
    
    // Provide more specific error messages based on error type
    if (error instanceof Error) {
      if (error.message.includes('Public Key is invalid')) {
        return {
          success: false,
          message: 'EmailJS configuration error. Please use the direct email option.'
        };
      }
    }
    
    return {
      success: false,
      message: 'Unable to send email via web service. Please try the direct email option.'
    };
  }
};

/**
 * Generate mailto link for system email client
 * @param emailData The email data
 * @returns mailto URL string
 */
export const generateMailtoLink = (emailData: Partial<EmailData> = {}): string => {
  const to = 'jieyuanprivate@gmail.com';
  const subject = encodeURIComponent(`Contact from ${emailData.name || 'Website Visitor'}`);
  const body = encodeURIComponent(`
Name: ${emailData.name || ''}
Email: ${emailData.email || ''}

Message:
${emailData.message || ''}

---
Sent from Jay Yuan's portfolio website
  `.trim());

  return `mailto:${to}?subject=${subject}&body=${body}`;
};

/**
 * Copy text to clipboard
 * @param text The text to copy
 * @returns Promise<boolean> indicating success
 */
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      return true;
    }
  } catch (error) {
    console.error('Failed to copy to clipboard:', error);
    return false;
  }
};
