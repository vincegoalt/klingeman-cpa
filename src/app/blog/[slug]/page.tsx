import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, Clock, Calendar, ArrowLeft, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';
import { generateBreadcrumbSchema } from '@/lib/schemas';

type Props = {
  params: Promise<{ slug: string }>;
};

const blogPosts: Record<string, {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishDate: string;
  content: string;
  tags: string[];
}> = {
  'cpa-near-me-choose-accountant-tulsa': {
    title: 'CPA Near Me: How to Choose the Right Accountant in Tulsa',
    excerpt: 'Finding the right CPA in Tulsa can make a significant difference in your financial success. Learn what to look for when choosing your accountant.',
    category: 'CPA Selection',
    readTime: '8 min read',
    publishDate: 'August 20, 2025',
    tags: ['CPA Selection', 'Tulsa', 'Tax Planning', 'IRS Experience'],
    content: `
## Why Location Matters: The Benefits of a Local Tulsa CPA

When searching "CPA near me" in Tulsa, proximity offers several advantages beyond convenience. A local CPA understands Oklahoma state tax laws, Tulsa business regulations, and the unique economic factors affecting our community.

### Local Knowledge Advantages:
- Understanding of Oklahoma state tax requirements and deadlines
- Familiarity with Tulsa area business regulations
- Knowledge of local economic conditions and industry trends
- Established relationships with local banks and professionals
- Accessibility for in-person meetings and consultations

## Essential Credentials to Look For

Not all accountants are created equal. When evaluating potential CPAs in Tulsa, certain credentials and qualifications should be non-negotiable.

### Must-Have Qualifications:

**1. CPA License**
Ensure your accountant holds an active CPA (Certified Public Accountant) license in Oklahoma. This certification requires extensive education, examination, and continuing education requirements.

**2. Relevant Experience**
Look for CPAs with experience in your specific needs:
- Individual tax preparation
- Business tax planning and preparation
- Industry-specific expertise (if applicable)
- IRS audit defense experience

**3. Professional Associations**
Membership in professional organizations like the American Institute of CPAs (AICPA) or Oklahoma Society of CPAs demonstrates commitment to professional standards.

## Questions to Ask Potential CPAs

Before choosing your CPA, ask these important questions to ensure they're the right fit:

### Experience and Expertise
- How long have you been practicing as a CPA?
- What percentage of your clients are similar to my situation?
- Do you have experience with my industry or business type?
- Have you handled IRS audits or disputes?

### Services and Approach
- What services do you provide beyond tax preparation?
- How do you stay current with tax law changes?
- What is your approach to tax planning vs. just preparation?
- Do you provide year-round support or just seasonal help?

## Red Flags to Avoid

Certain warning signs should make you reconsider your choice of CPA:

### Credential Issues
- No active CPA license or unwillingness to provide license number
- Claims to be a CPA without proper certification
- History of disciplinary actions or complaints

### Unrealistic Promises
- Guarantees of specific refund amounts before reviewing your documents
- Claims that "everyone qualifies" for certain deductions
- Pressure to sign documents without explanation
- Promises to hide income or inflate deductions

## The Value of Former IRS Experience

One unique qualification to consider is former IRS experience. CPAs with IRS backgrounds bring invaluable insights to tax planning and audit defense.

### Benefits of IRS Experience:
- Deep understanding of IRS procedures and mindset
- Knowledge of audit triggers and how to avoid them
- Expertise in IRS negotiations and dispute resolution
- Insight into compliance strategies that satisfy IRS requirements

## Why Klingeman CPAs Stands Out

At Klingeman CPAs, we combine local Tulsa knowledge with unique IRS expertise. Our founder's experience as a former IRS manager provides insights that protect our clients and maximize their tax savings.

- Former IRS management experience
- 20+ years of CPA practice in Tulsa
- Year-round support and planning
- Personalized service and attention
- Proven track record with local clients

## Taking the Next Step

Choosing the right CPA is an investment in your financial future. Don't rush the decision, but don't wait too long either. The best CPAs often have limited availability, especially during tax season.

### Action Steps:
1. Research potential CPAs in your area
2. Verify credentials and check references
3. Schedule consultations with your top choices
4. Ask detailed questions about experience and approach
5. Compare responses and make your decision
6. Begin working together before you need urgent help

Remember, the best time to find a CPA is when you don't desperately need one. Start your search early, and you'll have time to make the right choice.
    `
  },
  'tulsa-small-business-tax-checklist': {
    title: 'Tulsa Small Business Tax Checklist (Free Download)',
    excerpt: "Don't miss important tax deductions! Our comprehensive checklist helps Tulsa small businesses stay organized and compliant.",
    category: 'Small Business',
    readTime: '6 min read',
    publishDate: 'August 18, 2025',
    tags: ['Small Business', 'Tax Planning', 'Tulsa', 'Bookkeeping'],
    content: `
## Why Small Business Tax Organization Matters

Running a small business in Tulsa comes with many responsibilities, and tax compliance is one of the most critical. Proper organization throughout the year not only ensures compliance but can save you thousands in taxes and prevent costly penalties.

### Benefits of Staying Organized:
- Maximize legitimate business deductions
- Avoid penalties and interest charges
- Reduce stress during tax season
- Improve financial decision-making
- Facilitate business growth and funding opportunities

## Essential Business Records to Maintain

### Income Documentation
- All sales receipts and invoices
- Bank deposit records
- Credit card processing statements
- Cash receipt logs
- 1099 forms received from clients
- Interest and dividend statements

### Business Expense Records
- Receipts for all business purchases
- Office supply receipts
- Equipment and furniture purchases
- Vehicle expense logs and receipts
- Utility bills for business use
- Insurance payments
- Professional service fees
- Marketing and advertising expenses

### Employee-Related Documents
- Payroll records and timesheets
- Employee W-4 forms
- Contractor agreements and 1099s
- Benefits and insurance documentation
- Employment tax deposits

## Top Small Business Tax Deductions for Tulsa Businesses

### Office and Equipment Expenses
- **Home Office Deduction:** If you use part of your home exclusively for business
- **Equipment Purchases:** Computers, furniture, machinery (Section 179 deduction)
- **Office Supplies:** Paper, ink, software, small tools
- **Utilities:** Business portion of phone, internet, electricity

### Vehicle and Travel Expenses
- **Business Mileage:** Track all business-related driving
- **Vehicle Expenses:** Gas, maintenance, insurance (if using actual expense method)
- **Travel Expenses:** Lodging, meals (50% deductible), airfare for business trips
- **Local Business Transportation:** Parking, tolls, public transportation

### Professional and Marketing Expenses
- **Professional Services:** Legal, accounting, consulting fees
- **Advertising:** Website costs, business cards, online ads
- **Professional Development:** Training, conferences, business books
- **Business Insurance:** General liability, professional liability

## Oklahoma-Specific Tax Considerations

### State Tax Requirements
- **Oklahoma Income Tax:** File Form 511 for business income
- **Sales Tax:** Register and collect if selling taxable goods/services
- **Withholding Tax:** Required if you have employees
- **Unemployment Tax:** Oklahoma Employment Security Commission requirements

### Tulsa City Requirements
- **Business License:** Required for most businesses operating in Tulsa
- **Occupational Tax:** Annual tax based on business type and revenue
- **Property Tax:** On business equipment and inventory

## Monthly Tax Organization Tasks

### Every Month:
- Reconcile bank and credit card statements
- File receipts and categorize expenses
- Update mileage logs
- Review and pay estimated taxes if required
- Process payroll and make tax deposits

### Quarterly Tasks:
- File quarterly employment tax returns (Form 941)
- Make quarterly estimated tax payments
- Review profit and loss statements
- Assess cash flow and tax planning opportunities

## Year-End Tax Planning Strategies

### December Planning Opportunities:
- **Equipment Purchases:** Buy necessary equipment before year-end for immediate deduction
- **Expense Timing:** Pay business expenses in December to accelerate deductions
- **Income Timing:** Consider delaying income to next year if beneficial
- **Retirement Contributions:** Maximize SEP-IRA or Solo 401(k) contributions

## Common Small Business Tax Mistakes to Avoid

### Record-Keeping Mistakes:
- Mixing personal and business expenses
- Incomplete or missing receipts
- Poor mileage tracking
- Inadequate documentation for deductions

### Compliance Mistakes:
- Missing quarterly tax payments
- Late payroll tax deposits
- Incorrect worker classification (employee vs. contractor)
- Forgetting to file required forms

## When to Seek Professional Help

While this checklist provides a solid foundation, consider professional help when:
- Your business revenue exceeds $50,000 annually
- You have employees or contractors
- You're behind on bookkeeping or tax obligations
- You want to optimize tax strategies for growth
- You prefer to focus on running your business, not managing taxes
    `
  },
  'top-10-tax-deadlines-oklahoma': {
    title: 'Top 10 Tax Deadlines Every Oklahoman Should Know',
    excerpt: 'Stay ahead of important tax deadlines with our comprehensive guide to federal and Oklahoma state tax due dates.',
    category: 'Tax Planning',
    readTime: '5 min read',
    publishDate: 'August 15, 2025',
    tags: ['Tax Planning', 'Oklahoma', 'Deadlines', 'Compliance'],
    content: `
## The 10 Most Important Tax Deadlines

### 1. January 31 - Form W-2 and 1099 Distribution
Employers must provide W-2s to employees and 1099s to contractors. This is also the deadline for fourth quarter payroll tax deposits and annual unemployment reports.

**Who's affected:** All employers and businesses with contractors
**Penalty for missing:** $50-$280 per form, plus interest

### 2. March 15 - S-Corp and Partnership Tax Returns
S-Corporations (Form 1120S) and Partnerships (Form 1065) must file their tax returns or request an extension. Oklahoma follows the same deadline for state returns.

**Who's affected:** S-Corps, partnerships, and multi-member LLCs
**Extension available:** Until September 15 (federal) / October 15 (Oklahoma)

### 3. April 15 - Individual Tax Returns & First Quarter Estimates
The most well-known deadline: individual tax returns (Forms 1040 and 511-OK) and first quarter estimated tax payments are due. Also the deadline for prior-year IRA contributions.

**Who's affected:** All individual taxpayers
**Extension available:** Until October 15 (filing only, not payment)

### 4. May 15 - Tax-Exempt Organizations (Form 990)
Nonprofit organizations must file Form 990, 990-EZ, or 990-N depending on their size and revenue. Oklahoma requires concurrent filing of Form 511-X.

**Who's affected:** 501(c)(3) and other tax-exempt organizations
**Extension available:** Until November 15 (6-month extension)

### 5. June 15 - Second Quarter Estimated Tax Payments
Individuals and businesses making quarterly estimated tax payments must make their second quarter payment to both federal and Oklahoma tax authorities.

**Who's affected:** Self-employed individuals, business owners, investors
**Safe harbor:** Pay 100% of prior year tax (110% if AGI > $150K)

### 6. September 15 - Third Quarter Estimated Tax Payments
Third quarter estimated tax payments are due. This is also the deadline for extended S-Corp and partnership returns (federal only - Oklahoma extended deadline is October 15).

**Who's affected:** Quarterly taxpayers and extended business returns
**Note:** Plan ahead for year-end tax strategies

### 7. October 15 - Extended Individual & Corporate Returns
Final deadline for extended individual tax returns (Forms 1040 and 511-OK) and extended corporate returns. No further extensions available for individuals.

**Who's affected:** Taxpayers who filed extensions
**Important:** Taxes must still be paid by original due date to avoid interest

### 8. December 31 - Year-End Tax Planning Deadline
Last day to implement most tax strategies for the current year: equipment purchases, retirement contributions, expense timing, and income deferral strategies.

**Who's affected:** All taxpayers
**Key strategies:** Equipment purchases, expense acceleration, charitable giving

### 9. January 15 (Following Year) - Fourth Quarter Estimated Tax Payments
Final quarterly estimated tax payment for the previous tax year. Many taxpayers prefer to file their return early instead of making this payment.

**Who's affected:** Quarterly taxpayers
**Alternative:** File return and pay balance due by January 31

### 10. Various Dates - Payroll Tax Deposits
Federal payroll tax deposits are due either semi-weekly (Wednesday/Friday) or monthly (15th of following month) based on deposit schedule. Oklahoma withholding follows federal schedule.

**Who's affected:** All employers
**Penalty:** Up to 15% of unpaid taxes for late deposits

## Special Oklahoma Considerations

### Oklahoma-Specific Deadlines:
- **Sales Tax Returns:** Due 20th of the month following the reporting period
- **Use Tax Returns:** Due with income tax return (April 15 or extended deadline)
- **Business Personal Property:** March 15 (annual filing)
- **Motor Vehicle Registration:** Birthday month of owner

## Penalties for Missing Deadlines

### Federal Penalties:
- **Late Filing:** 5% per month (maximum 25%)
- **Late Payment:** 0.5% per month (maximum 25%)
- **Failure to Pay Estimated Tax:** Calculated based on underpayment amount
- **Payroll Tax Penalties:** 2-15% depending on how late

### Oklahoma Penalties:
- **Late Filing:** 5% per month with $25 minimum
- **Late Payment:** 1% per month
- **Underpayment Interest:** Variable rate based on federal short-term rate

## Tips for Staying Compliant

### Organization Strategies:
- **Use Technology:** Set up calendar reminders with 30-day advance notice
- **Automate When Possible:** Electronic payments and filing reduce errors
- **Maintain Good Records:** Organized books make filing easier and faster
- **Work with Professionals:** CPAs can handle deadlines and optimize strategies

### Emergency Procedures:
- **If You're Behind:** File extensions immediately to avoid failure-to-file penalties
- **Payment Plans:** Both federal and state offer installment agreements
- **Professional Help:** CPAs can negotiate penalty abatements and payment plans
    `
  },
  'guia-impuestos-pequenos-negocios-tulsa': {
    title: 'Guía de impuestos para pequeños negocios en Tulsa',
    excerpt: 'Una guía completa en español para empresarios de Tulsa sobre planificación fiscal y cumplimiento tributario.',
    category: 'Español',
    readTime: '7 min read',
    publishDate: 'August 12, 2025',
    tags: ['Español', 'Small Business', 'Tulsa', 'Tax Planning'],
    content: `
## Importancia de la Organización Fiscal

Administrar un pequeño negocio en Tulsa conlleva muchas responsabilidades, y el cumplimiento fiscal es una de las más críticas. Una organización adecuada durante todo el año no solo garantiza el cumplimiento, sino que puede ahorrarle miles de dólares en impuestos y evitar costosas multas.

### Beneficios de Mantenerse Organizado:
- Maximizar deducciones comerciales legítimas
- Evitar multas y cargos por intereses
- Reducir el estrés durante la temporada de impuestos
- Mejorar la toma de decisiones financieras
- Facilitar el crecimiento empresarial y las oportunidades de financiamiento

## Registros Empresariales Esenciales

### Documentación de Ingresos
- Todos los recibos de ventas y facturas
- Registros de depósitos bancarios
- Estados de procesamiento de tarjetas de crédito
- Registros de recibos de efectivo
- Formularios 1099 recibidos de clientes
- Estados de intereses y dividendos

### Registros de Gastos Comerciales
- Recibos de todas las compras comerciales
- Recibos de suministros de oficina
- Compras de equipos y muebles
- Registros y recibos de gastos de vehículos
- Facturas de servicios públicos para uso comercial
- Pagos de seguros
- Honorarios de servicios profesionales
- Gastos de marketing y publicidad

## Deducciones Fiscales Principales

### Gastos de Oficina y Equipos
- **Deducción de Oficina en Casa:** Si utiliza parte de su hogar exclusivamente para negocios
- **Compras de Equipos:** Computadoras, muebles, maquinaria (deducción Sección 179)
- **Suministros de Oficina:** Papel, tinta, software, herramientas pequeñas
- **Servicios Públicos:** Porción comercial de teléfono, internet, electricidad

### Gastos de Vehículo y Viaje
- **Millaje Comercial:** Registre todos los viajes relacionados con el negocio
- **Gastos de Vehículo:** Gasolina, mantenimiento, seguro
- **Gastos de Viaje:** Alojamiento, comidas (50% deducible), pasajes aéreos
- **Transporte Local:** Estacionamiento, peajes, transporte público

## Consideraciones Específicas de Oklahoma

### Requisitos de Impuestos Estatales
- **Impuesto sobre la Renta de Oklahoma:** Presentar Formulario 511 para ingresos comerciales
- **Impuesto sobre Ventas:** Registrarse y cobrar si vende bienes/servicios gravables
- **Impuesto de Retención:** Requerido si tiene empleados
- **Impuesto de Desempleo:** Requisitos de la Comisión de Seguridad del Empleo de Oklahoma

### Requisitos de la Ciudad de Tulsa
- **Licencia Comercial:** Requerida para la mayoría de negocios que operan en Tulsa
- **Impuesto Ocupacional:** Impuesto anual basado en el tipo de negocio e ingresos
- **Impuesto sobre la Propiedad:** Sobre equipos e inventario comercial

## Tareas Mensuales de Organización Fiscal

### Cada Mes:
- Conciliar estados bancarios y de tarjetas de crédito
- Archivar recibos y categorizar gastos
- Actualizar registros de millaje
- Revisar y pagar impuestos estimados si es necesario
- Procesar nómina y hacer depósitos de impuestos

### Tareas Trimestrales:
- Presentar declaraciones de impuestos de empleo trimestrales (Formulario 941)
- Hacer pagos de impuestos estimados trimestrales
- Revisar estados de pérdidas y ganancias
- Evaluar el flujo de efectivo y oportunidades de planificación fiscal

## Cuándo Buscar Ayuda Profesional

Considere ayuda profesional cuando:
- Los ingresos de su negocio superan $50,000 anuales
- Tiene empleados o contratistas
- Está atrasado en contabilidad u obligaciones fiscales
- Quiere optimizar estrategias fiscales para el crecimiento
- Prefiere enfocarse en administrar su negocio, no en gestionar impuestos

## Contacte a Klingeman CPAs

Nuestro equipo de CPAs experimentados en Tulsa está listo para ayudarle con todas sus necesidades de impuestos y contabilidad. Con experiencia previa en la administración del IRS, ofrecemos perspectivas únicas para proteger sus intereses y maximizar sus ahorros fiscales.
    `
  }
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return { title: 'Article Not Found' };
  }

  return {
    title: `${post.title} | Klingeman CPAs Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${slug}` },
  ]);

  return (
    <div className="pt-32 bg-[#F4F1EC]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Breadcrumb */}
      <div className="px-[7vw] py-4">
        <nav className="flex items-center gap-2 text-sm">
          <Link href="/" className="text-[#6D727A] hover:text-[#C8A46E]">Home</Link>
          <ChevronRight className="w-4 h-4 text-[#6D727A]" />
          <Link href="/blog" className="text-[#6D727A] hover:text-[#C8A46E]">Blog</Link>
          <ChevronRight className="w-4 h-4 text-[#6D727A]" />
          <span className="text-[#0B1E3C] truncate max-w-[200px]">{post.title}</span>
        </nav>
      </div>

      <article className="px-[7vw] py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#C8A46E] hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-[#C8A46E] text-white px-3 py-1 text-xs font-medium">
                {post.category}
              </span>
              <div className="flex items-center gap-4 text-sm text-[#6D727A]">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.publishDate}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </div>

            <h1 className="text-[clamp(28px,4vw,48px)] leading-[1.1] text-[#0B1E3C] mb-6">
              {post.title}
            </h1>

            <p className="text-[#6D727A] text-lg leading-relaxed">
              {post.excerpt}
            </p>
          </header>

          {/* Content */}
          <div className="bg-white p-8 md:p-12 border border-[rgba(11,30,60,0.10)] mb-12">
            <div
              className="prose prose-lg max-w-none prose-headings:font-['Cormorant_Garamond'] prose-headings:text-[#0B1E3C] prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-[#6D727A] prose-p:leading-relaxed prose-ul:text-[#6D727A] prose-li:my-1 prose-strong:text-[#0B1E3C]"
              dangerouslySetInnerHTML={{
                __html: post.content
                  .replace(/## (.*)/g, '<h2>$1</h2>')
                  .replace(/### (.*)/g, '<h3>$1</h3>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/- (.*)/g, '<li>$1</li>')
                  .replace(/(\d+)\. (.*)/g, '<li>$2</li>')
                  .replace(/\n\n/g, '</p><p>')
                  .replace(/<li>/g, '<ul><li>')
                  .replace(/<\/li>\n(?!<li>)/g, '</li></ul>')
              }}
            />
          </div>

          {/* Tags */}
          <div className="border-t border-[rgba(11,30,60,0.10)] pt-8 mb-12">
            <p className="text-sm text-[#6D727A] mb-4">
              This article was written by the experienced CPA team at Klingeman CPAs, serving
              Tulsa and surrounding communities with professional accounting services.
            </p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span key={index} className="bg-[#F4F1EC] text-[#0B1E3C] px-3 py-1 text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="px-[7vw] py-16 bg-[#0B1E3C]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[clamp(24px,3vw,40px)] leading-[1.1] text-white mb-6">
            Ready to Work with Experienced Tulsa CPAs?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Schedule your free consultation today and discover how our IRS expertise can benefit you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="btn-primary flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call {BUSINESS_INFO.phone}
            </a>
            <Link
              href="/contact"
              className="btn-outline border-white text-white hover:bg-white hover:text-[#0B1E3C]"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
