import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as generateSEO, generateBreadcrumbSchema } from '@/components/SEO';
import CTASection from '@/components/CTASection';
import { BUSINESS_INFO } from '@/lib/constants';

export const metadata: Metadata = generateSEO({
  title: 'Tax & Accounting Blog | Tulsa CPA Insights & Tips',
  description: 'Expert tax and accounting insights from Tulsa CPAs. Get tips on tax planning, business finance, IRS updates, and financial strategies for Oklahoma residents and businesses.',
  canonical: '/blog'
});

const blogPosts = [
  {
    title: 'CPA Near Me: How to Choose the Right Accountant in Tulsa',
    slug: 'cpa-near-me-choose-accountant-tulsa',
    excerpt: 'Finding the right CPA in Tulsa can make a significant difference in your financial success. Learn what to look for when choosing your accountant.',
    category: 'CPA Selection',
    readTime: '8 min read',
    publishDate: 'August 20, 2025',
    featured: true
  },
  {
    title: 'Tulsa Small Business Tax Checklist (Free Download)',
    slug: 'tulsa-small-business-tax-checklist',
    excerpt: 'Don\'t miss important tax deductions! Our comprehensive checklist helps Tulsa small businesses stay organized and compliant.',
    category: 'Small Business',
    readTime: '6 min read',
    publishDate: 'August 18, 2025',
    featured: true
  },
  {
    title: 'Top 10 Tax Deadlines Every Oklahoman Should Know',
    slug: 'top-10-tax-deadlines-oklahoma',
    excerpt: 'Stay ahead of important tax deadlines with our comprehensive guide to federal and Oklahoma state tax due dates.',
    category: 'Tax Planning',
    readTime: '5 min read',
    publishDate: 'August 15, 2025',
    featured: false
  },
  {
    title: 'Guía de impuestos para pequeños negocios en Tulsa',
    slug: 'guia-impuestos-pequenos-negocios-tulsa',
    excerpt: 'Una guía completa en español para empresarios de Tulsa sobre planificación fiscal y cumplimiento tributario.',
    category: 'Español',
    readTime: '7 min read',
    publishDate: 'August 12, 2025',
    featured: false
  }
];

export default function BlogPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' }
  ]);

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tax & Accounting Insights
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Expert advice from experienced Tulsa CPAs. Get the latest tax tips, business insights, 
              and financial strategies to help you succeed.
            </p>
            
            <div className="inline-flex items-center gap-4 text-sm bg-white px-6 py-3 rounded-lg shadow-md">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Expert Insights</span>
              </div>
              <span className="text-gray-400">•</span>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Former IRS Manager</span>
              </div>
              <span className="text-gray-400">•</span>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Practical Tips</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {featuredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition group overflow-hidden"
                >
                  <div className="aspect-video bg-gradient-to-br from-blue-500 to-blue-700 relative">
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-white text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3 text-sm text-gray-500">
                      <span>{post.publishDate}</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    
                    <div className="flex items-center text-blue-700 font-semibold">
                      Read Article
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {regularPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition group p-6"
                >
                  <div className="flex items-center justify-between mb-3 text-sm text-gray-500">
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.publishDate}</span>
                    <div className="flex items-center text-blue-700 font-semibold">
                      Read More
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Stay Updated with Tax & Business Insights
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tax Planning</h3>
                <p className="text-gray-700">
                  Strategic insights to minimize your tax burden and maximize savings throughout the year.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Business Finance</h3>
                <p className="text-gray-700">
                  Practical advice for managing business finances, cash flow, and growth strategies.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">IRS Updates</h3>
                <p className="text-gray-700">
                  Stay informed about the latest IRS rules, regulations, and compliance requirements.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-blue-900 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">
                Need Personalized Advice?
              </h3>
              <p className="text-lg mb-6">
                While our blog provides valuable insights, nothing replaces personalized advice from experienced CPAs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition inline-flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call {BUSINESS_INFO.phone}
                </a>
                <Link
                  href="/contact"
                  className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition inline-flex items-center justify-center gap-2"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              About Our Expert Authors
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Our blog content is written by experienced CPAs with over 40 years of combined experience, 
              including former IRS management expertise. We provide insights you can trust, backed by 
              real-world experience serving Tulsa area clients.
            </p>
            <Link
              href="/tulsa-cpa"
              className="text-blue-700 font-semibold hover:underline"
            >
              Learn more about our CPA team →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}