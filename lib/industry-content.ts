export interface IndustryContent {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  icon: string;
  heroDescription: string;
  overview: string;
  challenges: string[];
  solutions: string[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
  relatedServices: string[];
}

export const industryContent: Record<string, IndustryContent> = {
  'restaurants': {
    slug: 'restaurants',
    title: 'Restaurant & Food Service',
    metaTitle: 'Restaurant CPA Services Tulsa | Food Service Accounting',
    metaDescription: 'Specialized CPA services for Tulsa restaurants and food service businesses. Expert handling of POS systems, inventory, payroll, and food industry tax requirements.',
    h1: 'CPA Services for Restaurants & Food Service in Tulsa',
    icon: '🍽️',
    heroDescription: 'Navigate the unique financial challenges of the restaurant industry with specialized accounting services designed for food service businesses.',
    overview: 'The restaurant industry faces unique accounting challenges that require specialized expertise. From managing food costs and inventory to handling tip reporting and complex payroll structures, restaurant finances demand attention to detail and industry-specific knowledge. Our team understands these challenges and provides tailored solutions that help restaurants maximize profitability while maintaining compliance.',
    challenges: [
      'Complex inventory and food cost management',
      'Tip reporting and payroll compliance',
      'High employee turnover and training costs',
      'Seasonal revenue fluctuations',
      'Tight profit margins requiring careful cost control',
      'Sales tax compliance across multiple jurisdictions',
      'Point-of-sale system integration',
      'Cash flow management during slow periods'
    ],
    solutions: [
      'Automated inventory tracking and cost analysis',
      'Streamlined tip reporting and payroll processing',
      'Real-time financial dashboards for profit monitoring',
      'Cash flow forecasting and management',
      'Sales tax automation and compliance',
      'POS system integration and reconciliation',
      'Employee cost analysis and optimization',
      'Menu pricing strategies based on cost analysis'
    ],
    benefits: [
      'Reduce food costs through better inventory management',
      'Ensure compliance with tip reporting requirements',
      'Improve cash flow with accurate forecasting',
      'Maximize tax deductions for restaurant expenses',
      'Streamline operations with automated reporting',
      'Get real-time insights into profitability by location/menu item'
    ],
    faqs: [
      {
        question: 'How do you handle tip reporting for restaurants?',
        answer: 'We ensure full compliance with IRS tip reporting requirements, including Form 8027 preparation, proper allocation of tips, and accurate payroll processing. Our systems track both reported and allocated tips to minimize audit risk.'
      },
      {
        question: 'Can you integrate with our POS system?',
        answer: 'Yes, we work with all major restaurant POS systems including Square, Toast, Resy, and others. We can automatically import sales data, streamline reconciliation, and provide real-time financial reporting.'
      },
      {
        question: 'What tax deductions are available for restaurants?',
        answer: 'Restaurants can deduct food costs, equipment depreciation, lease improvements, marketing expenses, and employee training costs. We also help with specialized deductions like Work Opportunity Tax Credits for hiring from targeted groups.'
      },
      {
        question: 'How do you help with food cost management?',
        answer: 'We implement inventory tracking systems, analyze food cost percentages, identify waste patterns, and provide menu pricing recommendations. Our goal is to help you maintain food costs between 28-32% of revenue.'
      }
    ],
    relatedServices: ['bookkeeping-tulsa', 'payroll-tulsa', 'tax-preparation-tulsa']
  },

  'construction': {
    slug: 'construction',
    title: 'Construction & Contractors',
    metaTitle: 'Construction CPA Services Tulsa | Contractor Accounting',
    metaDescription: 'Expert CPA services for Tulsa construction companies and contractors. Job costing, WIP reporting, bonding assistance, and construction tax expertise.',
    h1: 'CPA Services for Construction Companies in Tulsa',
    icon: '🏗️',
    heroDescription: 'Master the complex financial requirements of construction with specialized accounting services for contractors and construction companies.',
    overview: 'Construction companies face unique accounting challenges including job costing, work-in-progress reporting, bonding requirements, and complex tax issues. Our construction-focused CPA services help contractors track project profitability, manage cash flow, and maintain the financial reporting needed for bonding and growth.',
    challenges: [
      'Accurate job costing and project profitability tracking',
      'Work-in-progress (WIP) reporting and revenue recognition',
      'Managing cash flow between project payments',
      'Bonding and surety requirements',
      'Equipment depreciation and asset management',
      'Subcontractor management and 1099 reporting',
      'Progress billing and change order tracking',
      'Prevailing wage compliance on government contracts'
    ],
    solutions: [
      'Advanced job costing systems for project tracking',
      'WIP reporting for accurate financial position',
      'Cash flow forecasting and working capital management',
      'Financial statements for bonding applications',
      'Equipment depreciation optimization strategies',
      'Automated 1099 processing for subcontractors',
      'Progress billing and contract management',
      'Prevailing wage compliance and reporting'
    ],
    benefits: [
      'Track profitability by job and project phase',
      'Improve cash flow with better billing practices',
      'Qualify for larger projects with proper financial reporting',
      'Maximize equipment depreciation deductions',
      'Reduce administrative burden with automated systems',
      'Ensure compliance with government contract requirements'
    ],
    faqs: [
      {
        question: 'What is job costing and why is it important?',
        answer: 'Job costing tracks all costs (labor, materials, equipment, overhead) for each project. This allows you to determine actual profitability per job, identify cost overruns early, and make better bidding decisions on future projects.'
      },
      {
        question: 'How do you help with bonding requirements?',
        answer: 'We prepare the detailed financial statements and working capital analysis that bonding companies require. Our reports demonstrate your financial capacity and help you qualify for larger projects and higher bonding limits.'
      },
      {
        question: 'What construction tax benefits are available?',
        answer: 'Construction companies can benefit from Section 179 equipment deductions, bonus depreciation, R&D credits for process improvements, and Work Opportunity Tax Credits. We also help structure contracts to optimize tax timing.'
      },
      {
        question: 'How do you handle percentage-of-completion accounting?',
        answer: 'We implement percentage-of-completion accounting for long-term contracts, ensuring accurate revenue recognition and compliance with accounting standards. This provides a true picture of your financial performance throughout project cycles.'
      }
    ],
    relatedServices: ['financial-statements-tulsa', 'business-formation-tulsa', 'tax-preparation-tulsa']
  },

  'oil-gas': {
    slug: 'oil-gas',
    title: 'Oil & Gas',
    metaTitle: 'Oil & Gas CPA Services Oklahoma | Energy Industry Accounting',
    metaDescription: 'Specialized CPA services for Oklahoma oil and gas companies. Depletion, joint ventures, working interest accounting, and energy industry tax expertise.',
    h1: 'CPA Services for Oil & Gas Companies in Oklahoma',
    icon: '⚡',
    heroDescription: 'Navigate the complex financial landscape of the energy industry with specialized accounting services for oil and gas operations.',
    overview: 'The oil and gas industry has unique accounting requirements including depletion calculations, joint venture accounting, working interest reporting, and complex tax regulations. Our energy-focused CPA services help oil and gas companies manage these complexities while maximizing tax benefits and maintaining investor-ready financial statements.',
    challenges: [
      'Complex depletion and depreciation calculations',
      'Joint venture and working interest accounting',
      'Revenue recognition for production sharing',
      'Environmental liability and asset retirement obligations',
      'Commodity price volatility impact on valuations',
      'SEC reporting requirements for public companies',
      'State severance tax compliance across jurisdictions',
      'Lease acquisition and development cost tracking'
    ],
    solutions: [
      'Automated depletion and depreciation calculations',
      'Joint venture accounting and allocation systems',
      'Revenue recognition compliance with ASC 606',
      'Environmental liability assessment and reporting',
      'Hedge accounting for commodity price protection',
      'SEC-compliant financial statement preparation',
      'Multi-state tax compliance and optimization',
      'Comprehensive lease and well tracking systems'
    ],
    benefits: [
      'Maximize depletion and intangible drilling cost deductions',
      'Ensure accurate joint venture reporting and distributions',
      'Optimize tax strategies across multiple jurisdictions',
      'Maintain investor-ready financial statements',
      'Track profitability by lease and well',
      'Comply with complex regulatory requirements'
    ],
    faqs: [
      {
        question: 'How do you handle depletion accounting for oil and gas properties?',
        answer: 'We calculate both cost and percentage depletion for each property, ensuring you claim the maximum allowable deduction. Our systems track basis, production, and reserves to accurately compute depletion over the life of each asset.'
      },
      {
        question: 'What are intangible drilling costs and how are they treated?',
        answer: 'Intangible drilling costs (IDCs) include labor, materials, and services for drilling that have no salvage value. These can typically be expensed immediately, providing significant tax benefits in the drilling year.'
      },
      {
        question: 'How do you handle joint venture accounting?',
        answer: 'We manage complex joint venture structures, tracking each party\'s working interest, revenue sharing, and expense allocations. Our systems ensure accurate reporting to all partners and proper tax treatment of distributions.'
      },
      {
        question: 'What Oklahoma-specific tax issues should oil and gas companies know?',
        answer: 'Oklahoma has specific gross production taxes, ad valorem taxes on oil and gas properties, and unique depletion rules. We ensure compliance with all state requirements while maximizing available incentives and deductions.'
      }
    ],
    relatedServices: ['tax-preparation-tulsa', 'financial-statements-tulsa', 'business-formation-tulsa']
  },

  'nonprofits': {
    slug: 'nonprofits',
    title: 'Nonprofits & 501(c)(3)',
    metaTitle: 'Nonprofit CPA Services Tulsa | 501(c)(3) Compliance & Accounting',
    metaDescription: 'Expert CPA services for Tulsa nonprofits and 501(c)(3) organizations. Grant reporting, Form 990 preparation, and nonprofit compliance expertise.',
    h1: 'CPA Services for Nonprofits & 501(c)(3) Organizations in Tulsa',
    icon: '🤝',
    heroDescription: 'Ensure compliance and maximize impact with specialized accounting services designed for nonprofit organizations and 501(c)(3) entities.',
    overview: 'Nonprofit organizations face unique accounting and compliance requirements that differ significantly from for-profit businesses. From grant reporting and restricted fund accounting to Form 990 preparation and donor stewardship, nonprofits need specialized expertise to maintain their tax-exempt status while maximizing their mission impact.',
    challenges: [
      'Complex fund accounting and restricted donations',
      'Grant compliance and reporting requirements',
      'Form 990 preparation and public disclosure',
      'Unrelated business income tax (UBIT) compliance',
      'Donor recognition and stewardship tracking',
      'Board governance and financial oversight',
      'Audit requirements for grant funding',
      'Cash flow management with irregular funding'
    ],
    solutions: [
      'Fund accounting systems for restricted and unrestricted funds',
      'Grant tracking and compliance reporting',
      'Professional Form 990 preparation and review',
      'UBIT analysis and tax planning',
      'Donor management and contribution tracking',
      'Board-ready financial statements and dashboards',
      'Audit preparation and coordination',
      'Cash flow forecasting and budget planning'
    ],
    benefits: [
      'Maintain 501(c)(3) tax-exempt status',
      'Ensure compliance with grant requirements',
      'Provide transparency to donors and stakeholders',
      'Maximize fundraising efficiency through better reporting',
      'Reduce audit costs with proper preparation',
      'Support board governance with clear financial reporting'
    ],
    faqs: [
      {
        question: 'What is fund accounting and why do nonprofits need it?',
        answer: 'Fund accounting segregates resources based on donor restrictions and organizational purposes. This ensures restricted donations are used appropriately and provides transparency to donors, grantors, and regulatory bodies.'
      },
      {
        question: 'When does a nonprofit need to file Form 990?',
        answer: 'Most 501(c)(3) organizations with gross receipts over $200,000 or assets over $500,000 must file Form 990. Smaller organizations may file Form 990-EZ or 990-N depending on their size. We determine the correct form and ensure timely filing.'
      },
      {
        question: 'What is unrelated business income tax (UBIT)?',
        answer: 'UBIT applies to income from business activities unrelated to the nonprofit\'s exempt purpose. We analyze all revenue sources to identify potential UBIT situations and help structure activities to minimize tax liability while supporting your mission.'
      },
      {
        question: 'How do you help with grant compliance?',
        answer: 'We establish tracking systems for grant requirements, prepare required financial reports, and ensure proper documentation for audits. Our goal is to help you maintain current grants while positioning for future funding opportunities.'
      }
    ],
    relatedServices: ['financial-statements-tulsa', 'audit-assurance-tulsa', 'bookkeeping-tulsa']
  }
};