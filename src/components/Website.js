import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code, LineChart, MessageSquare, Rocket, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";

// Case Study Carousel Component
const CaseStudyCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Trading Strategy Optimization",
      client: "Global Investment Firm",
      description: "Developed and implemented a machine learning system that analyzes market patterns, news sentiment, and economic indicators to optimize trading strategies in real-time. The system incorporates natural language processing for news analysis and deep learning for pattern recognition.",
      results: [
        "43% improvement in trading accuracy",
        "$5.2M increase in quarterly profits",
        "67% reduction in manual analysis time",
        "Real-time processing of 1M+ data points"
      ],
      image: "/api/placeholder/600/400",
      category: "Finance"
    },
    {
      id: 2,
      title: "Predictive Maintenance AI Solution",
      client: "Manufacturing Conglomerate",
      description: "Created an advanced IoT and AI system that predicts equipment failures before they occur. The solution integrates sensor data, historical maintenance records, and environmental factors to provide actionable insights through a real-time dashboard.",
      results: [
        "85% accuracy in failure prediction",
        "$3.8M reduction in maintenance costs",
        "92% decrease in unplanned downtime",
        "ROI achieved within 8 months"
      ],
      image: "/api/placeholder/600/400",
      category: "Manufacturing"
    },
    {
      id: 3,
      title: "Customer Experience Transformation",
      client: "Fortune 500 E-commerce Company",
      description: "Implemented an AI-driven personalization engine that creates unique shopping experiences for each customer. The system uses deep learning to analyze browsing patterns, purchase history, and customer interactions to deliver personalized recommendations and dynamic content.",
      results: [
        "32% increase in conversion rate",
        "47% improvement in customer retention",
        "28% higher average order value",
        "2.5M+ personalized interactions daily"
      ],
      image: "/api/placeholder/600/400",
      category: "E-commerce"
    },
    {
      id: 4,
      title: "Healthcare AI Diagnostics Platform",
      client: "Leading Medical Research Institute",
      description: "Developed an AI-powered diagnostic platform that assists medical professionals in analyzing medical imaging data. The system uses computer vision and deep learning to detect anomalies in X-rays, MRIs, and CT scans with high accuracy.",
      results: [
        "94% accuracy in early detection",
        "71% reduction in diagnosis time",
        "83% decrease in false positives",
        "100,000+ scans analyzed monthly"
      ],
      image: "/api/placeholder/600/400",
      category: "Healthcare"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg shadow-lg bg-white">
        <div className="relative h-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {caseStudies.map((study) => (
              <div key={study.id} className="w-full flex-shrink-0">
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  <div>
                    <img
                      src={study.image}
                      alt={study.title}
                      className="rounded-lg w-full h-64 object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <span className="text-sm font-semibold text-blue-600">
                      {study.category}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {study.title}
                    </h3>
                    <p className="text-gray-600">{study.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, index) => (
                          <li key={index} className="text-gray-600">
                            • {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {caseStudies.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              currentSlide === index ? 'bg-blue-600 w-4' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Main Website Component
const Website = () => {
  // State management
  const [isLoading, setIsLoading] = useState(true);
  const [activeService, setActiveService] = useState(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [notification, setNotification] = useState(null);

  // Simulating data loading
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  const services = [
    {
      id: 1,
      title: "AI Strategy Consulting",
      description: "Develop a comprehensive AI roadmap tailored to your business objectives and industry requirements.",
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      details: "Our strategic consulting helps organizations navigate the complexities of AI adoption, ensuring alignment with business goals and maximizing ROI."
    },
    {
      id: 2,
      title: "Implementation Support",
      description: "Expert guidance in selecting and implementing AI solutions, from proof of concept to full deployment.",
      icon: <Rocket className="h-8 w-8 text-blue-600" />,
      details: "We provide end-to-end support for AI implementation, including vendor selection, architecture design, and deployment strategies."
    },
    {
      id: 3,
      title: "Custom AI Development",
      description: "Build custom AI models and applications designed specifically for your unique business needs.",
      icon: <Code className="h-8 w-8 text-blue-600" />,
      details: "Our team develops tailor-made AI solutions that address your specific challenges and requirements."
    },
    {
      id: 4,
      title: "AI Analytics & Insights",
      description: "Transform your data into actionable insights with advanced AI analytics solutions.",
      icon: <LineChart className="h-8 w-8 text-blue-600" />,
      details: "Leverage the power of AI to unlock hidden patterns and insights in your data."
    },
    {
      id: 5,
      title: "AI Ethics & Governance",
      description: "Ensure responsible AI implementation with robust ethical frameworks and governance structures.",
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      details: "We help organizations implement responsible AI practices that align with ethical principles and regulatory requirements."
    },
    {
      id: 6,
      title: "Training & Support",
      description: "Comprehensive training programs to help your team leverage AI technologies effectively.",
      icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
      details: "Empower your team with the knowledge and skills needed to work effectively with AI technologies."
    }
  ];

  const handleServiceClick = (serviceId) => {
    setActiveService(activeService === serviceId ? null : serviceId);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setNotification({
      type: 'success',
      message: 'Thank you for your message. We will get back to you soon!'
    });
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setNotification(null), 5000);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {notification && (
        <Alert className="fixed top-4 right-4 z-50 max-w-md" variant={notification.type}>
          <AlertDescription>{notification.message}</AlertDescription>
        </Alert>
      )}

      {/* Hero Section */}
      <header className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            ThinkAIEngine: Power Your Future
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your strategic partner in AI transformation, helping organizations harness the power of artificial intelligence to drive innovation and growth
          </p>
          <div className="space-x-4">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => setShowContactForm(true)}
            >
              Get Started
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
        </div>
      </header>

      {/* Case Studies Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Success Stories
          </h2>
          <CaseStudyCarousel />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card 
                key={service.id} 
                className={`hover:shadow-lg transition-all cursor-pointer ${
                  activeService === service.id ? 'ring-2 ring-blue-600' : ''
                }`}
                onClick={() => handleServiceClick(service.id)}
              >
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {activeService === service.id ? service.details : service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <form onSubmit={handleContactSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full p-2 border rounded"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    className="w-full p-2 border rounded"
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <Button variant="outline" onClick={() => setShowContactForm(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                    Send Message
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p>contact@thinkaiengine.ai</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Location</h3>
              <p>New York, NY</p>
              <p>United States</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="space-x-4">
                <a href="#" className="hover:text-blue-400">LinkedIn</a>
                <a href="#" className="hover:text-blue-400">Twitter</a>
                <a href="#" className="hover:text-blue-400">GitHub</a>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-gray-800">
            <p>&copy; 2025 ThinkAIEngine. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Website;