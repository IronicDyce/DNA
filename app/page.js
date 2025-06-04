import React from "react";

const siteConfig = {
  siteName: "Degens Need Ass",
  ctaText: "Buy $DNA",
  headline: "Degens Need ASs 🍑",
  description: "it's in our DNA",
  features: [
    {
      title: "DNA",
      text: ""
    },
    {
      title: "Origin",
      text: `DNA started as a joke in a Telegram chat.
    Someone asked, "What if degeneracy was genetic?"
    Two hours later, a smart contract was copy-pasted, liquidity was added, and Degens Need ASS was born.
    
    It wasn’t launched — it escaped.
    Now it spreads like a virus: wallet to wallet, meme to meme, fueled by zero sleep and 100x dreams.
    
    DNA isn’t a project.
    It’s a mutation.
    And if you're holding it… you’ve already been infected.`
    },

    {
      title: "Gene Pool",
      text: "Liquidity pool named for its questionable contributors"
    },
    {
      title: "Discipline",
      text: "Our DNA isn’t random — it’s genetically disciplined degeneracy."
    },
    {
      title: "Utility",
      text: "Our token does everything and nothing, just like real DNA — most of it is junk."
    },
    {
      title: "Community Oriented",
      text: "Our holders form a living gene pool of poor decisions and stronger convictions."
    }
  ],
  communityTitle: "Join the 🍝 Cult",
  communityDescription: "$DNA Community",
  twitterLink: "https://x.com/i/communities/1921887080747303298",
  telegramLink: "#",
  communityCardTitle: "$2FA X Community",
  communityCardText: "Get unfiltered updates, share memes, and interact with a community of degenerates.",
  communityCardButton: "Get In Here 👊",
  footerText: "© 2025 Degens Need Ass. Built different. Not financial advice — just ass."
};

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#1f2235] via-[#0f0f23] to-[#1f2235] text-white min-h-screen font-sans relative overflow-hidden">
      <header className="flex justify-between items-center p-6 border-b border-gray-800 z-10 relative">
        <div className="text-2xl font-bold text-pink-400">{siteConfig.siteName}</div>
        <nav className="flex space-x-6">

          <a href="https://pump.fun/coin/89ZuYkFEvk6Ae5fZtX4rHUvqjH2mLns1e9We6FM1hoq1" target="_blank" rel="noopener noreferrer" className="bg-pink-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-pink-600 transition">{siteConfig.ctaText}</a>
        </nav>
      </header>

      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/background.jpg"
            alt="$2FA Background"
            className="w-[1500px] h-[500px] object-cover mx-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f0f23]" />
        </div>
      </section>

      <section className="text-center py-10 z-10 relative">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-blue-300">
          {siteConfig.headline}
        </h1>
        <p className="text-lg text-pink-200 max-w-2xl mx-auto whitespace-pre-line">
          {siteConfig.description}
        </p>
        <a
          href="https://pump.fun/coin/89ZuYkFEvk6Ae5fZtX4rHUvqjH2mLns1e9We6FM1hoq1"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block bg-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-pink-600 transition"
        >
          {siteConfig.ctaText}
        </a>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1500px] mx-auto px-6 py-12 z-10 relative">
        {siteConfig.features.map((feature, index) => (
          <div key={index} className="bg-[#1a1a3d] p-6 rounded-xl shadow-xl">
            <h3 className="text-xl font-bold mb-2 text-pink-400">{feature.title}</h3>
            <p className="text-blue-100">{feature.text}</p>
          </div>
        ))}
      </section>

      <section className="text-center py-12 z-10 relative">
        <h2 className="text-3xl font-bold mb-4 text-blue-300">{siteConfig.communityTitle}</h2>
        <p className="text-pink-200 mb-6">{siteConfig.communityDescription}</p>
        <div className="flex justify-center space-x-6">
          <a href={siteConfig.twitterLink} className="hover:text-pink-400 underline" target="_blank" rel="noopener noreferrer">Join our cult →</a>
        </div>

        <div className="mt-10 max-w-md mx-auto bg-[#1a1a3d] p-6 rounded-xl shadow-lg text-center">
          <h3 className="text-lg font-semibold mb-2 text-pink-400">Visit the $DNA X Community</h3>
          <p className="text-sm text-blue-100 mb-4">{siteConfig.communityCardText}</p>
          <a
            href={siteConfig.twitterLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pink-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-pink-600 transition"
          >
            {siteConfig.communityCardButton}
          </a>
        </div>
      </section>

      <footer className="p-6 text-center text-sm text-blue-300 border-t border-gray-800 z-10 relative">
        <p>{siteConfig.footerText}</p>
      </footer>
    </div>
  );
}
