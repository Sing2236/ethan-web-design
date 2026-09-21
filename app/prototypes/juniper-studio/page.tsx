import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import './juniper-studio.css';

export const metadata: Metadata = {
  title: 'Juniper Studio | Prototype — HDD',
  description:
    'Design study for a wellness studio: calm, editorial, appointment-first.',
};

const offerings = [
  {
    num: '01',
    title: 'Rest',
    copy: 'Restorative bodywork and breath sessions designed to bring your system back to baseline.',
  },
  {
    num: '02',
    title: 'Reset',
    copy: 'One-on-one guided sessions focused on tension patterns and nervous system regulation.',
  },
  {
    num: '03',
    title: 'Return',
    copy: 'Ongoing membership care so the calm you find here does not stay in the room.',
  },
];

const team = [
  {
    name: 'Mara Lindqvist',
    role: 'Founder, Bodywork',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Devon Okafor',
    role: 'Breathwork Guide',
    photo: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Priya Shenoy',
    role: 'Movement & Recovery',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80',
  },
];

const schedule = [
  ['Morning Reset', 'Mon · Wed · Fri', '7:30 AM'],
  ['Breathwork Circle', 'Tue · Thu', '12:00 PM'],
  ['Restorative Flow', 'Every day', '6:00 PM'],
  ['Private Session', 'By appointment', 'Flexible'],
];

const quotes = [
  {
    quote: 'The only hour of my week where my phone actually stays in the car.',
    name: 'E. Marsh, member since 2023',
  },
  {
    quote: 'Quietly one of the best-designed spaces I have been in — it changes how you breathe just walking in.',
    name: 'Dallas Wellness Guide',
  },
];

export default function JuniperStudioPage() {
  return (
    <div className="jn">
      <header className="jn-header jn-shell">
        <div className="jn-header-row">
          <Link href="/#prototypes" className="jn-back">
            ← BACK TO HDD
          </Link>
          <div className="jn-wordmark">Juniper — Studio</div>
          <nav className="jn-nav">
            <a href="#care">Care</a>
            <a href="#team">Team</a>
            <a href="#journal">Schedule</a>
            <a className="jn-btn" href="#book">
              Book a visit
            </a>
          </nav>
        </div>
      </header>

      <section className="jn-hero">
        <Image
          className="jn-hero-photo"
          src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&w=1800&q=80"
          alt="A woman sitting cross-legged in quiet meditation"
          width={1800}
          height={1100}
          priority
        />
        <div className="jn-hero-scrim" />
        <div className="jn-shell jn-hero-copy">
          <span className="jn-eyebrow">A QUIETER KIND OF CARE — DALLAS</span>
          <h1 className="jn-serif">
            Make space <em>to feel better.</em>
          </h1>
          <p>
            Juniper Studio is a small wellness practice built around
            bodywork, breath, and enough quiet to actually notice the
            difference.
          </p>
          <div className="jn-hero-actions">
            <a className="jn-btn" href="#book">
              Book a visit <ArrowRight size={15} />
            </a>
            <a className="jn-btn jn-btn-line" href="#care">
              Explore our care
            </a>
          </div>
        </div>
      </section>

      <div className="jn-strip">
        <div className="jn-shell jn-strip-row">
          <div>
            <b>1:1</b>
            <span>Private sessions</span>
          </div>
          <div>
            <b>6</b>
            <span>Years in Dallas</span>
          </div>
          <div>
            <b>92%</b>
            <span>Member retention</span>
          </div>
        </div>
      </div>

      <div className="jn-shell">
        <section className="jn-section" id="care">
          <div className="jn-section-head">
            <h2 className="jn-serif">How we care for you</h2>
            <p>Three phases, one practice — built to meet you wherever your nervous system is today.</p>
          </div>
          <div className="jn-offerings">
            {offerings.map((o) => (
              <div className="jn-offering" key={o.num}>
                <span className="jn-offering-num jn-serif">{o.num}</span>
                <h3>{o.title}</h3>
                <p>{o.copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="jn-section" id="team">
          <div className="jn-section-head">
            <h2 className="jn-serif">The people behind it</h2>
            <p>A small, deliberately unhurried team.</p>
          </div>
          <div className="jn-team">
            {team.map((p) => (
              <div className="jn-person" key={p.name}>
                <Image
                  className="jn-person-photo"
                  src={p.photo}
                  alt={p.name}
                  width={600}
                  height={750}
                />
                <h4>{p.name}</h4>
                <span>{p.role}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="jn-schedule" id="journal">
        <div className="jn-shell jn-section">
          <div className="jn-section-head" style={{ color: '#faf7f2' }}>
            <h2 className="jn-serif" style={{ color: '#faf7f2' }}>This week&apos;s schedule</h2>
            <p style={{ color: '#b3a4e6' }}>Drop in, or reserve a private session anytime.</p>
          </div>
          <table>
            <thead>
              <tr>
                <th>Session</th>
                <th>Days</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map(([name, days, time]) => (
                <tr key={name}>
                  <td>{name}</td>
                  <td>{days}</td>
                  <td>{time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="jn-shell">
        <section className="jn-section">
          <div className="jn-quotes">
            {quotes.map((q) => (
              <div className="jn-quote" key={q.name}>
                <p>&ldquo;{q.quote}&rdquo;</p>
                <span>{q.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="jn-section" id="book" style={{ paddingTop: 0 }}>
          <div className="jn-booking">
            <Image
              className="jn-booking-photo"
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80"
              alt="A calming oil massage session at Juniper Studio"
              width={600}
              height={700}
            />
            <div>
              <h2 className="jn-serif">Come sit with us for an hour.</h2>
              <p>
                First visits include a short conversation about what you
                need before we begin — no forms, just a real answer.
              </p>
              <a
                className="jn-btn"
                href="mailto:ethanhuynh365@gmail.com?subject=Juniper%20Studio%20website%20inquiry"
              >
                Request your first session <ArrowRight size={15} />
              </a>
            </div>
            <div className="jn-booking-card">
              <div className="jn-booking-row">
                <span>Studio</span>
                <span>Bishop Arts, Dallas</span>
              </div>
              <div className="jn-booking-row">
                <span>Hours</span>
                <span>Mon–Sat, 7AM–7PM</span>
              </div>
              <div className="jn-booking-row">
                <span>First visit</span>
                <span>60 min · by appointment</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="jn-footer jn-shell">
        <span>© 2026 JUNIPER STUDIO</span>
        <span>DESIGN STUDY BY HDD / HUYNH DIGITAL DFW</span>
      </footer>
    </div>
  );
}
