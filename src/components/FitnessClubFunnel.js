import React, { useState, useEffect } from 'react';
import { ChevronDown, Play, Users, Trophy, Clock, Star, CheckCircle, ArrowRight, Menu, X, Dumbbell, Target, Zap } from 'lucide-react';

const FitnessClubFunnel = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const testimonials = [
    {
      name: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b05b?w=150&h=150&fit=crop&crop=face",
      text: "I lost 25 pounds in 3 months! The trainers here are incredible and the community is so supportive.",
      rating: 5,
      transformation: "Lost 25 lbs"
    },
    {
      name: "Mike Chen",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      text: "Best investment I've ever made. Gained muscle, lost fat, and feel stronger than ever at 35!",
      rating: 5,
      transformation: "Gained 15 lbs muscle"
    },
    {
      name: "Emma Wilson",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      text: "The personal training sessions transformed my entire approach to fitness. Highly recommend!",
      rating: 5,
      transformation: "Improved strength 200%"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      features: ["Access to gym equipment", "Group fitness classes", "Locker room access", "1 guest pass/month"],
      popular: false
    },
    {
      name: "Premium",
      price: "$59",
      period: "/month",
      features: ["Everything in Starter", "2 personal training sessions", "Nutrition consultation", "Access to premium classes", "Unlimited guest passes"],
      popular: true
    },
    {
      name: "Elite",
      price: "$99",
      period: "/month",
      features: ["Everything in Premium", "Weekly personal training", "Custom meal plans", "24/7 gym access", "Recovery massage sessions"],
      popular: false
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-red-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Dumbbell className="h-8 w-8 text-red-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                POWERFIT
              </span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => scrollToSection('hero')} className="hover:text-red-500 transition-colors">Home</button>
                <button onClick={() => scrollToSection('about')} className="hover:text-red-500 transition-colors">About</button>
                <button onClick={() => scrollToSection('programs')} className="hover:text-red-500 transition-colors">Programs</button>
                <button onClick={() => scrollToSection('pricing')} className="hover:text-red-500 transition-colors">Pricing</button>
                <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-red-500 to-orange-500 px-6 py-2 rounded-full hover:shadow-lg hover:shadow-red-500/25 transition-all">
                  Join Now
                </button>
              </div>
            </div>
            
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('hero')} className="block px-3 py-2 text-white hover:text-red-500">Home</button>
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-white hover:text-red-500">About</button>
              <button onClick={() => scrollToSection('programs')} className="block px-3 py-2 text-white hover:text-red-500">Programs</button>
              <button onClick={() => scrollToSection('pricing')} className="block px-3 py-2 text-white hover:text-red-500">Pricing</button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-md">Join Now</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-orange-900/20"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-30"></div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                TRANSFORM
              </span>
              <br />
              <span className="text-white">YOUR BODY</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join thousands who've achieved their dream physique with our proven training methods and world-class facilities
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button 
                onClick={() => scrollToSection('pricing')}
                className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-red-500/30 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                Start Your Journey <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
                <Play className="h-5 w-5" /> Watch Success Stories
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-500 mb-2">5000+</div>
                <div className="text-gray-300">Members Transformed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-500 mb-2">98%</div>
                <div className="text-gray-300">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-500 mb-2">24/7</div>
                <div className="text-gray-300">Access Available</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white/70" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Why Choose</span>
              <br />PowerFit?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just a gym - we're your transformation partners with cutting-edge equipment, expert trainers, and a proven system
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-gradient-to-r from-red-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Personalized Training</h3>
              <p className="text-gray-300 leading-relaxed">
                Every workout is tailored to your goals, fitness level, and preferences. Our AI-powered system ensures optimal results.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-gradient-to-r from-red-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Expert Trainers</h3>
              <p className="text-gray-300 leading-relaxed">
                Learn from certified professionals with years of experience in transformation and athletic performance.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-gradient-to-r from-red-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">State-of-Art Equipment</h3>
              <p className="text-gray-300 leading-relaxed">
                Train with the latest technology and equipment designed for maximum efficiency and safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Transform with Our</span>
              <br />Programs
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our scientifically designed programs that deliver real results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Weight Loss", image: "/images1/download.jpeg", duration: "12 weeks" },
              { title: "Muscle Building", image: "/images1/muscels.jpeg", duration: "16 weeks" },
              { title: "Athletic Performance", image: "/images1/img3.jpeg", duration: "20 weeks" },
              { title: "Functional Fitness", image: "/images1/img4.jpeg", duration: "8 weeks" }
            ].map((program, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl cursor-pointer">
                <div className="aspect-w-16 aspect-h-12">
                  <img src={program.image} alt={program.title} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{program.title}</h3>
                  <p className="text-red-400 font-semibold">{program.duration} Program</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Success</span>
              <br />Stories
            </h2>
            <p className="text-xl text-gray-300">Real people, real transformations</p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 border border-red-500/20">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <img 
                    src={testimonials[currentTestimonial].image} 
                    alt={testimonials[currentTestimonial].name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-red-500"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-xl text-gray-300 mb-4 leading-relaxed">"{testimonials[currentTestimonial].text}"</p>
                  <div className="text-white font-semibold text-lg">{testimonials[currentTestimonial].name}</div>
                  <div className="text-red-400 font-medium">{testimonials[currentTestimonial].transformation}</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-red-500' : 'bg-gray-600'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Choose Your</span>
              <br />Transformation Plan
            </h2>
            <p className="text-xl text-gray-300">Flexible pricing for every fitness journey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative rounded-3xl p-8 border-2 transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular 
                  ? 'border-red-500 bg-gradient-to-br from-red-500/10 to-orange-500/10' 
                  : 'border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-black text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white hover:shadow-2xl hover:shadow-red-500/30'
                    : 'border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Transform?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of members who've already transformed their lives. Your journey starts with a single step.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              Schedule Tour
            </button>
          </div>
          
          <div className="mt-12 text-white/80">
            <p className="text-sm">🔥 Limited Time: First month FREE for new members</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Dumbbell className="h-8 w-8 text-red-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                POWERFIT
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Transform your body, transform your life. Join the PowerFit community and unlock your potential.
            </p>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-500 text-sm">
                © 2025 PowerFit. All rights reserved. | Transform Your Body, Transform Your Life
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FitnessClubFunnel;