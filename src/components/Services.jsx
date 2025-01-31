import React, { useEffect } from "react";

const Services = () => {
  const devServices = [
    {
      title: "Web Development",
      description:
        "Building responsive and modern websites using technologies like React, Next.js, Vue, and Angular. Ensuring performance, accessibility, and SEO optimization.",
    },
    {
      title: "Backend Development",
      description:
        "Designing and implementing scalable backend solutions using Node.js and databases like Mysql and MongoDB",
    },
    {
      title: "API Development",
      description:
        "Developing and integrating RESTful and GraphQL APIs to enable seamless communication between frontend and backend systems.",
    },

    {
      title: "AI & Machine Learning",
      description:
        "Building intelligent applications with AI and ML using TensorFlow, PyTorch, OpenAI APIs, and computer vision libraries.",
    },
  ];

  return (
    <section className="services" id="services">
      <h2 className="heading">Services</h2>
      <div className="services-container">
        {devServices.map((service, index) => (
          <div key={index} className="service-box">
            <div className="service-info">
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
