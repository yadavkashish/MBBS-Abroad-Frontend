import React from 'react'
import { useState, useEffect } from "react";
import gsap  from "gsap";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { motion ,useAnimation} from "framer-motion";
import { FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';


export default function StudyMBBSLanding() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
    gsap.from(".fade-in", { opacity: 0, y: 50, duration: 1, stagger: 0.3 });
  }, []);

 

  const [formData, setFormData] = useState({ name: "", email: "", phone: "", country: "" });
  
  const [searchTerm, setSearchTerm] = useState("");
  const [faqOpen, setFaqOpen] = useState(null);
  const toggleFAQ = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };
  const [progress, setProgress] = useState(0);
 
  const imageSources = [
    "https://cdn.pixabay.com/photo/2023/09/17/19/10/building-8259184_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/02/06/20/01/university-library-4825366_1280.jpg",
   " https://cdn.pixabay.com/photo/2020/11/19/08/03/college-5757815_1280.jpg",
   "https://cdn.pixabay.com/photo/2021/02/18/12/03/people-6027028_1280.jpg",
  ];
    const [imageIndex, setImageIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % imageSources.length);
      }, 3000);
  
      return () => clearInterval(interval);
    }, []);
  

    
    
    const testimonials = [
      {
    text: "I really like the dresses from the Borcelle Boutique. Nice design, feminine color, soft and comfortable material. In addition, at an affordable price, I can get a dress with good quality like this.",
    name: "Emily Johnson",
    image: "https://th.bing.com/th/id/OIP.20kqkdDLzp1_6IO76pIR7AHaFj?w=640&h=480&rs=1&pid=ImgDetMain", // 
  },
  {
    text: "mbbs abroad consultancy in india",
    name: "Sophia Williams",
    image: "https://th.bing.com/th/id/OIP.dEvjmvcTUtCAiU2rTuNYDAHaHy?pid=ImgDet&w=179&h=187&c=7&dpr=1.5",
  },
  {
    text: "best mbbbs abroad consultancy in india",
    name: "Olivia Brown",
    image: "https://th.bing.com/th/id/OIP.3RPu8gKUbdSTTu6Zv524LQHaHa?w=149&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  },
  {
    text: "Great customer service and amazing  quality.  education . Highly recommended!",
    name: "Ava Smith",
    image: "https://th.bing.com/th/id/OIP.JTz951ZADypYM8Syey_jBgHaE8?w=273&h=182&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  },
  {
    text: "I love the environment and growth. Worth every penny!",
    name: "Mia Davis",
    image: "https://th.bing.com/th/id/OIP.OSkdR0P0Rx2EfF1FkAe7sAHaHa?pid=ImgDet&w=189&h=189&c=7&dpr=1.5",
  },
  {
    text: "At affordable prizes!",
    name: "Isabella Taylor",
    image: "https://image.shutterstock.com/image-photo/studio-close-portrait-happy-smiling-260nw-2153541715.jpg",
  },
];





const steps = [
  "Admission Process",
  "Choose a country and university",
  "Submit required documents",
  "Receive admission letter",
  "Apply for visa and travel",
];


const controls = useAnimation();
const textControls = steps.map(() => useAnimation());

useEffect(() => {
  async function animateTimeline() {
    while (true) {
      // Move down to the last step
      for (let i = 0; i < steps.length; i++) {
        await controls.start({
          y: i * 120,
          transition: { duration: 0.8, ease: "easeInOut" },
        });
        await textControls[i].start({
          scale: 1.3,
          transition: { duration: 0.3 },
        });
        await new Promise((resolve) => setTimeout(resolve, 1000));
        await textControls[i].start({
          scale: 1,
          transition: { duration: 0.3 },
        });
      }
      
      // Move back up to the first step
      for (let i = steps.length - 1; i >= 0; i--) {
        await controls.start({
          y: i * 120,
          transition: { duration: 0.8, ease: "easeInOut" },
        });
        await textControls[i].start({
          scale: 1.3,
          transition: { duration: 0.3 },
        });
        await new Promise((resolve) => setTimeout(resolve, 1000));
        await textControls[i].start({
          scale: 1,
          transition: { duration: 0.3 },
        });
      }
    }
  }
  animateTimeline();
}, [controls, textControls]);

    
const [indexes, setIndexes] = useState([0, 1, 2]); // Keep track of individual indexes for 3 cards

useEffect(() => {
  const interval = setInterval(() => {
    setIndexes((prevIndexes) => prevIndexes.map((i) => (i + 1) % testimonials.length));
  }, 4000); // Change every 4 seconds

  return () => clearInterval(interval);
}, []);

  const countries = [
    { name: "Russia", fees: "₹4-6 Lakh", duration: "6 years", fmge: "40%", cost: "Moderate", flag: "🇷🇺", university: "Moscow State University" },
    { name: "Uzbekistan", fees: "₹3-5 Lakh", duration: "5 years", fmge: "35%", cost: "Low", flag: "🇺🇿", university: "Tashkent Medical Academy" },
    { name: "Kazakhstan", fees: "₹3-6 Lakh", duration: "5 years", fmge: "30%", cost: "Moderate", flag: "🇰🇿", university: "Kazakh National Medical University" },
    { name: "Philippines", fees: "₹5-8 Lakh", duration: "6 years", fmge: "50%", cost: "High", flag: "🇵🇭", university: "University of Santo Tomas" },
    { name: "China", fees: "₹3-6 Lakh", duration: "6 years", fmge: "30%", cost: "Moderate", flag: "🇨🇳"},
    { name: "Nepal", fees: "₹4-7 Lakh", duration: "5 years", fmge: "35%", cost: "Low", flag: "🇳🇵"},
  ];
  
  const faqs = [
    { question: "Do I need to clear NEET?", answer: "Yes, NEET qualification is mandatory for MBBS admission abroad." },
    { question: "What are the tuition fees?", answer: "Tuition fees vary by country, ranging from ₹3-8 Lakh per year." },
    { question: "Is the degree recognized in India?", answer: "Yes, degrees from recognized universities are valid in India after clearing FMGE." },
  ];
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };


  

  return (
    <div className="w-full min-h-screen ">
      {/* Hero Section */}
      <header
        className="relative w-full min-h-screen flex flex-col justify-center items-center text-white text-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${imageSources[imageIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative z-50 max-w-3xl px-4">
          <h1 className="text-5xl font-bold" style={{ textShadow: "2px 2px 0 #000, 4px 4px 0 #000" }}>
            Your Dream of Studying MBBS Abroad Starts Here!
          </h1>
          <p className="mt-4 text-lg" style={{ textShadow: "2px 2px #000" }}>
            1000+ Students Placed | Top Universities | Hassle-Free Admission Process
          </p>
          <a href="#lead-form" className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold text-lg">
            Apply Now
          </a>
        </div>
      </header>

      
     {/* Why Study MBBS Abroad (Key Benefits) */}
          
     <section class="scrolling-headings">
  <div class="heading-container">
    <h2 class="heading">Affordable Tuition Fees <i class="icon">💰</i></h2>
    <h2 class="heading">Globally Recognized Degree <i class="icon">🌍</i></h2>
    <h2 class="heading">High FMGE Passing Rate <i class="icon">📈</i></h2>
    <h2 class="heading">Better Job Prospects <i class="icon">🎯</i></h2>

  </div>
      </section>


      {/* Comparison Table: India vs. Abroad */}
      <section className="relative py-12 px-6 text-center bg-green-100 overflow-hidden">
  {/* Full-Width Background Blurred Semicircle */}
  <div 
    className="absolute bottom-0 left-0 w-full h-64 bg-cover bg-center rounded-t-full backdrop-blur-lg"
    
  ></div>

  {/* Title */}
  <h2 className="text-4xl font-extrabold text-gray-800 relative z-10">MBBS in India vs. Abroad</h2>

  {/* Table Container with Glassmorphism Effect */}
  <div className="mt-10 overflow-x-auto relative z-10 flex justify-center">
    <table className="w-full max-w-4xl mx-auto border-collapse bg-white/50 backdrop-blur-md shadow-2xl rounded-xl overflow-hidden">
      <thead>
        <tr className="bg-gradient-to-r from-green-700 to-indigo-600 text-white">
          <th className="p-5 text-lg font-semibold border-b border-white/20">Factor</th>
          <th className="p-5 text-lg font-semibold border-b border-white/20">India</th>
          <th className="p-5 text-lg font-semibold border-b border-white/20">Abroad</th>
        </tr>
      </thead>
      <tbody className="text-gray-800">
        <tr className="hover:bg-blue-100/50 transition-all">
          <td className="p-4 border-b border-gray-300">Fees</td>
          <td className="p-4 border-b border-gray-300">₹10-20 Lakh</td>
          <td className="p-4 border-b border-gray-300">₹3-8 Lakh</td>
        </tr>
        <tr className="bg-gray-100 hover:bg-blue-100/50 transition-all">
          <td className="p-4 border-b border-gray-300">Seats Available</td>
          <td className="p-4 border-b border-gray-300">Very Limited</td>
          <td className="p-4 border-b border-gray-300">More Options</td>
        </tr>
        <tr className="hover:bg-blue-100/50 transition-all">
          <td className="p-4 border-b border-gray-300">Entrance Exam</td>
          <td className="p-4 border-b border-gray-300">NEET Required</td>
          <td className="p-4 border-b border-gray-300">Direct Admission</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>



      {/* Student Testimonials Slider */}
      <section className="py-12 px-6 text-center bg-green-50">
      <h2 className="text-3xl font-bold mb-6 p-10">Customer Testimonials</h2>
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
        {indexes.map((index, i) => (
          <div key={i} className="relative w-80 bg-green-700 text-white p-6 pt-16 rounded-lg shadow-lg">
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
              <img
                src={testimonials[index].image}
                alt={testimonials[index].name}
                className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-white"
              />
            </div>
            <p className="text-lg mt-6">"{testimonials[index].text}"</p>
            <h4 className="mt-2 font-semibold">- {testimonials[index].name}</h4>
          </div>
        ))}
      </div>
    </section>
      {/* Infographic: Cost Savings */}
      <section className="py-12 px-6 text-center bg-green-100">
        <h2 className="text-3xl font-bold">Cost Savings: India vs. Abroad</h2>
        <div className="mt-6 flex justify-center">
          <div className="w-1/2 h-8 bg-red-500 text-white flex items-center justify-center">India: ₹15L+</div>
          <div className="w-1/3 h-8 bg-green-800 text-white flex items-center justify-center">Abroad: ₹5L+</div>
        </div>
      </section>
      {/* Top Countries */}
      <section 
  className="py-12 px-6 text-center backdrop-blur-lg bg-white bg-opacity-20"
  style={{
    backgroundImage: "url('https://images.pexels.com/photos/30708625/pexels-photo-30708625/free-photo-of-colorful-abstract-light-patterns-background.jpeg?auto=compress&cs=tinysrgb&w=600')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed"
  }}
>
  <h2 className="text-3xl font-bold text-white">Top MBBS Destinations</h2>
  <input 
    type="text" 
    placeholder="Search for a country..." 
    className="mt-4 p-2 border rounded w-full max-w-md bg-white bg-opacity-50" 
    onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
  />
  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {countries.filter(c => c.name.toLowerCase().includes(searchTerm)).map((country) => (
      <div key={country.name} className="bg-opacity-50 backdrop-blur-md p-6 shadow-lg rounded-lg">
        <h3 className="text-xl font-semibold text-white">{country.flag} {country.name}</h3>
        <p className='text-white'><strong>Tuition Fees:</strong> {country.fees}</p>
        <p className='text-white'><strong>Duration:</strong> {country.duration}</p>
        <p className='text-white'><strong>FMGE Passing Rate:</strong> {country.fmge}</p>
        <p className='text-white'><strong>Cost of Living:</strong> {country.cost}</p>
        <p className='text-white'><strong>University:</strong> {country.university}</p>
        <button className="mt-4 text-black px-4 py-2 rounded-lg">Talk to an Expert</button>
      </div>
    ))}
  </div>
</section>


      
        {/* Admission Process & Eligibility */}
        <section className="py-16 px-8 flex flex-row items-center relative bg-gradient-to-r from-green-100 to-green-700 via-green-300 min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/path-to-snowflake-pattern.png')] opacity-10"></div>
      
      {/* Timeline on the left */}
      <div className="relative w-1/3 flex flex-col items-center h-[600px]">
        {/* Vertical Line */}
        <div className="w-1 h-full bg-gray-400 absolute left-6"></div>
        
        {/* Steps */}
        {steps.map((text, index) => (
          <motion.div
            key={index}
            className="bg-white text-black px-5 py-3 rounded-lg shadow-lg mb-16 relative w-48 text-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="absolute -left-7 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-blue-500 rounded-full border-2 border-white"></div>
            {text}
          </motion.div>
        ))}
      </div>

      {/* Paragraph on the right */}
      <div className="w-2/3 flex flex-col justify-center pl-16">
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Admission Process Timeline</h2>
          
          <h3 className="text-xl font-semibold text-gray-700 mt-4">1. Choose a Country and University</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            The first step in your admission journey is to research and select the country and university that align with your academic and career goals.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-700 mt-4">2. Submit Required Documents</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Once you have selected your institution, compile and submit all necessary documents such as transcripts, recommendation letters, and essays.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-700 mt-4">3. Receive Admission Letter</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            After review, the university will issue an admission letter confirming your acceptance into the program.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-700 mt-4">4. Apply for Visa and Travel</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            The final step involves applying for a student visa and making travel arrangements to start your educational journey.
          </p>
        </div>
      </div>
    </section>

      {/* FAQ Section */}
      <section className="py-12 px-6 bg-green-100 text-center">
        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        <div className="mt-6 max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg text-left">
              <button onClick={() => toggleFAQ(index)} className="w-full flex justify-between text-lg font-semibold">
                {faq.question}
                <span>{faqOpen === index ? "-" : "+"}</span>
              </button>
              {faqOpen === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </section>

      
        {/* Lead Form */}
        <section className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-gray-100 p-4">
      {/* Form Section */}
      <div id = "lead-form"
      className="w-full md:w-1/2 p-6 shadow-xl rounded-2xl bg-green-200">
        <h2 className="text-2xl font-bold text-center mb-4">Register Now !</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 bg-gray-200  rounded"
            />
          </div>
          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2  bg-gray-200  rounded"
            />
          </div>
          <div>
            <label className="block font-medium">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-2 bg-gray-200  rounded"
            />
          </div>
          <div>
            <label className="block font-medium">Country Preference</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="w-full p-2 bg-gray-200 border-green-900  rounded"
            >
              <option value="">Select a country</option>
              <option value="Russia">Russia</option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="Philippines">Philippines</option>
              <option value="Georgia">Georgia</option>
              <option value="Kyrgyzstan">Kyrgyzstan</option>
              <option value="Egypt">Egypt</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full hover:bg-blue-700 outline font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
        <p className="mt-4 text-sm text-center">🎁 Download our free <a href="/university-list.pdf" className="underline text-green-700">University List PDF</a> after submission!</p>
      </div>

      {/* Contact Us Section */}
      <div className="w-full md:w-1/2 p-6 flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-4">Stay connected with us through our social media and email.</p>
        <div className="flex space-x-4 text-3xl">
          <a href="#" className="text-pink-500 hover:text-pink-600"><FaInstagram /></a>
          <a href="#" className="text-blue-600 hover:text-blue-700"><FaLinkedin /></a>
          <a href="#" className="text-red-500 hover:text-red-600"><FaEnvelope /></a>
          <a href="#" className="text-green-500 hover:text-green-600"><FaWhatsapp /></a>
        </div>
      </div>
    </section>
      {/* Sticky Callback Button */}
      <div className="fixed bottom-4 right-4 md:hidden">
        <a href="#lead-form" className="bg-green-500 text-white px-4 py-2 rounded-full shadow-lg">Get a Callback</a>
      </div>
    
    </div>
  );
}

