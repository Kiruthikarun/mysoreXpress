"use client"

import { useEffect } from 'react'

export function ClientFonts() {
  useEffect(() => {
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

  return null
}