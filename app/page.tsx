import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Code2,
  Gauge,
  LayoutTemplate,
  Mail,
  MapPin,
  MonitorSmartphone,
  Search,
  Settings2,
  Sparkles,
  Wrench,
} from 'lucide-react';

const emailHref =
  'mailto:ethanhuynh365@gmail.com?subject=Website%20project%20inquiry';

const services = [
  {
    icon: LayoutTemplate,
    title: 'New websites',
    copy: 'A clean, custom site designed around your business and your customers.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Mobile-friendly design',
    copy: 'A polished experience that feels natural on phones, tablets, and desktops.',
  },
  {
    icon: Code2,
    title: 'Easy no-code editing',
    copy: 'Update your own words, photos, and key information without touching code.',
  },
  {
    icon: Sparkles,
    title: 'Redesigns & updates',
    copy: 'Modernize an older website or refresh individual pages, images, and content.',
  },
  {
    icon: Search,
    title: 'Basic SEO setup',
    copy: 'A strong technical foundation that helps search engines understand your site.',
  },
  {
    icon: Wrench,
    title: 'Maintenance & fixes',
    copy: 'General upkeep, troubleshooting, speed improvements, and small repairs.',
  },
];

const extras = [
  'Contact and quote-request forms',
  'Appointment and booking integrations',
  'Social media and Google Maps integration',
  'Domain and hosting setup assistance',
];

