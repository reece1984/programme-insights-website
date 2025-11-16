import React, { useEffect } from 'react'

interface ThemeWrapperProps {
  children: React.ReactNode
}

export const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children }) => {
  useEffect(() => {
    // Set Graphite theme by default for all routes
    document.documentElement.setAttribute('data-theme', 'graphite')
  }, [])

  return <>{children}</>
}
