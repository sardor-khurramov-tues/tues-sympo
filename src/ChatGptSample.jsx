import React, { useState, useEffect } from "react";

const topics = [
  {
    title: "Technology and Innovation",
    items: [
      "Artificial Intelligence and the Transformation of Human Communication and Connectivity",
      "From Smart Cities to Smart Societies: New Models of Digital Urban Development",
      "The Role of Youth in Driving Innovation and Technological Progress",
      "Cybersecurity in 2050: Protecting Human Dignity, Privacy and Trust in the Digital Era",
    ],
  },
  {
    title: "Environment and Sustainability",
    items: [
      "Innovations in Renewable Energy and Their Role in Global Energy Transitions",
      "Strategies for Climate Change Adaptation and Building Resilient Communities",
      "Sustainable Agriculture and Food Security for a Growing Global Population",
      "Youth Engagement and Innovation in Advancing Global Sustainability",
    ],
  },
  {
    title: "Education and Employment",
    items: [
      "Artificial Intelligence in Education: Teaching, Learning and Human–AI Collaboration",
      "The Changing Role of Teachers in AI-Augmented Classrooms",
      "Developing Future-Ready Skills through Emerging Educational Technologies",
      "Artificial Intelligence, the Future of Work and New Employment Paradigms",
    ],
  },
  {
    title: "Health and Society",
    items: [
      "Mental Health in 2050: Anticipating Emerging Challenges and Solutions",
      "Strengthening Community and Social Support as Foundations of Future Healthcare",
      "Health Education as a Tool for Empowerment and Sustainable Well-Being",
      "Artificial Intelligence in Therapy, Virtual Hospitals and Telemedicine",
    ],
  },
  {
    title: "Tourism and Global Mobility",
    items: [
      "Sustainable and Responsible Tourism as a Driver of Global Development",
      "Borderless Travel: Technology, Identity and the Future of Mobility",
      "Tourism, Job Creation and Inequality in the Global Economy",
      "Climate Change and the Future of Tourism: Adapting to a Changing Planet",
    ],
  },
  {
    title: "Inclusive Economy and Poverty Reduction",
    items: [
      "Global Inequality in 2050: Addressing Disparities Between and Within Nations",
      "Decent Work, Social Protection and Pathways Out of Poverty",
      "Digital Economy, Financial Inclusion and Access to Opportunities",
      "The Role of Women, Youth and Vulnerable Groups in the Future Economy",
      "Poverty, Migration and Global Stability in the Twenty-First Century",
    ],
  },
];

// Countdown hook
const useCountdown = (targetDate) => {
  const countDownDate = new Date(targetDate).getTime();
  const [countDown, setCountDown] = useState(countDownDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, [countDownDate]);

  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

function ChatGptSample() {
  const [days, hours, minutes, seconds] = useCountdown("Nov 1, 2025 00:00:00");

  return (
    <div className="font-sans text-gray-800 scroll-smooth">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <nav className="flex justify-between items-center px-6 py-4">
          <h1 className="text-xl font-bold text-blue-700">The World in 2050</h1>
          <ul className="flex space-x-6">
            <li><a href="#topics" className="hover:text-blue-600">Topics</a></li>
            <li><a href="#about" className="hover:text-blue-600">About Us</a></li>
            <li><a href="#registration" className="hover:text-blue-600">Registration</a></li>
            <li><a href="#contacts" className="hover:text-blue-600">Contacts</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">The World In 2050</h2>
        <p className="text-lg md:text-2xl max-w-2xl">
          Shaping the future through Innovation, Sustainability and Global Collaboration
        </p>
      </section>

      {/* Topics */}
      <section id="topics" className="py-16 px-6 bg-gray-100">
        <h3 className="text-3xl font-bold text-center mb-8">Topics</h3>
        <div className="overflow-x-auto flex space-x-6 pb-6">
          {topics.map((topic, idx) => (
            <div key={idx} className="min-w-[300px] max-w-sm bg-white shadow-md rounded-xl p-6">
              <h4 className="font-bold text-lg mb-4">{topic.title}</h4>
              <ul className="list-disc list-inside space-y-2 text-sm">
                {topic.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 px-6">
        <h3 className="text-3xl font-bold text-center mb-8">About Us</h3>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <p>
            We are a global initiative bringing together thinkers, innovators, and changemakers 
            to shape the world of 2050. Our mission is to foster collaboration in 
            technology, sustainability, education, health, tourism, and inclusive economy 
            for a better tomorrow.
          </p>
          <img
            src="https://source.unsplash.com/600x400/?future,technology"
            alt="About us"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Registration */}
      <section id="registration" className="py-16 px-6 bg-blue-50 text-center">
        <h3 className="text-3xl font-bold mb-6">Registration</h3>
        <a
          href="https://example.com/register"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-blue-700 transition"
        >
          Register Now
        </a>

        <div className="mt-10">
          <h4 className="text-xl font-semibold mb-4">Event starts in:</h4>
          <div className="flex justify-center space-x-6 text-2xl font-bold">
            <div>{days}d</div>
            <div>{hours}h</div>
            <div>{minutes}m</div>
            <div>{seconds}s</div>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-16 px-6 bg-gray-100 text-center">
        <h3 className="text-3xl font-bold mb-6">Contacts</h3>
        <p>Email: info@world2050.org</p>
        <p>Phone: +123 456 7890</p>
        <p>Address: 123 Future Avenue, Global City</p>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-gray-900 text-white">
        <p>© 2025 The World in 2050. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ChatGptSample;
