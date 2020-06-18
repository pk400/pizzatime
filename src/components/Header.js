import React from 'react'

import './Header.css'

const Header = ({siteName, children}) => {
  return (
    <header>
      <div className="sitename">{siteName}</div>
    </header>
  )
}

export default Header
