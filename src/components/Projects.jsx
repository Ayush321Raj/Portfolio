import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { BookOpen, Calculator, CloudSun, ExternalLink, Globe, Shield, Users, Zap } from 'lucide-react';
import { SiGithub } from 'react-icons/si';

const projects = [
  {
    number: '01',
title: 'Personal Portfolio & Resume Website',
description:
  'A modern, responsive personal portfolio and resume website showcasing my technical skills, projects, certifications, coding profiles, and professional achievements through an interactive and visually appealing user interface.',
stack: [
  'HTML5',
  'CSS3',
  'JavaScript',
  'Responsive Web Design',
  'CSS Grid',
  'Flexbox',
  'Font Awesome'
],
highlights: [
  'Designed and developed a professional single-page portfolio website with a modern, responsive, and user-friendly interface',
  'Showcased technical skills, featured projects, certifications, coding profiles, and contact information in a well-structured layout',
  'Implemented smooth scrolling, interactive hover effects, responsive navigation, and optimized layouts using CSS Grid and Flexbox',
  'Optimized for desktop, tablet, and mobile devices while ensuring fast loading performance, accessibility, and cross-browser compatibility'
],
    Icon: Zap,
    gradient: 'from-indigo-500 to-violet-500',
    projectLink: 'https://github.com/Ayush321Raj/Pondi_Fresh',   // TODO: replace with actual GitHub link
    liveDemoLink: 'https://ayush321raj.github.io/Pondi_Fresh/',  // TODO: replace with actual live demo link
    isPlaceholder: true,
  },
  {
    number: '02',
  title: 'PondiFresh – Campus Grocery Store',
  description:
    'A responsive online grocery shopping website built for Pondicherry University students, providing an intuitive shopping experience for hostel essentials, groceries, beverages, stationery, and personal care products through a modern and visually appealing interface.',
  stack: [
    'HTML5',
    'CSS3',
    'Responsive Web Design',
    'Flexbox',
    'CSS Grid',
    'Font Awesome'
  ],
  highlights: [
    'Designed a modern multi-section e-commerce landing page with responsive UI/UX',
    'Implemented 21 product cards featuring pricing, discounts, ratings, stock status, and delivery details',
    'Developed reusable card-based layouts using CSS Grid and Flexbox with interactive hover effects',
    'Optimized for desktop, tablet, and mobile devices with smooth scrolling and professional visual design'
  ],
    Icon: Globe,
    gradient: 'from-violet-500 to-pink-500',
    projectLink: 'https://github.com/Ayush321Raj/Pondi_Fresh',   // TODO: replace with actual GitHub link
    liveDemoLink: 'https://ayush321raj.github.io/Pondi_Fresh/',  // TODO: replace with actual live demo link
    isPlaceholder: true,
  },
  {
    number: '03',
  title: 'Internet & Web Technologies Quiz',
  description:
    'A modern, responsive quiz application built using HTML, CSS, and JavaScript to assess Internet and Web Technologies knowledge. Features randomized question sequencing, dynamic option shuffling, live score updates, and an interactive user interface for an engaging learning experience.',
  stack: [
    'HTML5',
    'CSS3',
    'JavaScript (ES6)',
    'DOM API'
  ],
  highlights: [
    'Randomized questions and answers using the Fisher-Yates Shuffle algorithm',
    'Interactive UI with progress tracking and instant feedback',
    'Automatic score calculation with percentage-based result analysis',
    'Responsive design optimized for desktop, tablet, and mobile devices'
  ],
    Icon: Shield,
    gradient: 'from-emerald-500 to-teal-500',
    projectLink: 'https://github.com/Ayush321Raj/Simple_Quiz',   // TODO: replace with actual GitHub link
    liveDemoLink: 'https://ayush321raj.github.io/Simple_Quiz/',  // TODO: replace with actual live demo link
    isPlaceholder: true,
  },
  {
  number: '04',
  title: 'Online Scientific Calculator',
  description:
    'A modern, responsive online calculator built using HTML, CSS, and JavaScript to perform basic arithmetic and scientific calculations. Features an interactive user interface, scientific functions, keyboard support, calculation history, theme switching, and a visually appealing design for a seamless calculation experience.',
  stack: [
    'HTML5',
    'CSS3',
    'JavaScript (ES6)',
    'DOM API',
    'LocalStorage'
  ],
  highlights: [
    'Supports basic arithmetic and scientific functions including trigonometry, logarithms, square roots, and powers',
    'Interactive calculator interface with real-time expression display and instant results',
    'Calculation history with persistent storage using LocalStorage',
    'Keyboard support, theme switching, and error handling for invalid calculations',
    'Responsive design optimized for desktop, tablet, and mobile devices'
  ],
  Icon: Calculator,
  gradient: 'from-violet-500 to-fuchsia-500',
  projectLink: 'https://github.com/Ayush321Raj/Scientific_Calculator.git', // Replace with your actual GitHub repository link
  liveDemoLink: 'https://ayush321raj.github.io/Scientific_Calculator/', // Replace with your actual live demo link
  isPlaceholder: true,
},
  
{
  number: '05',
  title: 'Employee Management System',
  description:
    'A modern, responsive Employee Management System built using HTML5, CSS3, JavaScript, PHP, and MySQL to manage employee records efficiently. Features employee registration, client-side and server-side form validation, CRUD operations, AJAX/JSON-based data handling without page refresh, employee search, and a clean, user-friendly dashboard.',
  stack: [
    'HTML5',
    'CSS3',
    'JavaScript (ES6)',
    'PHP',
    'MySQL',
    'AJAX',
    'JSON',
    'XAMPP'
  ],
  highlights: [
    'Employee registration with ID, name, department, email, and phone number',
    'JavaScript and PHP validation for required fields, valid email addresses, and phone numbers',
    'Complete CRUD functionality to create, view, update, and delete employee records',
    'AJAX and JSON integration to add, update, delete, and refresh employee data without page reloads',
    'MySQL database connectivity using PHP and prepared statements for database operations',
    'Responsive dashboard with employee search, interactive forms, and a clean user interface'
  ],
  Icon: Users,
  gradient: 'from-blue-500 to-cyan-500',
  projectLink: 'https://github.com/Ayush321Raj/Employee_Management.git', // Replace with your actual GitHub repository link
  liveDemoLink: 'https://employeeemanage.netlify.app/', // Replace with your actual live demo link
  isPlaceholder: true,
},
  {
  number: '06',
  title: 'Department Website Portal',
  description:
    'A modern, responsive Department Website Portal built using HTML5, CSS3, JavaScript, Node.js, Express.js, and MySQL to provide department information and manage user accounts efficiently. Features a department home page, user registration, secure login authentication, a personalized dashboard, session management, and MySQL database integration.',
  stack: [
    'HTML5',
    'CSS3',
    'JavaScript (ES6)',
    'Node.js',
    'Express.js',
    'MySQL',
    'REST API',
    'phpMyAdmin'
  ],
  highlights: [
    'Responsive department homepage with navigation links and department information',
    'User registration form with name, email, password, department, gender, and phone number',
    'Client-side JavaScript and server-side Express.js validation for user input',
    'Secure password storage using bcrypt hashing and login authentication',
    'MySQL database integration using mysql2 and parameterized SQL queries',
    'Session-based authentication with a protected user dashboard and logout functionality',
    'Express.js REST API endpoints for registration, login, user details, and logout',
    'Responsive user interface with clean styling and user-friendly navigation'
  ],
  Icon: Users,
  gradient: 'from-indigo-500 to-blue-500',
  projectLink: 'https://github.com/Ayush321Raj/department_website.git', // Replace with your actual GitHub repository link
  liveDemoLink: 'https://departmentwebsitee.netlify.app/', // Replace with your actual live demo link
  isPlaceholder: true,
},
  {
  number: '07',
  title: 'PondyCollect – Online Item-Selling Company',
  description:
    'A modern, responsive online item-selling company website built using HTML5, CSS3, JavaScript, Node.js, Express.js, and MySQL. Features a professional homepage, user registration, secure login authentication, role-based dashboards for employees and administrators, session management, and database integration. Employees can view administrator details, while administrators can manage and view employee information through a secure dashboard.',
  stack: [
    'HTML5',
    'CSS3',
    'JavaScript (ES6)',
    'Node.js',
    'Express.js',
    'MySQL',
    'REST API',
    'mysql2',
    'bcrypt',
    'Express Session',
    'phpMyAdmin'
  ],
  highlights: [
    'Modern, responsive homepage with product-selling theme and company information',
    'User registration and login forms with client-side and server-side validation',
    'Role-based authentication for Employee and Admin accounts',
    'Secure password storage using bcrypt hashing',
    'MySQL database integration using mysql2 and parameterized SQL queries',
    'Session-based authentication with protected dashboards and logout functionality',
    'Employee dashboard displaying profile information and administrator details',
    'Admin dashboard displaying employee records and employee statistics',
    'Express.js REST API endpoints for registration, login, dashboard data, and logout',
    'Server-side role authorization to prevent unauthorized dashboard and API access',
    'Responsive user interface with a professional navy, teal, and amber color theme'
  ],
  Icon: Users,
  gradient: 'from-teal-500 to-cyan-500',
  projectLink: 'https://github.com/Ayush321Raj/PondyCollect.git', // Replace with your actual GitHub repository link
  liveDemoLink: 'https://pondycollect.netlify.app/', // Replace with your actual live demo link
  isPlaceholder: true,
},
{
  number: '08',
  title: 'Contact Management System',
  description:
    'A modern, responsive Contact Management System built using HTML5, CSS3, JavaScript, Node.js, Express.js, and MySQL to manage contact information efficiently. Features contact registration, dynamic contact listing, search functionality, contact editing and deletion, client-side and server-side validation, REST API integration, and persistent MySQL database storage.',
  stack: [
    'HTML5',
    'CSS3',
    'JavaScript (ES6)',
    'Node.js',
    'Express.js',
    'MySQL',
    'REST API',
    'Fetch API',
    'phpMyAdmin'
  ],
  highlights: [
    'Responsive contact management interface with a contact form and dynamic contact table',
    'Contact creation form with name, email, phone number, and address fields',
    'Client-side JavaScript and server-side Express.js validation for contact details',
    'Complete CRUD operations to create, read, update, and delete contacts',
    'MySQL database integration using mysql2 and parameterized SQL queries',
    'REST API endpoints using GET, POST, PUT, and DELETE HTTP methods',
    'Dynamic contact search by name, email, phone number, or address',
    'Fetch API integration for asynchronous communication between frontend and backend',
    'Edit functionality to update existing contact details and delete confirmation for safe interaction',
    'Responsive user interface with clean styling, feedback messages, and empty-state handling'
  ],
  Icon: Users,
  gradient: 'from-blue-500 to-cyan-500',
  projectLink: 'https://github.com/Ayush321Raj/Contact_Management_System.git', // Replace with your actual GitHub repository URL
  liveDemoLink: 'https://contactmanagementsystemm.netlify.app/', // Replace with your actual live demo link
  isPlaceholder: true,
},
  {
  number: '09',
  title: 'AJAX and JSON Weather Application',
  description:
    'A modern, responsive Weather Information Web Application built using HTML5, CSS3, JavaScript, AJAX, and JSON to fetch and display weather information dynamically without reloading the webpage. Features city-based weather search, asynchronous data retrieval using the Fetch API, JSON response processing, dynamic DOM manipulation, loading indicators, and error handling using a local JSON weather dataset.',
  stack: [
    'HTML5',
    'CSS3',
    'JavaScript (ES6)',
    'AJAX',
    'JSON',
    'Fetch API',
    'DOM API',
    'Promises'
  ],
  highlights: [
    'Responsive weather interface with a city input field and interactive search button',
    'Asynchronous data retrieval using the JavaScript Fetch API',
    'Local JSON dataset containing hypothetical weather information for multiple cities',
    'Dynamic display of city name, temperature, weather condition, humidity, and wind speed',
    'JSON response processing using response.json() and Promise handling',
    'Case-insensitive city search with input validation',
    'Loading indicators and user-friendly error messages for invalid cities and failed requests',
    'Dynamic DOM manipulation without reloading the webpage',
    'Clean, responsive user interface with weather icons and CSS styling'
  ],
  Icon: CloudSun,
  gradient: 'from-sky-500 to-cyan-500',
  projectLink: 'https://github.com/Ayush321Raj/weather_Application.git', // Replace with your actual GitHub repository link
  liveDemoLink: 'https://ajaxweatherapplication.netlify.app/', // Replace with your actual live demo link
  isPlaceholder: true,
},
  {
  number: '10',
  title: 'Book Explorer – jQuery AJAX',
  description:
    'A modern, responsive Book Explorer application built using HTML5, CSS3, JavaScript, and jQuery to fetch and display book information dynamically from an external API. Features asynchronous data retrieval using AJAX GET requests, JSON response processing, dynamic book cards displaying titles and authors, loading indicators, error handling, and a user-friendly interface without page reloads.',
  stack: [
    'HTML5',
    'CSS3',
    'JavaScript (ES6)',
    'jQuery',
    'AJAX',
    'JSON',
    'REST API',
    'Open Library API'
  ],
  highlights: [
    'Responsive Book Explorer interface with a clean layout and interactive Load Books button',
    'Integration with the Open Library API to retrieve programming-related book information',
    'Asynchronous HTTP GET requests using jQuery $.ajax()',
    'JSON response processing to extract book titles and author names',
    'Dynamic book card rendering using jQuery DOM manipulation methods',
    'Loading indicators and user-friendly messages for empty results and API errors',
    'Event handling using $(document).ready() and click event listeners',
    'Responsive styling with CSS3, hover effects, rounded cards, and soft shadows',
    'Displays fetched book information without reloading the entire webpage'
  ],
  Icon: BookOpen,
  gradient: 'from-blue-500 to-cyan-500',
  projectLink: 'https://github.com/Ayush321Raj/book_explorer.git', // Replace with your actual GitHub repository link
  liveDemoLink: 'https://bookexplorer123.netlify.app/', // Replace with your actual live demo link
  isPlaceholder: true,
},
];

