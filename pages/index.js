import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
        I'm currently looking for new challenges in my career, so I'm in the process of career migration to Web Development, focusing on the following technologies: JavaScript, TypeScript, HTML5, CSS3, SASS, Bootstrap, React, Node.js, Python, Scrum Developer, Git and GitHub.
        </p>
        <p>
        I work in the Production Engineering area in the industrial sector, planning and controlling the entire production chain, from the arrival of raw material to the transformation into a finished product, checking the efficiency of processes in order to reduce waste as much as possible. I am also responsible for controlling raw material and finished product inventories, realizing periodic conferences, as well as organizing them in order to facilitate distribution to the production and shipping center. I cover knowledge in Lean Six Sigma, Black Belt Methodology.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}