"use client";

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  MailOutlined, LocationOnOutlined, PhoneOutlined, Facebook, Instagram, Pinterest, Language,
  KeyboardArrowRight, ContactSupportOutlined, MemoryOutlined, AccessTime, CampaignOutlined,
  DevicesOther, QueryStatsOutlined, AccountTreeOutlined, SecurityOutlined, WebOutlined,
  ImportantDevicesOutlined, AodOutlined
} from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CodeIcon from '@mui/icons-material/Code';
import DevicesIcon from '@mui/icons-material/Devices';
import WebIcon from '@mui/icons-material/Web';
import RouteIcon from '@mui/icons-material/Route';
import TabIcon from '@mui/icons-material/Tab';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";
import Head from 'next/head';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import ReactDOM from 'react-dom/client';
import emailjs from 'emailjs-com';
import Link from 'next/link'


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState('security');
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [randomNumber, setRandomNumber] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const number = Math.floor(Math.random() * (95 - 20 + 1)) + 30;
    setRandomNumber(number);
  }, []);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
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
      id: 'desktop',
      title: 'Desktop Application Development',
      icon: <DevicesIcon fontSize="large" />,
      description: 'Craft powerful and intuitive desktop applications tailored to your specific business needs, enhancing productivity and streamlining operations.'
    },
    {
      id: 'webapp',
      title: 'Web Application Development',
      icon: <TabIcon fontSize="large" />,
      description: 'Build robust and scalable web applications with cutting-edge technologies, delivering exceptional performance and user experiences.'
    },
    {
      id: 'mobile',
      title: 'Mobile Application Development',
      icon: <AodOutlined fontSize="large" />,
      description: 'Develop engaging native and cross-platform mobile apps for iOS and Android, ensuring you connect with your audience on any device.'
    },
    {
      id: 'webs',
      title: 'Web Sites Development',
      icon: <WebOutlined fontSize="large" />,
      description: 'Design and develop stunning, responsive websites that capture your brand identity and provide an optimal user experience across all devices.'
    },
    {
      id: 'api',
      title: 'API Development & Integration',
      icon: <RouteIcon fontSize="large" />,
      description: 'Building Application Programming Interfaces (APIs) to allow different software systems to communicate and integrate seamlessly. This is crucial for connecting internal systems or third-party services.'
    },
    {
      id: 'consultancy',
      title: 'IT Consultancy',
      icon: <ImportantDevicesOutlined fontSize="large" />,
      description: 'Receive expert IT consultancy to strategically optimize your technology infrastructure, drive digital transformation, and achieve your business goals.'
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
        <link rel="icon" href="https://dms-ranil.github.io/test-ceybaseit-web/newicon.png" />
      </Head>

      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black shadow-md' : 'bg-transparent'}`}>
        <div className="top-bar bg-indigo-800 text-white py-2 px-4 text-sm hidden md:block">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <a href="mailto:ceybaseit@gmail.com" target="_blank" className="flex items-center hover:text-indigo-200 transition">
                <MailOutlined className="mr-1" fontSize="small" />
                <span>ceybaseit@gmail.com</span>
              </a>
              <div className="flex items-center">
                <LocationOnOutlined className="mr-1" fontSize="small" />
                <span>Ratnapura, Kudugalwaththa</span>
              </div>
              <a href="tel:+94712501952" target="_blank" className="flex items-center hover:text-indigo-200 transition">
                <PhoneOutlined className="mr-1" fontSize="small" />
                <span>+94 71 250 1952</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <span>Follow Us:</span>
              <a href="https://www.facebook.com/share/18avwwuu7P/" target="_blank" className="hover:text-indigo-200 transition"><Facebook fontSize="small" /></a>
              <a href="#" target="_blank" className="hover:text-indigo-200 transition"><YouTubeIcon fontSize="small" /></a>
              <a href="#" target="_blank" className="hover:text-indigo-200 transition"><GitHubIcon fontSize="small" /></a>
              <a href="#" target="_blank" className="hover:text-indigo-200 transition"><LinkedInIcon fontSize="small" /></a>
            </div>
          </div>
        </div>

<nav className="bg-white shadow-sm">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
     <div className="flex-shrink-0 flex items-center">
        <a href="#" className="flex items-center">
          <img
            src="https://dms-ranil.github.io/test-ceybaseit-web/newicon.png"
            className="h-8 sm:h-10 mr-2 sm:mr-3"
            alt="Ceybase IT Logo"
          />
          <span className="text-xl sm:text-2xl font-bold text-indigo-900 whitespace-nowrap"></span>
        </a>
      </div>

      <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6">
        <a href="#" className="px-3 py-2 text-sm lg:text-base font-medium text-indigo-900 hover:text-indigo-600 transition-colors">Home</a>
        <a href="#about" className="px-3 py-2 text-sm lg:text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors">Company</a>
        <a href="#services" className="px-3 py-2 text-sm lg:text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors">IT Solutions</a>
        <a href="#blog" className="px-3 py-2 text-sm lg:text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors">Blog</a>
        <a href="#contact" className="px-3 py-2 text-sm lg:text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors">Contact</a>
        <button 
          className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm lg:text-base font-medium rounded-lg shadow-sm text-white bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
          onClick={sayHello}
        >
          Get Started
        </button>
      </div>

      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? (
            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
    </div>
  </div>

  {isMenuOpen && (
    <div className="md:hidden bg-white shadow-md">
      <div className="pt-2 pb-3 space-y-1 px-2">
        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-indigo-900 bg-indigo-50">Home</a>
        <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Company</a>
        <a href="#services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">IT Solutions</a>
        <a href="#blog" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Blog</a>
        <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Contact</a>
        <button 
          className="w-full flex justify-center mt-2 px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={sayHello}
        >
          Get Started
        </button>
      </div>
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
                <a href="#howitworks">
                  How It Works <KeyboardArrowRight className="ml-2" />
                </a>
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-900 px-8 py-4 rounded-lg font-medium text-lg flex items-center transition transform hover:-translate-y-1">
                <a href="#services">
                  Our Services <KeyboardArrowRight className="ml-2" />
                </a>

              </button>
            </div>
          </motion.div>
        </div>


      </section>

      

      <button onClick={scrollToTop} className={`fixed bottom-5 right-5 z-50 p-3 w-15 h-15 rounded-full bg-blue-600 text-white shadow-md hover:bg-purple-700 cursor-pointer transition duration-400 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-label="Go to top" >
        <ArrowUpwardIcon/>
      </button>



      <div className="hidden lg:visible md:block sm:block relative bottom-0 left-0 right-0 transform translate-y-1/2 ">
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
                Expert advice and strategic planning to optimize your IT infrastructure and digital transformation journey, driving innovation, scalability, cybersecurity, cost-efficiency, and long-term business growth.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-indigo-700 text-white rounded-xl shadow-lg p-8 hover:shadow-xl transition"
              data-aos="fade-up"
            >
              <div className="text-white mb-4">
                <CodeIcon fontSize="large" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Desktop , Web & Mobile Application Development</h3>
              <p className="text-indigo-100">
                We build scalable desktop, web and mobile apps, delivering smart, reliable solutions to help businesses grow and succeed in the digital world.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition"
              data-aos="fade-down"
            >
              <div className="text-indigo-600 mb-4">
                <WebIcon fontSize="large" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Website Development</h3>
              <p className="text-gray-600">
                We develop user-friendly websites tailored to your needs that take your brand to the next generation, engage visitors, and deliver powerful results for your business growth.
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
                  60 +
                </div>
                <div className="absolute -bottom-6 -left-6 bg-indigo-700 w-32 h-32 rounded-lg opacity-20 animate-ping"></div>
              </div>
            </div>

            <div className="md:w-1/2 md:pl-12" data-aos="fade-right">
              <span className="text-indigo-600 font-bold tracking-wider">ABOUT US</span>
              <h2 className="text-4xl font-bold mt-2 mb-6">
                We Are <span className="text-indigo-700">Ceybase IT</span>, Since {new Date().getFullYear()}
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                 In {new Date().getFullYear()}, Ceybase IT has been at the forefront of delivering innovative technology solutions to businesses across various industries. Our team of experts combines technical expertise with business acumen to deliver solutions that drive growth and efficiency.
              </p>

              <div className="mb-8">
                <div className="flex items-start mb-4">
                  <div className="text-indigo-600 mr-4 mt-1">
                    <CampaignOutlined fontSize="medium" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                    <p className="text-gray-600 font-italic">
                      <i>
                        "Our mission is to deliver high quality,reliable  and scalable software products by combining creativity ,technology and customer focused design.We aim to support client with smart digital solutions ,nurture local talent and grow through continuous learning and collaboration"
                      </i>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start mb-4">
                  <div className="text-indigo-600 mr-4 mt-1">
                    <CampaignOutlined fontSize="medium" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                    <p className="text-gray-600 font-italic">
                      <i>
                        "To be a leading force in innovative ,user friendly and impactful software solution that improve lives and empower businesses globally"
                      </i>
                    </p>
                  </div>
                </div>
              </div>

              <button className="bg-indigo-700 hover:bg-indigo-800 text-white px-8 py-3 rounded-lg font-medium transition flex items-center">
                <a href="#howitworks">Learn More <KeyboardArrowRight className="ml-2" /></a>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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

      <section className="py-20 bg-white" hidden>
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

      <section className="py-20 bg-white" hidden>
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

      <section id="howitworks" className="py-20 bg-white">
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
            <button className="bg-white text-indigo-700 hover:bg-indigo-100 px-8 py-4 rounded-lg font-bold text-lg transition transform hover:-translate-y-1" onClick={sayHello}>
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
                <a href="https://www.facebook.com/share/18avwwuu7P/" target="_blank" className="text-gray-400 hover:text-white transition">
                  <Facebook />
                </a>
                <a href="#" target="_blank" className="text-gray-400 hover:text-white transition">
                  <YouTubeIcon />
                </a>
                <a href="#" target="_blank" className="text-gray-400 hover:text-white transition">
                  <GitHubIcon />
                </a>
                <a href="#" target="_blank" className="text-gray-400 hover:text-white transition">
                  <LinkedInIcon />
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
                <li><a href="#" className="text-gray-400 hover:text-white transition">Desktop Application Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Web Application Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Mobile Application Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Websites Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">API Development & Integration</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">IT Consultancy</a></li>
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
                  <a href="mailto:CeybaseIt@gmail.com" target="_blank" className="text-gray-400 hover:text-white transition">ceybaseit@gmail.com</a>
                </li>
                <li className="flex items-center">
                  <PhoneOutlined className="mr-2" />
                  <a href="tel:+94712501952" target="_blank" className="text-gray-400 hover:text-white transition">+94 71 250 1952</a>
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