function TiltCard({ project }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  const { number, title, description, stack, highlights, Icon, gradient, projectLink, liveDemoLink, isPlaceholder } = project;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      data-cursor-expand
      className="relative bg-white border border-border rounded-3xl p-6 lg:p-8 shadow-card group overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:border-accent/20"
    >
      {/* Gradient border on hover */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.08))' }}
      />

      {/* Number */}
      <div className="flex items-start justify-between mb-6">
        <span className="font-heading font-black text-5xl gradient-text opacity-20 leading-none">{number}</span>
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-sm`}>
          <Icon size={18} className="text-white" />
        </div>
      </div>

      {/* Title */}
      <h3 className="font-heading font-bold text-xl md:text-2xl text-primary mb-3 group-hover:text-accent transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-secondary text-sm md:text-base leading-relaxed mb-5">{description}</p>

      {/* Stack tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {stack.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 text-xs font-medium font-heading rounded-lg bg-accent/8 text-accent border border-accent/15"
            style={{ backgroundColor: 'rgba(99,102,241,0.06)' }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Highlights */}
      <ul className="flex flex-col gap-1.5 mb-6">
        {highlights.map((h) => (
          <li key={h} className="flex items-center gap-2 text-secondary text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-mint flex-shrink-0" />
            {h}
          </li>
        ))}
      </ul>

      {/* Action buttons */}
      <div className="flex items-center gap-3">
        <motion.a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-secondary hover:text-accent hover:border-accent/30 hover:bg-accent/5 text-sm font-medium font-heading transition-all duration-200 ${isPlaceholder ? 'opacity-60 cursor-not-allowed' : ''}`}
        >
          <SiGithub size={15} />
          GitHub
          {isPlaceholder && <span className="text-xs opacity-60"></span>}
        </motion.a>
        <motion.a
          href={liveDemoLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl gradient-btn text-sm py-2 ${isPlaceholder ? 'opacity-60 cursor-not-allowed' : ''}`}
        >
          <ExternalLink size={15} />
          Live Demo
          {isPlaceholder && <span className="text-xs opacity-80"></span>}
        </motion.a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="section-number mb-3">03 — Projects</p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-secondary mt-4 max-w-lg mx-auto">
            Production-grade applications built with modern stacks and real-world engineering practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" style={{ perspective: '1200px' }}>
          {projects.map((project) => (
            <TiltCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
