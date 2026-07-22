import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { BOOKING_URL } from '../config'
import Reveal from '../components/Reveal'
import heroLounge from '../assets/hero-lounge.jpg'
import heroChair from '../assets/hero-chair.jpg'
import whatWeDo from '../assets/what-we-do.png'
import sparkle from '../assets/sparkle.svg'
import './Home.css'

const reviews = [
  {
    name: 'Jason Roth',
    source: 'Google Review',
    quote: `Pony Boy Salon is great! I think I was one of Freya’s first clients (they can correct me if I’m wrong, lol). I was so happy to hear they decided to venture out to build their own salon. I love it when my hair artist knows and cares about me, and Freya is perfect for that. My hair can lay on my head funny depending on how it’s cut. Freya always takes great care to make sure I leave the salon looking and feeling my best! The space is welcoming, inclusive, and there is a focus on sustainability and environmentalism. I highly recommend giving this salon and Freya a try!`,
  },
  {
    name: 'Jen Peterson',
    source: 'Google Review',
    quote: `OMFG, I am totally obsessed with this place! The space is so full of light and just buzzing with good vibes. All the products are planet- and human-friendly, and everything smells SO GOOD!

Freya is awesome; they totally get what you’re looking for and make it happen in the coolest way. Their vibe is super chill, and it honestly feels like you are hanging out with your bestie. I have never left Freya’s comfy chair feeling anything short of a magical, mythical crypid queen & everyone who sees my head agrees.

TL;DR: Whether you want to spring your wild side, boost your natural beauty, or get properly barber-ed, book an appointment at Pony Boy Salon..`,
  },
  {
    name: 'Ivy Moon Kenworthy',
    source: 'Google',
    quote: `First off, I thought I was going to look so wierd with bangs, like Lord Farquhar from Shrek, but Freya assured me I’d look cute. They were so right, I look fabulous and I don’t think I ever want to grow them out again. Another time we did a vivid orange and yellow highlight and lemme tell you you, better than I could have ever imagined. Needless to say I won’t go anywhere else. They are a damn hair wizard! Indulge yourself and I promise it will be a surefire hit.`,
  },
]

function Home() {
  return (
    <div className="home">
      {/* ---- Hero ---- */}
      <section className="hero">
        <Reveal className="hero-media">
          <picture>
            <source media="(min-width: 1025px)" srcSet={heroChair} />
            <img src={heroLounge} alt="Inside Pony Boy Salon" />
          </picture>
        </Reveal>

        <Reveal className="hero-panel" delay={120}>
          <img className="hero-sparkle" src={sparkle} alt="" aria-hidden="true" />
          <h1 className="hero-title">
            Queer – LGBTQ Hair Salon Located in Madison
          </h1>
          <p className="hero-text">
            Stylists at Pony Boy salon are excited to embrace everyone that walks
            in our door. All stylists are color specialists and have an eye for
            unique cuts.
          </p>
          <a
            className="btn btn--book"
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
          >
            Book Now
          </a>
        </Reveal>
      </section>

      {/* ---- What We Do ---- */}
      <section className="wwd">
        <Reveal>
          <h2 className="section-title">What We Do</h2>
        </Reveal>

        <Reveal className="wwd-photos" delay={80}>
          <img
            src={whatWeDo}
            alt="Colorful hair transformations by Pony Boy Salon"
          />
        </Reveal>

        <Reveal className="wwd-buttons" delay={120}>
          <Link className="btn btn--pill" to="/gallery">
            Gallery
          </Link>
          <Link className="btn btn--pill" to="/services">
            Services
          </Link>
        </Reveal>

        <Reveal className="wwd-text" delay={80}>
          <p>
            Pony Boy Salon, based in Madison, Wisconsin, is a premier destination
            offering a wide range of services.
          </p>
          <p>
            Freya specializes in vivid hair color, natural hair, barbering, and
            more. Whether you’re looking for a stylish haircut, a stunning
            natural hair transformation, a precise barbering experience, or
            effective hair removal solutions, Freya is here to cater to your
            needs and wants.
          </p>
        </Reveal>
      </section>

      {/* ---- Reviews ---- */}
      <section className="reviews">
        <Reveal>
          <h2 className="section-title reviews-title">
            What our clients are saying about us
          </h2>
        </Reveal>

        <Reveal className="reviews-rating" delay={60}>
          <span className="stars" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={26} fill="currentColor" strokeWidth={0} />
            ))}
          </span>
          <span className="rating-label">5/5 on Google</span>
        </Reveal>

        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <Reveal key={r.name} className="review-card" delay={i * 120}>
              <span className="quote-mark" aria-hidden="true">
                ”
              </span>
              <p className="review-quote">{r.quote}</p>
              <p className="review-name">{r.name}</p>
              <p className="review-source">{r.source}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
