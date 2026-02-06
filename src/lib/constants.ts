export const BUSINESS_INFO = {
  name: 'Klingeman CPAs',
  phone: '(918) 922-1019',
  phoneRaw: '9189221019',
  fax: '(539) 666-2272',
  faxRaw: '5396662272',
  address: {
    street: '6539 E 31st St',
    city: 'Tulsa',
    state: 'Oklahoma',
    stateAbbr: 'OK',
    zip: '74145',
    full: '6539 E 31st St, Tulsa, OK 74145'
  },
  mailingAddress: {
    po: 'PO Box 33081',
    city: 'Tulsa',
    stateAbbr: 'OK',
    zip: '74153-3081',
    full: 'PO Box 33081, Tulsa, OK 74153-3081'
  },
  email: 'Matt.Klingeman@klingemancpas.com',
  hours: {
    weekdays: '8:00 AM - 5:00 PM',
    saturday: 'By Appointment',
    sunday: 'Closed'
  },
  safeSendPortal: 'https://safesend.com', // TODO: Replace with actual Klingeman SafeSend portal URL
  social: {
    linkedin: '#',
    facebook: '#',
    google: '#'
  }
};

export const FOUNDER_INFO = {
  name: 'Matt Klingeman',
  title: 'CPA, Founder',
  education: "Master's in Business Taxation",
  experience: 'Former IRS Manager, 20+ Years CPA Experience',
  description: 'Matt Klingeman holds a Master\'s in Business Taxation and brings unique expertise as a former IRS manager with over 20 years of CPA experience.',
  bio: 'With over 20 years of experience in tax and accounting, including time as an IRS manager, I founded Klingeman CPAs to provide businesses and individuals with the insider expertise they need to navigate complex tax situations confidently.',
  credentials: [
    'CPA',
    'Former IRS Manager',
    "Master's in Taxation",
    '20+ Years Experience'
  ]
};

export const TRUST_BADGES = [
  'Former IRS Management Experience',
  'Over 225 Years Combined CPA Experience',
  'Master\'s in Business Taxation',
  'Specialized Small Business Expertise',
  'Proven IRS Audit & Negotiation Success'
];

