// src/pages/Home.tsx
import { SwipeGallery } from "../components/SwipeGallery";

export function Home() {
  return (
    <main className="page">
      <div className="container">
        {/* HERO */}
        <section className="hero">
          <div>
            <h1>Reliable Home & Office Repairs in Columbus, MS</h1>

            <p>
              UpKeep Home & Office Services provides dependable handyman and
              property maintenance solutions for homeowners and small businesses
              throughout Columbus and Lowndes County.
            </p>

            <div className="ctaRow">
              <a className="btnPrimary" href="#contact">
                Request Service
              </a>

              <a className="btnGhost" href="#services">
                View Services
              </a>
            </div>

            <div className="heroMeta">
              ✔ Honest pricing &nbsp; • &nbsp; ✔ Skilled workmanship &nbsp; •
              &nbsp; ✔ Reliable scheduling
            </div>
          </div>

          {/* GALLERY */}
          <div className="heroRight">
            <div className="card">
              <div
                style={{
                  padding: 16,
                  fontWeight: 800,
                  color: "rgba(244,240,232,.85)",
                }}
              >
                Recent Projects
              </div>

              <SwipeGallery
                images={[
                  { src: "/images/gallery-1.jpg", alt: "Project 1" },
                  { src: "/images/gallery-2.jpg", alt: "Project 2" },
                  { src: "/images/gallery-3.jpg", alt: "Project 3" },
                  { src: "/images/gallery-4.jpg", alt: "Project 4" },
                ]}
                autoPlay={false}
              />
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section" id="services">
          <h2>Services</h2>

          <div className="grid">
            <div className="tile">General Repairs</div>
            <div className="tile">Installations & Mounting</div>
            <div className="tile">Drywall & Trim</div>
            <div className="tile">Doors, Locks & Hardware</div>
            <div className="tile">Property Maintenance</div>
            <div className="tile">Light Office Repairs</div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section" id="contact">
          <h2>Request Service</h2>

          <p className="muted">
            Fill out the form below and your email app will open with your
            request ready to send.
          </p>

          <form
            className="form"
            action="mailto:upkeep.jb@gmail.com"
            method="POST"
            encType="text/plain"
          >
            <div className="row">
              <input
                className="input"
                name="Name"
                placeholder="Name"
                required
              />

              <input
                className="input"
                name="Phone"
                placeholder="Phone"
                required
              />
            </div>

            <input
              className="input"
              name="Email"
              type="email"
              placeholder="Email (optional)"
            />

            <textarea
              className="textarea"
              name="Message"
              rows={5}
              placeholder="What do you need done?"
              required
            />

            <button className="btnPrimary" type="submit">
              Send Request
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}