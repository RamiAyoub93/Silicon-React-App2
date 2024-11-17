import React from 'react'

const Footer = () => {
  return (
    <>
    <footer class="footer">
    <div class="newsletter-container">
        <div class="newsletter-content">
            <span class="icon">
                <img src="/notification (1).svg" alt="Bell icon" />
            </span>
            <p>Subscribe to our newsletter to stay informed about latest updates</p>
        </div>
        <form class="newsletter-form">
            <input type="email" placeholder="Your Email" required="" />
            <button type="submit">Subscribe</button>
        </form>
    </div>
    <div class="footer-note">
        <p>© 2024 Silicon. All rights reserved. Credit MadrasThemes</p>
    </div>
</footer>
    
    </>
  )
}

export default Footer