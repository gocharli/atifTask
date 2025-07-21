// components/WhyChooseUs.tsx
import { FaClock, FaCogs, FaShieldAlt, FaProjectDiagram } from "react-icons/fa";

const features = [
  {
    number: "01",
    icon: <FaClock className="text-purple-600 text-2xl" />,
    title: "On-Time & On-Budget Delivery",
    description:
      "Proven track record of delivering quality solutions within deadlines and budgets.",
  },
  {
    number: "02",
    icon: <FaProjectDiagram className="text-purple-600 text-2xl" />,
    title: "Tailored Strategy",
    description:
      "Every project starts with a strategic consulting phase to align tech, business goals, and user needs.",
  },
  {
    number: "03",
    icon: <FaCogs className="text-purple-600 text-2xl" />,
    title: "End-to-End Expertise",
    description:
      "From blockchain and crypto to mobile and backend support, we handle it all.",
  },
  {
    number: "04",
    icon: <FaShieldAlt className="text-purple-600 text-2xl" />,
    title: "Security First",
    description:
      "Smart-contract audits, secure development processes, and compliance with industry standards.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-20">
      <div className="text-center mb-14">
        <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 group"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 mb-4">
                {feature.icon}
              </div>
              <span className="text-sm font-bold text-white bg-purple-600 px-3 py-1 rounded-full mb-3">
                {feature.number}
              </span>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-purple-700">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
