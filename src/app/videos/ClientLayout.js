// src/app/videos/ClientLayout.jsx (Client Component)
"use client"

import { useEffect } from 'react'

export function ClientLayout({ children }) {
  useEffect(() => {
    if (!document.getElementById('custom-fonts')) {
      const fontStyle = document.createElement('style')
      fontStyle.id = 'custom-fonts'
      fontStyle.textContent = `
        @font-face {
          font-family: 'Origin Tech';
          src: url('/fonts/OriginTech.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap');
        
        .font-origin { font-family: 'Origin Tech', sans-serif; }
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
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