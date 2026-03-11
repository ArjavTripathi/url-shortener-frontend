import React from 'react'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6 py-16">
      <div className="max-w-2xl w-full space-y-12">

        {/* About the App */}
        <div>
          <h1 className="text-4xl font-bold font-montserrat mb-4">About <span className="text-blue-500">LnkIt</span></h1>
          <p className="text-gray-400 leading-relaxed">
            LnkIt is a fast and simple URL shortener. Paste any long, ugly link and get a
            clean, shareable short URL in seconds. No clutter, no nonsense — just shorter links.
          </p>
        </div>

        {/* Features */}
        <div>
          <h2 className="text-xl font-semibold font-montserrat mb-4 text-gray-200">What it does</h2>
          <ul className="space-y-3 text-gray-400">
            {[
              "Shorten any URL instantly",
              "Track how many times your link was clicked",
              "Manage all your links in one dashboard",
              "Secure login to keep your links private",
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800" />

        {/* About the Maker */}
        <div>
          <h2 className="text-xl font-semibold font-montserrat mb-4 text-gray-200">Made by</h2>
          <div className="flex items-center gap-5">
            <img
              src="https://placehold.co/60"
              alt="Developer"
              className="w-14 h-14 rounded-full ring-2 ring-blue-500"
            />
            <div>
              <p className="font-semibold text-white">John Doe</p>
              <p className="text-gray-400 text-sm">Full Stack Developer · Built with React & Spring Boot</p>
              <a href="https://github.com" className="text-blue-400 text-sm hover:underline">github.com/johndoe</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutPage