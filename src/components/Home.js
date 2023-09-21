import React from 'react'
import "../Css/Home.css"
import HomeC1 from './HomeC1'
function Home() {
  return (
    <div>
      <div className="up_container">
        <div className="nav_content">
          <div className="cont_left">
            <a href="/">Art-Gallery</a>
          </div>
          <div className="cont_right">
            <a href="/">Home</a>
            
            <a href="/Menu">Portfolio</a>
            <a href="/">About Us</a>
            <a href="/">Blogs</a>
          </div>
        </div>
        <div className="pic_content">
          <span className="fresh">The object of art is not to reproduce reality, but to create a reality of the same intensity.</span>
          <a href="/">View Portfolio</a>
        </div>
      </div>
      <HomeC1/>
    </div>
  )
}

export default Home
