
export default () => (
<nav className="navbar is-primary" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="/">
      <div className="logo"></div>
      <h1><b>Photeus</b></h1>
    </a>

    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div className="navbar-menu">
    <div className="navbar-end">

      <a className="navbar-item" href="/portfolio" >
        Portfolio
      </a>
      <a className="navbar-item" href="/howtoreachme" >
        How to reach me ?
      </a>

    </div>
  </div>
</nav>
)