import { Helmet } from 'react-helmet-async'

const siteUrl = 'https://ethiostudy.com'

export default function SEO({ title, description, url, image, keywords }) {
  const fullTitle = title
    ? `${title} | EthioStudy`
    : 'EthioStudy - Free Ethiopian Textbooks | Fetena.net Grade 9-12 PDF Downloads'
  const fullUrl = url ? `${siteUrl}${url}` : `${siteUrl}/`
  const ogImage = image || '/og-image.svg'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || 'Free Ethiopian textbooks for Grades 8-12. Download MoE PDF books, past exams, and study guides. Fetena.net alternative.'} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || 'Free Ethiopian textbooks for Grades 8-12. Download MoE PDF books, past exams, and study guides.'} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || 'Free Ethiopian textbooks for Grades 8-12. Download MoE PDF books, past exams, and study guides.'} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
    </Helmet>
  )
}
