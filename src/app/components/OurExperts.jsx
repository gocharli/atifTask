import React from "react";

const OurExpertise = () => {
  const applications = [
    { name: "Bespoke Web Applications", icon: "🌐" },
    { name: "Android / iOS Mobile Apps", icon: "📱" },
    { name: "Responsive Websites", icon: "💻" },
    { name: "Online Platforms", icon: "🚀" },
    { name: "E-Commerce Multivendor", icon: "🛒" },
    { name: "Business Management Software", icon: "📊" },
    { name: "CRM", icon: "👥" },
    { name: "ERP Systems", icon: "⚙️" },
    { name: "Booking Systems", icon: "📅" },
    { name: "NFT Platform", icon: "🎨" },
    {
      name: "Blockchain, CryptoWallet, ERC20 Token, Smart Contracts",
      icon: "⛓️",
    },
    { name: "ChatGPT and AI Applications", icon: "🤖" },
  ];

  const skills = [
    {
      name: "Frontend Development",
      level: 95,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Backend Development",
      level: 96,
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "E-Commerce Development",
      level: 95,
      color: "from-purple-500 to-pink-500",
    },
    { name: "ChatGPT and AI", level: 87, color: "from-orange-500 to-red-500" },
    {
      name: "Web Applications",
      level: 98,
      color: "from-indigo-500 to-blue-500",
    },
    {
      name: "Mobile Applications",
      level: 90,
      color: "from-teal-500 to-green-500",
    },
    {
      name: "Blockchain Technology",
      level: 85,
      color: "from-yellow-500 to-orange-500",
    },
    { name: "Cloud Computing", level: 92, color: "from-cyan-500 to-blue-500" },
    {
      name: "Database Development",
      level: 90,
      color: "from-pink-500 to-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Our Expertise Section */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-900">
                Our Expertise
              </h2>

              <p className="text-xl text-gray-400 font-medium mb-8">
                KIND OF APPLICATIONS WE MAKE
              </p>
            </div>

            <div className="grid gap-4">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-white/50 hover:bg-white/80"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {app.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                        {app.name}
                      </h3>
                    </div>
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-900">
                Our Top Skills Level
              </h2>
              <p className="text-lg text-gray-400 font-medium mb-8">
                Good to know !!!
              </p>
            </div>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50"
                >
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {skill.name}
                    </h3>
                    <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -skew-x-12 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="mt-16 text-center">
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse delay-100"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse delay-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurExpertise;
