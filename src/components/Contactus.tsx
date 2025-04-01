'use client';
import { useState } from 'react';

export default function ContactSection() {
  const [showEmail, setShowEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    inquiryType: 'general',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:century1ltd@gmail.com?subject=${encodeURIComponent(
      `${formData.inquiryType} Inquiry from ${formData.name} (${formData.company})`
    )}&body=${encodeURIComponent(
      `Contact Details:\nName: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )}`;
  };

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Contact Form */}
        <div className="flex flex-col">
          <div className="bg-white shadow-xl rounded-lg p-8 mb-8 border-l-4 border-blue-600">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Century 1 Energy Solutions
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg
                  className="h-6 w-6 text-blue-600 mr-3 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <h4 className="font-medium text-gray-900">Headquarters</h4>
                  <p className="text-gray-600">
                    123 Energy Plaza, Suite 500
                    <br />
                    Houston, TX 77002
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <svg
                  className="h-6 w-6 text-blue-600 mr-3 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div>
                  <h4 className="font-medium text-gray-900">24/7 Operations</h4>
                  <p className="text-gray-600">+1 (800) 555-ENERGY</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg
                  className="h-6 w-6 text-blue-600 mr-3 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <h4 className="font-medium text-gray-900">Business Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 8:00 AM - 6:00 PM CST
                    <br />
                    Emergency contacts available 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-xl rounded-lg p-8 border-l-4 border-blue-600">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Contact Our Energy Experts
          </h2>
          <p className="text-blue-800 mb-6">
            Complete this form and our team will respond within 24 business
            hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Inquiry Type *
              </label>
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.inquiryType}
                onChange={(e) =>
                  setFormData({ ...formData, inquiryType: e.target.value })
                }
              >
                <option value="general">General Inquiry</option>
                <option value="technical">Technical Support</option>
                <option value="sales">Sales & Partnerships</option>
                <option value="careers">Career Opportunities</option>
                <option value="media">Media Relations</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message *
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <div className="flex items-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition duration-300"
              >
                Submit Inquiry
              </button>
              <button
                type="button"
                onClick={() => setShowEmail(!showEmail)}
                className="ml-4 text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                {showEmail ? 'Hide Direct Email' : 'Contact Directly'}
              </button>
            </div>

            {showEmail && (
              <div className="bg-blue-50 p-4 rounded-md border border-blue-200">
                <p className="text-sm text-blue-800 mb-2">
                  Email our team directly at:
                </p>
                <a
                  href="mailto:contact@century1energy.com"
                  className="text-blue-600 font-medium break-all hover:underline"
                >
                  contact@century1energy.com
                </a>
              </div>
            )}
          </form>
        </div>

        {/* Right Column - Info */}
      </div>
    </section>
  );
}
