export interface ServiceContent {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  icon: string;
  heroDescription: string;
  overview: string;
  benefits: string[];
  process: { step: string; description: string }[];
  faqs: { question: string; answer: string }[];
  relatedServices: string[];
}

export const serviceContent: Record<string, ServiceContent> = {
  'business-tax-accounting': {
    slug: 'business-tax-accounting',
    title: 'Business Tax & Accounting Services',
    metaTitle: 'Business Tax & Accounting Services Tulsa | Expert CPA Firm',
    metaDescription: 'Comprehensive business tax and accounting services in Tulsa. Monthly financial statements, tax planning, and advisory services from former IRS management.',
    h1: 'Professional Business Tax & Accounting Services',
    icon: '📊',
    heroDescription: 'Our comprehensive business tax and accounting services provide monthly financial statements with expert advisory to ensure your business maintains compliance and achieves financial stability.',
    overview: 'We work closely with businesses of all sizes to optimize their financial operations. Our team provides monthly financial statements, strategic tax planning, and ongoing advisory services to ensure your business stays compliant while maximizing profitability. With former IRS management experience, we understand both sides of tax compliance and use this knowledge to protect and grow your business.',
    benefits: [
      'Monthly financial statements and reporting',
      'Strategic tax planning to minimize liabilities',
      'Former IRS insight for compliance assurance',
      'Cash flow management and forecasting',
      'Business performance analysis and KPIs',
      'Audit-ready bookkeeping and documentation',
      'Year-round advisory and support',
      'Industry-specific expertise and benchmarking',
      'Technology integration for efficiency'
    ],
    process: [
      { step: 'Assessment', description: 'Evaluate your current accounting systems and tax situation' },
      { step: 'Implementation', description: 'Set up optimized accounting and tax strategies' },
      { step: 'Monitoring', description: 'Ongoing review and monthly financial reporting' },
      { step: 'Optimization', description: 'Continuous improvement of tax positions and operations' }
    ],
    faqs: [
      {
        question: 'How often will I receive financial statements?',
        answer: 'We provide monthly financial statements including balance sheets, income statements, and cash flow reports. These are typically delivered within 10 business days after month-end, along with a summary of key insights and recommendations.'
      },
      {
        question: 'What industries do you specialize in for business accounting?',
        answer: 'We have extensive experience with restaurants, construction, oil & gas, nonprofits, real estate, and professional services. Our team understands industry-specific tax advantages and compliance requirements.'
      },
      {
        question: 'Can you help if we\'re behind on our books?',
        answer: 'Absolutely. We regularly help businesses catch up on months or even years of bookkeeping. We\'ll get you current quickly and implement systems to keep you on track going forward.'
      }
    ],
    relatedServices: ['tax-planning-preparation', 'bookkeeping-services', 'financial-statements']
  },
  
  'tax-planning-preparation': {
    slug: 'tax-planning-preparation',
    title: 'Tax Planning & Preparation',
    metaTitle: 'Tax Planning & Preparation Tulsa | Strategic Tax Services',
    metaDescription: 'Expert tax planning and preparation for individuals and businesses in Tulsa. Maximize deductions, minimize liabilities with former IRS management expertise.',
    h1: 'Strategic Tax Planning & Preparation Services',
    icon: '📋',
    heroDescription: 'Our expert CPAs develop customized tax strategies for both individuals and businesses, focusing on maximizing deductions and significantly reducing tax liabilities.',
    overview: 'We stay current with tax law changes to ensure you benefit from every available opportunity. Our comprehensive approach combines year-round tax planning with meticulous preparation to minimize your tax burden legally and ethically. With former IRS management on our team, we know exactly what the IRS looks for and how to position your returns for maximum advantage.',
    benefits: [
      'Year-round tax planning strategies',
      'Maximum legal deductions identified',
      'Multi-state tax expertise',
      'Estimated tax payment planning',
      'Tax-efficient investment strategies',
      'Retirement contribution optimization',
      'Business structure tax optimization',
      'Electronic filing for faster refunds',
      'Audit protection and representation'
    ],
    process: [
      { step: 'Tax Review', description: 'Analyze prior returns and current situation' },
      { step: 'Strategy Development', description: 'Create personalized tax minimization plan' },
      { step: 'Implementation', description: 'Execute tax-saving strategies throughout the year' },
      { step: 'Preparation & Filing', description: 'Expert preparation and electronic filing' }
    ],
    faqs: [
      {
        question: 'When should I start tax planning?',
        answer: 'Tax planning should be a year-round activity, not just at tax time. The earlier in the year you start, the more opportunities you have to reduce your tax liability. We recommend quarterly reviews for businesses and semi-annual reviews for individuals.'
      },
      {
        question: 'How much can tax planning save me?',
        answer: 'Proper tax planning typically saves our clients 10-30% on their tax bills. For businesses, the savings can be even greater through entity structuring, timing strategies, and maximizing business deductions.'
      },
      {
        question: 'Do you handle complex tax situations?',
        answer: 'Yes, we specialize in complex tax situations including multi-state returns, rental properties, stock options, cryptocurrency, and international income. Our former IRS experience gives us unique insight into handling complicated returns.'
      }
    ],
    relatedServices: ['tax-write-offs-deductions', 'business-entity-selection', 'retirement-planning']
  },

  'tax-write-offs-deductions': {
    slug: 'tax-write-offs-deductions',
    title: 'Tax Write-Offs & Deductions',
    metaTitle: 'Tax Write-Offs & Deductions Tulsa | Maximize Tax Savings',
    metaDescription: 'Expert guidance on tax write-offs and deductions in Tulsa. Home office, mileage, retirement contributions, and more. Full IRS compliance guaranteed.',
    h1: 'Maximize Your Tax Write-Offs & Deductions',
    icon: '💰',
    heroDescription: 'We help you identify and claim all eligible tax write-offs and deductions while ensuring full compliance with IRS guidelines.',
    overview: 'Our team ensures you never miss a deduction you\'re entitled to claim. From home office expenses and business mileage to retirement contributions and charitable donations, we identify every opportunity to reduce your tax liability. With former IRS management experience, we know exactly what documentation is needed and how to substantiate your deductions to withstand any scrutiny.',
    benefits: [
      'Home office deduction optimization',
      'Vehicle and mileage deduction tracking',
      'Business expense categorization',
      'Charitable contribution strategies',
      'Medical expense deduction planning',
      'Education credit maximization',
      'Retirement contribution strategies',
      'Depreciation and Section 179 planning',
      'IRS-compliant documentation systems'
    ],
    process: [
      { step: 'Deduction Audit', description: 'Review all potential deductions and credits' },
      { step: 'Documentation', description: 'Organize supporting documentation properly' },
      { step: 'Optimization', description: 'Structure deductions for maximum benefit' },
      { step: 'Compliance', description: 'Ensure full IRS compliance and audit-readiness' }
    ],
    faqs: [
      {
        question: 'What is the home office deduction worth?',
        answer: 'The home office deduction can save thousands annually. You can deduct either $5 per square foot (up to 300 sq ft) using the simplified method, or actual expenses including mortgage interest, utilities, and depreciation proportional to your office space.'
      },
      {
        question: 'How do I track business mileage properly?',
        answer: 'The IRS requires contemporaneous records including date, destination, purpose, and miles driven. We can recommend apps and systems to make tracking easy and IRS-compliant. The 2024 rate is 67 cents per business mile.'
      },
      {
        question: 'What expenses can I write off as a business owner?',
        answer: 'Common business write-offs include office supplies, professional services, advertising, travel, meals (typically 50% deductible), insurance, retirement contributions, and equipment purchases. We\'ll help identify industry-specific deductions you may be missing.'
      }
    ],
    relatedServices: ['tax-planning-preparation', 'business-tax-accounting', 'real-estate-tax']
  },

  'irs-audit-representation': {
    slug: 'irs-audit-representation',
    title: 'IRS Audit Representation',
    metaTitle: 'IRS Audit Representation Tulsa | Former IRS Manager CPA',
    metaDescription: 'Expert IRS audit representation in Tulsa from former IRS management. Professional negotiation for favorable settlements and penalty reduction.',
    h1: 'Expert IRS Audit Representation Services',
    icon: '🛡️',
    heroDescription: 'If you\'re facing an IRS or state tax audit, our experienced team provides expert representation throughout the process.',
    overview: 'With former IRS management on our team, we know exactly how the IRS operates and what they\'re looking for. We handle all communications with the IRS on your behalf, prepare comprehensive responses to audit notices, and negotiate aggressively for the best possible outcome. Our proven track record includes securing favorable settlements and significant penalty reductions for our clients.',
    benefits: [
      'Former IRS manager leading representation',
      'Complete handling of IRS communications',
      'Strategic audit defense planning',
      'Penalty abatement negotiation',
      'Payment plan arrangement',
      'Offer in Compromise preparation',
      'Appeals process representation',
      'State tax audit defense',
      'Preventive audit protection strategies'
    ],
    process: [
      { step: 'Initial Review', description: 'Analyze audit notice and assess situation' },
      { step: 'Response Strategy', description: 'Develop comprehensive defense strategy' },
      { step: 'Representation', description: 'Handle all IRS communications and meetings' },
      { step: 'Resolution', description: 'Negotiate best possible outcome and settlement' }
    ],
    faqs: [
      {
        question: 'What should I do if I receive an IRS audit notice?',
        answer: 'Don\'t panic and don\'t respond without professional help. Contact us immediately for a free consultation. We\'ll review the notice, explain your options, and handle all communications with the IRS to protect your interests.'
      },
      {
        question: 'How long does an IRS audit take?',
        answer: 'Most audits are resolved within 3-6 months, though complex cases can take longer. Having professional representation typically speeds up the process and leads to better outcomes. We work to resolve audits as quickly as possible while protecting your rights.'
      },
      {
        question: 'Can you help with old tax debts?',
        answer: 'Yes, we specialize in resolving tax debts through various IRS programs including Offers in Compromise, installment agreements, and Currently Not Collectible status. We\'ll evaluate your situation and pursue the best resolution option.'
      }
    ],
    relatedServices: ['tax-planning-preparation', 'business-tax-accounting', 'estate-trust-tax']
  },

  'estate-trust-tax': {
    slug: 'estate-trust-tax',
    title: 'Estate & Trust Tax Services',
    metaTitle: 'Estate & Trust Tax Services Tulsa | Expert Estate Planning CPA',
    metaDescription: 'Comprehensive estate and trust tax services in Tulsa. Tax preparation, planning, probate assistance, and beneficiary accounting from experienced CPAs.',
    h1: 'Professional Estate & Trust Tax Services',
    icon: '🏛️',
    heroDescription: 'Our specialized estate and trust services include comprehensive tax preparation, strategic planning, and financial management.',
    overview: 'We provide expert guidance through the complex world of estate and trust taxation. Our services encompass everything from initial estate planning to final distributions, including trust tax returns, estate tax returns, and beneficiary planning. We help families preserve wealth across generations while minimizing tax liabilities and ensuring smooth estate administration.',
    benefits: [
      'Estate and trust tax return preparation',
      'Estate planning and wealth transfer strategies',
      'Trust administration guidance',
      'Probate assistance and documentation',
      'Beneficiary tax planning',
      'Generation-skipping tax planning',
      'Charitable giving strategies',
      'Family limited partnership structuring',
      'Estate liquidity planning'
    ],
    process: [
      { step: 'Estate Analysis', description: 'Review estate structure and tax implications' },
      { step: 'Planning', description: 'Develop tax-efficient estate and trust strategies' },
      { step: 'Implementation', description: 'Execute estate planning documents and structures' },
      { step: 'Administration', description: 'Ongoing trust management and tax compliance' }
    ],
    faqs: [
      {
        question: 'When is an estate tax return required?',
        answer: 'For 2024, federal estate tax returns (Form 706) are required for estates exceeding $13.61 million per person. However, even smaller estates may need to file for portability elections or state estate taxes. We help determine your filing requirements.'
      },
      {
        question: 'How are trusts taxed?',
        answer: 'Trusts are subject to compressed tax brackets with top rates applying at much lower income levels than individuals. Proper planning and distributions can significantly reduce overall tax liability. We optimize trust taxation through strategic distribution planning.'
      },
      {
        question: 'Can you help with inherited property taxes?',
        answer: 'Yes, we help with stepped-up basis calculations, estate valuations, and tax planning for inherited assets. This includes real estate, investments, and business interests. Proper handling can save thousands in future capital gains taxes.'
      }
    ],
    relatedServices: ['tax-planning-preparation', 'real-estate-tax', 'financial-statements']
  },

  'business-entity-selection': {
    slug: 'business-entity-selection',
    title: 'Business Entity Selection',
    metaTitle: 'Business Entity Selection Tulsa | LLC vs S-Corp vs C-Corp',
    metaDescription: 'Expert guidance on business entity selection in Tulsa. Compare LLC, S-Corp, and C-Corp tax benefits. Professional filing and registration assistance.',
    h1: 'Strategic Business Entity Selection Services',
    icon: '🏢',
    heroDescription: 'We guide entrepreneurs through the complex decision of business entity selection, explaining tax benefits and implications.',
    overview: 'Choosing the right business structure is one of the most important decisions you\'ll make as an entrepreneur. We analyze your specific situation to recommend whether an LLC, S-Corporation, C-Corporation, or partnership best suits your needs. Our comprehensive service includes entity formation, tax election filings, and ongoing compliance support to ensure you maximize tax benefits while maintaining liability protection.',
    benefits: [
      'Comprehensive entity comparison analysis',
      'Tax savings projections for each structure',
      'Liability protection assessment',
      'State registration and filing assistance',
      'Federal tax election preparation',
      'Operating agreement drafting guidance',
      'Multi-state entity structuring',
      'Entity conversion planning',
      'Ongoing compliance support'
    ],
    process: [
      { step: 'Business Analysis', description: 'Evaluate your business model and goals' },
      { step: 'Entity Comparison', description: 'Compare tax implications of each structure' },
      { step: 'Formation', description: 'Handle all filing and registration requirements' },
      { step: 'Tax Elections', description: 'File necessary tax elections and documentation' }
    ],
    faqs: [
      {
        question: 'Should I choose an LLC or S-Corp?',
        answer: 'The choice depends on your income level and business goals. S-Corps can save on self-employment taxes once net income exceeds $60,000-80,000, but require more formalities. LLCs offer more flexibility but may have higher tax costs. We\'ll analyze your specific situation.'
      },
      {
        question: 'When should I consider a C-Corporation?',
        answer: 'C-Corporations make sense for businesses planning to raise venture capital, go public, or have foreign investors. The 21% flat tax rate can also be advantageous for businesses retaining significant profits for growth.'
      },
      {
        question: 'Can I change my business entity later?',
        answer: 'Yes, entity conversions are possible but can have tax consequences. Common conversions include LLC to S-Corp or S-Corp to C-Corp. We help plan and execute conversions to minimize tax impact and maintain business continuity.'
      }
    ],
    relatedServices: ['business-tax-accounting', 'tax-planning-preparation', 'payroll-services']
  },

  'real-estate-tax': {
    slug: 'real-estate-tax',
    title: 'Real Estate Tax Services',
    metaTitle: 'Real Estate Tax Services Tulsa | 1031 Exchange & Investment Property',
    metaDescription: 'Specialized real estate tax services in Tulsa. 1031 exchanges, multi-state compliance, investment property strategies from experienced real estate CPAs.',
    h1: 'Specialized Real Estate Tax Services',
    icon: '🏠',
    heroDescription: 'Our real estate tax services cater to property owners and investors with specialized strategies for maximum tax efficiency.',
    overview: 'Real estate investments offer unique tax advantages, but navigating the complex rules requires expertise. We specialize in helping real estate investors and property owners maximize their tax benefits through strategies like 1031 exchanges, cost segregation studies, and proper expense categorization. Our multi-state expertise ensures compliance while optimizing your overall tax position across your entire portfolio.',
    benefits: [
      '1031 exchange facilitation and planning',
      'Cost segregation studies for accelerated depreciation',
      'Passive activity loss optimization',
      'Multi-state tax compliance',
      'Opportunity Zone investment guidance',
      'Short-term rental tax strategies',
      'Real estate professional status planning',
      'Property disposition planning',
      'Like-kind exchange strategies'
    ],
    process: [
      { step: 'Portfolio Review', description: 'Analyze your real estate holdings and tax situation' },
      { step: 'Strategy Development', description: 'Create tax optimization plan for your properties' },
      { step: 'Implementation', description: 'Execute tax-saving strategies and structures' },
      { step: 'Ongoing Management', description: 'Monitor and adjust strategies as portfolio grows' }
    ],
    faqs: [
      {
        question: 'What is a 1031 exchange and how much can it save?',
        answer: 'A 1031 exchange allows you to defer capital gains taxes when selling investment property by reinvesting in like-kind property. This can defer taxes of 20-37% federal plus state taxes, potentially saving tens or hundreds of thousands of dollars.'
      },
      {
        question: 'How does real estate professional status help with taxes?',
        answer: 'Real estate professional status allows you to deduct rental losses against other income without passive activity limitations. This requires 750+ hours annually in real estate activities and material participation in your rentals.'
      },
      {
        question: 'Can I deduct my rental property expenses?',
        answer: 'Yes, rental properties offer numerous deductions including mortgage interest, property taxes, insurance, repairs, management fees, and depreciation. We ensure you capture all allowable expenses while maintaining proper documentation.'
      }
    ],
    relatedServices: ['tax-planning-preparation', 'tax-write-offs-deductions', 'business-tax-accounting']
  },

  'payroll-services': {
    slug: 'payroll-services',
    title: 'Payroll Services',
    metaTitle: 'Payroll Services Tulsa | Professional Payroll Processing & Compliance',
    metaDescription: 'Comprehensive payroll services in Tulsa. Payroll processing, tax compliance, quarterly filings, W-2 preparation from experienced CPAs.',
    h1: 'Complete Payroll Services & Compliance',
    icon: '💳',
    heroDescription: 'Our payroll services handle all aspects of payroll processing including tax withholdings, compliance, and reporting.',
    overview: 'Payroll processing is complex and mistakes can be costly. Our comprehensive payroll services ensure accurate, timely payroll while maintaining full compliance with federal and state regulations. We handle everything from weekly payroll processing to year-end W-2s, allowing you to focus on running your business while we handle the complexities of payroll tax compliance.',
    benefits: [
      'Accurate payroll processing and direct deposits',
      'Federal and state tax withholding calculations',
      'Quarterly payroll tax filing (941, 940, state)',
      'Year-end W-2 and 1099 preparation',
      'New hire reporting compliance',
      'Workers compensation reporting',
      'Paid time off tracking',
      'Multi-state payroll expertise',
      'Employee self-service portal access'
    ],
    process: [
      { step: 'Setup', description: 'Configure payroll system with your requirements' },
      { step: 'Processing', description: 'Regular payroll runs with direct deposit' },
      { step: 'Tax Filing', description: 'Handle all payroll tax deposits and filings' },
      { step: 'Reporting', description: 'Provide detailed payroll reports and analytics' }
    ],
    faqs: [
      {
        question: 'How much do payroll services cost?',
        answer: 'Our payroll services start at $40 per month base fee plus $4 per employee. This includes all processing, tax filings, and year-end forms. Additional services like time tracking or HR support are available.'
      },
      {
        question: 'What happens if there\'s a payroll tax error?',
        answer: 'We guarantee our payroll tax calculations and filings. If an error on our part results in penalties, we cover those penalties. Our accuracy rate exceeds 99.9% thanks to our experienced team and quality controls.'
      },
      {
        question: 'Can you handle restaurant tip reporting?',
        answer: 'Yes, we specialize in restaurant payroll including tip reporting, tip credits, and FICA tip calculations. We ensure compliance with IRS tip reporting requirements and help maximize the FICA tip credit.'
      }
    ],
    relatedServices: ['bookkeeping-services', 'business-tax-accounting', 'financial-statements']
  },

  'bookkeeping-services': {
    slug: 'bookkeeping-services',
    title: 'Bookkeeping Services',
    metaTitle: 'Bookkeeping Services Tulsa | Professional Business Bookkeeping',
    metaDescription: 'Professional bookkeeping services in Tulsa. Accurate financial records, accounts payable/receivable, bank reconciliation from experienced bookkeepers.',
    h1: 'Professional Bookkeeping Services',
    icon: '📚',
    heroDescription: 'Our professional bookkeeping services provide accurate, up-to-date financial records essential for business decision-making.',
    overview: 'Good bookkeeping is the foundation of sound business management and tax compliance. Our professional bookkeepers maintain your financial records with meticulous attention to detail, ensuring you always have accurate, current information for decision-making. We handle all aspects of bookkeeping from transaction recording to financial reporting, giving you clear visibility into your business\'s financial health.',
    benefits: [
      'Daily transaction recording and categorization',
      'Accounts payable and receivable management',
      'Bank and credit card reconciliation',
      'Inventory tracking and management',
      'Sales tax compliance and filing',
      'Monthly financial statement preparation',
      'Cash flow tracking and reporting',
      'QuickBooks setup and training',
      'Cloud-based access to your books'
    ],
    process: [
      { step: 'Assessment', description: 'Evaluate current bookkeeping state and needs' },
      { step: 'Setup/Cleanup', description: 'Organize books and implement best practices' },
      { step: 'Ongoing Maintenance', description: 'Regular bookkeeping and reconciliation' },
      { step: 'Monthly Reporting', description: 'Deliver financial statements and insights' }
    ],
    faqs: [
      {
        question: 'How often should bookkeeping be done?',
        answer: 'We recommend weekly or bi-weekly bookkeeping for most businesses to maintain current records. This frequency ensures timely financial information, catches errors quickly, and keeps you ready for tax filing or funding opportunities.'
      },
      {
        question: 'Can you clean up messy books?',
        answer: 'Yes, we frequently help businesses clean up months or years of neglected bookkeeping. We\'ll get your books current, reconciled, and organized, then implement systems to keep them maintained going forward.'
      },
      {
        question: 'What bookkeeping software do you use?',
        answer: 'We work with QuickBooks Online, QuickBooks Desktop, Xero, and other major platforms. We can help you choose the best software for your needs or work with your existing system.'
      }
    ],
    relatedServices: ['financial-statements', 'business-tax-accounting', 'payroll-services']
  },

  'financial-statements': {
    slug: 'financial-statements',
    title: 'Financial Statements',
    metaTitle: 'Financial Statement Preparation Tulsa | Balance Sheets & P&L',
    metaDescription: 'Professional financial statement preparation in Tulsa. Balance sheets, income statements, cash flow reports for business decisions and compliance.',
    h1: 'Comprehensive Financial Statement Preparation',
    icon: '📈',
    heroDescription: 'We prepare comprehensive financial statements including balance sheets, income statements, and cash flow statements.',
    overview: 'Accurate financial statements are essential for understanding your business performance, securing financing, and making strategic decisions. We prepare detailed financial statements that go beyond basic compliance, providing insights that drive business growth. Our statements meet lender and investor requirements while giving you actionable intelligence about your business operations.',
    benefits: [
      'Monthly balance sheet preparation',
      'Detailed income statements with variance analysis',
      'Cash flow statements and projections',
      'Statement of changes in equity',
      'Industry benchmark comparisons',
      'Key performance indicator tracking',
      'Lender-ready financial packages',
      'Management discussion and analysis',
      'Compilation and review services'
    ],
    process: [
      { step: 'Data Collection', description: 'Gather all financial transactions and documents' },
      { step: 'Preparation', description: 'Prepare comprehensive financial statements' },
      { step: 'Review', description: 'Quality review and variance analysis' },
      { step: 'Delivery', description: 'Present statements with insights and recommendations' }
    ],
    faqs: [
      {
        question: 'How often do I need financial statements?',
        answer: 'Most businesses benefit from monthly financial statements for management purposes. Lenders typically require quarterly or annual statements. We recommend monthly statements to track performance and catch issues early.'
      },
      {
        question: 'What\'s included in a complete financial statement package?',
        answer: 'A complete package includes balance sheet, income statement, cash flow statement, statement of equity changes, and notes to financial statements. We also provide ratio analysis and performance metrics relevant to your industry.'
      },
      {
        question: 'Can financial statements help me get a loan?',
        answer: 'Yes, lenders require current, accurate financial statements for loan decisions. We prepare lender-ready packages that present your business favorably while meeting all requirements. We can also help project future performance for loan applications.'
      }
    ],
    relatedServices: ['bookkeeping-services', 'business-tax-accounting', 'retirement-planning']
  },

  'retirement-planning': {
    slug: 'retirement-planning',
    title: 'Retirement Planning',
    metaTitle: 'Retirement Planning Tulsa | Tax-Advantaged Retirement Strategies',
    metaDescription: 'Expert retirement planning services in Tulsa. Tax-advantaged strategies for 401(k), IRA, and business retirement plans from experienced CPAs.',
    h1: 'Tax-Advantaged Retirement Planning',
    icon: '🌴',
    heroDescription: 'Our retirement planning services help individuals and business owners develop tax-advantaged strategies for long-term wealth.',
    overview: 'Effective retirement planning requires balancing current tax savings with future income needs. We help you navigate the complex world of retirement accounts, from traditional and Roth IRAs to 401(k)s and defined benefit plans. Our strategies minimize taxes during both the accumulation and distribution phases, ensuring you keep more of what you\'ve earned for a comfortable retirement.',
    benefits: [
      '401(k) and IRA optimization strategies',
      'Roth conversion planning and timing',
      'Required minimum distribution planning',
      'Solo 401(k) setup for self-employed',
      'Defined benefit plan design',
      'Tax-efficient withdrawal strategies',
      'Social Security optimization',
      'Medicare and healthcare planning',
      'Estate planning integration'
    ],
    process: [
      { step: 'Retirement Analysis', description: 'Assess current savings and retirement goals' },
      { step: 'Strategy Design', description: 'Create tax-optimized retirement plan' },
      { step: 'Implementation', description: 'Set up accounts and contribution strategies' },
      { step: 'Monitoring', description: 'Annual reviews and strategy adjustments' }
    ],
    faqs: [
      {
        question: 'How much can I contribute to retirement accounts?',
        answer: 'For 2024, you can contribute $23,000 to a 401(k) ($30,500 if 50+), and $7,000 to an IRA ($8,000 if 50+). Self-employed individuals may contribute up to $69,000 to a Solo 401(k). We help maximize contributions within IRS limits.'
      },
      {
        question: 'Should I do a Roth conversion?',
        answer: 'Roth conversions can be beneficial if you expect higher future tax rates or want tax-free growth. The decision depends on your current tax bracket, retirement timeline, and estate planning goals. We analyze whether and when conversions make sense for you.'
      },
      {
        question: 'What retirement plan is best for small business owners?',
        answer: 'Options include SEP-IRA, SIMPLE IRA, Solo 401(k), or defined benefit plans. Solo 401(k)s often provide the highest contribution limits for owner-only businesses. We help choose and implement the best plan for your situation.'
      }
    ],
    relatedServices: ['tax-planning-preparation', 'estate-trust-tax', 'financial-statements']
  }
};