export function Header() {
  return (
    <header className="header">
      <div className="container headerInner">
        
        <div className="logoWrap">
          <img
            src="/images/upkeep-logo.png"
            alt="UpKeep Home & Office Services"
            className="logo"
          />
        </div>

        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          className="callBtn"
          href="tel:+16623526259"
        >
          Call (662) 352-6259
        </a>
      </div>
    </header>
  );
}