export const SERVICES = [
  {
    title: 'Business Tax & Accounting Services',
    slug: 'business-tax-accounting',
    description: 'Monthly financial statements advisory ensuring compliance and financial stability',
    fullDescription: 'Our comprehensive business tax and accounting services provide monthly financial statements with expert advisory to ensure your business maintains compliance and achieves financial stability. We work closely with businesses of all sizes to optimize their financial operations.',
    icon: '📊'
  },
  {
    title: 'Tax Planning & Preparation',
    slug: 'tax-planning-preparation',
    description: 'Tax strategies for individuals & businesses maximizing deductions and reducing tax liabilities',
    fullDescription: 'Our expert CPAs develop customized tax strategies for both individuals and businesses, focusing on maximizing deductions and significantly reducing tax liabilities. We stay current with tax law changes to ensure you benefit from every available opportunity.',
    icon: '📋'
  },
  {
    title: 'Audit Services',
    slug: 'audit-services',
    description: 'Comprehensive audit services including financial, internal, compliance, and operational audits',
    fullDescription: 'With a dedicated audit specialist on staff, we provide thorough audit services covering financial audits, internal audits, external audits, compliance audits, operational audits, IT audits, and tax audits. Our experienced team ensures accuracy, compliance, and actionable insights for your organization.',
    icon: '🔍'
  },
  {
    title: 'IRS Audit Representation',
    slug: 'irs-audit-representation',
    description: 'Expert CPA guidance in IRS & state tax audits securing favorable settlements and penalty reductions',
    fullDescription: 'If you\'re facing an IRS or state tax audit, our experienced CPA team provides expert representation throughout the process. We negotiate with tax authorities on your behalf, working to secure favorable settlements and reduce penalties.',
    icon: '🛡️'
  },
  {
    title: 'Estate & Trust Tax Services',
    slug: 'estate-trust-tax',
    description: 'Estate and trust tax preparation, planning, and financial management with probate and beneficiary accounting',
    fullDescription: 'Our specialized estate and trust services include comprehensive tax preparation, strategic planning, and financial management. We also provide probate assistance and beneficiary accounting services to ensure smooth estate administration.',
    icon: '🏛️'
  },
  {
    title: 'Business Entity Selection',
    slug: 'business-entity-selection',
    description: 'LLC vs. S-Corp vs. C-Corp tax benefits & structuring guidance with filing and registration assistance',
    fullDescription: 'We guide entrepreneurs through the complex decision of business entity selection, explaining the tax benefits and implications of LLC, S-Corp, and C-Corp structures. Our team provides professional assistance with all filing and registration requirements.',
    icon: '🏢'
  },
  {
    title: 'Capital Raising & Funding',
    slug: 'capital-raising-funding',
    description: 'Expert assistance in raising capital and initiating funding rounds for your startup or business',
    fullDescription: 'Whether you\'re a startup seeking seed funding or an established business looking to expand, our team provides expert guidance through the capital raising process. We help prepare financial documentation, develop investor presentations, and navigate funding rounds to secure the capital your business needs to grow.',
    icon: '💼'
  },
  {
    title: 'Payroll & Benefits Administration',
    slug: 'payroll-services',
    description: 'Full-service payroll processing, benefits administration, and compliance - both advisory and complete outsourcing',
    fullDescription: 'Our comprehensive payroll and benefits administration services handle all aspects of employee compensation. Choose from full-service outsourcing or advisory support for your in-house team. We manage payroll processing, tax withholdings, benefits enrollment, compliance, quarterly filings, and year-end W-2/1099 preparation.',
    icon: '💳'
  },
  {
    title: 'Full Bookkeeping & Record Keeping',
    slug: 'bookkeeping-services',
    description: 'Complete bookkeeping and record keeping services - both advisory guidance and full-service options available',
    fullDescription: 'Our professional bookkeeping services provide complete, accurate financial records essential for business decision-making. Whether you need full-service bookkeeping or advisory support for your team, we handle accounts payable/receivable, bank reconciliations, and monthly financial reporting. Both advisory and full-service options available.',
    icon: '📚'
  },
  {
    title: 'Financial Statements',
    slug: 'financial-statements',
    description: 'Preparation of accurate financial statements for business decision-making and compliance',
    fullDescription: 'We prepare comprehensive financial statements including balance sheets, income statements, and cash flow statements. Our detailed reports provide the insights needed for informed business decisions and lender compliance.',
    icon: '📈'
  },
  {
    title: 'Retirement Planning',
    slug: 'retirement-planning',
    description: 'Tax-advantaged retirement strategies for individuals and business owners',
    fullDescription: 'Our retirement planning services help individuals and business owners develop tax-advantaged strategies for long-term wealth accumulation. We optimize 401(k)s, IRAs, and other retirement vehicles to minimize taxes while maximizing growth.',
    icon: '🌴'
  },
  {
    title: 'QuickBooks Cleanup & Catch-Up',
    slug: 'quickbooks-cleanup',
    description: 'Fix months or years of past-due books with fast, fixed-fee QuickBooks cleanup',
    fullDescription: 'Behind on your books? We\'ll catch you up fast. Our Tulsa CPA team reconciles historical months, fixes your chart of accounts, and delivers clean, tax-ready financial statements—often in just 2-4 weeks.',
    icon: '🔧'
  },
  {
    title: 'QuickBooks Setup & Training',
    slug: 'quickbooks-setup-training',
    description: 'Expert QuickBooks setup, integration, and customized training for your team',
    fullDescription: 'Get your QuickBooks set up right from the start, or optimize your existing file for better reporting. Our Tulsa team provides expert setup, custom training, and ongoing support to maximize your QuickBooks investment.',
    icon: '🎓'
  },
  {
    title: 'Tax Write-Offs & Deductions',
    slug: 'tax-write-offs-deductions',
    description: 'Claiming home office deductions, mileage, retirement contributions, and more with full IRS compliance',
    fullDescription: 'We help you identify and claim all eligible tax write-offs and deductions including home office expenses, business mileage, retirement contributions, and more. Our team ensures full compliance with IRS guidelines while maximizing your tax savings.',
    icon: '💰'
  },
  {
    title: 'Real Estate Tax Services',
    slug: 'real-estate-tax',
    description: 'Tax strategies for real estate investors including 1031 exchanges & multi-state tax compliance',
    fullDescription: 'Our real estate tax services cater to property owners and investors with specialized strategies including 1031 exchanges, multi-state tax compliance, and investment property optimization. We help maximize your real estate portfolio\'s tax efficiency.',
    icon: '🏠'
  }
];

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image?: string;
  credentials?: string[];
  featured?: boolean;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Matt Klingeman',
    title: 'Founder and CPA',
    bio: 'Matt holds a Master\'s in Business Taxation and is a former IRS manager with over 20 years of experience as a practicing CPA. His leadership and expertise guide our firm\'s day-to-day operations, with a primary focus on consulting and taxes.',
    image: '/matt-klingeman.png',
    credentials: ['CPA', 'Former IRS Manager', "Master's in Taxation"],
    featured: true
  },
  {
    name: 'Ronald J. Saffa',
    title: 'JD, CPA',
    bio: 'Ron has been a Certified Public Accountant since 1974. He received his Bachelor of Science and Master of Science in Accounting from Oklahoma State University. After his certification, he worked for 9 years for the Internal Revenue Service. In 1981, he received his Juris Doctor of Law from the University of Tulsa. In 1982, he was admitted to the Oklahoma Bar Association. In 1983, he was also admitted to the U.S. District Court, Northern and Eastern Districts of Oklahoma, the U.S. Court of Appeals, Tenth and Federal Circuits, the U.S. Tax Court and the U.S. Court of Federal Claims. Ronald was then admitted to the Supreme Court in 1985. In 2011, he was named one of the Super Lawyers of Oklahoma. His expertise lies in the areas of Federal Taxation and State Taxation.',
    credentials: ['Attorney at Law', 'CPA', 'Super Lawyer'],
    featured: true
  },
  {
    name: 'Jeanette Ross',
    title: 'EA, CFE',
    bio: 'As an Enrolled Agent and Certified Fraud Examiner, Jeanette specializes in tax representation and fraud prevention for our clients.',
    credentials: ['Certified Fraud Examiner', 'Enrolled Agent'],
    featured: true
  },
  {
    name: 'Patti Hall',
    title: 'CPA',
    bio: 'Patti received her BBA, majoring in accounting, from the University of Tulsa. She is a CPA and worked for the IRS for 35 years. Her experience at the IRS included responsibility for small businesses, complex individual returns, large complex partnerships, and multi-national corporations.',
    credentials: ['CPA', '35+ Years IRS Experience'],
    featured: true
  },
  {
    name: 'Mitch Ross',
    title: 'CPA',
    bio: 'Mitch brings extensive experience in tax preparation and business consulting to our team, helping clients navigate complex financial challenges.',
    credentials: ['CPA']
  },
  {
    name: 'Taylor Telford',
    title: 'Accountant and Management for Rodney Carrington',
    bio: 'Taylor graduated with a Bachelor of Science Degree in Justice Administration and a minor in Psychology from Rogers State University in 2016. Taylor recently expanded her knowledge to include accounting, bookkeeping and payroll services.'
  },
  {
    name: 'Mitch Levinson',
    title: 'Accountant',
    bio: 'Mitch graduated with a Bachelor of Economics from the University of Oklahoma in 2016. He provides bookkeeping, payroll and accounts payable services to clients and small businesses. In his spare time, Mitch enjoys supporting the OKC Thunder and OU Sooners.'
  },
  {
    name: 'Brin Bedwell',
    title: 'Accountant',
    bio: 'Brin graduated from Oklahoma State University with a Bachelor of Science in Accounting in 2025. He is currently studying to obtain his CPA license.'
  }
];

