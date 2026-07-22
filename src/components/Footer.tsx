import { Phone, AtSign, MapPin, Accessibility, Sparkle } from 'lucide-react'
import { BOOKING_URL } from '../config'
import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-card">
        <h2 className="footer-heading">Keep in Touch!</h2>

        <ul className="contact-list">
          <li>
            <span className="contact-icon">
              <Phone size={20} />
            </span>
            <a href="tel:+16087169832">(608) 716-9832</a>
          </li>

          <li>
            <span className="contact-icon">
              <AtSign size={20} />
            </span>
            <a href="mailto:ponyboysalon@gmail.com">ponyboysalon@gmail.com</a>
          </li>

          <li>
            <span className="contact-icon">
              <MapPin size={20} />
            </span>
            <a
              className="address"
              href="https://maps.google.com/?q=133+S+Butler+Street+Suite+200+Madison+WI+53703"
              target="_blank"
              rel="noreferrer"
            >
              133 S Butler Street, Suite 200
              <br />
              Madison, WI 53703
            </a>
          </li>

          <li className="accessible">
            <span className="contact-icon plain">
              <Accessibility size={30} />
            </span>
            <span className="accessible-label">handicap accessible</span>
          </li>
        </ul>

        <a
          className="footer-book"
          href={BOOKING_URL}
          target="_blank"
          rel="noreferrer"
        >
          Book Now
        </a>

        <div className="stay-gold">
          <Sparkle className="sparkle" size={20} fill="currentColor" />
          <span>stay gold</span>
          <Sparkle className="sparkle" size={28} fill="currentColor" />
        </div>

        <p className="credit">
          designed &amp; developed by
          <br />
          <a href="https://andieswift.dev" target="_blank" rel="noreferrer">
            andieswift.dev
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
