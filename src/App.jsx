import { FaFire, FaDumbbell, FaHeartbeat, FaClock, FaPhone, FaMapMarker, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import { GiWeightLiftingUp, GiRunningShoe } from 'react-icons/gi';
import { useState } from 'react';

function SlimNTrim() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const programs = [
    {
      icon: <FaFire className="text-red-500 text-4xl" />,
      title: "Fat Burn Program",
      desc: "High-intensity workouts to torch calories"
    },
    {
      icon: <GiWeightLiftingUp className="text-blue-500 text-4xl" />,
      title: "Strength Training",
      desc: "Build lean muscle mass"
    },
    {
      icon: <GiRunningShoe className="text-green-500 text-4xl" />,
      title: "Cardio Blast",
      desc: "Improve endurance & stamina"
    }
  ];

  const trainers = [
    {
      name: "Alex Carter",
      specialty: "Weight Loss",
      exp: "8 years"
    },
    {
      name: "Sarah Lim",
      specialty: "Yoga/Pilates",
      exp: "6 years"
    },
    {
      name: "Mike Johnson",
      specialty: "Body Building",
      exp: "10 years"
    }
  ];

  return (
   

<div className="font-sans">
  {/* Navigation */}
  <nav className="bg-gradient-to-r from-purple-800 to-blue-600 text-white p-4 sticky top-0 z-50">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold tracking-wider">SLIM 'N' TRIM</h1>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6">
        <a href="#home" className="hover:text-yellow-300 transition">Home</a>
        <a href="#programs" className="hover:text-yellow-300 transition">Programs</a>
        <a href="#trainers" className="hover:text-yellow-300 transition">Trainers</a>
        <a href="#schedule" className="hover:text-yellow-300 transition">Schedule</a>
        <a href="#contact" className="hover:text-yellow-300 transition">Contact</a>
      </div>
      
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden focus:outline-none"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {isMobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
    </div>
    
    {/* Mobile Menu Dropdown */}
    {isMobileMenuOpen && (
      <div className="md:hidden bg-purple-900 mt-2 py-2 rounded-lg">
        <div className="flex flex-col space-y-3 px-4">
          <a 
            href="#home" 
            className="hover:text-yellow-300 transition py-2 border-b border-purple-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </a>
          <a 
            href="#programs" 
            className="hover:text-yellow-300 transition py-2 border-b border-purple-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Programs
          </a>
          <a 
            href="#trainers" 
            className="hover:text-yellow-300 transition py-2 border-b border-purple-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Trainers
          </a>
          <a 
            href="#schedule" 
            className="hover:text-yellow-300 transition py-2 border-b border-purple-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Schedule
          </a>
          <a 
            href="#contact" 
            className="hover:text-yellow-300 transition py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    )}
  </nav>


      {/* Hero Section */}
<section id="home" className="relative h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b')] bg-cover bg-center">
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="text-center z-10 px-4">
    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">TRANSFORM YOUR BODY</h1>
    <p className="text-xl text-yellow-300 mb-8">Where fitness meets lifestyle</p>
    <button className="bg-yellow-400 text-purple-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-300 transition">
      JOIN TODAY
    </button>
  </div>
</section>
      {/* Programs Section */}
      <section id="programs" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">OUR PROGRAMS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition">
                <div className="flex justify-center mb-4">
                  {program.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-gray-600">{program.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      {/* Trainers Section */}
<section id="trainers" className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">MEET OUR TRAINERS</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Trainer 1 - Weight Loss Specialist */}
      <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition">
        <div className="bg-purple-100 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
          <GiWeightLiftingUp className="text-purple-600 text-5xl" />
        </div>
        <h3 className="text-xl font-bold">Alex Carter</h3>
        <p className="text-blue-600 font-medium">Weight Loss Specialist</p>
        <p className="text-gray-500 mt-2">8 years experience</p>
        <div className="mt-4 flex justify-center space-x-2">
          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">HIIT</span>
          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Nutrition</span>
        </div>
      </div>

      {/* Trainer 2 - Yoga/Pilates Expert */}
      <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition">
        <div className="bg-green-100 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
          <FaHeartbeat className="text-green-600 text-5xl" />
        </div>
        <h3 className="text-xl font-bold">Sarah Lim</h3>
        <p className="text-green-600 font-medium">Yoga/Pilates Expert</p>
        <p className="text-gray-500 mt-2">6 years experience</p>
        <div className="mt-4 flex justify-center space-x-2">
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Flexibility</span>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Mindfulness</span>
        </div>
      </div>

      {/* Trainer 3 - Body Building Coach */}
      <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition">
        <div className="bg-red-100 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
          <FaDumbbell className="text-red-600 text-5xl" />
        </div>
        <h3 className="text-xl font-bold">Mike Johnson</h3>
        <p className="text-red-600 font-medium">Body Building Coach</p>
        <p className="text-gray-500 mt-2">10 years experience</p>
        <div className="mt-4 flex justify-center space-x-2">
          <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Strength</span>
          <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Conditioning</span>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Schedule Section */}
      <section id="schedule" className="py-16 bg-purple-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">CLASS SCHEDULE</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white text-purple-900 rounded-lg">
              <thead>
                <tr className="bg-purple-900 text-white">
                  <th className="p-4">Time</th>
                  <th className="p-4">Monday</th>
                  <th className="p-4">Wednesday</th>
                  <th className="p-4">Friday</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-bold">6:00 AM</td>
                  <td className="p-4">HIIT</td>
                  <td className="p-4">Yoga</td>
                  <td className="p-4">CrossFit</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-bold">5:00 PM</td>
                  <td className="p-4">Zumba</td>
                  <td className="p-4">Boxing</td>
                  <td className="p-4">Pilates</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">7:00 PM</td>
                  <td className="p-4">Strength</td>
                  <td className="p-4">Spin</td>
                  <td className="p-4">Bootcamp</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">CONTACT US</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <FaMapMarker className="text-purple-600 mr-2" />
                <p>123 Fitness Street, Health City</p>
              </div>
              <div className="flex items-center mb-4">
                <FaPhone className="text-purple-600 mr-2" />
                <p>(123) 456-7890</p>
              </div>
              <div className="flex items-center mb-4">
                <FaClock className="text-purple-600 mr-2" />
                <p>Mon-Fri: 5AM - 10PM | Sat-Sun: 7AM - 8PM</p>
              </div>
              <div className="flex space-x-4 mt-8">
                <a href="#" className="text-purple-600 hover:text-purple-800"><FaFacebook size={24} /></a>
                <a href="#" className="text-purple-600 hover:text-purple-800"><FaInstagram size={24} /></a>
                <a href="#" className="text-purple-600 hover:text-purple-800"><FaYoutube size={24} /></a>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <input type="text" placeholder="Name" className="w-full p-3 rounded border" />
                <input type="email" placeholder="Email" className="w-full p-3 rounded border" />
                <textarea placeholder="Message" className="w-full p-3 rounded border h-32"></textarea>
                <button type="submit" className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700 transition">
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 text-white py-8 text-center">
        <p>© {new Date().getFullYear()} SLIM 'N' TRIM. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default SlimNTrim;