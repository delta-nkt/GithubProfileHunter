import React, { useState } from 'react'

function Github() {
  const [userData, setUserData] = useState(null)
  const [userName, setUserName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [searched, setSearched] = useState(false)

  const fetchGithubAccount = async (user) => {
    setLoading(true)
    setError('')
    try {
      const response = await fetch(`https://api.github.com/users/${user}`)
      if (!response.ok) {
        throw new Error('User not found')
      }
      const result = await response.json()
      setUserData(result)
    } catch (error) {
      setError(error.message)
      setUserData(null)
    } finally {
      setLoading(false)
      setSearched(true)
    }
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    if (userName) {
      fetchGithubAccount(userName)
    }
  }

  const handleInputChange = (e) => {
    setUserName(e.target.value)
  }

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-orange-100 via-white to-orange-200 overflow-hidden py-12 px-4">
      {/* Blurred background shape */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-orange-200 opacity-30 rounded-full filter blur-3xl z-0"></div>
      {/* Floating Github icon */}
      <div className="pointer-events-none absolute top-10 left-10 z-0">
        <svg className="w-20 h-20 opacity-10 animate-bounce-slow" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
      </div>
      <div className="relative z-10 w-full max-w-xl bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl p-8 flex flex-col items-center border border-orange-100" style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'}}>
        <h2 className="text-3xl font-extrabold text-orange-700 mb-6 text-center">Github Profile Search</h2>
        <form onSubmit={handleFormSubmit} className="w-full flex flex-col sm:flex-row gap-4 mb-8">
          <input
            type="text"
            id="usertext"
            className="flex-1 px-4 py-3 rounded-lg border border-orange-200 focus:ring-2 focus:ring-orange-400 focus:outline-none text-lg shadow"
            value={userName}
            onChange={handleInputChange}
            placeholder="Enter Github username..."
          />
          <button
            type="submit"
            className="px-6 py-3 bg-orange-700 text-white font-bold rounded-lg shadow hover:bg-orange-800 hover:scale-105 transition-all duration-200 text-lg"
          >
            Search
          </button>
        </form>
        {!searched && (
          <div className="flex flex-col items-center text-center animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
              alt="Instructional Github search"
              className="w-40 h-28 object-cover rounded-xl mb-4 drop-shadow-xl"
            />
            <p className="text-orange-700 font-semibold text-lg mb-2">Start your search!</p>
            <p className="text-gray-600 text-base">Enter a Github username above to view their public profile.</p>
          </div>
        )}
        {loading && (
          <div className="w-full flex justify-center my-6">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-orange-500 border-solid"></div>
          </div>
        )}
        {error && (
          <div className="w-full text-center text-red-600 font-semibold mb-4 animate-fade-in">
            {error}
          </div>
        )}
        {userData && !error && searched && (
          <div className="w-full flex flex-col items-center bg-white/80 backdrop-blur rounded-xl p-6 shadow border border-orange-100 animate-fade-in">
            <img
              src={userData.avatar_url}
              alt="github avatar"
              className="w-28 h-28 rounded-full border-4 border-orange-200 shadow mb-4"
            />
            <h3 className="text-2xl font-bold text-orange-700 mb-1">{userData.name || userData.login}</h3>
            <span className="text-gray-500 text-base mb-2">@{userData.login}</span>
            <p className="text-gray-700 text-center mb-2">{userData.bio}</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mb-2">
              {userData.location && (
                <span className="flex items-center gap-1"><svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>{userData.location}</span>
              )}
              <span className="flex items-center gap-1"><svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19 21v-2a4 4 0 00-3-3.87M5 21v-2a4 4 0 013-3.87" /></svg>{userData.followers} Followers</span>
              <span className="flex items-center gap-1"><svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 12V4" /></svg>{userData.public_repos} Repos</span>
            </div>
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-6 py-2 bg-orange-600 text-white rounded-lg font-semibold shadow hover:bg-orange-700 transition-all duration-200"
            >
              View on Github
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default Github

export const githubinfoaloader = async () => {
  const response = await fetch('https://api.github.com/users/delta-nkt')
  return response.json()
}