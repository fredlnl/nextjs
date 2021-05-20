import '../style/globals.css'
import Head from 'next/head';
import NavBar from '../components/navbar'
import Footer from '../components/footer'

export default function App({ Component, pageProps }) {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>Frédéric Lang</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400&display=swap" rel="stylesheet"/>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