export default function Home() {
  return (
    <main>
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="site-header shell">
        <a className="wordmark" href="#top" aria-label="Ethan Web Studio home">
          <span className="wordmark-mark">
            <img src="/ethan-web-studio-logo.png" alt="" />
          </span>
          <span>Ethan Web Studio</span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#work">Examples</a>
          <a className="nav-contact" href={emailHref}>
            Email me <ArrowUpRight aria-hidden="true" />
          </a>
        </nav>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> Dallas–Fort Worth web design
          </p>
          <h1>
            A better website,
            <span> without the agency overhead.</span>
          </h1>
          <p className="hero-lede">
            Modern websites for small businesses—built to look sharp, work on
            every screen, and stay easy for you to update.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href={emailHref}>
              Start a conversation <Mail aria-hidden="true" />
            </a>
            <a className="text-link" href="#work">
              See example sites <ArrowDown aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="hero-showcase" aria-label="Website design preview">
          <div className="browser-window">
            <div className="browser-bar">
              <div className="traffic-lights" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="address-bar">yourbusiness.com</div>
            </div>
            <div className="browser-content">
              <div className="preview-nav">
                <span>STUDIO</span>
                <div>
                  <i />
                  <i />
                  <i />
                </div>
              </div>
              <div className="preview-hero">
                <p>Made for your customers.</p>
                <strong>Clear. Modern. Yours.</strong>
                <span className="preview-button">Get started</span>
              </div>
              <div className="preview-grid">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>

          <div className="floating-note note-top">
            <Gauge aria-hidden="true" />
            <span>
              <small>Built for</small>
              Speed
            </span>
          </div>
          <div className="floating-note note-bottom">
            <Settings2 aria-hidden="true" />
            <span>
              <small>Made to be</small>
              Easy to edit
            </span>
          </div>
        </div>
      </section>

      <section className="trust-strip shell" aria-label="Service highlights">
        <p>Everything you need to launch confidently</p>
        <div>
          <span>
            <Check aria-hidden="true" /> Mobile-ready
          </span>
          <span>
            <Check aria-hidden="true" /> No-code editing
          </span>
          <span>
            <Check aria-hidden="true" /> Six months of support
          </span>
        </div>
      </section>

      <section className="section shell" id="services">
        <div className="section-heading">
          <p className="eyebrow">What I can help with</p>
          <h2>From first idea to ongoing updates.</h2>
          <p>
            Need a brand-new site, a cleaner version of your current one, or
            help keeping things running? I can meet you where you are.
          </p>
        </div>

        <div className="service-grid">
          {services.map(({ icon: Icon, title, copy }) => (
            <article className="glass-card service-card" key={title}>
              <span className="icon-wrap">
                <Icon aria-hidden="true" />
              </span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>

        <div className="extras-card glass-card">
          <div>
            <span className="icon-wrap">
              <Settings2 aria-hidden="true" />
            </span>
            <h3>And the details that make it complete.</h3>
          </div>
          <ul>
            {extras.map((extra) => (
              <li key={extra}>
                <Check aria-hidden="true" /> {extra}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="shell">
          <div className="section-heading work-heading">
            <p className="eyebrow">Example directions</p>
            <h2>Small sites can still make a big impression.</h2>
            <p>
              A few sample concepts showing the range of styles I can create
              for different kinds of local businesses.
            </p>
          </div>

          <div className="work-grid">
            <article className="work-card">
              <div className="site-preview cafe-preview">
                <div className="mini-nav">
                  <b>EMBER</b>
                  <span>Menu&nbsp;&nbsp; Visit</span>
                </div>
                <div className="mini-copy">
                  <small>NEIGHBORHOOD KITCHEN</small>
                  <strong>Comfort, served daily.</strong>
                  <i>View the menu</i>
                </div>
                <div className="cafe-orb" aria-hidden="true" />
              </div>
              <div className="work-meta">
                <div>
                  <span>Restaurant concept</span>
                  <h3>Ember Kitchen</h3>
                </div>
                <ArrowUpRight aria-hidden="true" />
              </div>
            </article>

            <article className="work-card">
              <div className="site-preview trade-preview">
                <div className="mini-nav">
                  <b>NORTHSTAR</b>
                  <span>Services&nbsp;&nbsp; About</span>
                </div>
                <div className="trade-layout">
                  <div className="mini-copy">
                    <small>DFW HOME SERVICES</small>
                    <strong>Good work. No runaround.</strong>
                    <i>Request a quote</i>
                  </div>
                  <div className="rating-card">
                    <b>4.9</b>
                    <span>★★★★★</span>
                    <small>Trusted locally</small>
                  </div>
                </div>
              </div>
              <div className="work-meta">
                <div>
                  <span>Home services concept</span>
                  <h3>Northstar Services</h3>
                </div>
                <ArrowUpRight aria-hidden="true" />
              </div>
            </article>

            <article className="work-card">
              <div className="site-preview wellness-preview">
                <div className="mini-nav">
                  <b>JUNIPER</b>
                  <span>Care&nbsp;&nbsp; Journal</span>
                </div>
                <div className="mini-copy wellness-copy">
                  <small>WELLNESS, SIMPLIFIED</small>
                  <strong>Make space to feel better.</strong>
                  <i>Book a visit</i>
                </div>
                <div className="leaf-shape leaf-one" aria-hidden="true" />
                <div className="leaf-shape leaf-two" aria-hidden="true" />
              </div>
              <div className="work-meta">
                <div>
                  <span>Wellness concept</span>
                  <h3>Juniper Studio</h3>
                </div>
                <ArrowUpRight aria-hidden="true" />
              </div>
            </article>
          </div>
          <p className="concept-note">
            Sample concepts created to demonstrate design range—not client work.
          </p>
        </div>
      </section>

      <section className="support-section shell">
        <div className="support-card">
          <div className="support-number">6</div>
          <div className="support-copy">
            <p className="eyebrow">After launch</p>
            <h2>Six months of support, included.</h2>
            <p>
              I’ll stay available after your site goes live for minor updates,
              questions, and help learning how everything works.
            </p>
          </div>
          <div className="support-list">
            <span>
              <Check aria-hidden="true" /> Minor content updates
            </span>
            <span>
              <Check aria-hidden="true" /> Troubleshooting help
            </span>
            <span>
              <Check aria-hidden="true" /> Editor guidance
            </span>
          </div>
        </div>
      </section>

      <section className="cta-section shell">
        <div className="cta-card">
          <div className="cta-orb" aria-hidden="true" />
          <p className="eyebrow">Let’s build something useful</p>
          <h2>Tell me what your business needs.</h2>
          <p>
            Send a quick email about your business, your current website, and
            what you would like to improve. I’ll take it from there.
          </p>
          <a className="primary-button light-button" href={emailHref}>
            <Mail aria-hidden="true" /> ethanhuynh365@gmail.com
          </a>
        </div>
      </section>

      <footer className="site-footer shell">
        <a className="wordmark" href="#top">
          <span className="wordmark-mark">
            <img src="/ethan-web-studio-logo.png" alt="" />
          </span>
          <span>Ethan Web Studio</span>
        </a>
        <p>
          <MapPin aria-hidden="true" /> Serving Dallas–Fort Worth and beyond
        </p>
        <a href={emailHref}>Email me</a>
      </footer>
    </main>
  );
}
