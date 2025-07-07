import React from 'react'

export default function About() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-orange-100 via-white to-orange-200 overflow-hidden py-12 px-4">
      {/* Blurred background shape */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-200 opacity-30 rounded-full filter blur-3xl z-0"></div>
      <div className="relative z-10 max-w-2xl w-full bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl p-10 flex flex-col items-center border border-orange-100" style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'}}>
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
          alt="Developers collaborating at a computer"
          className="w-64 h-40 object-cover rounded-xl mb-6 drop-shadow-xl animate-fade-in"
        />
        <h1 className="text-3xl sm:text-4xl font-extrabold text-orange-700 text-center mb-4">About Github Profile Hunter</h1>
        <p className="text-lg text-gray-700 text-center mb-6 max-w-xl">
          <span className="font-semibold text-orange-600">Github Profile Hunter</span> is a modern portal designed to help you discover and explore Github user profiles with ease. Whether you're a developer, recruiter, or enthusiast, our platform makes it simple to find and learn about contributors in the open source community.
        </p>
        <div className="w-full mt-4">
          <h2 className="text-xl font-bold text-orange-600 mb-2 text-center">Why use this portal?</h2>
          <ul className="space-y-2 text-gray-700 text-base">
            <li className="flex items-center gap-2"><span className="text-orange-500">•</span> Instant Github user search</li>
            <li className="flex items-center gap-2"><span className="text-orange-500">•</span> Clean, modern UI for easy browsing</li>
            <li className="flex items-center gap-2"><span className="text-orange-500">•</span> Great for networking, hiring, or inspiration</li>
          </ul>
        </div>
      </div>
    </div>
  )
}