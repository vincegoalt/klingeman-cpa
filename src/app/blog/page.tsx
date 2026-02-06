import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Clock, BookOpen, TrendingUp, FileText, Shield } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Tax & Accounting Blog | Tulsa CPA Insights & Tips',
  description: 'Expert tax and accounting insights from Tulsa CPAs. Get tips on tax planning, business finance, IRS updates, and financial strategies for Oklahoma residents and businesses.',
};

const blogPosts = [
  {
    title: 'CPA Near Me: How to Choose the Right Accountant in Tulsa',
    slug: 'cpa-near-me-choose-accountant-tulsa',
    excerpt: 'Finding the right CPA in Tulsa can make a significant difference in your financial success. Learn what to look for when choosing your accountant.',
    category: 'CPA Selection',
    readTime: '8 min read',
    publishDate: 'August 20, 2025',
    featured: true,
  },
  {
    title: 'Tulsa Small Business Tax Checklist (Free Download)',
    slug: 'tulsa-small-business-tax-checklist',
    excerpt: "Don't miss important tax deductions! Our comprehensive checklist helps Tulsa small businesses stay organized and compliant.",
    category: 'Small Business',
    readTime: '6 min read',
    publishDate: 'August 18, 2025',
    featured: true,
  },
  {
    title: 'Top 10 Tax Deadlines Every Oklahoman Should Know',
    slug: 'top-10-tax-deadlines-oklahoma',
    excerpt: 'Stay ahead of important tax deadlines with our comprehensive guide to federal and Oklahoma state tax due dates.',
    category: 'Tax Planning',
    readTime: '5 min read',
    publishDate: 'August 15, 2025',
    featured: false,
  },
  {
    title: 'Guía de impuestos para pequeños negocios en Tulsa',
    slug: 'guia-impuestos-pequenos-negocios-tulsa',
    excerpt: 'Una guía completa en español para empresarios de Tulsa sobre planificación fiscal y cumplimiento tributario.',
    category: 'Español',
    readTime: '7 min read',
    publishDate: 'August 12, 2025',
    featured: false,
  }
];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="pt-32 bg-[#F4F1EC]">
      {/* Breadcrumb */}
      <div className="px-[7vw] py-4">
        <nav className="flex items-center gap-2 text-sm">
          <Link href="/" className="text-[#6D727A] hover:text-[#C8A46E]">Home</Link>
          <ChevronRight className="w-4 h-4 text-[#6D727A]" />
          <span className="text-[#0B1E3C]">Blog</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="px-[7vw] py-12">
        <div className="max-w-4xl">
          <span className="section-label">Expert Insights & Tax Tips</span>
          <h1 className="text-[clamp(36px,5vw,64px)] leading-[1.0] text-[#0B1E3C] mb-6">
            Tax & Accounting Knowledge Hub
          </h1>
          <p className="text-[#6D727A] text-lg leading-relaxed max-w-2xl">
            Expert advice from experienced Tulsa CPAs with former IRS management experience.
            Get the latest tax strategies and business insights to help you succeed.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="flex items-center gap-2 text-sm text-[#0B1E3C]">
              <Shield className="w-4 h-4 text-[#C8A46E]" />
              <span>Former IRS Expertise</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#0B1E3C]">
              <TrendingUp className="w-4 h-4 text-[#C8A46E]" />
              <span>Practical Tips</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#0B1E3C]">
              <BookOpen className="w-4 h-4 text-[#C8A46E]" />
              <span>Expert Insights</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="px-[7vw] py-12">
        <span className="section-label">Featured</span>
        <h2 className="text-[clamp(28px,3vw,44px)] leading-[1.1] text-[#0B1E3C] mb-8">
          Featured Articles
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white border border-[rgba(11,30,60,0.10)] hover:border-[#C8A46E] transition-all overflow-hidden"
            >
              <div className="h-48 bg-[#0B1E3C] relative flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-white/20" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-[#C8A46E] text-white px-3 py-1 text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3 text-sm text-[#6D727A]">
                  <span>{post.publishDate}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#0B1E3C] mb-3 group-hover:text-[#C8A46E] transition-colors">
                  {post.title}
                </h3>

                <p className="text-[#6D727A] text-sm leading-relaxed mb-4">{post.excerpt}</p>

                <span className="text-[#C8A46E] font-medium text-sm flex items-center gap-1">
                  Read Article
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Recent Articles */}
        <span className="section-label">Recent</span>
        <h2 className="text-[clamp(24px,2.5vw,36px)] leading-[1.1] text-[#0B1E3C] mb-8">
          Recent Articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {regularPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white p-6 border border-[rgba(11,30,60,0.10)] hover:border-[#C8A46E] transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="bg-[#F4F1EC] text-[#0B1E3C] px-3 py-1 text-xs font-medium">
                  {post.category}
                </span>
                <span className="text-sm text-[#6D727A] flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>

              <h3 className="font-['Cormorant_Garamond'] text-lg font-semibold text-[#0B1E3C] mb-3 group-hover:text-[#C8A46E] transition-colors">
                {post.title}
              </h3>

              <p className="text-[#6D727A] text-sm leading-relaxed mb-4">{post.excerpt}</p>

              <div className="flex items-center justify-between">
                <span className="text-sm text-[#6D727A]">{post.publishDate}</span>
                <span className="text-[#C8A46E] font-medium text-sm flex items-center gap-1">
                  Read More
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Topic Categories */}
      <section className="px-[7vw] py-12 bg-white">
        <span className="section-label">Topics</span>
        <h2 className="text-[clamp(28px,3vw,44px)] leading-[1.1] text-[#0B1E3C] mb-8">
          Explore Topics
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group bg-[#F4F1EC] p-8 border border-[rgba(11,30,60,0.10)] hover:border-[#C8A46E] transition-all">
            <div className="w-14 h-14 bg-[#0B1E3C] flex items-center justify-center mb-4">
              <FileText className="w-7 h-7 text-[#C8A46E]" />
            </div>
            <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#0B1E3C] mb-3">Tax Planning</h3>
            <p className="text-[#6D727A] text-sm mb-4">
              Strategic insights to minimize your tax burden and maximize savings throughout the year.
            </p>
            <span className="text-[#C8A46E] font-medium text-sm flex items-center gap-2">
              Browse Articles
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>

          <div className="group bg-[#F4F1EC] p-8 border border-[rgba(11,30,60,0.10)] hover:border-[#C8A46E] transition-all">
            <div className="w-14 h-14 bg-[#0B1E3C] flex items-center justify-center mb-4">
              <TrendingUp className="w-7 h-7 text-[#C8A46E]" />
            </div>
            <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#0B1E3C] mb-3">Business Finance</h3>
            <p className="text-[#6D727A] text-sm mb-4">
              Practical advice for managing business finances, cash flow, and growth strategies.
            </p>
            <span className="text-[#C8A46E] font-medium text-sm flex items-center gap-2">
              Browse Articles
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>

          <div className="group bg-[#F4F1EC] p-8 border border-[rgba(11,30,60,0.10)] hover:border-[#C8A46E] transition-all">
            <div className="w-14 h-14 bg-[#0B1E3C] flex items-center justify-center mb-4">
              <Shield className="w-7 h-7 text-[#C8A46E]" />
            </div>
            <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#0B1E3C] mb-3">IRS Updates</h3>
            <p className="text-[#6D727A] text-sm mb-4">
              Stay informed about the latest IRS rules, regulations, and compliance requirements.
            </p>
            <span className="text-[#C8A46E] font-medium text-sm flex items-center gap-2">
              Browse Articles
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-[7vw] py-16 bg-[#0B1E3C]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[clamp(28px,4vw,48px)] leading-[1.1] text-white mb-6">
            Need Personalized Tax Advice?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            While our blog provides valuable insights, nothing replaces personalized advice from
            experienced CPAs with former IRS expertise.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="btn-primary flex items-center gap-2"
            >
              Call {BUSINESS_INFO.phone}
            </a>
            <Link
              href="/contact"
              className="btn-outline border-white text-white hover:bg-white hover:text-[#0B1E3C]"
            >
              Schedule Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
