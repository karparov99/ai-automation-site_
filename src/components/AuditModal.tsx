import { X, AlertCircle, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '../lib/supabase';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuditModal({ isOpen, onClose }: AuditModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    company_size: '',
    current_challenges: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase.from('audit_requests').insert([formData]);

      if (error) {
        setStatus('error');
        setErrorMessage('Failed to submit request. Please try again.');
        return;
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        company_size: '',
        current_challenges: '',
      });

      setTimeout(() => {
        onClose();
        setStatus('idle');
      }, 3000);
    } catch (err) {
      setStatus('error');
      setErrorMessage('An unexpected error occurred. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-dark-800 rounded-xl max-w-md w-full border border-dark-700 animate-fade-in">
        <div className="flex items-center justify-between p-6 border-b border-dark-700">
          <h2 className="text-2xl font-bold">Request an Automation Audit</h2>
          <button
            onClick={onClose}
            className="text-dark-400 hover:text-dark-200 transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        {status === 'success' ? (
          <div className="p-6 text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle className="text-accent-emerald" size={48} />
            </div>
            <h3 className="text-xl font-bold mb-2">Request Received!</h3>
            <p className="text-dark-200 mb-4">
              Thanks for reaching out. We'll review your information and be in touch within 1-2 days to schedule your audit.
            </p>
            <p className="text-dark-400 text-sm">Watch your email for our response.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-dark-100 placeholder-dark-500 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-dark-100 placeholder-dark-500 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors"
                placeholder="you@company.com"
              />
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm font-semibold mb-2">Company Name *</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-dark-100 placeholder-dark-500 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors"
                placeholder="Your company"
              />
            </div>

            {/* Company Size */}
            <div>
              <label className="block text-sm font-semibold mb-2">Company Size</label>
              <select
                name="company_size"
                value={formData.company_size}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-dark-100 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors"
              >
                <option value="">Select size</option>
                <option value="1-5">1-5 people</option>
                <option value="5-20">5-20 people</option>
                <option value="20-50">20-50 people</option>
                <option value="50-100">50-100 people</option>
                <option value="100+">100+ people</option>
              </select>
            </div>

            {/* Current Challenges */}
            <div>
              <label className="block text-sm font-semibold mb-2">What's your biggest operational challenge? (optional)</label>
              <textarea
                name="current_challenges"
                value={formData.current_challenges}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-dark-100 placeholder-dark-500 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors resize-none"
                placeholder="Tell us what's slowing you down..."
              ></textarea>
            </div>

            {/* Error message */}
            {status === 'error' && (
              <div className="flex gap-3 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                <AlertCircle className="text-red-500 flex-shrink-0" size={20} />
                <p className="text-red-300 text-sm">{errorMessage}</p>
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full px-4 py-3 bg-accent-blue hover:bg-blue-600 disabled:bg-dark-600 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all duration-300"
            >
              {status === 'loading' ? 'Submitting...' : 'Request Audit'}
            </button>

            <p className="text-center text-dark-400 text-xs">
              We respect your privacy. Your information will only be used to contact you about your audit request.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
