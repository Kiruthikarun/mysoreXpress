"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, ArrowRight, ArrowDown, Instagram, Youtube, Music, Headphones, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "./components/mxHeader";
import Footer from "./components/FooterPlayer";
import Floater from "./components/Floater";
import VideoPlayer from "./components/VideoPlayer";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const contactsRef = useRef(null);
  const textRef = useRef(null);
  const heroTextRef = useRef(null);
  
  useEffect(() => {
    const sections = document.querySelectorAll(".animate-section");
    
    // Hero text animation
    gsap.from(heroTextRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      delay: 0.5
    });

    sections.forEach((section) => {
      gsap.from(section, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 20%",
        },
      });
    });
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(contactsRef.current.children, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: contactsRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative">
        {/* Mobile Hero Image Frame - Perfectly framed for mobile */}
        <div className="md:hidden relative w-full h-[50vh] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/mxp20.jpg"
              alt="Mysore Xpress performing"
              fill
              priority
              className="object-cover object-[center_25%]" 
              style={{ opacity: 0.7 }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black"></div>
        </div>

        {/* Desktop Hero Image */}
        <div className="hidden md:block relative w-full h-[100vh]">
          <Image
            src="/images/Home.jpg"
            alt="Mysore Xpress performing"
            fill
            sizes="100vw"
            className="object-cover object-top opacity-70" 
            placeholder="blur"
            blurDataURL="/images/Home.jpg"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/80"></div>
          
          {/* Desktop Hero Content */}
          <div className="absolute inset-0 flex items-end pb-20">
            <div className="container mx-auto px-4 md:px-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left Content */}
                <div className="max-w-xl">
                  <h1 className="text-4xl md:text-5xl font-origin text-[#ff4a4a] mb-4 md:mb-6 leading-tight">
                    Where Tradition Meets Modern Rock
                  </h1>
                  <p className="text-lg md:text-xl font-[Montserrat] text-gray-100 mb-6 leading-relaxed">
                    Experience the fusion of Carnatic rhythms and contemporary rock
                    energy
                  </p>
                  <Link href="/music">
                    <button
                      className="bg-black hover:bg-[#ff4a4a]/10 text-white px-6 py-3 
                      rounded-full transform hover:scale-105 transition-all duration-200 
                      font-bold font-origin flex items-center space-x-2 border border-[#ff4a4a]"
                    >
                      <Play className="w-5 h-5" />
                      <span>Listen Now</span>
                    </button>
                  </Link>
                </div>

                {/* Right Content - Scroll Indicator */}
                <div className="flex justify-end items-end">
                  <div className="flex flex-col items-center pb-8 pr-8">
                    <div className="relative w-16 h-16">
                      <div className="absolute inset-0 border-2 border-[#ff4a4a] rounded-full animate-ping opacity-75"></div>
                      <div className="relative w-full h-full flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-full border-2 border-[#ff4a4a]">
                        <div className="animate-bounce flex items-center justify-center">
                          <ArrowDown className="w-6 h-6 text-[#ff4a4a]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Hero Content - Below the image */}
        <div ref={heroTextRef} className="md:hidden py-8 px-4 bg-black">
          <h1 className="text-3xl font-origin text-[#ff4a4a] mb-4 leading-tight">
            Where Tradition Meets Modern Rock
          </h1>
          <p className="text-lg font-[Montserrat] text-gray-100 mb-6 leading-relaxed">
            Experience the fusion of Carnatic rhythms and contemporary rock
            energy
          </p>
          <Link href="/music">
            <button
              className="bg-black hover:bg-[#ff4a4a]/10 text-white px-6 py-3 
              rounded-full transform hover:scale-105 transition-all duration-200 
              font-bold font-origin flex items-center space-x-2 border border-[#ff4a4a]"
            >
              <Play className="w-5 h-5" />
              <span>Listen Now</span>
            </button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gray-900/30 animate-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div
                className="absolute inset-0 bg-[#ff4a4a]/20 transform group-hover:scale-105 
                transition-transform duration-500 rounded-lg"
              ></div>
              <Image
                src="/images/mxp15.jpg"
                alt="Band members"
                width={500}
                height={300}
                quality={75}
                className="relative z-10 rounded-lg shadow-2xl w-full h-auto"
                placeholder="blur"
                blurDataURL="/images/compressed/mxp15.jpg"
                priority
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-origin text-[#ff4a4a]">
                About Us
              </h2>
              <p className="text-lg font-[Montserrat] text-gray-300 leading-relaxed mb-4">
                Mysore Xpress, formed in 2019, is a modern fusion rock band from
                the heritage city of Mysore. We blend traditional Carnatic
                elements with contemporary rock, creating a unique sound that
                bridges cultures and generations.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link href="/about">
                  <button
                    className="bg-black hover:bg-[#ff4a4a]/10 text-white px-6 py-3 
                    rounded-full transform hover:scale-105 transition-all duration-200 
                    font-bold font-origin flex items-center space-x-2 border border-[#ff4a4a]"
                  >
                    <ArrowRight className="w-5 h-5" />
                    <span>Our Story</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section className="py-24 animate-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-origin text-[#ff4a4a]">
                Listen to Our Music
              </h2>
              <p className="text-lg font-[Montserrat] text-gray-300 leading-relaxed">
                From our debut EP "Made In Mysore" to our latest releases,
                experience our musical journey across various streaming
                platforms. Each track tells a story of cultural fusion and
                musical exploration.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link href="/music">
                  <button
                    className="bg-black hover:bg-[#ff4a4a]/10 text-white px-6 py-3 
                    rounded-full transform hover:scale-105 transition-all duration-200 
                    font-bold font-origin flex items-center space-x-2 border border-[#ff4a4a]"
                  >
                    <Music className="w-5 h-5" />
                    <span>Explore Our Music</span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative group">
                <div
                  className="absolute inset-0 bg-[#ff4a4a]/20 transform group-hover:scale-105 
                  transition-transform duration-500 rounded-lg"
                ></div>
                <Image
                  src="/images/mxp5.jpg"
                  alt="Band members"
                  width={500}
                  height={300}
                  quality={75}
                  className="relative z-10 rounded-lg shadow-2xl w-full h-auto"
                  placeholder="blur"
                  blurDataURL="/images/compressed/mxp5.jpg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Connect Section */}
      <section className="py-16 md:py-24 animate-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-origin text-[#ff4a4a] mb-4 md:mb-6">
            Connect With Us
          </h2>
          <p className="text-base md:text-lg font-[Montserrat] text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto px-4">
            Whether you're interested in bookings, collaborations, or just want
            to say hello, we'd love to hear from you. Let's create something
            amazing together.
          </p>
          {/* Contact Cards */}
          <div
            ref={contactsRef}
            className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-12 md:mb-20 px-4"
          >
            {/* Email Card */}
            <a
              href="mailto:mysorexpresstheband@gmail.com"
              className="group relative overflow-hidden"
            >
              <div
                className="relative border border-[#ff4a4a]/20 rounded-lg p-4 sm:p-6 md:p-8 hover:bg-[#ff4a4a]/5
                backdrop-blur-sm transition-all duration-300 h-full"
              >
                <div className="flex items-start space-x-3 md:space-x-4">
                  <Mail className="w-6 h-6 md:w-8 md:h-8 text-[#ff4a4a] mt-1 flex-shrink-0" />
                  <div className="text-left">
                    <h3 className="text-xl md:text-2xl font-origin text-white mb-2 md:mb-3 uppercase tracking-wide">
                      Email Us
                    </h3>
                    <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-6 break-words">
                      mysorexpresstheband@gmail.com
                    </p>
                    <div className="flex items-center text-[#ff4a4a] font-metal uppercase tracking-wide text-xs md:text-sm">
                      <span className="mr-2 font-[Montserrat]">Send us a message</span>
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href="tel:+919008079783"
              className="group relative overflow-hidden"
            >
              <div
                className="relative border border-[#ff4a4a]/20 rounded-lg p-4 sm:p-6 md:p-8 hover:bg-[#ff4a4a]/5
                backdrop-blur-sm transition-all duration-300 h-full"
              >
                <div className="flex items-start space-x-3 md:space-x-4">
                  <Phone className="w-6 h-6 md:w-8 md:h-8 text-[#ff4a4a] mt-1 flex-shrink-0" />
                  <div className="text-left">
                    <h3 className="text-xl md:text-2xl font-origin text-white mb-2 md:mb-3 uppercase tracking-wide">
                      Call Us
                    </h3>
                    <p className="text-sm md:text-base font-[Montserrat] text-gray-400 mb-4 md:mb-6">
                      +91 90080 79783
                    </p>
                    <div className="flex items-center text-[#ff4a4a] font-metal uppercase tracking-wide text-xs md:text-sm">
                      <span className="mr-2 font-[Montserrat]">Call us now</span>
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Social Links */}
          <div className="max-w-4xl mx-auto text-center px-4">
            <h3 className="text-xl md:text-2xl font-origin text-white mb-6 md:mb-8 uppercase tracking-wide">Follow Us</h3>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              <a
                href="https://www.instagram.com/mysore_xpress/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
              >
                <Instagram className="w-6 h-6 md:w-8 md:h-8 text-[#ff4a4a] mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-gray-400 font-[Montserrat] text-xs md:text-sm uppercase tracking-wide">Instagram</span>
              </a>
              <a
                href="https://www.youtube.com/@MysoreXpressTheBand"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
              >
                <Youtube className="w-6 h-6 md:w-8 md:h-8 text-[#ff4a4a] mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-gray-400 font-[Montserrat] text-xs md:text-sm uppercase tracking-wide">YouTube</span>
              </a>
              <a
                href="https://open.spotify.com/artist/3z6Qc4vYphJb18Rr0jGHuC"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
              >
                <Music className="w-6 h-6 md:w-8 md:h-8 text-[#ff4a4a] mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-gray-400 font-[Montserrat] text-xs md:text-sm uppercase tracking-wide">Spotify</span>
              </a>
              <a
                href="https://music.apple.com/in/artist/mysore-xpress/1501098656"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
              >
                <Headphones className="w-6 h-6 md:w-8 md:h-8 text-[#ff4a4a] mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-gray-400 font-[Montserrat] text-xs md:text-sm uppercase tracking-wide">Apple Music</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Background Musical Notes */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0">
        <div className="absolute top-1/4 left-1/4 text-9xl text-[#ff4a4a]/20 transform -rotate-12">
          ♪
        </div>
        <div className="absolute top-1/2 right-1/3 text-8xl text-[#ff4a4a]/20 transform rotate-12">
          ♫
        </div>
        <div className="absolute bottom-1/4 left-1/3 text-8xl text-[#ff4a4a]/20 transform -rotate-45">
          ♩
        </div>
        <div className="absolute top-3/4 right-1/4 text-7xl text-[#ff4a4a]/20 transform rotate-45">
          ♬
        </div>
      </div>

      <Footer />
      <Floater />
    </div>
  );
};

export default HomePage;