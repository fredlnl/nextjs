import '../scss/styles.scss';
import Head from 'next/head';
import NavBar from '../components/navbar'
import Footer from '../components/footer'

export default function({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Frédéric Lang</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <NavBar></NavBar>
      <Component {...pageProps} />
      <Footer></Footer>
    </div>
  );
}

