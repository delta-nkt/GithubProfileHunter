import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-orange-100 via-white to-orange-200 overflow-hidden py-12 px-4">
            {/* Blurred background shape */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-200 opacity-30 rounded-full filter blur-3xl z-0"></div>
            {/* Animated floating Github icons */}
            <div className="pointer-events-none absolute inset-0 z-0">
                <svg className="absolute top-10 left-10 w-16 h-16 opacity-10 animate-bounce-slow" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
                <svg className="absolute bottom-20 right-20 w-24 h-24 opacity-10 animate-bounce-slower" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
            </div>
            <div className="relative z-10 max-w-2xl w-full bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl p-10 flex flex-col items-center border border-orange-100" style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'}}>
                <img
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
                    alt="Developer working on code"
                    className="w-64 h-40 object-cover rounded-xl mb-6 drop-shadow-xl animate-fade-in"
                />
                <h1 className="text-4xl sm:text-5xl font-extrabold text-orange-700 text-center mb-2">
                    <span className="bg-gradient-to-r from-orange-400 via-orange-600 to-orange-400 bg-clip-text text-transparent drop-shadow">Explore Github Profiles</span>
                </h1>
                <div className="text-center text-base sm:text-lg text-gray-700 mb-6">
                    <span className="inline-block px-4 py-1 bg-orange-50 rounded-full text-orange-600 font-semibold mb-2 shadow-sm">Your portal to the world of developers</span>
                    <p className="mt-2 max-w-xl">
                        Welcome to <span className="font-semibold text-orange-600">Github Profile Hunter</span> — instantly search for any Github user, view their bio, repositories, followers, and more. Dive into the open source community and discover amazing developers!
                    </p>
                </div>
                <Link
                    to="/github"
                    className="inline-block px-12 py-4 bg-orange-700 text-white text-xl font-bold rounded-2xl shadow-lg hover:bg-orange-800 hover:scale-105 focus:ring-4 focus:ring-orange-300 transition-all duration-200 tracking-wide mt-2 animate-fade-in"
                >
                    Search Github Profiles
                </Link>
            </div>
            {/* Feature highlights */}
            <div className="relative z-10 mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl w-full">
                <div className="flex flex-col items-center bg-white/80 backdrop-blur rounded-xl p-6 shadow border border-orange-100">
                    <svg className="w-10 h-10 text-orange-500 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 16h.01M12 16h.01M16 16h.01M9 20h6a2 2 0 002-2V6a2 2 0 00-2-2H9a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    <span className="font-semibold text-orange-700">Instant Search</span>
                    <span className="text-gray-600 text-sm text-center mt-1">Find any Github user in seconds with our fast search.</span>
                </div>
                <div className="flex flex-col items-center bg-white/80 backdrop-blur rounded-xl p-6 shadow border border-orange-100">
                    <svg className="w-10 h-10 text-orange-500 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                    <span className="font-semibold text-orange-700">Rich Profiles</span>
                    <span className="text-gray-600 text-sm text-center mt-1">See bios, repositories, followers, and more at a glance.</span>
                </div>
                <div className="flex flex-col items-center bg-white/80 backdrop-blur rounded-xl p-6 shadow border border-orange-100">
                    <svg className="w-10 h-10 text-orange-500 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m5-7V4a4 4 0 10-8 0v4m8 0a4 4 0 018 0v4m-8 0v4m0 4h.01" /></svg>
                    <span className="font-semibold text-orange-700">Open Source</span>
                    <span className="text-gray-600 text-sm text-center mt-1">Celebrate the open source community and connect with devs.</span>
                </div>
            </div>
        </div>
    );
}

// Add custom animations in your CSS (e.g., App.css or index.css):
// .animate-bounce-slow { animation: bounce 4s infinite; }
// .animate-bounce-slower { animation: bounce 7s infinite; }
// .animate-fade-in { animation: fadeIn 1.2s ease; }
// @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }