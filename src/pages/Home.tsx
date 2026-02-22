// src/pages/Home.tsx
import { SwipeGallery } from "../components/SwipeGallery";

export function Home() {
  return (
    <main className="page">
      <div className="container">
        <section className="hero">
          <div>
            <h1>Reliable Home & Office Repairs in Columbus, MS</h1>
            <p>
              UpKeep Home & Office Services provides dependable handyman and
              property maintenance services for homeowners and small businesses.
            </p>

            <div className="ctaRow">
              <a className="btnPrimary" href="#contact">
                Request Service
              </a>
              <a className="btnGhost" href="#services">
                View Services
              </a>
            </div>

            <div className="muted">
              ✔ Honest pricing &nbsp; • &nbsp; ✔ Quality workmanship &nbsp; •
              &nbsp; ✔ Reliable scheduling
            </div>
          </div>

          <div className="heroRight">
            <div className="card">
              <div
                style={{
                  padding: 16,
                  fontWeight: 800,
                  color: "rgba(244,240,232,.85)",
                }}
              >
                Photo Gallery
              </div>

              <SwipeGallery
                images={[
                  { src: "/images/gallery-1.jpg", alt: "Project photo 1" },
                  { src: "/images/gallery-2.jpg", alt: "Project photo 2" },
                  { src: "/images/gallery-3.jpg", alt: "Project photo 3" },
                  { src: "/images/gallery-4.jpg", alt: "Project photo 4" },
                ]}
                autoPlay={false}
              />
            </div>
          </div>
        </section>

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

        <section className="section" id="contact">
          <h2>Request Service</h2>
          <p className="muted">
            Send a quick request and we’ll reach out shortly.
          </p>

          {/* NETLIFY FORM */}
          <form
            className="form"
            name="upkeep-request"
            method="POST"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="upkeep-request" />

            <div className="row">
              <input
                className="input"
                name="name"
                placeholder="Name"
                required
              />
              <input
                className="input"
                name="phone"
                placeholder="Phone"
                required
              />
            </div>

            <input
              className="input"
              name="email"
              type="email"
              placeholder="Email (optional)"
            />

            <textarea
              className="textarea"
              name="message"
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