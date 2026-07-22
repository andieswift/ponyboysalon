import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import Reveal from '../components/Reveal'
import './OurServices.css'

type Item = {
  name: string
  freya?: string
  raven?: string
  note?: string
}

type Category = {
  title: string
  items?: Item[]
  note?: string
}

const categories: Category[] = [
  {
    title: 'Hair Cut & Other',
    items: [
      { name: 'Haircut/Barber Cut', freya: '$65', raven: '$40' },
      { name: 'Buzz It or Bang it', freya: '$20', raven: '$15' },
      { name: 'Kids Cut', freya: '$30', raven: '$25' },
      { name: 'Shampoo & Blowout', freya: '$30', raven: '$25' },
      { name: 'Conditioning Treatment', freya: '$15', raven: '$20' },
    ],
  },
  {
    title: 'Creative Color',
    items: [
      { name: 'CC Only – Just a Pop', freya: '$90', raven: '$70' },
      { name: 'CC Only – Half Head', freya: '$120', raven: '$95' },
      { name: 'CC Only – Full Head', freya: '$150', raven: '$120' },
      { name: 'Double Process CC – Just a Pop', freya: '$150', raven: '$120' },
      { name: 'Double Process CC – Half Head', freya: '$265', raven: '$210' },
      { name: 'Double Process CC – Full Head', freya: '$350', raven: '$300' },
    ],
  },
  {
    title: 'Highlights',
    items: [
      { name: 'Just a pop – Highlights', freya: '$90', raven: '$70' },
      { name: 'Half Head – Highlights', freya: '$155', raven: '$120' },
      { name: 'Full Head – Highlights', freya: '$200', raven: '$170' },
    ],
  },
  {
    title: 'Natural Color',
    items: [
      { name: 'All over Color', freya: '$100', raven: '$80' },
      { name: 'Just the Roots', freya: '$80', raven: '$60' },
      { name: 'Color Correction – Hourly', freya: '$120', raven: '$80' },
      { name: 'Color Consultation', freya: '$0', raven: '$0' },
    ],
  },
  {
    title: 'Waxing',
    items: [{ name: 'All Waxing', freya: '$20', raven: '$20' }],
  },
  {
    title: 'Perm',
    items: [
      { name: 'Conditioning Treatment', raven: '$150', note: 'Consultation required' },
    ],
  },
  {
    title: 'Extensions',
    note: 'Consultation required for this service & all pricing will be discussed at this time.',
  },
]

function priceLine(item: Item) {
  const parts: string[] = []
  if (item.freya) parts.push(`Freya ${item.freya}`)
  if (item.raven) parts.push(`Raven ${item.raven}`)
  return parts.join(' | ')
}

function OurServices() {
  // Start with the first category open, like the mockup.
  const [open, setOpen] = useState<number[]>([0])

  const toggle = (i: number) =>
    setOpen((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i],
    )

  return (
    <section className="services-page">
      <h1 className="services-title">Services</h1>

      <div className="accordion">
        {categories.map((cat, i) => {
          const isOpen = open.includes(i)
          return (
            <Reveal key={cat.title} className="acc-item" delay={i * 60}>
              <button
                type="button"
                className="acc-header"
                aria-expanded={isOpen}
                onClick={() => toggle(i)}
              >
                <span className="acc-title">{cat.title}</span>
                {isOpen ? (
                  <Minus className="acc-icon" size={28} strokeWidth={3} />
                ) : (
                  <Plus className="acc-icon" size={28} strokeWidth={3} />
                )}
              </button>

              <div className={`acc-panel${isOpen ? ' open' : ''}`}>
                <div className="acc-panel-inner">
                  {cat.items?.map((item) => (
                    <div className="svc-item" key={item.name}>
                      <span className="svc-name">{item.name}</span>
                      <span className="svc-price">
                        {priceLine(item)}
                        {item.note && (
                          <span className="svc-note"> ({item.note})</span>
                        )}
                      </span>
                    </div>
                  ))}
                  {cat.note && <p className="acc-note">{cat.note}</p>}
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

export default OurServices
