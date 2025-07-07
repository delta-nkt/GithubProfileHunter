import React from 'react'

export default function Terms() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-orange-100 via-white to-orange-200 overflow-hidden py-12 px-4">
      <div className="relative z-10 max-w-2xl w-full bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-10 flex flex-col items-center border border-orange-100" style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'}}>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-orange-700 text-center mb-4">Terms &amp; Conditions</h1>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
          <li><b>Acceptance:</b> By using Github Profile Hunter, you agree to these terms and our privacy policy.</li>
          <li><b>Use of Service:</b> You may use Github Profile Hunter for personal, non-commercial purposes. Do not misuse, disrupt, or attempt to hack the service.</li>
          <li><b>Account Responsibility:</b> You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.</li>
          <li><b>Content:</b> Github Profile Hunter displays public Github profile data. We are not responsible for the accuracy or content of third-party data.</li>
          <li><b>Limitation of Liability:</b> Github Profile Hunter is provided "as is" without warranties. We are not liable for any damages arising from your use of the service.</li>
          <li><b>Changes:</b> We may update these terms at any time. Continued use of Github Profile Hunter means you accept the new terms.</li>
          <li><b>Contact:</b> For questions about these terms, please use our contact form.</li>
        </ul>
        <p className="text-gray-500 text-xs text-center">Last updated: June 2024</p>
      </div>
    </div>
  )
} 