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
      <div className="page">
        <Component {...pageProps} />
      </div>
      <footer className="footer">
        <div className="content has-text-centered">
          Powered by <img src="/photeus.png" alt="Photeus Logo" width="20"/> Photeus
        </div>
      </footer>
    </div>
  );
}

