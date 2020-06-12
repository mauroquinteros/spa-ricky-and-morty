const Header = () => {
  const view = `
    <header class="header">
      <div class="u-wrapper">
        <div class="header-content">
          <h1 class="header-logo">
            <a href="/" id="home" class="link-flex">100tifi.co</a>
          </h1>
          <nav class="header-nav">
            <ul class="nav">
              <li class="nav-item"><a class="link-flex" href="#/about/">About</a></li>
              <li class="nav-item"><a class="link-flex" href="#/about/">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  `
  return view
}

export default Header