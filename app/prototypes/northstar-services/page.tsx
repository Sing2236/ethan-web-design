import {
  ArrowRight,
  Droplets,
  Flame,
  ShieldCheck,
  Wrench,
  Zap,
} from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import './northstar-services.css';

export const metadata: Metadata = {
  title: 'Northstar Services | Prototype — Ethan Web Studio',
  description:
    'Design study for a home services company: clean, trust-driven, quote-first.',
};

const services = [
  {
    icon: Wrench,
    title: 'Plumbing Repair',
    copy: 'Leaks, clogs, water heaters, and full repipes — diagnosed and fixed same-day when possible.',
  },
  {
    icon: Zap,
    title: 'Electrical Work',
    copy: 'Panel upgrades, outlet and lighting installs, and code-compliant rewiring.',
  },
  {
    icon: Flame,
    title: 'HVAC Service',
    copy: 'Repairs, seasonal tune-ups, and full system replacement with upfront pricing.',
  },
  {
    icon: Droplets,
    title: 'Water Damage',
    copy: 'Fast leak detection and mitigation before small problems become big ones.',
  },
  {
    icon: ShieldCheck,
    title: 'Home Inspections',
    copy: 'A straight-talk walkthrough of what needs attention now versus later.',
  },
  {
    icon: Wrench,
    title: 'General Handyman',
    copy: 'The list of small jobs you have been putting off, handled in one visit.',
  },
];

const process = [
  ['1', 'Call or click', 'Tell us what is going on. No hold music.'],
  ['2', 'Get a real quote', 'Flat pricing before anyone touches a tool.'],
  ['3', 'We show up on time', 'Tracked arrival window, every visit.'],
  ['4', 'Job done right', 'Backed by our workmanship guarantee.'],
];

const reviews = [
  {
    quote: 'Quoted a fair price, showed up exactly when they said, fixed it in an hour.',
    name: 'K. Ramirez — Plano, TX',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=75',
  },
  {
    quote: 'No upsell pressure. Just told me what actually needed fixing.',
    name: 'T. Nguyen — Frisco, TX',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=75',
  },
  {
    quote: 'Been using them for three years across two houses. Never once disappointed.',
    name: 'B. Carter — Arlington, TX',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=75',
  },
];

const areas = [
  'Dallas',
  'Fort Worth',
  'Plano',
  'Frisco',
  'Arlington',
  'Irving',
];

