const Header = () => {
  const view = `
    <header class="header-main">
      <div class="header-logo">
        <h1>
          <a href="/" id="home">100tifi.co</a>
        </h1>
      </div>
      <nav class="header-nav">
        <ul>
          <li><a href="#/about/">About</a></li>
        </ul>
      </nav>
    </header>
  `
  return view
}

export default Header