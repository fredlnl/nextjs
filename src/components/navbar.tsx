import Link from 'next/link'

export default () => (
<nav className="navbar is-primary" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <div className="navbar-item">
      <div className="logo"></div>
    </div>

    <Link href="/" >
    <a className="navbar-item">
      <h1><b>Frédéric Lang</b></h1>
    </a>
    </Link>

    <Link href="/portfolio">
    <a className="navbar-item" >
      Portfolio
    </a>
    </Link>
  </div>

  <div className="navbar-menu">
    <div className="navbar-end">

      
      <a className="navbar-item" href="/howtoreachme" >
        How to reach me ?
      </a>

    </div>
  </div>
</nav>
)