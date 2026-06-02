import { lazy, Suspense } from 'react';
import SEO from './SEO';
import Hero from './Hero';
import GradeCards from './GradeCards';

const PopularTextbooks = lazy(() => import('./PopularTextbooks'));
const ExamPrepBanner = lazy(() => import('./ExamPrepBanner'));

export default function HomePage() {
  return (
    <>
      <SEO
        title="Free Ethiopian Textbooks | Fetena.net Grade 9-12 PDF Downloads"
        description="Free Ethiopian textbooks for Grades 8-12. Download MoE PDF books, past exams, and study guides. Fetena.net alternative - Grade 9, Grade 10, Grade 11, Grade 12 textbooks."
        url="/"
        keywords="fetena.net, fetena grade 9, fetena grade 10, fetena grade 11, fetena grade 12, ethiopian textbooks, free PDF books, MoE textbooks, Ethiopian students, Grade 9 textbooks, Grade 10 textbooks, Grade 11 textbooks, Grade 12 textbooks, national exam Ethiopia"
      />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "EthioStudy",
          "url": "https://ethiostudy.com/",
          "description": "Free Ethiopian textbooks for Grades 8-12. Download MoE PDF books, past exams, and study guides.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://ethiostudy.com/books?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "EthioStudy",
          "url": "https://ethiostudy.com",
          "description": "Free study materials for Ethiopian students Grades 8-12",
          "sameAs": []
        })}
      </script>

      <Hero />
      <GradeCards />
      <Suspense fallback={null}>
        <PopularTextbooks />
      </Suspense>
      <Suspense fallback={null}>
        <ExamPrepBanner />
      </Suspense>
    </>
  );
}
