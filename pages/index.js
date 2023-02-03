import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Redis from 'ioredis'
import { useState } from 'react'
// import { SSRKeycloakProvider, SSRCookies } from '@react-keycloak/ssr';

let redis = new Redis(process.env.REDIS_URL)


// const keycloakCfg = {
//   realm: 'demo',
//   url: 'http://localhost:8080/auth/',
//   clientId: 'otp-viewer'
// }


export default function Home({ data, pageProps, cookies }) {
  const [count, setCount] = useState(data)

  const increment = async () => {
    const response = await fetch('/api/incr', { method: 'POST' })
    const data = await response.json()
    setCount(data.count)
  }

  // const authenticate = async () => {
  //   if (typeof window !== "undefined") {

  //       let keycloak = Cloak({
  //           "realm": "demo",
  //           "auth-server-url": "http://localhost:8080/auth/",
  //           "ssl-required": "external",
  //           "resource": "otp-viewer",
  //           "public-client": true,
  //           "confidential-port": 0
  //       })
  
  //       const authenticated = await keycloak.init({ onLoad: 'login-required' })
  //       if (authenticated) {
  //         const token = keycloak.token
  //         // const response = await fetch('/api/getOtp/1234', {
  //         //   headers: {
  //         //     Authorization: `Bearer ${token}`
  //         //   }
  //         // })
  //         // const data = await response.json()
  //         alert(token)
  //       }
  //     }
  //   }


  return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico"/>
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to my website
          </h1>

          <p className={styles.description}>
            Get started by editing <code>pages/index.js</code>
          </p>

          <p className={styles.description}>
            View Count: <b>{count}</b>
          </p>

          <button type="button" onClick={increment}>Manual Increment (+1)</button>
          {/* <button type="button" onClick={authenticate}>Authenticate</button> */}
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com/integrations/upstash"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by <b>Vercel</b> and <b>Upstash</b>
          </a>
        </footer>
      </div>
  )
}

export async function getServerSideProps() {
  const data = await redis.incr('counter')
  return { props: { data } }
}