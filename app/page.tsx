import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ExternalLink,
  Mail,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const emailHref =
  'mailto:ethanhuynh365@gmail.com?subject=Website%20project%20inquiry';

const services = [
  {
    number: '01',
    title: 'New websites',
    copy: 'A focused website built around what your customers need to see and do.',
    tag: 'Design + build',
  },
  {
    number: '02',
    title: 'Site redesigns',
    copy: 'A sharper structure and visual system for a website that has fallen behind.',
    tag: 'Refresh',
  },
  {
    number: '03',
    title: 'No-code editing',
    copy: 'A simple editor so you can change your own text, photos, and key information.',
    tag: 'Handoff',
  },
  {
    number: '04',
    title: 'Maintenance',
    copy: 'Content changes, troubleshooting, speed fixes, and general website upkeep.',
    tag: 'Support',
  },
  {
    number: '05',
    title: 'Local essentials',
    copy: 'Contact forms, booking tools, maps, social links, and basic search setup.',
    tag: 'Integrations',
  },
];

const buildSteps = [
  ['01', 'Listen', 'Your business, customers, and goals.'],
  ['02', 'Design', 'A clear direction before the full build.'],
  ['03', 'Build', 'Responsive, fast, and easy to manage.'],
  ['04', 'Launch', 'Final checks, handoff, and support.'],
];

const pricingOptions = [
  {
    eyebrow: 'WEBSITE LAUNCH',
    price: '$100+',
    cadence: 'ONE TIME',
    description:
      'A focused, responsive website shaped around your business and the actions you want visitors to take.',
    features: [
      'CUSTOM PAGE DIRECTION',
      'MOBILE + DESKTOP BUILD',
      'DOMAIN CONNECTION',
      'FOUNDATIONAL SEO',
    ],
  },
  {
    eyebrow: 'SITE CARE',
    price: '$25',
    cadence: '/ MONTH',
    description:
      'Ongoing help after the included six-month support window, for businesses that want their site looked after.',
    features: [
      'SMALL CONTENT CHANGES',
      'ROUTINE SITE CHECKS',
      'HOSTING + SSL OVERSIGHT',
      'EMAIL SUPPORT',
    ],
  },
  {
    eyebrow: 'SEARCH GROWTH',
    price: '$75+',
    cadence: '/ MONTH',
    description:
      'A steady program for improving how your website is understood, discovered, and measured over time.',
    features: [
      'ON-PAGE SEO IMPROVEMENTS',
      'SEARCH OPPORTUNITY REVIEW',
      'TRAFFIC CHECK-IN',
      'MONTHLY PRIORITIES',
    ],
  },
  {
    eyebrow: 'CONTENT STARTER PACK',
    price: '$95',
    cadence: 'ONE TIME',
    description:
      'A concise writing pass that gives your most important page a clearer message and stronger next step.',
    features: [
      'HOMEPAGE MESSAGE REVIEW',
      'SERVICE COPY POLISH',
      'CALL-TO-ACTION WRITING',
      'ONE REVISION ROUND',
    ],
  },
];

