"use client";

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  MailOutlined, LocationOnOutlined, PhoneOutlined, Facebook, Instagram, Pinterest, Language,
  KeyboardArrowRight, ContactSupportOutlined, MemoryOutlined, AccessTime, CampaignOutlined,
  DevicesOther, QueryStatsOutlined, AccountTreeOutlined, SecurityOutlined, WebOutlined,
  ImportantDevicesOutlined, AodOutlined
} from '@mui/icons-material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";
import Head from 'next/head';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import ReactDOM from 'react-dom/client';
import emailjs from 'emailjs-com';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState('security');
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    const number = Math.floor(Math.random() * (95 - 20 + 1)) + 30;
    setRandomNumber(number);
  }, []);



  const sayHello = async () => {
    const MySwal = withReactContent(Swal);
  
    const result = await MySwal.fire({
      title: 'Get Started With Us',
      html:
        '<div class="flex flex-col gap-4 px-[2px] py-2 w-full max-w-md mx-auto">' +
        '<input id="swal-input1" class="swal2-input" placeholder="Your Name"/>' +
        '<input id="swal-input2" class="swal2-input" placeholder="Your Email"/>' +
        '<textarea id="swal-input3" class="swal2-textarea" placeholder="Your Message"></textarea>' +
        '</div>',
      focusConfirm: false,
      showCancelButton: true,
      preConfirm: () => {
        const name = (document.getElementById('swal-input1') as HTMLInputElement)?.value.trim();
        const email = (document.getElementById('swal-input2') as HTMLInputElement)?.value.trim();
        const message = (document.getElementById('swal-input3') as HTMLTextAreaElement)?.value.trim();
  
        if (!name || !email || !message) {
          Swal.showValidationMessage('Please fill in all fields');
          return false;
        }
  
        return { name, email, message };
      }
    });
  
    if (result.isConfirmed && result.value) {
      const formValues = result.value;
  
      console.log('Collected Data:', formValues);
  
      // Send email to Admin
      emailjs.send(
        'service_8ebvqoi',
        'template_bv4p1cu',
        {
          from_name: formValues.name,
          from_email: formValues.email,
          message: formValues.message,
        },
        'PJeFZIhQTSZiaOXv5'
      );
  
      // Send email to Client
      emailjs.send(
        'service_217kgr7',
        'template_cqjoe6f',
        {
          from_name: formValues.name,
          from_email: formValues.email,
          message: formValues.message,
        },
        'PJeFZIhQTSZiaOXv5'
      ).then(() => {
        Swal.fire('Success', 'Email sent successfully!', 'success');
      }).catch((err) => {
        console.error('EmailJS Error:', err);
        Swal.fire('Error', 'Failed to send email. Try again later.', 'error');
      });
    }
  };
  


  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const services = [
    {
      id: 'security',
      title: 'Cyber Security',
      icon: <SecurityOutlined fontSize="large" />,
      description: 'Comprehensive security solutions to protect your business from cyber threats and vulnerabilities.'
    },
    {
      id: 'web',
      title: 'Web Development',
      icon: <WebOutlined fontSize="large" />,
      description: 'Custom web applications and websites built with modern technologies for optimal performance.'
    },
    {
      id: 'mobile',
      title: 'Mobile Development',
      icon: <AodOutlined fontSize="large" />,
      description: 'Native and cross-platform mobile apps for iOS and Android to reach your customers anywhere.'
    },
    {
      id: 'consultancy',
      title: 'IT Consultancy',
      icon: <ImportantDevicesOutlined fontSize="large" />,
      description: 'Expert advice and strategic planning to optimize your IT infrastructure and digital transformation.'
    }
  ];

  const teamMembers = [
    {
      name: 'Name Here',
      role: 'Full Stack Developer',
      skills: ['React', 'Node.js', 'MYSQL'],
      image: 'https://images.unsplash.com/photo-1695927621677-ec96e048dce2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww'
    },
    {
      name: 'Name Here',
      role: 'Full Stack Developer',
      skills: ['Java', 'C#', 'C++'],
      image: 'https://images.unsplash.com/photo-1695927621677-ec96e048dce2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww'
    },
    {
      name: 'Name Here',
      role: 'Full Stack Developer',
      skills: ['Java', 'React', 'PHP'],
      image: 'https://images.unsplash.com/photo-1695927621677-ec96e048dce2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww'
    },
    {
      name: 'Name Here',
      role: 'Full Stack Developer',
      skills: ['React', 'MongoDB', 'PHP'],
      image: 'https://images.unsplash.com/photo-1695927621677-ec96e048dce2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww'
    },
    {
      name: 'Name Here',
      role: 'Full Stack Developer',
      skills: ['Python', 'C#', 'React'],
      image: 'https://images.unsplash.com/photo-1695927621677-ec96e048dce2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww'
    }
  ];

  const testimonials = [
    {
      quote: "Ceybase IT transformed our digital presence with their exceptional web development services. Highly recommended!",
      author: "David Miller, CEO of Samplecom"
    },
    {
      quote: "Their cybersecurity team helped us identify vulnerabilities we didn't even know existed. Professional and thorough.",
      author: "Lisa Wong, Manager of SampleBank"
    },
    {
      quote: "The mobile app they developed for us has significantly improved customer engagement and sales.",
      author: "Robert Johnson, Customer"
    }
  ];

  const caseStudies = [
    {
      title: "E-commerce Platform Development",
      category: "Web Development / E-commerce",
      image: "https://wp.ditsolution.net/techpros/wp-content/uploads/2022/03/case4.jpg",
      description: "Built a scalable e-commerce solution with custom features for a retail client."
    },
    {
      title: "Banking Security Upgrade",
      category: "Cyber Security / Finance",
      image: "https://wp.ditsolution.net/techpros/wp-content/uploads/2022/03/case3.jpg",
      description: "Implemented advanced security measures for a regional banking institution."
    },
    {
      title: "Healthcare Mobile App",
      category: "Mobile Development / Healthcare",
      image: "https://wp.ditsolution.net/techpros/wp-content/uploads/2022/03/case2.jpg",
      description: "Developed a HIPAA-compliant mobile application for patient management."
    },
    {
      title: "Enterprise IT Strategy",
      category: "IT Consultancy / Enterprise",
      image: "https://wp.ditsolution.net/techpros/wp-content/uploads/2022/03/case1.jpg",
      description: "Designed and implemented a comprehensive IT roadmap for a manufacturing firm."
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Discovery & Planning",
      icon: <DevicesOther sx={{ fontSize: '3.1rem' }} />,
      description: "We analyze your requirements and create a detailed project plan."
    },
    {
      step: 2,
      title: "Design & Development",
      icon: <QueryStatsOutlined sx={{ fontSize: '3.1rem' }} />,
      description: "Our team designs and builds your solution with regular updates."
    },
    {
      step: 3,
      title: "Testing & Deployment",
      icon: <AccountTreeOutlined sx={{ fontSize: '3.1rem' }} />,
      description: "We rigorously test and deploy your solution with full documentation."
    }
  ];

  return (
    <>
      <Head>
        <title>Ceybase IT - Innovative Technology Solutions</title>
        <meta name="description" content="Ceybase IT provides cutting-edge IT solutions including web development, mobile apps, cybersecurity, and IT consultancy services." />
        <link rel="icon" href="/icon.png" />
      </Head>

      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black shadow-md' : 'bg-transparent'}`}>
        <div className="top-bar bg-indigo-800 text-white py-2 px-4 text-sm hidden md:block">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <a href="mailto:CeybaseIt@gmail.com" className="flex items-center hover:text-indigo-200 transition">
                <MailOutlined className="mr-1" fontSize="small" />
                <span>CeybaseIt@gmail.com</span>
              </a>
              <div className="flex items-center">
                <LocationOnOutlined className="mr-1" fontSize="small" />
                <span>Ratnapura, Kudugalwaththa</span>
              </div>
              <a href="tel:+947XXXXXXXX" className="flex items-center hover:text-indigo-200 transition">
                <PhoneOutlined className="mr-1" fontSize="small" />
                <span>+94 7x xxx xxxx</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <span>Follow Us:</span>
              <a href="#" className="hover:text-indigo-200 transition"><Facebook fontSize="small" /></a>
              <a href="#" className="hover:text-indigo-200 transition"><Instagram fontSize="small" /></a>
              <a href="#" className="hover:text-indigo-200 transition"><Pinterest fontSize="small" /></a>
              <a href="#" className="hover:text-indigo-200 transition"><Language fontSize="small" /></a>
            </div>
          </div>
        </div>

        <nav className="container mx-auto px-4 py-3 bg-white">
          <div className="flex justify-between items-center">
            <a href="/" className="flex items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcoZsMBFkU9ArhUL_HlgeESChICNA1cZcIZg&s"
                className="h-10 mr-3"
                alt="Ceybase IT Logo"
              />
              <span className="text-2xl font-bold text-indigo-900">Ceybase IT</span>
            </a>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-indigo-900 font-medium hover:text-indigo-600 transition">Home</a>
              <a href="#about" className="text-gray-700 hover:text-indigo-600 transition">Company</a>
              <a href="#services" className="text-gray-700 hover:text-indigo-600 transition">IT Solutions</a>
              <a href="#blog" className="text-gray-700 hover:text-indigo-600 transition">Blog</a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition">Contact</a>
              <button className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-2 rounded-lg font-medium transition" onClick={sayHello}>
                Get Started
              </button>
            </div>

            <button
              className="md:hidden text-gray-700 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-white py-4 px-2 shadow-lg rounded-lg mt-2">
              <a href="#" className="block py-2 px-4 text-indigo-900 font-medium">Home</a>
              <a href="#about" className="block py-2 px-4 text-gray-700 hover:text-indigo-600 transition">Company</a>
              <a href="#services" className="block py-2 px-4 text-gray-700 hover:text-indigo-600 transition">IT Solutions</a>
              <a href="#blog" className="block py-2 px-4 text-gray-700 hover:text-indigo-600 transition">Blog</a>
              <a href="#contact" className="block py-2 px-4 text-gray-700 hover:text-indigo-600 transition">Contact</a>
              <button className="w-full mt-2 bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-2 rounded-lg font-medium transition" onClick={sayHello}>
                Get Started
              </button>
            </div>
          )}
        </nav>
      </header>

      <section className="hero-section relative min-h-screen flex items-center justify-center bg-[url('https://wp.dreamitsolution.net/techpros-elementor//wp-content/uploads/2022/03/slider1.jpg')] bg-no-repeat bg-cover bg-center before:absolute before:inset-0 before:bg-black before:opacity-60">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl text-left sm:text-4xl font-bold text-white mb-6 leading-tight">
              Innovative IT Solutions for Your Business
            </h1>
            <p className="text-xl sm:text-lg text-left text-gray-200 mb-8">
              We deliver cutting-edge technology solutions to help your business grow and thrive in the digital age.
            </p>
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              <button className="bg-indigo-700 hover:bg-indigo-800 text-white px-8 py-4 rounded-lg font-medium text-lg flex items-center transition transform hover:-translate-y-1">
                How It Works <KeyboardArrowRight className="ml-2" />
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-900 px-8 py-4 rounded-lg font-medium text-lg flex items-center transition transform hover:-translate-y-1">
                Our Services <KeyboardArrowRight className="ml-2" />
              </button>
            </div>
          </motion.div>
        </div>


      </section>

      <div className="hidden lg:visible md:block sm:block relative bottom-0 left-0 right-0 transform translate-y-1/2">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition"
              data-aos="fade-down"
            >
              <div className="text-indigo-600 mb-4">
                <ContactSupportOutlined fontSize="large" />
              </div>
              <h3 className="text-2xl font-bold mb-3">IT Consultancy</h3>
              <p className="text-gray-600">
                Expert advice and strategic planning to optimize your IT infrastructure and digital transformation journey.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-indigo-700 text-white rounded-xl shadow-lg p-8 hover:shadow-xl transition"
              data-aos="fade-up"
            >
              <div className="text-white mb-4">
                <MemoryOutlined fontSize="large" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Cyber Security</h3>
              <p className="text-indigo-100">
                Comprehensive security solutions to protect your business from evolving cyber threats and vulnerabilities.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition"
              data-aos="fade-down"
            >
              <div className="text-indigo-600 mb-4">
                <AccessTime fontSize="large" />
              </div>
              <h3 className="text-2xl font-bold mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock technical support to ensure your systems are always up and running smoothly.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <section id="about" className="py-20 md:py-32 bg-white mt-25 ">

        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0" data-aos="fade-down">
              <div className="relative">
                <img
                  src="https://wp.ditsolution.net/techpros/wp-content/uploads/2022/03/about1.png"
                  alt="About Ceybase IT"
                  className="rounded-lg shadow-xl w-full max-w-lg"
                />
                <div className="absolute -bottom-6 -left-6 bg-indigo-700 w-32 h-32 rounded-lg flex items-center justify-center text-white text-4xl font-bold ">
                  {randomNumber} +
                </div>
                <div className="absolute -bottom-6 -left-6 bg-indigo-700 w-32 h-32 rounded-lg opacity-20 animate-ping"></div>
              </div>
            </div>

            <div className="md:w-1/2 md:pl-12" data-aos="fade-right">
              <span className="text-indigo-600 font-bold tracking-wider">ABOUT US</span>
              <h2 className="text-4xl font-bold mt-2 mb-6">
                We Are <span className="text-indigo-700">Ceybase IT</span>, Established Since 2025
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Founded in 2025, Ceybase IT has been at the forefront of delivering innovative technology solutions to businesses across various industries. Our team of experts combines technical expertise with business acumen to deliver solutions that drive growth and efficiency.
              </p>

              <div className="mb-8">
                <div className="flex items-start mb-4">
                  <div className="text-indigo-600 mr-4 mt-1">
                    <CampaignOutlined fontSize="medium" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                    <p className="text-gray-600">
                      To empower businesses through innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital era.
                    </p>
                  </div>
                </div>
              </div>

              <button className="bg-indigo-700 hover:bg-indigo-800 text-white px-8 py-3 rounded-lg font-medium transition flex items-center">
                Learn More <KeyboardArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>



      <section id="services" className="py-20 bg-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-indigo-600 font-bold tracking-wider">OUR SERVICES</span>
            <h2 className="text-4xl font-bold mt-2 mb-4">
              Comprehensive IT Solutions for Your Business
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of IT services designed to meet the unique needs of your business, from startups to enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                whileHover={{ y: -10 }}
                className={`bg-white rounded-xl shadow-lg p-8 cursor-pointer transition ${activeService === service.id ? 'border-2 border-indigo-500' : ''}`}
                onClick={() => setActiveService(service.id)}
              >
                <div className={`mb-4 ${activeService === service.id ? 'text-indigo-600' : 'text-gray-600'}`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center" data-aos="fade-up">
            <button className="bg-indigo-700 hover:bg-indigo-800 text-white px-8 py-3 rounded-lg font-medium transition flex items-center mx-auto">
              View All Services <KeyboardArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-indigo-600 font-bold tracking-wider">OUR TEAM</span>
            <h2 className="text-4xl font-bold mt-2 mb-4">
              Meet Our Expert Engineers
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team of skilled professionals brings diverse expertise and a passion for technology to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
                data-aos="fade-up"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-indigo-600 mb-4">{member.role}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <button className="mt-4 text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                    View Profile <KeyboardArrowRight className="ml-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-indigo-600 font-bold tracking-wider">CASE STUDIES</span>
            <h2 className="text-4xl font-bold mt-2 mb-4">
              Our Latest Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our portfolio of successful projects across various industries and technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
                data-aos="fade-up"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover transition duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{caseStudy.title}</h3>
                  <p className="text-indigo-600 text-sm mb-4">{caseStudy.category}</p>
                  <p className="text-gray-600 mb-4">{caseStudy.description}</p>
                  <button className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                    Read More <KeyboardArrowRight className="ml-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-indigo-600 font-bold tracking-wider">OUR PROCESS</span>
            <h2 className="text-4xl font-bold mt-2 mb-4">
              How We Work
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our structured approach ensures that we deliver high-quality solutions on time and within budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                whileHover={{ scale: 1.05 }}
                className="bg-indigo-50 rounded-xl p-8 text-center"
                data-aos="fade-up"
              >
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mx-auto">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 bg-indigo-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-indigo-600 py-20 text-white" id="blog">
        <div className="container mx-auto px-4 inset-0 ">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-indigo-200 font-bold tracking-wider">TESTIMONIALS</span>
            <h2 className="text-4xl font-bold mt-2 mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="max-w-4xl mx-auto" data-aos="fade-up">
            <div className="bg-white text-gray-800 rounded-xl shadow-lg p-8 relative">
              <div className="absolute -top-6 -left-6 text-6xl text-indigo-200">"</div>
              <div className="mb-6">
                <p className="text-lg italic">
                  {testimonials[activeTestimonial].quote}
                </p>
              </div>
              <div className="text-right font-bold">
                {testimonials[activeTestimonial].author}
              </div>
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full ${activeTestimonial === index ? 'bg-indigo-700' : 'bg-indigo-200'}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-indigo-900/90"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with Technology?
            </h2>
            <p className="text-xl text-indigo-200 mb-8">
              Contact us today to discuss how we can help you achieve your business goals through innovative IT solutions.
            </p>
            <button className="bg-white text-indigo-700 hover:bg-indigo-100 px-8 py-4 rounded-lg font-bold text-lg transition transform hover:-translate-y-1">
              Get Started Now <KeyboardArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white pt-16 pb-8" id="contact">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">About Ceybase IT</h3>
              <p className="text-gray-400 mb-4">
                We are a leading IT solutions provider dedicated to helping businesses leverage technology for growth and success.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Facebook />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Instagram />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Pinterest />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition">About Us</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition">Services</a></li>
                <li><a href="#blog" className="text-gray-400 hover:text-white transition">Blog</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Web Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Mobile Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Cyber Security</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">IT Consultancy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Cloud Solutions</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <LocationOnOutlined className="mr-2 mt-1" />
                  <span className="text-gray-400">Ratnapura, Kudugalwaththa, Sri Lanka</span>
                </li>
                <li className="flex items-center">
                  <MailOutlined className="mr-2" />
                  <a href="mailto:CeybaseIt@gmail.com" className="text-gray-400 hover:text-white transition">CeybaseIt@gmail.com</a>
                </li>
                <li className="flex items-center">
                  <PhoneOutlined className="mr-2" />
                  <a href="tel:+947XXXXXXXX" className="text-gray-400 hover:text-white transition">+94 7x xxx xxxx</a>
                </li>
                <li>
                  <button className="mt-5 bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-2 rounded-lg font-medium transition" onClick={sayHello}>
                    Get Started
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Ceybase IT (Pvt) Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
