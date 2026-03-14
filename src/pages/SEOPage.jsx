import { useParams } from "react-router-dom"
import pages from "../data/generatePages"
import SEO from "../components/SEO"

export default function SEOPage() {

  const { slug } = useParams()

  const page = pages.find(p => p.slug === slug)

  if (!page) return <h1>Page not found</h1>

  return (
    <>
      <SEO
        title={`${page.title} | Cheat Code For Dev`}
        description={page.description}
        url={`https://vibecheatcode.netlify.app/${slug}`}
      />

      <h1>{page.title}</h1>

      <p>{page.description}</p>

      <section>
        <h2>Developer Cheatsheet</h2>
        <p>Useful commands and quick developer references.</p>
      </section>
    </>
  )
}