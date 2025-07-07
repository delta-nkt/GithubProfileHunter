import React from 'react'

export default function Privacy() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-orange-100 via-white to-orange-200 overflow-hidden py-12 px-4">
      <div className="relative z-10 max-w-2xl w-full bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-10 flex flex-col items-center border border-orange-100" style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'}}>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-orange-700 text-center mb-4">Privacy Policy</h1>
        <p className="text-gray-700 text-base mb-4 text-center">Your privacy is important to us. This policy explains how we collect, use, and protect your information when you use Github Profile Hunter.</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
          <li><b>Information Collection:</b> We collect only the information you provide when signing up, logging in, or submitting the contact form (such as your name, email, and message).</li>
          <li><b>Usage:</b> Your information is used solely to provide you with our services, respond to your queries, and improve Github Profile Hunter.</li>
          <li><b>Data Security:</b> We use secure technologies (like Firebase) to store your data and never share your information with third parties.</li>
          <li><b>Cookies:</b> Github Profile Hunter does not use cookies for tracking or advertising.</li>
          <li><b>Third-Party Links:</b> Our site may contain links to external sites. We are not responsible for their privacy practices.</li>
          <li><b>Contact:</b> For any privacy-related questions, please use our contact form.</li>
        </ul>
        <p className="text-gray-500 text-xs text-center">This policy may be updated from time to time. Please review it periodically.</p>
      </div>
    </div>
  )
} 