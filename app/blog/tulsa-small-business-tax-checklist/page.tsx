import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generateMetadata as generateSEO, generateBreadcrumbSchema } from '@/components/SEO';
import CTASection from '@/components/CTASection';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = generateSEO({
  title: 'Tulsa Small Business Tax Checklist (Free Download)',
  description: 'Complete tax checklist for Tulsa small businesses. Download our free guide covering essential deductions, deadlines, and compliance requirements.',
  canonical: '/blog/tulsa-small-business-tax-checklist'
});

export default function TulsaSmallBusinessTaxChecklistPost() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Tulsa Small Business Tax Checklist', url: '/blog/tulsa-small-business-tax-checklist' }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link href="/blog" className="text-blue-700 hover:underline">
                ← Back to Blog
              </Link>
            </div>

            <header className="mb-12">
              <div className="relative h-[400px] mb-8 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&h=400&fit=crop"
                  alt="Small business tax checklist and calculator"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
                      Small Business
                    </span>
                    <span>August 18, 2025</span>
                    <span>6 min read</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold">
                    Tulsa Small Business Tax Checklist (Free Download)
                  </h1>
                </div>
              </div>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                Don't miss important tax deductions! Our comprehensive checklist helps Tulsa small 
                businesses stay organized, compliant, and positioned to maximize tax savings throughout the year.
              </p>
            </header>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="text-green-600 text-2xl">📄</div>
                <div>
                  <h3 className="text-lg font-bold text-green-800 mb-2">
                    Free Download: Complete Tax Checklist
                  </h3>
                  <p className="text-green-700 mb-4">
                    Get our comprehensive small business tax checklist delivered to your inbox. 
                    Includes printable version and bonus Oklahoma-specific requirements.
                  </p>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <ContactForm compact />
                  </div>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2>Why Small Business Tax Organization Matters</h2>
              
              <p>
                Running a small business in Tulsa comes with many responsibilities, and tax compliance 
                is one of the most critical. Proper organization throughout the year not only ensures 
                compliance but can save you thousands in taxes and prevent costly penalties.
              </p>

              <h3>Benefits of Staying Organized:</h3>
              <ul>
                <li>Maximize legitimate business deductions</li>
                <li>Avoid penalties and interest charges</li>
                <li>Reduce stress during tax season</li>
                <li>Improve financial decision-making</li>
                <li>Facilitate business growth and funding opportunities</li>
              </ul>

              <h2>Essential Business Records to Maintain</h2>

              <h3>Income Documentation</h3>
              <ul>
                <li>All sales receipts and invoices</li>
                <li>Bank deposit records</li>
                <li>Credit card processing statements</li>
                <li>Cash receipt logs</li>
                <li>1099 forms received from clients</li>
                <li>Interest and dividend statements</li>
              </ul>

              <h3>Business Expense Records</h3>
              <ul>
                <li>Receipts for all business purchases</li>
                <li>Office supply receipts</li>
                <li>Equipment and furniture purchases</li>
                <li>Vehicle expense logs and receipts</li>
                <li>Utility bills for business use</li>
                <li>Insurance payments</li>
                <li>Professional service fees</li>
                <li>Marketing and advertising expenses</li>
              </ul>

              <h3>Employee-Related Documents</h3>
              <ul>
                <li>Payroll records and timesheets</li>
                <li>Employee W-4 forms</li>
                <li>Contractor agreements and 1099s</li>
                <li>Benefits and insurance documentation</li>
                <li>Employment tax deposits</li>
              </ul>

              <h2>Top Small Business Tax Deductions for Tulsa Businesses</h2>

              <h3>Office and Equipment Expenses</h3>
              <ul>
                <li><strong>Home Office Deduction:</strong> If you use part of your home exclusively for business</li>
                <li><strong>Equipment Purchases:</strong> Computers, furniture, machinery (Section 179 deduction)</li>
                <li><strong>Office Supplies:</strong> Paper, ink, software, small tools</li>
                <li><strong>Utilities:</strong> Business portion of phone, internet, electricity</li>
              </ul>

              <h3>Vehicle and Travel Expenses</h3>
              <ul>
                <li><strong>Business Mileage:</strong> Track all business-related driving</li>
                <li><strong>Vehicle Expenses:</strong> Gas, maintenance, insurance (if using actual expense method)</li>
                <li><strong>Travel Expenses:</strong> Lodging, meals (50% deductible), airfare for business trips</li>
                <li><strong>Local Business Transportation:</strong> Parking, tolls, public transportation</li>
              </ul>

              <h3>Professional and Marketing Expenses</h3>
              <ul>
                <li><strong>Professional Services:</strong> Legal, accounting, consulting fees</li>
                <li><strong>Advertising:</strong> Website costs, business cards, online ads</li>
                <li><strong>Professional Development:</strong> Training, conferences, business books</li>
                <li><strong>Business Insurance:</strong> General liability, professional liability</li>
              </ul>

              <h2>Oklahoma-Specific Tax Considerations</h2>

              <h3>State Tax Requirements</h3>
              <ul>
                <li><strong>Oklahoma Income Tax:</strong> File Form 511 for business income</li>
                <li><strong>Sales Tax:</strong> Register and collect if selling taxable goods/services</li>
                <li><strong>Withholding Tax:</strong> Required if you have employees</li>
                <li><strong>Unemployment Tax:</strong> Oklahoma Employment Security Commission requirements</li>
              </ul>

              <h3>Tulsa City Requirements</h3>
              <ul>
                <li><strong>Business License:</strong> Required for most businesses operating in Tulsa</li>
                <li><strong>Occupational Tax:</strong> Annual tax based on business type and revenue</li>
                <li><strong>Property Tax:</strong> On business equipment and inventory</li>
              </ul>

              <h2>Monthly Tax Organization Tasks</h2>

              <h3>Every Month:</h3>
              <ul>
                <li>Reconcile bank and credit card statements</li>
                <li>File receipts and categorize expenses</li>
                <li>Update mileage logs</li>
                <li>Review and pay estimated taxes if required</li>
                <li>Process payroll and make tax deposits</li>
              </ul>

              <h3>Quarterly Tasks:</h3>
              <ul>
                <li>File quarterly employment tax returns (Form 941)</li>
                <li>Make quarterly estimated tax payments</li>
                <li>Review profit and loss statements</li>
                <li>Assess cash flow and tax planning opportunities</li>
              </ul>

              <h2>Year-End Tax Planning Strategies</h2>

              <h3>December Planning Opportunities:</h3>
              <ul>
                <li><strong>Equipment Purchases:</strong> Buy necessary equipment before year-end for immediate deduction</li>
                <li><strong>Expense Timing:</strong> Pay business expenses in December to accelerate deductions</li>
                <li><strong>Income Timing:</strong> Consider delaying income to next year if beneficial</li>
                <li><strong>Retirement Contributions:</strong> Maximize SEP-IRA or Solo 401(k) contributions</li>
              </ul>

              <h3>Year-End Documentation Review:</h3>
              <ul>
                <li>Ensure all receipts are properly filed</li>
                <li>Verify all 1099s have been issued to contractors</li>
                <li>Reconcile all accounts</li>
                <li>Prepare depreciation schedules for assets</li>
              </ul>

              <div className="bg-blue-50 p-8 rounded-lg my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Need Help Staying Organized?
                </h3>
                <p className="text-gray-700 mb-4">
                  Many Tulsa small business owners find it challenging to stay on top of tax organization 
                  while running their business. That's where professional help makes the difference.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Our Bookkeeping Services Include:</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>✓ Monthly financial statement preparation</li>
                      <li>✓ Expense categorization and tracking</li>
                      <li>✓ Payroll processing and tax deposits</li>
                      <li>✓ Sales tax preparation and filing</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Tax Planning Benefits:</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>✓ Quarterly tax planning meetings</li>
                      <li>✓ Year-end strategy sessions</li>
                      <li>✓ Estimated tax calculation and reminders</li>
                      <li>✓ Deduction optimization strategies</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2>Common Small Business Tax Mistakes to Avoid</h2>

              <h3>Record-Keeping Mistakes:</h3>
              <ul>
                <li>Mixing personal and business expenses</li>
                <li>Incomplete or missing receipts</li>
                <li>Poor mileage tracking</li>
                <li>Inadequate documentation for deductions</li>
              </ul>

              <h3>Compliance Mistakes:</h3>
              <ul>
                <li>Missing quarterly tax payments</li>
                <li>Late payroll tax deposits</li>
                <li>Incorrect worker classification (employee vs. contractor)</li>
                <li>Forgetting to file required forms</li>
              </ul>

              <h2>Digital Tools for Better Organization</h2>

              <h3>Recommended Software:</h3>
              <ul>
                <li><strong>QuickBooks:</strong> Comprehensive accounting and expense tracking</li>
                <li><strong>Receipt Scanning Apps:</strong> Instantly digitize and categorize receipts</li>
                <li><strong>Mileage Tracking Apps:</strong> Automatic GPS-based mileage logging</li>
                <li><strong>Cloud Storage:</strong> Secure backup for all financial documents</li>
              </ul>

              <h2>When to Seek Professional Help</h2>

              <p>
                While this checklist provides a solid foundation, consider professional help when:
              </p>

              <ul>
                <li>Your business revenue exceeds $50,000 annually</li>
                <li>You have employees or contractors</li>
                <li>You're behind on bookkeeping or tax obligations</li>
                <li>You want to optimize tax strategies for growth</li>
                <li>You prefer to focus on running your business, not managing taxes</li>
              </ul>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.732 15.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-bold text-yellow-800 mb-2">
                      Don't Wait Until Tax Season
                    </h3>
                    <p className="text-yellow-700">
                      The best time to implement good tax organization is right now. Starting early 
                      prevents stress, ensures you don't miss deductions, and gives you time to 
                      implement tax-saving strategies throughout the year.
                    </p>
                  </div>
                </div>
              </div>

              <h2>Next Steps for Your Business</h2>

              <ol>
                <li><strong>Download our complete checklist</strong> using the form above</li>
                <li><strong>Assess your current organization system</strong> and identify gaps</li>
                <li><strong>Implement digital tools</strong> to streamline record-keeping</li>
                <li><strong>Schedule quarterly reviews</strong> to stay on track</li>
                <li><strong>Consider professional support</strong> for optimal results</li>
              </ol>

              <p>
                Remember, good tax organization isn't just about compliance—it's about maximizing 
                your business profitability and setting yourself up for sustainable growth.
              </p>
            </div>

            <div className="mt-12 border-t pt-8">
              <p className="text-sm text-gray-600 mb-4">
                This checklist was developed by the experienced CPA team at Klingeman CPAs, 
                based on decades of experience helping Tulsa small businesses optimize their taxes.
              </p>
              
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Small Business</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Tax Planning</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Tulsa</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Bookkeeping</span>
              </div>
            </div>
          </div>
        </div>
      </article>

      <CTASection
        title="Ready for Professional Small Business Support?"
        description="Let our experienced Tulsa CPAs handle your books so you can focus on growing your business."
      />
    </>
  );
}