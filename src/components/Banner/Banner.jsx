import React from 'react'

import './Banner.scss'

const Banner = () => {
  return (
    <section className="banner">
    <video className="banner__video-background" autoPlay loop muted>
      <source src="/assets/3.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="banner__content">
     <h1>Express Yourself through Fashion</h1>
    </div>
  </section>
  )
}

export default Banner