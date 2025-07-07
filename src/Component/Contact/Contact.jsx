import React, { useState } from 'react'
import { database } from '../../firebase'
import { ref, push } from 'firebase/database'
import Swal from 'sweetalert2'

export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        Swal.fire({
            title: 'Sending...',
            allowOutsideClick: false,
            didOpen: () => { Swal.showLoading() }
        })
        try {
            await push(ref(database, 'contacts'), { name, email, message, createdAt: Date.now() })
            setName('')
            setEmail('')
            setMessage('')
            Swal.fire({
                icon: 'success',
                title: 'Message sent!',
                text: 'Your message has been sent successfully.',
                timer: 2000,
                showConfirmButton: false
            })
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Failed to send',
                text: 'Failed to send message. Please try again.'
            })
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-orange-100 via-white to-orange-200 overflow-hidden py-12 px-4">
            {/* Blurred background shape */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-orange-200 opacity-30 rounded-full filter blur-3xl z-0"></div>
            <div className="relative z-10 max-w-2xl w-full bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl p-10 flex flex-col items-center border border-orange-100" style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'}}>
                <img
                    src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80"
                    alt="Contact support illustration"
                    className="w-64 h-40 object-cover rounded-xl mb-6 drop-shadow-xl animate-fade-in"
                />
                <h1 className="text-3xl sm:text-4xl font-extrabold text-orange-700 text-center mb-2">Contact Us</h1>
                <p className="text-lg text-gray-700 text-center mb-6 max-w-xl">
                    Have a question, suggestion, or want to connect? Fill out the form below or reach out using the contact info.
                </p>
                <form className="w-full space-y-4 mb-6" onSubmit={handleSubmit}>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Full Name"
                            className="flex-1 px-4 py-3 rounded-lg border border-orange-200 focus:ring-2 focus:ring-orange-400 focus:outline-none text-lg shadow"
                            required
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            className="flex-1 px-4 py-3 rounded-lg border border-orange-200 focus:ring-2 focus:ring-orange-400 focus:outline-none text-lg shadow"
                            required
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <textarea
                        name="message"
                        id="message"
                        rows="4"
                        placeholder="Your message..."
                        className="w-full px-4 py-3 rounded-lg border border-orange-200 focus:ring-2 focus:ring-orange-400 focus:outline-none text-lg shadow"
                        required
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    ></textarea>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full px-8 py-3 bg-orange-700 text-white text-lg font-bold rounded-xl shadow-lg hover:bg-orange-800 hover:scale-105 focus:ring-4 focus:ring-orange-300 transition-all duration-200 mt-2 disabled:opacity-60"
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
                <div className="w-full flex flex-col sm:flex-row justify-around items-center gap-4 mt-2">
                    <div className="flex items-center gap-2 text-gray-700">
                        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        nikitc163@gmail.com
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        +91 9123029105
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        Acme Inc, Street, State, Postal Code
                    </div>
                </div>
            </div>
        </div>
    );
}