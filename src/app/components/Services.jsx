import React from "react";

const Services = () => {
  const services = [
    {
      title: "Website Security",
      description:
        "We take essential steps to ensure your application's safety. Our website security solutions protect your app from potential vulnerabilities and malicious threats.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      color: "bg-teal-200",
      label: "Security",
    },
    {
      title: "Project Management",
      description:
        "Our dedicated technical staff offers comprehensive project management services. We help you plan, execute, and manage your app development process efficiently.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      color: "bg-gray-200",
      label: "Your Copilot",
    },
    {
      title: "Maintenance Services",
      description:
        "We offer on-demand and continuous maintenance services to ensure your applications stay up-to-date, functional, and secure.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      color: "bg-yellow-200",
      label: "Maintenance",
    },
    {
      title: "Software Quality Testing",
      description:
        "We ensure your applications are secure, bug-free, and SEO-friendly through our extensive software quality testing services.",
      image:
        "https://images.unsplash.com/photo-1600585154526-990d71c4a932?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      color: "bg-orange-200",
      label: "Our Favorite Job",
    },
    {
      title: "Multi Vendor Ecommerce Platform",
      description:
        "We offer a B2B and B2C fully-featured multi-vendor ecommerce platform designed to streamline online shopping experiences.",
      image:
        "https://images.unsplash.com/photo-1600585154526-990d71c4a932?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      color: "bg-blue-200",
      label: "Ecommerce",
    },
    {
      title: "Recruitment System",
      description:
        "Our recruitment system includes a career portal, training and events promotion tools, and a full recruitment workflow to match modern hiring needs.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      color: "bg-green-200",
      label: "Recruitment",
    },
    {
      title: "Social Media Platform",
      description:
        "We develop robust and interactive social media platforms that enhance online engagement and community building.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      color: "bg-purple-200",
      label: "Social Media",
    },
    {
      title: "Clinic Booking System",
      description:
        "We provide an online clinic management system for physiotherapists including appointment booking, physio test scheduling, and report generation functionalities.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      color: "bg-red-200",
      label: "Clinic",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
        <p className="text-gray-600 mt-2">
          Our unique blend of strategy, technology and creative implementation
          allows us to provide our clients solutions on time and within budget.
          We love to discuss the ideas.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg shadow-md ${service.color} hover:shadow-xl hover:scale-105 transition-transform duration-300`}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <span className="inline-block bg-yellow-300 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full mb-2">
                {service.label}
              </span>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
