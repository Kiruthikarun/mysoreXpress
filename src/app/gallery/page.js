"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, X, Maximize2, Disc, Loader, ImagesIcon } from "lucide-react";

import Header from "@/app/components/mxHeader";
import Floater from "@/app/components/Floater";
import FooterPlayer from "@/app/components/FooterPlayer";

const FunkyGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});
  const [isModalClosing, setIsModalClosing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [showSwipeIndicator, setShowSwipeIndicator] = useState(false);
  const imageRefs = useRef([]);
  const modalRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const swipeIndicatorTimeout = useRef(null);

  // Fetch gallery data from JSON file
  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await fetch('/data/gallery.json');
        if (!response.ok) {
          throw new Error('Failed to fetch gallery data');
        }
        const data = await response.json();
        
        // Map the data to match our component's expected structure
        const mappedData = data.map(item => ({
          id: item.id,
          src: item.compressedSrc,
          fullSrc: item.fullSrc,
          title: item.title,
          description: item.alt,
          width: item.width,
          height: item.height
        }));
        
        setImages(mappedData);
        setLoading(false);
      } catch (error) {
        console.error('Error loading gallery data:', error);
        // Fallback to generated data if JSON fetch fails
        const fallbackImages = Array.from({ length: 12 }, (_, i) => ({
          id: i + 1,
          src: `/images/compressed/mxp${i + 1}.webp`,
          fullSrc: `/images/compressed/mxp${i + 1}.webp`,
          title: `Performance ${i + 1}`,
          description: i % 3 === 0 ? "Live Concert" : i % 3 === 1 ? "Backstage" : "Studio Session",
        }));
        setImages(fallbackImages);
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  // Fixed preload images function - using browser's Image constructor, not Next/Image
  useEffect(() => {
    if (images.length > 0) {
      const preloadImages = images.slice(0, 3).map((img) => {
        if (img && img.src) {
          const imageElement = new window.Image(); // Use the browser's Image constructor
          imageElement.src = img.src;
          return imageElement;
        }
        return null;
      }).filter(Boolean);
    }
  }, [images]);

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  // Handle modal close
  const closeModal = () => {
    setIsModalClosing(true);
    setTimeout(() => {
      setSelectedImage(null);
      setIsModalClosing(false);
    }, 300);
    document.body.style.overflow = "auto";
  };

  // Handle click outside modal
  const handleModalClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  const handleImageClick = (index) => {
    setSelectedImage(index);
    setImageLoading(true);
    document.body.style.overflow = "hidden";
    
    // Show swipe indicator on mobile
    if (window.innerWidth < 768) {
      setShowSwipeIndicator(true);
      if (swipeIndicatorTimeout.current) {
        clearTimeout(swipeIndicatorTimeout.current);
      }
      swipeIndicatorTimeout.current = setTimeout(() => {
        setShowSwipeIndicator(false);
      }, 2000);
    }
  };

  // Touch handlers for swipe navigation
  const handleTouchStart = (e) => {
    if (!e.touches || !e.touches[0]) return;
    
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX; // Initialize end to same as start
    
    // Show swipe indicator when user starts touching
    setShowSwipeIndicator(true);
    if (swipeIndicatorTimeout.current) {
      clearTimeout(swipeIndicatorTimeout.current);
    }
  };

  const handleTouchMove = (e) => {
    if (!e.touches || !e.touches[0]) return;
    
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    // Ensure we have valid values
    if (touchStartX.current === 0 || touchEndX.current === 0) return;
    
    const touchThreshold = 75; // Minimum distance to be considered a swipe
    const touchDiff = touchStartX.current - touchEndX.current;
    
    if (Math.abs(touchDiff) > touchThreshold) {
      if (touchDiff > 0) {
        // Swipe left, go to next image
        handleNext();
      } else {
        // Swipe right, go to previous image
        handlePrev();
      }
    }
    
    // Reset touch values
    touchStartX.current = 0;
    touchEndX.current = 0;
    
    // Hide swipe indicator after a delay
    if (swipeIndicatorTimeout.current) {
      clearTimeout(swipeIndicatorTimeout.current);
    }
    swipeIndicatorTimeout.current = setTimeout(() => {
      setShowSwipeIndicator(false);
    }, 1000);
  };

  const handleNext = useCallback(() => {
    if (images.length === 0) return;
    
    setImageLoading(true);
    setSelectedImage((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    if (images.length === 0) return;
    
    setImageLoading(true);
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage === null) return;

      switch (e.key) {
        case "ArrowLeft":
          handlePrev();
          break;
        case "ArrowRight":
          handleNext();
          break;
        case "Escape":
          closeModal();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (swipeIndicatorTimeout.current) {
        clearTimeout(swipeIndicatorTimeout.current);
      }
    };
  }, [selectedImage, handleNext, handlePrev]);

  // Safe Image URL check to prevent empty string errors
  const getSafeImageUrl = (image) => {
    if (!image) {
      return "/api/placeholder/400/400"; // Fallback image
    }
    
    if (!image.src && !image.compressedSrc) {
      return "/api/placeholder/400/400"; // Fallback image
    }
    
    return image.src || image.compressedSrc;
  };
  
  // Get full size image for modal
  const getFullSizeImageUrl = (image) => {
    if (!image) {
      return "/api/placeholder/800/600"; // Fallback image
    }
    
    return image.fullSrc || image.src || image.compressedSrc || "/api/placeholder/800/600";
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Header />
      
      
      <section className=" px-4 bg-black relative overflow-hidden">
        {/* Hero Section with Audio Visualizer */}
        <div className="relative h-[40vh] md:h-[60vh] overflow-hidden mb-8">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10" />
          <div className="w-full h-full relative">
            <Image
              src="/images/Gal.jpg"
              alt="Band performing"
              fill
              sizes="100vw"
              className="object-cover object-center opacity-60"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center">
              <ImagesIcon className="w-12 h-12 mx-auto mb-4 text-red-600" />
              <h1 className="text-4xl md:text-4xl font-origin text-red-600">
                Gallery
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300 font-[Montserrat] tracking-wider">
                Our Musical Journey
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Grid View */}
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Disc className="w-12 h-12 text-red-600 animate-spin" />
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="group relative cursor-pointer overflow-hidden rounded-lg aspect-square image-glow"
                  onClick={() => handleImageClick(index)}
                  ref={(el) => (imageRefs.current[index] = el)}
                >
                  {!loadedImages[index] && (
                    <div className="absolute inset-0 bg-gray-900 animate-pulse flex items-center justify-center">
                      <Loader className="w-8 h-8 text-red-600 animate-spin" />
                    </div>
                  )}
                  {image && (image.src || image.compressedSrc) && (
                    <div className="relative w-full h-full">
                      <Image
                        src={getSafeImageUrl(image)}
                        alt={image.alt || image.title || `Gallery Image ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className={`object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110 ${
                          loadedImages[index] ? "opacity-100" : "opacity-0"
                        }`}
                        onLoad={() => handleImageLoad(index)}
                        onError={(e) => {
                          console.error(`Failed to load image at index ${index}`);
                          // Mark as loaded to remove spinner
                          handleImageLoad(index);
                        }}
                      />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                      <h3 className="font-[Montserrat] text-white text-lg truncate">{image?.title || `Image ${index + 1}`}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Modal View */}
          {selectedImage !== null && (
            <div
              className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ease-out ${
                isModalClosing ? "bg-black/0" : "bg-black/90"
              }`}
              onClick={handleModalClick}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <button
                className="absolute top-4 right-4 text-red-600 hover:text-red-500 transition-colors duration-300 z-50
                hover:rotate-90 transform bg-black/50 rounded-full p-2 border border-red-600"
                onClick={closeModal}
              >
                <X className="w-4 h-4" />
              </button>

              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-red-600 hover:text-red-500 
                transition-colors duration-300 hidden md:block
                bg-black/50 rounded-full p-2 hover:scale-110 transform"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
              >
                <ArrowLeft className="w-8 h-8" />
              </button>

              <div
                ref={modalRef}
                className={`max-w-4xl mx-auto px-4 transform transition-all duration-300 ease-out ${
                  isModalClosing ? "opacity-0 scale-95" : "opacity-100 scale-100"
                } relative`}
              >
                {imageLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-10">
                    <Loader className="w-8 h-8 text-red-600 animate-spin" />
                  </div>
                )}
                
                {selectedImage !== null && images[selectedImage] && (
                  // Using img tag for modal to simplify things and avoid Next/Image issues
                  <img
                    src={getFullSizeImageUrl(images[selectedImage])}
                    alt={images[selectedImage]?.alt || images[selectedImage]?.title || `Gallery Image ${selectedImage + 1}`}
                    className="max-h-[80vh] w-auto mx-auto border-2 border-red-600/30 rounded-lg"
                    onClick={(e) => e.stopPropagation()}
                    onLoad={() => setImageLoading(false)}
                    onError={(e) => {
                      console.error("Failed to load image:", e);
                      setImageLoading(false);
                      // Try to use the compressed version as fallback
                      if (e.target.src !== getSafeImageUrl(images[selectedImage])) {
                        e.target.src = getSafeImageUrl(images[selectedImage]);
                      }
                    }}
                  />
                )}
                
                <div className="text-center mt-4 bg-black/80 p-3 border border-red-600/30 rounded-lg">
                  <h3 className="text-xl font-[Montserrat] text-white">
                    {images[selectedImage]?.title || `Image ${selectedImage + 1}`}
                  </h3>
                </div>
              </div>

              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-red-600 hover:text-red-500 
                transition-colors duration-300 hidden md:block
                bg-black/50 rounded-full p-2 hover:scale-110 transform"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
              >
                <ArrowRight className="w-8 h-8" />
              </button>
              
              {/* Swipe indicator for mobile */}
              <div 
                className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 md:hidden 
                transition-opacity duration-300 ${showSwipeIndicator ? 'opacity-70' : 'opacity-0'}`}
              >
                <div className="bg-black text-white px-3 py-1 rounded-full border border-red-600
                  flex items-center space-x-1 text-xs">
                  <span className="font-[Montserrat]">swipe to navigate</span>
                </div>
              </div>
              
              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black/80 px-3 py-1 rounded-full border border-red-600">
                <span className="font-[Montserrat]">{selectedImage + 1} / {images.length}</span>
              </div>
            </div>
          )}
        </div>
      </section>
      <FooterPlayer />
      <Floater />
    </div>
  );
};

export default FunkyGallery;