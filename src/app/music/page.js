"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Music, Disc, Play, Video, Youtube, Radio, Disc2, Disc3 } from "lucide-react";
import Image from "next/image";
import Header from "../components/mxHeader";
import Floater from "../components/Floater";
import Footer from "../components/FooterPlayer";
import VideoPlayer from "../components/VideoPlayer";

gsap.registerPlugin(ScrollTrigger);

const MusicPage = () => {
  const cardsRef = useRef([]);
  const spotifyTracksRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 80%",
        },
      });

      gsap.from(spotifyTracksRef.current, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: spotifyTracksRef.current,
          start: "top 80%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const platforms = [
    {
      name: "Apple Music",
      icon: <Music className="w-12 h-12" />,
      description: "Stream our tracks on Apple Music",
      color: "bg-gradient-to-br from-pink-600 to-purple-800",
      link: "https://music.apple.com/in/artist/mysore-xpress/1501098656",
      buttonText: "Listen on Apple Music",
    },
    {
      name: "Spotify",
      icon: <Radio className="w-12 h-12" />,
      description: "Follow us on Spotify",
      color: "bg-gradient-to-br from-emerald-600 to-cyan-800",
      link: "https://open.spotify.com/artist/3z6Qc4vYphJb18Rr0jGHuC",
      buttonText: "Play on Spotify",
    },
    {
      name: "YouTube",
      icon: <Youtube className="w-12 h-12" />,
      description: "Watch our music videos",
      color: "bg-gradient-to-br from-red-600 to-orange-700",
      link: "https://www.youtube.com/@MysoreXpressTheBand",
      buttonText: "Watch on YouTube",
    },
  ];

  const spotifyTracks = [
    // {
    //   id: "3X20nXOWeLzzmy8ioaETVh",
    //   title: "Track 1",
    // },
    // {
    //   id: "5HfVUqiSlBdGyVAn9MP9k4",
    //   title: "Track 2",
    // },
    // {
    //   id: "6jFP5tGUftyGnsvKlnOBwT",
    //   title: "Track 3",
    // },
    // {
    //   id: "15HOLjuQFB2vCw18XC6UhK",
    //   title: "Track 4",
    // },
    // {
    //   id: "0oSMP9cee5wYviNrCenwaa",
    //   title: "Track 5",
    // },
    // {
    //   id: "44jyttAYoT24doHoYMPwPi",
    //   title: "Track 6",
    // },
    // {
    //   id: "15HOLjuQFB2vCw18XC6UhK",
    //   title: "Track 7",
    // },
    {
      id: "6MMhKNNRBfxsdijFNltskM",
      title: "Track 8",
    },
    {
      id: "1YhmL7gdJwnLN67BjvsgGP",
      title: "Track 9"
    },
    
    {
      id: "4Cbo0hzwobZv99aJOYrwIU",
      title: "Track 10",
    },
    {
      id: "5Ykmb46eCMtko43mhlwvSB",
      title: "Track 11"
    },
    {
      id: "16bH9xNtyXJwbzL61FskdZ",
      title: "Track 12",
    },
    {
      id: "66zCEWSFWT6yCS3roCAVAG",
      title: "Track 13",
    },
    {
      id: "2UDoSK9PznbGyTRiuIvRku",
      title: "Track 14",
    },
    {
      id: "3oLXapltLYi9USohwkny1W",
      title: "Track 15",
    },
    
    {
      id: "2aJ1D9UhPrzcs2QIzj3owH",
      title: "Track 16"
    },
    
    {
      id: "2hwnUJFWHiiprYO5lhgWq4",
      title: "Track 18"
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10" />
  
  <Image
    src="/images/heromusic.jpg"
    alt="Band performing"
    layout="fill"
    objectFit="cover"
    objectPosition="center"
    placeholder="blur"
    blurDataURL="/images/compressed/heromusic.jpg" // Add a low-res blurred version of the image here
    className="opacity-60"
  />
  
  <div className="absolute inset-0 flex items-center justify-center z-20">
    <div className="text-center">
      <Disc3 className="w-12 h-12 mx-auto mb-4 text-[#ff4a4a] animate-spin-slow" />
      <h1 className="text-4xl md:text-5xl font-origin text-[#ff4a4a] mb-4">
        Discography
      </h1>
    </div>
  </div>
</div>

      {/* Streaming Platforms */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <a 
              key={platform.name}
              href={platform.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <div
                ref={(el) => (cardsRef.current[index] = el)}
                className="relative group"
              >
                <div
                  className={`${platform.color} p-8 rounded-xl transform transition-all duration-300 
                hover:scale-105 hover:shadow-2xl hover:shadow-[#ff4a4a]/20 backdrop-blur-sm
                border border-[#ff4a4a]/10 hover:border-[#ff4a4a]/30`}
                >
                  <div className="text-white mb-6">{platform.icon}</div>
                  <h3 className="text-2xl font-origin text-white mb-2">
                    {platform.name}
                  </h3>
                  <p className="font-origin text-gray-200 mb-6">
                    {platform.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      
      {/* Spotify Tracks Section */}
      <div ref={spotifyTracksRef} className="container mx-auto px-4 py-16 border-t border-[#ff4a4a]/20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Radio className="w-12 h-12 mx-auto mb-4 text-[#ff4a4a]" />
          <h2 className="text-3xl font-origin text-[#ff4a4a] mb-4">
            Listen to Our Tracks
          </h2>
          <p className="font-[Montserrat] text-gray-300">
            Experience our music through these carefully crafted tracks
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {spotifyTracks.map((track, index) => (
            <div 
              key={track.id}
              className="transform transition-all duration-300 hover:scale-105"
            >
              <div className="p-4 rounded-xl border border-[#ff4a4a]/30 bg-black/50 backdrop-blur-sm">
                <iframe 
                  style={{borderRadius: "12px"}} 
                  src={`https://open.spotify.com/embed/track/${track.id}?utm_source=generator`}
                  width="100%" 
                  height="152" 
                  frameBorder="0" 
                  allowFullScreen="" 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy"
                  title={`Spotify Track ${index + 1}`}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Video CTA Section */}
<div className="container mx-auto px-4 py-16 border-t border-[#ff4a4a]/20">
  <div className="flex flex-col items-center justify-center">
    {/* Video Icon from Lucide React */}
    <div className="mb-6">
      <Video className="w-16 h-16 text-[#ff4a4a]" />
    </div>
    
    {/* Heading - Using the same style as in the screenshot */}
    <h2 className="text-4xl font-origin text-[#ff4a4a] uppercase mb-4">
      WATCH OUR VIDEOS
    </h2>
    
    {/* Description - Using the same style as in the screenshot */}
    <p className="font-[Montserrat] text-gray-300 text-center mb-12 max-w-2xl">
      Experience the visual side of our music through our official videos
    </p>
    
    {/* Button - Styled to match the black button with play icon in the screenshot */}
    <a 
      href="/videos" 
      className="bg-black hover:bg-[#ff4a4a]/10 text-white px-6 py-3 
            rounded-full transform hover:scale-105 transition-all duration-200 
            font-bold font-origin flex items-center space-x-2 border border-[#ff4a4a]"
    >
      <Play className="w-5 h-5" />
      <span>EXPLORE MUSIC VIDEOS</span>
    </a>
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
        <div className="absolute top-3/4 right-1/4 text-7xl text-[#ff4a4a]/20 transform rotate-45">
          ♬
        </div>
      </div>

      <Footer />
      <Floater />
      {/* <VideoPlayer /> */}

      {/* Animated Background Notes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 text-9xl text-[#ff4a4a]/20 animate-pulse transform -rotate-12">
          ♪
        </div>
        <div className="absolute bottom-1/3 right-1/4 text-10xl text-[#ff4a4a]/20 animate-pulse delay-300 transform rotate-12">
          ♫
        </div>
        <div className="absolute bottom-1/4 left-1/3 text-8xl text-[#ff4a4a]/20 animate-pulse delay-150 transform -rotate-45">
          ♩
        </div>
        <div className="absolute top-1/3 right-1/3 text-7xl text-[#ff4a4a]/20 animate-pulse delay-500 transform rotate-45">
          ♬
        </div>
      </div>
      
    </div>
  );
};

export default MusicPage;