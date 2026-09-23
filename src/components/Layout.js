import React from 'react'

const Layout = ({ children, className = "" }) => {
  return (
    <div className={`max-w-[1180px] mx-auto px-[clamp(20px,5vw,64px)] ${className}`}>
      {children}
    </div>
  )
}

export default Layout
