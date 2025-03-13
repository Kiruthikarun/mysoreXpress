// src/app/music/ClientLayout.jsx (Client Component)
"use client"

import { useEffect } from 'react'

export function ClientLayout({ children }) {
  // Add custom animation class for the spinning animations
  useEffect(() => {
    // Check if the style already exists to avoid duplicates
    if (!document.getElementById('spin-slow-animation')) {
      const style = document.createElement('style')
      style.id = 'spin-slow-animation'
      style.textContent = `
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `
      document.head.appendChild(style)
    }

    // Add font styles
    if (!document.getElementById('custom-fonts')) {
      const fontStyle = document.createElement('style')
      fontStyle.id = 'custom-fonts'
      fontStyle.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Metal+Mania&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');
        
        .font-metal { font-family: 'Metal Mania', cursive; }
        .font-synth { font-family: 'Audiowide', cursive; }
      `
      document.head.appendChild(fontStyle)
    }
  }, [])

  return (
    <div className="bg-black">
      {children}
    </div>
  )
}