export const INDUSTRIES = [
  {
    title: 'Construction',
    slug: 'construction',
    description: 'CPA services tailored for construction contractors and builders'
  },
  {
    title: 'Restaurants',
    slug: 'restaurants',
    description: 'Specialized accounting for Tulsa restaurants and food service businesses'
  },
  {
    title: 'Oil & Gas',
    slug: 'oil-gas',
    description: 'Expert tax and accounting for Oklahoma\'s oil and gas industry'
  },
  {
    title: 'Real Estate',
    slug: 'real-estate',
    description: 'Tax strategies and accounting for real estate investors and property managers'
  },
  {
    title: 'Professional Services',
    slug: 'professional-services',
    description: 'CPA services for law firms, medical practices, and consultants'
  },
  {
    title: 'Nonprofits',
    slug: 'nonprofits',
    description: '501(c)(3) compliance and nonprofit accounting expertise'
  }
];

export const SUBURBS = [
  {
    name: 'Broken Arrow',
    slug: 'cpa-broken-arrow',
    population: '113,540',
    distance: '15 minutes from Tulsa'
  },
  {
    name: 'Bixby',
    slug: 'cpa-bixby',
    population: '28,609',
    distance: '20 minutes from Tulsa'
  },
  {
    name: 'Owasso',
    slug: 'cpa-owasso',
    population: '38,240',
    distance: '20 minutes from Tulsa'
  },
  {
    name: 'Jenks',
    slug: 'cpa-jenks',
    population: '25,949',
    distance: '15 minutes from Tulsa'
  },
  {
    name: 'Sand Springs',
    slug: 'cpa-sand-springs',
    population: '19,912',
    distance: '10 minutes from Tulsa'
  },
  {
    name: 'Claremore',
    slug: 'cpa-claremore',
    population: '19,580',
    distance: '30 minutes from Tulsa'
  },
  {
    name: 'Sapulpa',
    slug: 'cpa-sapulpa',
    population: '21,929',
    distance: '20 minutes from Tulsa'
  },
  {
    name: 'Collinsville',
    slug: 'cpa-collinsville',
    population: '8,114',
    distance: '25 minutes from Tulsa'
  },
  {
    name: 'Coweta',
    slug: 'cpa-coweta',
    population: '10,191',
    distance: '30 minutes from Tulsa'
  },
  {
    name: 'Muskogee',
    slug: 'cpa-muskogee',
    population: '36,878',
    distance: '50 minutes from Tulsa'
  },
  {
    name: 'Bartlesville',
    slug: 'cpa-bartlesville',
    population: '37,290',
    distance: '50 minutes from Tulsa'
  },
  {
    name: 'Okmulgee',
    slug: 'cpa-okmulgee',
    population: '11,322',
    distance: '40 minutes from Tulsa'
  },
  {
    name: 'Midtown Tulsa',
    slug: 'cpa-midtown-tulsa',
    population: '',
    distance: '10 minutes from office'
  },
  {
    name: 'Downtown Tulsa',
    slug: 'cpa-downtown-tulsa',
    population: '',
    distance: '5 minutes from office'
  },
  {
    name: 'South Tulsa',
    slug: 'cpa-south-tulsa',
    population: '',
    distance: '15 minutes from office'
  },
  {
    name: 'Cherry Street / Brookside',
    slug: 'cpa-cherry-street-tulsa',
    population: '',
    distance: '10 minutes from office'
  }
];