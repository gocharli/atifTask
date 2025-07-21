import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      className="bg-white py-16 px-6 lg:px-20 relative overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div>
          <h4 className="text-sm font-semibold text-purple-600 uppercase mb-2">
            Keep Moving Forward
          </h4>
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Drive Growth with Us!
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Opencollar Technologies LLC delivers custom digital solutions on
            time and on budget. Let us take your business to new heights!
          </p>
          <div className="flex gap-4 items-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-5 rounded-md shadow">
              Talk to Sales
            </button>
            <a
              href="#"
              className="text-purple-600 hover:underline font-medium text-center px-4"
            >
              Explore Opportunities
            </a>
          </div>
        </div>

        {/* Right Images */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="grid grid-cols-2 gap-4 transform rotate-12 scale-110">
            <div className="w-36 h-36 overflow-hidden rounded-2xl shadow-xl -rotate-12 transition-transform hover:scale-105">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Person 1"
                width={144}
                height={144}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-36 h-36 overflow-hidden rounded-2xl shadow-xl -rotate-12 transition-transform hover:scale-105">
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="Person 2"
                width={144}
                height={144}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-36 h-36 overflow-hidden rounded-2xl shadow-xl -rotate-12 transition-transform hover:scale-105">
              <img
                src="https://randomuser.me/api/portraits/men/12.jpg"
                alt="Person 3"
                width={144}
                height={144}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-36 h-36 overflow-hidden rounded-2xl shadow-xl -rotate-12 transition-transform hover:scale-105">
              <img
                src="https://randomuser.me/api/portraits/women/65.jpg"
                alt="Person 4"
                width={144}
                height={144}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Decorative Element */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-100 rounded-full opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