export default function Home() {
  return (
    <main id="top">
      <header className="topbar page-grid">
        <a className="brand" href="#top" aria-label="HDD — Huynh Digital DFW home">
          <Image
            src="/hdd-logo.png"
            alt=""
            width={1050}
            height={475}
            priority
          />
        </a>

        <div className="availability">
          <span className="signal" /> AVAILABLE FOR PROJECTS
        </div>

        <nav aria-label="Main navigation">
          <a href="#capabilities">CAPABILITIES</a>
          <a href="#prototypes">PROTOTYPES</a>
          <a href="#pricing">PRICING</a>
          <a className="email-link" href={emailHref}>
            EMAIL ME <ArrowRight aria-hidden="true" />
          </a>
        </nav>
      </header>

      <section className="hero page-grid">
        <div className="hero-index blueprint-label">
          <span>PROJECT TYPE</span>
          <strong>SMALL BUSINESS WEB</strong>
          <span>REGION</span>
          <strong>DALLAS–FORT WORTH</strong>
        </div>

        <div className="hero-main">
          <p className="kicker">INDEPENDENT DESIGN + DEVELOPMENT</p>
          <h1>
            WEBSITES
            <span>BUILT LIKE</span>
            THEY MATTER.
          </h1>
          <div className="hero-summary">
            <p>
              Custom websites for small businesses. Clear to use, easy to
              update, and backed by six months of support after launch.
            </p>
            <a className="action-link" href={emailHref}>
              START A PROJECT
              <span>
                <ArrowDownRight aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>

        <aside className="build-console" aria-label="Website build status">
          <div className="console-title">
            <span>BUILD_LOG.TXT</span>
            <span className="console-status">LIVE</span>
          </div>
          <div className="console-screen">
            <p>
              <span>01</span> DEFINE THE GOAL
            </p>
            <p>
              <span>02</span> DESIGN THE SYSTEM
            </p>
            <p>
              <span>03</span> BUILD FOR EVERY SCREEN
            </p>
            <p>
              <span>04</span> HAND OVER CONTROL
            </p>
            <a className="console-email-cta" href={emailHref}>
              <Mail aria-hidden="true" />
              <strong>EMAIL HDD</strong>
              <ArrowRight aria-hidden="true" />
            </a>
          </div>
          <div className="console-footer">
            <span>OUTPUT: YOURBUSINESS.COM</span>
            <span>READY_</span>
          </div>
        </aside>

        <div className="hero-coordinate coordinate-one">X: 032 / Y: 118</div>
        <div className="hero-coordinate coordinate-two">SYSTEM 01.26</div>
      </section>

      <div className="marquee" aria-label="Website benefits">
        <div>
          <span>NO AGENCY MARKUP</span>
          <b>+</b>
          <span>MOBILE READY</span>
          <b>+</b>
          <span>NO-CODE EDITING</span>
          <b>+</b>
          <span>SIX MONTHS SUPPORT</span>
          <b>+</b>
          <span>BUILT FOR YOUR BUSINESS</span>
          <b>+</b>
        </div>
      </div>

      <section className="capabilities page-grid" id="capabilities">
        <div className="section-code blueprint-label">
          <span>SECTION</span>
          <strong>CAPABILITIES</strong>
          <span>ITEMS</span>
          <strong>05</strong>
        </div>

        <div className="section-intro">
          <p className="kicker">WHAT I CAN DO</p>
          <h2>THE WORK, WITHOUT THE RUNAROUND.</h2>
        </div>

        <div className="service-list">
          {services.map((service) => (
            <article className="service-row" key={service.number}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <span className="service-tag">[{service.tag}]</span>
            </article>
          ))}
        </div>
      </section>

      <section className="prototype-section" id="prototypes">
        <div className="page-grid prototype-heading">
          <div className="section-code blueprint-label">
            <span>SECTION</span>
            <strong>PROTOTYPE LIBRARY</strong>
            <span>STATUS</span>
            <strong>2 CONCEPTS + 1 LIVE CLIENT</strong>
          </div>
          <div className="section-intro">
            <p className="kicker">EXAMPLE DIRECTIONS</p>
            <h2>THREE BUSINESSES. THREE DIFFERENT ANSWERS.</h2>
            <p className="section-copy">
              Two are design studies built to show direction, not recycled
              templates. The third is a real, live client site. Your site
              gets its own direction either way.
            </p>
          </div>
        </div>

        <div className="prototype-stack">
          <Link href="/prototypes/ember-kitchen" className="prototype prototype-ember">
            <div className="prototype-rail">
              <span>PROTOTYPE_01</span>
              <span>HOSPITALITY</span>
            </div>
            <div className="prototype-browser">
              <div className="proto-nav">
                <b>EMBER / KITCHEN</b>
                <span>MENU&nbsp;&nbsp;&nbsp; STORY&nbsp;&nbsp;&nbsp; VISIT</span>
              </div>
              <div className="ember-copy">
                <small>OPEN DAILY / OAK CLIFF</small>
                <strong>Comfort food.<br />Done properly.</strong>
                <i>VIEW TODAY’S MENU</i>
              </div>
              <div className="ember-type" aria-hidden="true">E</div>
            </div>
            <footer>
              <div>
                <span>RESTAURANT CONCEPT</span>
                <h3>Ember Kitchen</h3>
              </div>
              <ExternalLink aria-hidden="true" />
            </footer>
          </Link>

          <Link href="/prototypes/northstar-services" className="prototype prototype-northstar">
            <div className="prototype-rail">
              <span>PROTOTYPE_02</span>
              <span>HOME SERVICES</span>
            </div>
            <div className="prototype-browser">
              <div className="proto-nav">
                <b>NORTHSTAR</b>
                <span>SERVICES&nbsp;&nbsp;&nbsp; REVIEWS&nbsp;&nbsp;&nbsp; CONTACT</span>
              </div>
              <div className="northstar-grid">
                <div>
                  <small>DFW HOME SERVICES</small>
                  <strong>Good work.<br />No runaround.</strong>
                  <i>REQUEST A QUOTE</i>
                </div>
                <div className="metric-block">
                  <span>LOCAL RATING</span>
                  <b>4.9</b>
                  <small>★★★★★ / VERIFIED</small>
                </div>
              </div>
            </div>
            <footer>
              <div>
                <span>TRADES CONCEPT</span>
                <h3>Northstar Services</h3>
              </div>
              <ExternalLink aria-hidden="true" />
            </footer>
          </Link>

          <Link
            href="https://kimsnailspapalestinecom.com"
            target="_blank"
            rel="noopener noreferrer"
            className="prototype prototype-juniper"
          >
            <div className="prototype-rail">
              <span>LIVE CLIENT SITE</span>
              <span>NAIL SALON</span>
            </div>
            <div className="prototype-browser">
              <div className="proto-nav">
                <b>KIM&apos;S NAIL &amp; SPA</b>
                <span>SERVICES&nbsp;&nbsp;&nbsp; GALLERY&nbsp;&nbsp;&nbsp; CONTACT</span>
              </div>
              <div className="juniper-layout">
                <div className="juniper-copy">
                  <small>PALESTINE, TX</small>
                  <strong>Beautifully<br />done nails.</strong>
                  <i>CALL TO BOOK</i>
                </div>
                <div className="juniper-poster" aria-hidden="true">
                  <span>K</span>
                  <i>MANICURES</i>
                  <i>PEDICURES</i>
                  <i>NAIL ART</i>
                </div>
              </div>
            </div>
            <footer>
              <div>
                <span>NAIL SALON · PALESTINE, TX</span>
                <h3>Kim&apos;s Nail &amp; Spa</h3>
              </div>
              <ExternalLink aria-hidden="true" />
            </footer>
          </Link>
        </div>
      </section>

      <section className="process page-grid">
        <div className="section-code blueprint-label">
          <span>SECTION</span>
          <strong>WORKFLOW</strong>
          <span>STAGES</span>
          <strong>04</strong>
        </div>

        <div className="section-intro process-intro">
          <p className="kicker">HOW IT GETS BUILT</p>
          <h2>YOU ALWAYS KNOW WHAT’S NEXT.</h2>
        </div>

        <div className="process-list">
          {buildSteps.map(([number, title, copy]) => (
            <div className="process-step" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <i />
            </div>
          ))}
        </div>
      </section>

      <section className="support-block page-grid">
        <div className="support-code">
          <span>AFTERCARE_PROTOCOL</span>
          <span>ACTIVE</span>
        </div>
        <div className="support-number">6M</div>
        <div className="support-message">
          <p className="kicker">AFTER LAUNCH</p>
          <h2>SUPPORT IS PART OF THE BUILD.</h2>
          <p>
            Six months of help with minor content updates, troubleshooting,
            and learning how to manage your new site.
          </p>
        </div>
        <ul>
          <li><Check aria-hidden="true" /> MINOR CONTENT UPDATES</li>
          <li><Check aria-hidden="true" /> TROUBLESHOOTING</li>
          <li><Check aria-hidden="true" /> EDITOR GUIDANCE</li>
        </ul>
      </section>

      <section className="pricing-section page-grid" id="pricing">
        <div className="pricing-header">
          <div>
            <p className="kicker">CLEAR STARTING POINTS</p>
            <h2>PRICING THAT FITS THE WORK.</h2>
          </div>
          <div className="pricing-summary">
            <p>
              Rates stay competitive without forcing every project into the
              same package. Your quote reflects the pages, features, and
              support your business actually needs, with scheduled payment
              options available.
            </p>
            <a href={emailHref}>
              REQUEST A QUOTE <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="pricing-grid">
          {pricingOptions.map((option) => (
            <article className="pricing-card" key={option.eyebrow}>
              <p className="pricing-eyebrow">{option.eyebrow}</p>
              <div className="pricing-amount">
                <strong>{option.price}</strong>
                <span>{option.cadence}</span>
              </div>
              <p className="pricing-description">{option.description}</p>
              <ul>
                {option.features.map((feature) => (
                  <li key={feature}>
                    <Check aria-hidden="true" /> {feature}
                  </li>
                ))}
              </ul>
              <a href={emailHref}>
                ASK ABOUT THIS <ArrowRight aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>

        <p className="pricing-note">
          FINAL WEBSITE QUOTES VARY WITH SCOPE, FUNCTIONALITY, AND INTEGRATIONS.
        </p>
      </section>

      <section className="contact-section">
        <div className="contact-coordinates">32.7767° N / 96.7970° W</div>
        <div className="contact-inner">
          <p className="kicker">READY WHEN YOU ARE</p>
          <h2>LET’S BUILD<br />YOUR SITE.</h2>
          <a href={emailHref}>
            <Mail aria-hidden="true" />
            <span>ETHANHUYNH365@GMAIL.COM</span>
            <ArrowRight aria-hidden="true" />
          </a>
        </div>
        <div className="contact-footer">
          <span>© 2026 HDD / HUYNH DIGITAL DFW</span>
          <span>DALLAS–FORT WORTH / REMOTE</span>
          <a href="#top">BACK TO TOP ↑</a>
        </div>
      </section>
    </main>
  );
}
