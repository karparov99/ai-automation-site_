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
      if (!supabase) {
        setStatus('error');
        setErrorMessage('Database connection not configured. Please set up environment variables.');
        return;
      }
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
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="glass-card max-w-lg w-full shadow-2xl shadow-accent-blue/10 animate-fade-in relative">
        {/* Noise overlay */}
        <div className="absolute inset-0 noise-overlay rounded-2xl"></div>

        <div className="relative z-10">
          <div className="flex items-center justify-between p-8 border-b border-white/5">
            <h2 className="text-3xl font-black tracking-tight">Request <span className="text-gradient-blue">Audit</span></h2>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-dark-400 hover:text-white hover:bg-white/10 transition-all"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>

          {status === 'success' ? (
            <div className="p-12 text-center">
              <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="text-accent-emerald" size={48} />
              </div>
              <h3 className="text-3xl font-black mb-4 text-gradient-emerald">Request Received!</h3>
              <p className="text-xl text-dark-200 mb-6 font-medium">
                Thanks for reaching out. We'll be in touch within 1-2 days to schedule your audit.
              </p>
              <p className="text-dark-400 font-bold uppercase tracking-widest text-xs">Watch your inbox</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="block text-xs font-black uppercase tracking-widest text-dark-400">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all font-medium"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="block text-xs font-black uppercase tracking-widest text-dark-400">Work Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all font-medium"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              {/* Company */}
              <div className="space-y-2">
                <label className="block text-xs font-black uppercase tracking-widest text-dark-400">Company Name *</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all font-medium"
                  placeholder="Acme Corp"
                />
              </div>

              {/* Company Size */}
              <div className="space-y-2">
                <label className="block text-xs font-black uppercase tracking-widest text-dark-400">Company Size</label>
                <select
                  name="company_size"
                  value={formData.company_size}
                  onChange={handleChange}
                  className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all font-medium appearance-none"
                >
                  <option value="" className="bg-dark-900">Select size</option>
                  <option value="1-5" className="bg-dark-900">1-5 people</option>
                  <option value="5-20" className="bg-dark-900">5-20 people</option>
                  <option value="20-50" className="bg-dark-900">20-50 people</option>
                  <option value="50-100" className="bg-dark-900">50-100 people</option>
                  <option value="100+" className="bg-dark-900">100+ people</option>
                </select>
              </div>

              {/* Current Challenges */}
              <div className="space-y-2">
                <label className="block text-xs font-black uppercase tracking-widest text-dark-400">Biggest Challenge? (optional)</label>
                <textarea
                  name="current_challenges"
                  value={formData.current_challenges}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all font-medium resize-none"
                  placeholder="Tell us what's slowing you down..."
                ></textarea>
              </div>

              {/* Error message */}
              {status === 'error' && (
                <div className="flex gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                  <AlertCircle className="text-red-500 flex-shrink-0" size={20} />
                  <p className="text-red-300 text-sm font-medium">{errorMessage}</p>
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full px-8 py-4 bg-accent-blue hover:bg-blue-500 disabled:bg-dark-800 disabled:text-dark-500 text-white font-black rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-accent-blue/20"
              >
                {status === 'loading' ? 'Submitting...' : 'Request My Free Audit'}
              </button>

              <p className="text-center text-dark-500 text-[10px] font-bold uppercase tracking-widest">
                Safe & Secure. No Spam.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
