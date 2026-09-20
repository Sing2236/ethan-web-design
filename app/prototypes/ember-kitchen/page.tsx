import { ArrowRight, ArrowUpRight } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import './ember-kitchen.css';

export const metadata: Metadata = {
  title: 'Ember Kitchen | Prototype — Ethan Web Studio',
  description:
    'Design study for a neighborhood restaurant: warm, editorial, appetite-first.',
};

const menu = [
  {
    name: 'Charred Oak Ribeye',
    copy: 'Dry-aged 21 days, finished over live oak, herb butter.',
    price: '$38',
  },
  {
    name: 'Fire-Roasted Carrots',
    copy: 'Whipped goat cheese, chili honey, toasted pistachio.',
    price: '$14',
  },
  {
    name: 'Skillet Cornbread',
    copy: 'Cast iron, brown butter, sorghum drizzle.',
    price: '$9',
  },
  {
    name: 'Smoked Tomato Soup',
    copy: 'Slow-roasted tomatoes, smoked paprika, grilled sourdough.',
    price: '$12',
  },
  {
    name: 'Braised Short Rib',
    copy: 'Red wine reduction, root vegetable mash, crispy shallots.',
    price: '$29',
  },
  {
    name: 'Charcoal Flatbread',
    copy: "Whipped ricotta, blistered grapes, chili crunch.",
    price: '$16',
  },
];

const stats = [
  ['9', 'Years on Davis Street'],
  ['100%', 'Wood-fired cooking'],
  ['4.9', 'Average rating'],
];

const testimonials = [
  {
    quote: 'The kind of place you bring people when you want them to remember Dallas.',
    name: 'Dallas Morning Table',
  },
  {
    quote: 'Every plate looks like it was cooked for one person — you.',
    name: 'M. Alvarez, regular since 2019',
  },
  {
    quote: 'Loud in the best way. Book ahead, it fills fast on weekends.',
    name: 'Oak Cliff Advocate',
  },
];

export default function EmberKitchenPage() {
  return (
    <div className="ek">
      <header className="ek-header">
        <Link href="/#prototypes" className="ek-back">
          ← BACK TO ETHAN WEB STUDIO
        </Link>
        <div className="ek-wordmark">
          Ember <span>KITCHEN</span>
        </div>
        <nav className="ek-nav">
          <a href="#menu">Menu</a>
          <a href="#story">Story</a>
          <a href="#visit">Visit</a>
          <a className="ek-cta" href="#visit">
            Reserve a table
          </a>
        </nav>
      </header>

      <section className="ek-hero">
        <div className="ek-hero-copy">
          <span className="ek-eyebrow">OPEN DAILY · OAK CLIFF, DALLAS</span>
          <h1 className="ek-serif">
            Comfort food, <em>done properly.</em>
          </h1>
          <p>
            Ember Kitchen is a wood-fired neighborhood restaurant built around
            one idea: cook everything over real fire, keep the room warm, and
            never rush a table.
          </p>
          <div className="ek-hero-actions">
            <a className="ek-btn" href="#visit">
              Reserve a table <ArrowRight size={16} />
            </a>
            <div className="ek-hero-hours">
              <b>Tue–Sun, 5PM–11PM</b>
              Closed Mondays
            </div>
          </div>
        </div>
        <div className="ek-hero-visual">
          <div className="ek-plate">
            <Image
              src="https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=900&q=80"
              alt="Smoked ribs sliced on a wood board"
              width={900}
              height={900}
              priority
            />
          </div>
          <div className="ek-tag-card">TONIGHT: SHORT RIB SPECIAL</div>
        </div>
      </section>

      <div className="ek-marquee" aria-hidden="true">
        <div>
          <span>WOOD-FIRED</span>
          <b>·</b>
          <span>LOCALLY SOURCED</span>
          <b>·</b>
          <span>SCRATCH KITCHEN</span>
          <b>·</b>
          <span>FAMILY OWNED</span>
          <b>·</b>
          <span>WOOD-FIRED</span>
          <b>·</b>
          <span>LOCALLY SOURCED</span>
          <b>·</b>
          <span>SCRATCH KITCHEN</span>
          <b>·</b>
          <span>FAMILY OWNED</span>
          <b>·</b>
        </div>
      </div>

      <section className="ek-section" id="menu">
        <div className="ek-section-head">
          <h2 className="ek-serif">Tonight&apos;s menu</h2>
          <p>A short, seasonal list. Everything touches the fire before it touches your plate.</p>
        </div>
        <div className="ek-menu">
          {menu.map((item) => (
            <div className="ek-menu-item" key={item.name}>
              <div>
                <h4>{item.name}</h4>
                <p>{item.copy}</p>
              </div>
              <span className="ek-menu-price">{item.price}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="ek-section ek-story" id="story">
        <div className="ek-story-grid">
          <div>
            <h2>Fire is the whole menu.</h2>
            <p>
              We opened Ember with one rule: if it can&apos;t be cooked over
              wood, it doesn&apos;t go on the menu. Nine years later, that&apos;s
              still the only rule.
            </p>
          </div>
          <div className="ek-story-stats">
            {stats.map(([num, label]) => (
              <div className="ek-stat" key={label}>
                <b>{num}</b>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ek-section">
        <div className="ek-section-head">
          <h2 className="ek-serif">Around the kitchen</h2>
          <p>A look at the dining room and the fire that runs it.</p>
        </div>
        <div className="ek-gallery">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=700&q=75"
            alt="A plated dish on a table set with wine glasses"
            width={700}
            height={700}
          />
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=700&q=75"
            alt="Ember Kitchen's warm, dimly-lit dining room"
            width={700}
            height={700}
          />
          <Image
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=700&q=75"
            alt="An overhead spread of shared plates"
            width={700}
            height={700}
          />
          <Image
            src="https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=700&q=75"
            alt="A bowl of shrimp and rice, fresh from the kitchen"
            width={700}
            height={700}
          />
        </div>
      </section>

      <section className="ek-section">
        <div className="ek-section-head">
          <h2 className="ek-serif">What people say</h2>
        </div>
        <div className="ek-testimonials">
          {testimonials.map((t) => (
            <div className="ek-testimonial" key={t.name}>
              <p>&ldquo;{t.quote}&rdquo;</p>
              <span>{t.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="ek-section" id="visit" style={{ borderBottom: 0 }}>
        <div className="ek-section-head">
          <h2 className="ek-serif">Visit us</h2>
          <p>Walk-ins welcome. Reservations recommended Thursday–Saturday.</p>
        </div>
        <div className="ek-visit">
          <div className="ek-visit-details">
            <div className="ek-visit-row">
              <span>Address</span>
              <b>412 Davis Street, Dallas, TX</b>
            </div>
            <div className="ek-visit-row">
              <span>Hours</span>
              <b>Tue–Sun, 5PM–11PM</b>
            </div>
            <div className="ek-visit-row">
              <span>Phone</span>
              <b>(214) 555-0148</b>
            </div>
            <a
              className="ek-btn"
              href="mailto:ethanhuynh365@gmail.com?subject=Ember%20Kitchen%20website%20inquiry"
              style={{ alignSelf: 'flex-start' }}
            >
              Reserve a table <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="ek-map" aria-hidden="true">
            <span>412 DAVIS ST, OAK CLIFF</span>
          </div>
        </div>
      </section>

      <footer className="ek-footer">
        <span>© 2026 EMBER KITCHEN</span>
        <span>DESIGN STUDY BY ETHAN WEB STUDIO</span>
      </footer>
    </div>
  );
}
