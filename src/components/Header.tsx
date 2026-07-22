import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'
import { BOOKING_URL } from '../config'
import './Header.css'

type NavLink = {
  label: string
  to: string
  /** Label to use on the desktop bar, if different from the mobile menu. */
  desktopLabel?: string
  /** Set false to hide from the desktop bar (still shown in the mobile menu). */
  showOnDesktop?: boolean
}

const links: NavLink[] = [
  { label: 'Home', to: '/', showOnDesktop: false },
  { label: 'Meet the Team', to: '/meet-the-team' },
  { label: 'Our Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  
]

function Brand() {
  return (
    <Link to="/" className="brand" aria-label="Pony Boy Salon home">
      <img className="brand-logo" src={logo} alt="" aria-hidden="true" />
      <span className="brand-name">Pony Boy Salon</span>
    </Link>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // Close the menu whenever the route changes.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // While the menu is open, lock body scroll and let Escape close it.
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header className="site-header">
      <div className="header-bar">
        <Brand />

        <nav className="desktop-nav" aria-label="Primary">
          {links
            .filter((l) => l.showOnDesktop !== false)
            .map((l) => (
              <Link key={l.to} to={l.to} className="desktop-link">
                {l.desktopLabel ?? l.label}
              </Link>
            ))}
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      <div
        className={`mobile-menu${open ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        <div className="mobile-menu-header">
            <Brand />
            <button
              type="button"
              className="menu-close"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <X size={28} />
            </button>
          </div>

          <nav className="mobile-nav" aria-label="Mobile">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="mobile-link">
                {l.label}
              </Link>
            ))}
          </nav>

          <a
            className="book-now"
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
          >
            Book Now
          </a>
        </div>
    </header>
  )
}

export default Header
