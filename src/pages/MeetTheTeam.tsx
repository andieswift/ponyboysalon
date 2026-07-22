import { BOOKING_URL } from '../config'
import freyaPhoto from '../assets/freya-blob.png'
import ravenPhoto from '../assets/raven-blob.png'
import './MeetTheTeam.css'

const team = [
  {
    slug: 'freya',
    name: 'Freya',
    photo: freyaPhoto,
    alt: 'Freya, hairstylist at Pony Boy Salon',
    bio: 'Freya is an expert in crafting unique looks that let you express your true self. The salon offers a welcoming space where everyone is encouraged to be bold and “bring their weird out!”',
  },
  {
    slug: 'raven',
    name: 'Raven',
    photo: ravenPhoto,
    alt: 'Raven, hairstylist at Pony Boy Salon',
    bio: 'Raven is a hairstylist who loves creative color and funky cuts, but also loves a good staple look. They’re passionate about connecting with people and creating a welcoming, relaxed experience where everyone feels comfortable being themselves. Making people happy through hair is what they love most, and they’re always excited to help bring your vision to life.',
  },
]

function MeetTheTeam() {
  return (
    <section className="team-page">
      <h1 className="team-title">The Team</h1>

      <div className="container">
        {team.map((m) => (
          <article key={m.slug} className='member-article'>
            <h2 className="member-name">{m.name}</h2>
            <img className="member-photo" src={m.photo} alt={m.alt} />
            <div className="member-composition">
              <div className="member-block">
                <p className="member-bio">{m.bio}</p>
              </div>
              
            </div>
          </article>
        ))}
      </div>

    
    </section>
  )
}

export default MeetTheTeam
