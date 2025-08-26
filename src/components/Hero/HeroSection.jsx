
import React from 'react'
import './HeroSection.css';
import Lottie from "lottie-react";
import phoneimg from '../../assets/telephone-call.png'
import Timeline from '../../assets/gif/Timeline .gif'
import Leftgif from '../../assets/personal-development.png'



const HeroSection = () => {
   const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

  return (
    <div className='hero-section'>
     <div className="gif-container left-gif">
        <img src={Timeline} alt="Left GIF" />
      </div>
      {/* <div className="trusted-badge">
       <img src="creator-avatars.png" alt="Creator Avatars" className="avatar-images" />
       <span>Trusted By 100+ Creators</span>
       </div> */}

          
       


          
       <div className='hero-headings'>


       




       <h1>Video Edits That
       <span className='standsout'> Stands Out!</span>
       </h1>
        <p className="subheading"> Hook faster. Edit smarter. Grow your audience with scroll-stopping YouTube videos. </p>
        <button className="book-call-btn">
  Book a Call <img src={phoneimg} alt="Phone Icon" className="phone-icon" />
</button>

        {/* <button className='book-call-btn'>Book a Call <span className='buttonspan'>&gt;</span></button> */}
        <p className="subheading">No pressure, just possibilities.</p>

       </div>

       <div className='hero-testimonials'>
         <div className="testimonial-card mark">
          <img src= {Leftgif} alt="Mark Avatar" className="testimonial-avatar" />
          <div className="testimonial-content">
            <span className="testimonial-handle">@mark_locus</span>
            <p>This edit boosted my retention rate by 35%!</p>
            <div className="testimonial-actions">
              <span className="like">👍</span>
              <span className="dislike">👎</span>
              <span className="reply">Reply</span>          
            </div>
        </div>
      </div>

      <div className="testimonial-card mark">
          <img src={Leftgif} alt="Mark Avatar" className="testimonial-avatar" />
          <div className="testimonial-content">
            <span className="testimonial-handle">@mark_locus</span>
            <p>This edit boosted my retention rate by 35%!</p>
            <div className="testimonial-actions">
              <span className="like">👍</span>
              <span className="dislike">👎</span>
              <span className="reply">Reply</span>          
            </div>
        </div>
      </div>
       </div>


       {/* <div className="gif-container right-gif">
        <img src={Timeline} alt="Right GIF" />
      </div> */}

      





      
    </div>


  )
}

export default HeroSection