export default function NorthstarServicesPage() {
  return (
    <div className="ns">
      <div className="ns-topline">
        <span>
          <b>24/7 emergency line</b> · same-day appointments available
        </span>
      </div>

      <header className="ns-header">
        <div className="ns-shell" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <Link href="/#prototypes" className="ns-back">
            ← BACK TO ETHAN WEB STUDIO
          </Link>
          <div className="ns-logo">
            <span className="ns-logo-mark">N</span>
            Northstar Services
          </div>
          <nav className="ns-nav">
            <a href="#services">Services</a>
            <a href="#reviews">Reviews</a>
            <a href="#area">Service Area</a>
            <a className="ns-btn" href="#quote">
              Get a free quote
            </a>
          </nav>
        </div>
      </header>

      <div className="ns-shell">
        <section className="ns-hero">
          <div className="ns-hero-image">
            <Image
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=80"
              alt="A Northstar electrician working safely on a home panel"
              width={900}
              height={720}
              priority
            />
            <div className="ns-hero-image-badge">
              <ShieldCheck size={16} />
              Background-checked crews
            </div>
          </div>

          <div>
            <div className="ns-badges">
              <span className="ns-badge">LICENSED & INSURED</span>
              <span className="ns-badge">DFW LOCAL</span>
            </div>
            <h1>
              Good work. <span>No runaround.</span>
            </h1>
            <p>
              Northstar handles the plumbing, electrical, and HVAC jobs DFW
              homeowners actually need done — with flat quotes, on-time
              arrivals, and a crew that explains what they&apos;re doing.
            </p>
            <div className="ns-hero-actions">
              <a className="ns-btn" href="#quote">
                Request a quote <ArrowRight size={16} />
              </a>
              <a className="ns-btn ns-btn-outline" href="#services">
                See all services
              </a>
            </div>
            <div className="ns-trust-row">
              <div>
                <b>4.9★</b>
                <span>1,200+ reviews</span>
              </div>
              <div>
                <b>18 yrs</b>
                <span>Serving DFW</span>
              </div>
              <div>
                <b>60 min</b>
                <span>Avg. arrival window</span>
              </div>
            </div>
          </div>

          <div className="ns-hero-card" id="quote">
            <div className="ns-quote-title">
              <b>●</b> RESPONSE TIME: UNDER 2 HOURS
            </div>
            <h3>Get a free, no-pressure quote</h3>
            <div className="ns-quote-field">
              <div className="ns-quote-row">
                <span>Service needed</span>
                <span>Plumbing repair</span>
              </div>
              <div className="ns-quote-row">
                <span>Preferred time</span>
                <span>Today, 2–4 PM</span>
              </div>
              <div className="ns-quote-row">
                <span>Location</span>
                <span>Plano, TX</span>
              </div>
            </div>
            <a
              className="ns-btn"
              href="mailto:ethanhuynh365@gmail.com?subject=Northstar%20Services%20website%20inquiry"
            >
              Send request
            </a>
          </div>
        </section>
      </div>

      <div className="ns-rating-strip">
        <div className="ns-shell">
          <div className="ns-stars">★★★★★</div>
          <p>4.9 out of 5 from 1,200+ verified DFW homeowners</p>
          <p>Licensed · Bonded · Insured</p>
        </div>
      </div>

      <div className="ns-shell">
        <section className="ns-section" id="services">
          <div className="ns-section-head">
            <span className="ns-kicker">WHAT WE HANDLE</span>
            <h2>One call for everything the house throws at you.</h2>
            <p>From a dripping faucet to a full panel upgrade, our licensed crews handle it without the runaround.</p>
          </div>
          <div className="ns-services">
            {services.map((service) => (
              <div className="ns-service-card" key={service.title}>
                <div className="ns-service-icon">
                  <service.icon size={20} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="ns-process-band">
        <div className="ns-shell">
          <section className="ns-section">
            <div className="ns-section-head" style={{ color: '#fff' }}>
              <span className="ns-kicker">HOW IT WORKS</span>
              <h2 style={{ color: '#fff' }}>Four steps, zero surprises.</h2>
            </div>
            <div className="ns-process">
              {process.map(([num, title, copy]) => (
                <div className="ns-process-step" key={num}>
                  <span>{num}</span>
                  <h4>{title}</h4>
                  <p>{copy}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className="ns-banner">
        <Image
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=75"
          alt="A Northstar technician finishing a job inside a client's home"
          width={1600}
          height={700}
        />
        <div className="ns-banner-overlay">
          <div className="ns-shell ns-banner-stats">
            <div>
              <b>12,400+</b>
              <span>Jobs completed</span>
            </div>
            <div>
              <b>18</b>
              <span>Years in DFW</span>
            </div>
            <div>
              <b>Zero</b>
              <span>Callback fees</span>
            </div>
          </div>
        </div>
      </div>

      <div className="ns-shell">
        <section className="ns-section" id="reviews">
          <div className="ns-section-head">
            <span className="ns-kicker">FROM THE NEIGHBORHOOD</span>
            <h2>What homeowners tell us after the job is done.</h2>
          </div>
          <div className="ns-reviews">
            {reviews.map((r) => (
              <div className="ns-review" key={r.name}>
                <div className="ns-stars">★★★★★</div>
                <p>&ldquo;{r.quote}&rdquo;</p>
                <div className="ns-review-author">
                  <Image src={r.photo} alt="" width={44} height={44} />
                  <span>{r.name}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="ns-section" id="area">
          <div className="ns-area">
            <div>
              <span className="ns-kicker">SERVICE AREA</span>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, margin: '0.5rem 0 0.8rem' }}>
                Proudly serving the DFW metro.
              </h2>
              <p style={{ color: 'var(--ns-muted)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                If you&apos;re inside the loop, chances are we&apos;re already working
                a job down the street.
              </p>
              <div className="ns-area-list">
                {areas.map((area) => (
                  <span key={area}>{area}</span>
                ))}
              </div>
            </div>
            <div className="ns-area-map" aria-hidden="true">
              <span>DALLAS – FORT WORTH METRO</span>
            </div>
          </div>
        </section>

        <section className="ns-section" style={{ paddingTop: 0 }}>
          <div className="ns-cta-band">
            <div>
              <h2>Something needs fixing. Let&apos;s get it scheduled.</h2>
              <p>Free quotes, flat pricing, and a crew that actually shows up on time.</p>
            </div>
            <a className="ns-btn" href="#quote">
              Request a quote <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </div>

      <footer className="ns-footer">
        <div className="ns-shell">
          <div className="ns-footer-grid">
            <div>
              <h4>Northstar Services</h4>
              <p>Licensed, bonded, and insured home services across the Dallas–Fort Worth metro.</p>
            </div>
            <div>
              <h4>Contact</h4>
              <a href="tel:2145550199">(214) 555-0199</a>
              <a href="mailto:hello@northstarservices.example">hello@northstarservices.example</a>
            </div>
            <div>
              <h4>Hours</h4>
              <p>Mon–Sat, 7AM–8PM</p>
              <p>24/7 emergency line</p>
            </div>
          </div>
          <div className="ns-footer-bottom">
            <span>© 2026 NORTHSTAR SERVICES</span>
            <span>DESIGN STUDY BY ETHAN WEB STUDIO</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
