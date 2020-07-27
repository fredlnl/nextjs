import '../scss/styles.scss';
import Head from 'next/head';
import NavBar from '../components/navbar'

export default function({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Photeus</title>
      </Head>
      <NavBar></NavBar>
      <Component {...pageProps} />
      <footer className="footer">
        <div className="content has-text-centered">
          <p>Powered by <img src="/photeus.png" alt="Photeus Logo" width="20"/> Photeus</p>
          <p>Frédéric Lang Porfolio Site © 2020</p>
        </div>
      </footer>
    </div>
  );
}

