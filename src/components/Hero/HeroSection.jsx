// import React from 'react';
// import './HeroSection.css';

// const HeroSection = () => {
//   return (
//     <section className="hero-section">
//       <div className="hero-content">
//         <div className="trusted-badge">
//         <img src="creator-avatars.png" alt="Creator Avatars" className="avatar-images" />
//         <span>Trusted By 100+ Creators</span>
//       </div>
//       <h1>
//         Video Edits <br></br><span className="highlight">That Stand Out!</span>
        
//       </h1>
//       <p className="subheading">
//         Hook faster. Edit smarter. Grow your audience with scroll-stopping YouTube videos.
//       </p>
//       <button className="book-call-btn">Book a Call <span>&gt;</span></button>
//       <p className="possibilities">No pressure, just possibilities.</p>
//       </div>
      
//       <div className='testimonials-section'>
//         <div className="testimonials">
//         <div className="testimonial-card tomas">
//           <img src="tomas-avatar.png" alt="Tomas Avatar" className="testimonial-avatar" />
//           <div className="testimonial-content">
//             <span className="testimonial-handle">@tomas</span>
//             <p>Bestest Edit in 48 hours.</p>
//             <div className="testimonial-actions">
//               <span className="like">👍</span>
//               <span className="dislike">👎</span>
//               <span className="reply">Reply</span>
//             </div>
//           </div>
//         </div>
//         <div className="testimonial-card mark">
//           <img src="mark-avatar.png" alt="Mark Avatar" className="testimonial-avatar" />
//           <div className="testimonial-content">
//             <span className="testimonial-handle">@mark_locus</span>
//             <p>This edit boosted my retention rate by 35%!</p>
//             <div className="testimonial-actions">
//               <span className="like">👍</span>
//               <span className="dislike">👎</span>
//               <span className="reply">Reply</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React from 'react'
import './HeroSection.css';

import phoneimg from '../../assets/incoming-call.gif'
import Timeline from '../../assets/gif/Timeline .gif'
import Leftgif from '../../assets/personal-development.png'


const HeroSection = () => {
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
  Book a Call  
  <img 
    src={phoneimg}  // replace with your PNG path
    alt="call-icon" 
    className="button-icon" 
  />
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
