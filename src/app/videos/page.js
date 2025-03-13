"use client";

import React, { useEffect, useRef } from "react";
import { Play, Share2, Disc, Video, ImagesIcon, CameraIcon } from "lucide-react";
import { gsap } from "gsap";
import Image from "next/image";
import Header from "../components/mxHeader";
import Floater from "../components/Floater";
import Footer from "../components/FooterPlayer";
import VideoPlayer from "../components/VideoPlayer";

const VideosPage = () => {
  const textRef = useRef(null);
  const videosRef = useRef(null);

  // Sample video data - replace with actual video IDs
  const videos = [
    {
      id: "O9FdyIkKLxk",
      title: "Made In Mysore (Full EP Stream)",
      description: `Presenting our debut EP titled "Made In Mysore"`,
    },
    {
      id: "AM3H9GNe9lo",
      title: "Mysore Xpress Live at JIPMER, Pondicherry",
      description: "Here's the After Movie from SPANDHAN 2024 at JIPMER, Pondicherry",
    },
    
    {
      id: "Mpu-tiRIIEE",
      title: "Santhoshakke Haadu Santhoshakke (Cover)",
      description: "Mysore Xpress presents you the power packed cover version of Santhoshakke Haadu Santhoshakke from the movie Geetha. ",
    },
    {
      id: "5akMHLngXiY",
      title: "Nammooru (Official Lyric Video)",
      description: `Here's our second single 'NAMMOORU' from the debut EP "Made In Mysore". We have taken a Folkish turn in this song and have written about our love and affection we have towards our city Mysuru.`,
    },
    {
      id: "2gCqPjVcwk4",
      title: "Ainvayi Ainvayi x Sadi Gali (Cover)",
      description: "Mysore Xpress presents you the fusion Mashup of  Ainvayi Ainvayi x Sadi Gali from the movie Band Bajaa Bharat and Tanu Weds Manu.",
    },
    {
      id: "72rl-EEee8c",
      title: "T Stay X Blinding Lights X As It Was (Official Cover Mashup Video)",
      description: "Mysore Xpress presents you the mashup version of Stay x Blinding Lights x As It Was. ",
    },
    {
      id: "e310HziQDnY",
      title: "Sapta Sagaradacche Ello (Cover)",
      description: "Mysore Xpress presents you the new series MX Tapes featuring fusion rendition of Sapta Sagaradacche Ello from the movie Sapta Sagaradacche Ello (Side A).",
    },
    {
      id: "585SciTn3qU",
      title: "Inkem Inkem X Jiya Jale",
      description: "Mysore Xpress presents you the fusion Mashup of  Inkem Inkem x Jiya Jale from the movie Geetham Govindham and Dil Se",
    },
    
    {
      id: "T_7XNV1TvnM",
      title: "Uyirin Uyire x Zara Zara (Cover)",
      description: "Mysore Xpress presents you the fusion Mashup of Uyrin Uyire x Zara Zara from the movie Kaakha Kaakha and Rehna Hai Tere Dil Mein.",
    }
  ];

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(textRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    }).from(
      videosRef.current.children,
      {
        x: -30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: "power2.out",
      },
      "-=0.4"
    );
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10" />
  
  <Image
    src="/images/herovid.jpg"
    alt="Band performing"
    layout="fill"
    objectFit="cover"
    objectPosition="center"
    placeholder="blur"
    blurDataURL="/images/compressed/herovid.jpg" // Add a low-res blurred version of the image here
    className="opacity-60"
  />
  
  <div className="absolute inset-0 flex items-center justify-center z-20">
    <div className="text-center">
      <Video className="w-16 h-16 mx-auto mb-4 text-[#ff4a4a] animate-spin-slow" />
      <h1 className="text-4xl md:text-6xl font-origin text-[#ff4a4a] mb-4">
        Official Videos
      </h1>
    </div>
  </div>
</div>

      {/* Main Content */}
      <div className="relative">
        {/* Videos Grid */}
        <div className="container mx-auto px-4 py-16">
          <div
            ref={videosRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {videos.map((video) => (
              <div
                key={video.id}
                className="group relative overflow-hidden rounded-xl h-full"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br from-transparent to-black
                  group-hover:from-transparent group-hover:to-[#ff4a4a] transition-all duration-500"
                />
                <div
                  className="relative border border-[#ff4a4a] rounded-xl overflow-hidden 
                  backdrop-blur-sm group-hover:border-[#ff4a4a] transition-all duration-300 h-full flex flex-col"
                >
                  <div className="aspect-video relative">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-xl font-origin text-white mb-2">
                      {video.title}
                    </h3>
                    <p className="text-white font-[Montserrat] text-sm line-clamp-3 flex-grow">
                      {video.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Gallery CTA Section */}
<div className="container mx-auto px-4 py-16 border-t border-[#ff4a4a]/20">
  <div className="flex flex-col items-center justify-center">
    {/* Images Icon from Lucide React */}
    <div className="mb-6">
      <ImagesIcon className="w-12 h-12 text-[#ff4a4a]" />
    </div>
    
    {/* Heading */}
    <h2 className="text-4xl font-origin tracking-wider text-[#ff4a4a] uppercase mb-4">
    PHOTO GALLERY
    </h2>
    
    {/* Description */}
    <p className="font-[Montserrat] text-gray-300 text-center mb-12 max-w-2xl">
      Explore our visual journey through photography and memorable moments
    </p>
    
    {/* Button - Styled to match the black button with icon in the screenshot */}
    <a 
      href="/gallery" 
      className="bg-black hover:bg-[#ff4a4a]/10 text-white px-6 py-3 
            rounded-full transform hover:scale-105 transition-all duration-200 
            font-bold font-origin flex items-center space-x-2 border border-[#ff4a4a]"
    >
      <CameraIcon className="w-5 h-5" />
      <span>EXPLORE GALLERY</span>
    </a>
  </div>
</div>

        {/* Animated Background Notes */}
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

      </div>

      <Footer />
      <Floater />
      {/* <VideoPlayer /> */}
    </div>
  );
};

export default VideosPage;