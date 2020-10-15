import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';

const Layout = ({children, title, backButton}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
    <div className="container">
      <nav>
        {backButton ? <span onClick={() => Router.back()}>&#x2b05;</span> : null }
        <Link href="/">
        <a>Hacker news</a>
        </Link>
      </nav>
      {children}
    </div>
    <style jsx>
      {`
      .container {
        max-width: 800px;
        margin: 0 auto;
        background-color: #f6f6ef;
      }
      nav {
        background: #f60;
        padding: 1em;
      }
      nav > * {
        display: inline-block;
        color: black;
      }
      `} </style>
      <style global jsx>{`
        body {
          background: white;
          font-family: Verdana, Geneva, sans-serif;
        }

      `}</style>
  </div>
  )
}

export default Layout;