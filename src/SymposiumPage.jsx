import { useState, useEffect } from "react";

export default function SymposiumPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
  });

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const eventDate = new Date("2025-09-25T09:00:00"); // symposium start time

    const timer = setInterval(() => {
      const now = new Date();
      const diff = eventDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft(null);
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8900/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) alert("Registration successful!");
      else alert("Failed to register.");
    } catch (err) {
      console.error(err);
      alert("Error submitting form.");
    }
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-8">
        <h1 className="text-5xl font-bold mb-4">University Symposium 2025</h1>
        <p className="text-xl mb-6">September 25, 2025 · University Campus</p>

        {/* Countdown Timer */}
        {timeLeft ? (
          <div className="mt-4 flex gap-6 text-center">
            <div>
              <p className="text-5xl font-bold">{timeLeft.days}</p>
              <p className="uppercase text-sm">Days</p>
            </div>
            <div>
              <p className="text-5xl font-bold">{timeLeft.hours}</p>
              <p className="uppercase text-sm">Hours</p>
            </div>
            <div>
              <p className="text-5xl font-bold">{timeLeft.minutes}</p>
              <p className="uppercase text-sm">Minutes</p>
            </div>
            <div>
              <p className="text-5xl font-bold">{timeLeft.seconds}</p>
              <p className="uppercase text-sm">Seconds</p>
            </div>
          </div>
        ) : (
          <p className="mt-4 text-2xl font-bold">Event Started!</p>
        )}

        <a
          href="#register"
          className="mt-8 bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Register Now
        </a>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-4 text-center">About the Symposium</h2>
        <p className="text-lg text-center">
          [Placeholder for information about the symposium, theme, goals, and what participants can expect.]
        </p>
      </section>

      {/* Speakers Section */}
      <section className="bg-gray-100 py-20 px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Keynote Speakers</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-32 h-32 mx-auto bg-gray-300 rounded-full mb-4"></div>
              <h3 className="text-xl font-semibold">Speaker {i}</h3>
              <p className="text-gray-600 text-sm">Short bio or designation</p>
            </div>
          ))}
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" className="py-20 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Register Now</h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-3"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-3"
          />
          <input
            type="text"
            name="organization"
            placeholder="Organization"
            value={formData.organization}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Submit Registration
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center">
        <p>© 2025 University Symposium. All rights reserved.</p>
        <p className="text-sm mt-2">Contact: symposium@university.edu</p>
      </footer>
    </div>
  );
}
