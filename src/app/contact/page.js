"use client"
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, Disc, ArrowRight, Instagram, Youtube, Music, Headphones } from "lucide-react";
import Image from "next/image";
import Header from "../components/mxHeader";
import Footer from "../components/FooterPlayer";
import Floater from "../components/Floater";
import VideoPlayer from "../components/VideoPlayer";

gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const textRef = useRef(null);
  const contactsRef = useRef(null);

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
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10" />
  
  <Image
    src="/images/herocontact.jpg"
    alt="Band performing"
    layout="fill"
    objectFit="cover"
    objectPosition="center"
    placeholder="blur"
    blurDataURL="/images/compressed/herocontact.jpg" // Add a low-res blurred version of the image here
    className="opacity-60"
  />
  
  <div className="absolute inset-0 flex items-center justify-center z-20">
    <div className="text-center">
      <Phone className="w-16 h-16 mx-auto mb-4 text-[#ff4a4a] " />
      <h1 className="text-5xl md:text-7xl font-origin text-[#ff4a4a] mb-4">
        Contact
      </h1>
    </div>
  </div>
</div>


      {/* Main Content */}
      <div className="container mx-auto px-6 py-20">
        {/* Direct Contact Section */}
        <div ref={textRef} className="text-center mb-16">
          <h2 className="text-3xl font-origin text-white mb-6 uppercase tracking-wide">Get In Touch</h2>
          <p className="text-lg text-gray-400 font-[Montserrat] font-bold max-w-2xl mx-auto mb-12">
            Whether you're interested in bookings, collaborations, or just want to say hello,
            we're here to connect. Reach out to us through any of these channels.
          </p>
        </div>

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
                      <div className="flex items-center text-[#ff4a4a] font-origin uppercase tracking-wide text-xs md:text-sm">
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
                      <div className="flex items-center text-[#ff4a4a] font-origin uppercase tracking-wide text-xs md:text-sm">
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
      </div>
      <Footer />
      <Floater />
      {/* <VideoPlayer /> */}
    </div>
  );
};

export default ContactPage;