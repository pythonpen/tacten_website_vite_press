# Biograph Landing Page - Content Data Examples

## Stats Data (for StatsCounter component)

```javascript
export const statsData = [
  {
    value: 10000,
    label: "Organizations Using Frappe/ERPNext",
    suffix: "+"
  },
  {
    value: 50000,
    label: "Active Community Members",
    suffix: "+"
  },
  {
    value: 1000,
    label: "Open Source Contributors",
    suffix: "+"
  },
  {
    value: 140,
    label: "Countries Worldwide",
    suffix: "+"
  }
]
```

## Three Column Features Data

```javascript
export const threeColumnFeatures = [
  {
    icon: "🏥",
    title: "Clinical Operations",
    subtitle: "Industry-Standard Healthcare",
    items: [
      "Patient Management - FHIR-compliant records",
      "Lab Information System - LOINC codes, device integration",
      "Radiology Information System - DICOM, PACS integration",
      "Clinical Procedures - End-to-end workflow tracking",
      "Medication Management - CPOE, inventory tracking",
      "Physiotherapy & Rehab - Specialized therapy modules",
      "Onco-care Module - Chemotherapy session management",
      "Medical Coding - ICD-10, SNOMED-CT support",
      "Encounter Management - Complete visit documentation",
      "Vitals Tracking - Configurable vital signs capture"
    ]
  },
  {
    icon: "🏢",
    title: "Business Operations",
    subtitle: "Full ERPNext Integration Included",
    items: [
      "Accounting & Finance - Multi-currency, GL, financial reports",
      "Billing & Revenue Cycle - Automated invoicing, payment tracking",
      "Inventory Management - Multi-warehouse, batch tracking, serial numbers",
      "Purchasing & Procurement - Vendor management, PO workflows",
      "Human Resources - Payroll, attendance, leave, appraisals",
      "Asset Management - Medical equipment tracking, maintenance schedules",
      "CRM - Patient engagement, marketing campaigns, lead tracking",
      "Quality Management - ISO compliance, audit trails",
      "Project Management - Research projects, clinical trials",
      "E-commerce - Online pharmacy, appointment booking",
      "Manufacturing - Medical device production (if applicable)",
      "Supply Chain - Complete logistics management"
    ]
  },
  {
    icon: "🔧",
    title: "Platform Capabilities",
    subtitle: "Frappe Framework Power",
    items: [
      "Low-Code Development - Custom forms, doctypes, reports",
      "Workflow Engine - Visual workflow designer, automated approvals",
      "RESTful APIs - Auto-generated endpoints for every doctype",
      "Role-Based Permissions - Granular access control",
      "Multi-Tenancy - Service units, departments, branches",
      "Document Management - Paperless operations, file attachments",
      "Portal Framework - Patient/provider portals out of the box",
      "Mobile-Ready - Responsive design everywhere",
      "Print Formats - Custom templates for all documents",
      "Background Jobs - Async processing with RQ",
      "WebSocket Support - Real-time updates",
      "Built-in Testing - Quality assurance tools included"
    ]
  }
]
```

## Ecosystem Benefits Data

```javascript
export const ecosystemBenefits = [
  {
    icon: "🌟",
    title: "Battle-Tested Technology",
    subtitle: "10,000+ Organizations Trust This Stack",
    description: "Companies worldwide run their entire operations on Frappe/ERPNext - from small clinics to large hospital chains. You're building on proven technology with 15+ years of active development."
  },
  {
    icon: "👥",
    title: "Active Global Community",
    subtitle: "Never Build Alone",
    items: [
      "1,000+ active contributors",
      "50,000+ community members worldwide",
      "Regular meetups and conferences (Frappeverse)",
      "Extensive documentation and tutorials",
      "Responsive forums and chat channels",
      "YouTube channels with hundreds of tutorials"
    ]
  },
  {
    icon: "🔌",
    title: "300+ ERPNext Modules",
    subtitle: "Extend Beyond Healthcare",
    description: "Access the entire ERPNext ecosystem:",
    items: [
      "Manufacturing - If you produce medical devices",
      "Education - For training programs and medical schools",
      "E-commerce - Online pharmacy, telemedicine sales",
      "Projects - Research management, clinical trials",
      "Agriculture - Herbal medicine supply chains",
      "Hospitality - Patient accommodation"
    ]
  },
  {
    icon: "🏪",
    title: "Frappe Marketplace",
    subtitle: "Hundreds of Pre-Built Apps",
    description: "Access a thriving marketplace of extensions:",
    items: [
      "Payment gateway integrations (Stripe, Razorpay, PayPal)",
      "Communication tools (WhatsApp, SMS, Email campaigns)",
      "Analytics platforms (Google Analytics, Plausible)",
      "Shipping providers (FedEx, UPS, DHL)",
      "Custom regional modules (Tax compliance, local regulations)"
    ]
  },
  {
    icon: "💼",
    title: "Zero Vendor Lock-In",
    subtitle: "True Freedom",
    items: [
      "100% open source (GPL-3.0 license)",
      "Host anywhere - cloud, on-premise, or hybrid",
      "Export your data anytime in standard formats",
      "Hire from a global pool of Frappe developers",
      "No per-user licensing fees ever",
      "Complete access to source code"
    ]
  },
  {
    icon: "🚀",
    title: "Future-Proof Architecture",
    subtitle: "Modern Technology Stack",
    items: [
      "Active development since 2008",
      "Regular updates and security patches",
      "Python 3 + JavaScript (ES6+)",
      "MariaDB/PostgreSQL databases",
      "Redis for caching and queues",
      "Docker-ready deployment",
      "Modern REST APIs",
      "Mobile-first responsive design"
    ]
  }
]
```

## Comparison Table Data

```javascript
export const comparisonData = [
  { feature: "Clinical Workflows", traditional: "✅ Included", biograph: "✅ Included" },
  { feature: "FHIR/HL7 Standards", traditional: "✅ Usually", biograph: "✅ Yes" },
  { feature: "Lab & Radiology", traditional: "✅ Basic", biograph: "✅ Advanced (DICOM, LOINC)" },
  { feature: "Billing", traditional: "⚠️ Basic invoicing", biograph: "✅ Full accounting system with GL" },
  { feature: "Inventory Management", traditional: "⚠️ Medical supplies only", biograph: "✅ Multi-warehouse, batch, serial tracking" },
  { feature: "HR Management", traditional: "❌ Separate system", biograph: "✅ Integrated payroll, attendance, appraisals" },
  { feature: "CRM", traditional: "❌ Add-on cost", biograph: "✅ Built-in patient engagement" },
  { feature: "Asset Management", traditional: "❌ Usually separate", biograph: "✅ Equipment tracking & maintenance" },
  { feature: "Project Management", traditional: "❌ Not included", biograph: "✅ Research, clinical trials management" },
  { feature: "Custom Reports", traditional: "⚠️ Limited, vendor-dependent", biograph: "✅ Unlimited with report builder" },
  { feature: "Workflow Automation", traditional: "⚠️ Basic rules", biograph: "✅ Visual workflow designer" },
  { feature: "API Access", traditional: "⚠️ Limited endpoints", biograph: "✅ RESTful API for everything" },
  { feature: "Customization", traditional: "💰 Expensive, vendor-dependent", biograph: "✅ Low-code framework included" },
  { feature: "Mobile Access", traditional: "⚠️ Separate apps", biograph: "✅ Responsive design everywhere" },
  { feature: "Portal Development", traditional: "💰 Extra cost", biograph: "✅ Framework included" },
  { feature: "Multi-Tenancy", traditional: "⚠️ Complex licensing", biograph: "✅ Built-in service units" },
  { feature: "Community Support", traditional: "❌ Vendor-only", biograph: "✅ Global community + forums" },
  { feature: "Source Code Access", traditional: "❌ Proprietary", biograph: "✅ Full access (GPL-3.0)" },
  { feature: "Hosting Options", traditional: "⚠️ Cloud only / vendor lock-in", biograph: "✅ Cloud, on-premise, hybrid" },
  { feature: "License Model", traditional: "💰 Per-user/module fees", biograph: "✅ Free, open source" }
]
```

## Use Cases Data

```javascript
export const useCases = [
  {
    icon: "🏥",
    title: "Multi-Specialty Hospitals",
    subtitle: "Complete Enterprise Healthcare Management",
    description: "Perfect for large hospitals needing:",
    needs: [
      "Multiple departments and service units",
      "Complex billing scenarios",
      "Large pharmacy and supply chain",
      "Extensive HR management (hundreds of staff)",
      "Research and teaching programs",
      "Multiple locations/branches"
    ],
    benefits: [
      "Full clinical + ERP in one platform",
      "Unified patient and financial data",
      "Cross-departmental analytics",
      "Centralized procurement",
      "Consolidated reporting"
    ]
  },
  {
    icon: "🏪",
    title: "Clinic Chains & Networks",
    subtitle: "Multi-Location Healthcare",
    description: "Ideal for clinic groups requiring:",
    needs: [
      "Centralized patient records",
      "Shared inventory across locations",
      "Group purchasing and contracts",
      "Franchise management",
      "Brand consistency",
      "Central billing and collections"
    ],
    benefits: [
      "Multi-tenant architecture",
      "Location-wise P&L reports",
      "Inter-branch transfers",
      "Centralized control with local autonomy",
      "Standardized workflows"
    ]
  },
  {
    icon: "🔬",
    title: "Diagnostic Centers & Labs",
    subtitle: "Laboratory Operations Focus",
    description: "Tailored for standalone labs needing:",
    needs: [
      "High-volume test processing",
      "Device integration (analyzers)",
      "B2B and B2C workflows",
      "Home collection management",
      "Report delivery automation",
      "Reference lab partnerships"
    ],
    benefits: [
      "Comprehensive LIS module",
      "Automatic billing from results",
      "Online report portal",
      "Collection center management",
      "Referral doctor tracking (CRM)"
    ]
  },
  {
    icon: "🩻",
    title: "Imaging & Radiology Centers",
    subtitle: "Specialized Imaging Workflows",
    description: "Designed for radiology centers with:",
    needs: [
      "Multiple modalities",
      "PACS integration",
      "Radiologist scheduling",
      "Remote reading support",
      "Quality assurance needs",
      "Equipment maintenance tracking"
    ],
    benefits: [
      "DICOM-compliant RIS",
      "Vendor-neutral PACS integration",
      "Template-based reporting",
      "Film management",
      "Equipment tracking (Assets)"
    ]
  },
  {
    icon: "🏃",
    title: "Specialty Treatment Centers",
    subtitle: "Focused Clinical Programs",
    description: "For specialized facilities like:",
    needs: [
      "Physiotherapy clinics",
      "Oncology day care",
      "Dialysis centers",
      "Fertility clinics",
      "Wellness centers"
    ],
    benefits: [
      "Specialty-specific modules",
      "Recurring treatment scheduling",
      "Protocol-based care plans",
      "Outcome tracking",
      "Insurance claim management"
    ]
  },
  {
    icon: "💊",
    title: "Pharmacy Chains",
    subtitle: "Retail Pharmacy Management",
    description: "For pharmacy businesses needing:",
    needs: [
      "Multi-store management",
      "POS integration",
      "Inventory optimization",
      "Prescription tracking",
      "Customer loyalty programs",
      "Supplier management"
    ],
    benefits: [
      "Full retail capabilities (ERPNext)",
      "Expiry and batch management",
      "E-commerce integration",
      "Accounting and taxation",
      "CRM for customers"
    ]
  },
  {
    icon: "🏗️",
    title: "Healthcare Startups",
    subtitle: "Modern Digital Health Platforms",
    description: "For digital health innovators building:",
    needs: [
      "Telemedicine platforms",
      "Health tech SaaS products",
      "Care coordination platforms",
      "Remote patient monitoring",
      "Health insurance tech"
    ],
    benefits: [
      "API-first architecture",
      "Rapid customization (low-code)",
      "Modern tech stack",
      "Scalable infrastructure",
      "Portal framework"
    ]
  },
  {
    icon: "🌍",
    title: "NGOs & Public Health",
    subtitle: "Community Healthcare Programs",
    description: "For non-profit organizations running:",
    needs: [
      "Community health programs",
      "Mobile clinics",
      "Public health initiatives",
      "Vaccination campaigns",
      "Health education programs"
    ],
    benefits: [
      "Cost-effective (open source)",
      "Offline-capable design",
      "Simple data collection forms",
      "Reporting for donors",
      "Project management tools"
    ]
  }
]
```

## Testimonials Data

```javascript
export const testimonials = [
  {
    quote: "We were spending over $300,000 annually on multiple systems that didn't talk to each other. With Biograph and ERPNext, we have everything integrated, and our costs dropped to under $50,000. The ROI was immediate.",
    author: "Dr. Sarah Johnson",
    role: "CIO, Regional Hospital Group",
    location: "United States"
  },
  {
    quote: "The ability to customize everything ourselves was game-changing. Our IT team learned the Frappe framework in a few weeks and now we build our own features. We're not dependent on vendors anymore.",
    author: "Ahmed Al-Rashid",
    role: "IT Director, Medical Complex",
    location: "Saudi Arabia"
  },
  {
    quote: "As a diagnostic lab chain with 15 locations, we needed something that could handle high volumes and multi-site inventory. Biograph's LIS module combined with ERPNext's warehouse management was perfect.",
    author: "Dr. Priya Sharma",
    role: "CEO, PathCare Diagnostics",
    location: "India"
  },
  {
    quote: "The open-source community is incredible. When we had a problem with DICOM integration, someone had already built a solution. The marketplace and community support saved us months of development.",
    author: "James Chen",
    role: "CTO, RadiologyNow",
    location: "Singapore"
  }
]
```

## FAQ Data

```javascript
export const faqData = {
  general: [
    {
      question: "Is Biograph really free?",
      answer: "Yes! Biograph, ERPNext, and Frappe Framework are all open source (GPL-3.0 license). There are no license fees, no per-user charges, and no feature limitations. You only pay for hosting, support (optional), and implementation services."
    },
    {
      question: "What's the catch?",
      answer: "There isn't one. Open source software is a proven model used by the world's largest companies. You get free software, and vendors like Tacten provide commercial support and services."
    },
    {
      question: "How mature is Biograph?",
      answer: "Biograph is built on Frappe Framework (since 2008) and ERPNext (since 2010), which are used by 10,000+ organizations worldwide. The healthcare modules have been in development since 2017."
    },
    {
      question: "Can I use it for my hospital?",
      answer: "Yes! Biograph is production-ready and being used by healthcare organizations worldwide, from small clinics to large hospital chains."
    }
  ],
  technical: [
    {
      question: "What if I need a feature that doesn't exist?",
      answer: "You have three options: 1) Build it yourself (low-code framework), 2) Hire a developer (large community), or 3) Request it from the community (many features are built this way)."
    },
    {
      question: "Can I integrate with my existing systems?",
      answer: "Yes! Biograph has REST APIs, webhooks, and supports standard healthcare protocols (HL7, FHIR, DICOM). Integration with existing systems is straightforward."
    },
    {
      question: "Is it HIPAA compliant?",
      answer: "Biograph provides the tools for HIPAA compliance (encryption, audit logs, access controls, etc.), but compliance also depends on how you configure and host the system. Tacten offers HIPAA-compliant hosting."
    },
    {
      question: "Can I customize it?",
      answer: "Absolutely! That's the main advantage. You have complete access to source code and a low-code framework for most customizations. No vendor approval needed."
    },
    {
      question: "What about mobile access?",
      answer: "Biograph has a responsive design that works on any device. Native mobile apps are also available from the community."
    }
  ],
  business: [
    {
      question: "What's the total cost of ownership?",
      answer: "For a 100-user hospital: approximately $40K first year (including implementation), then $30K/year ongoing (hosting + support). Compare this to $470K+ for traditional systems."
    },
    {
      question: "How long does implementation take?",
      answer: "Depends on size and complexity: Small clinic (1-2 months), Medium hospital (3-6 months), Large hospital (6-12 months)."
    },
    {
      question: "Do you provide training?",
      answer: "Yes! Tacten provides implementation services including training. There's also extensive documentation and community resources."
    },
    {
      question: "What if we need support?",
      answer: "Multiple options: Free community support, paid partner support, or Tacten's premium 24/7 support for critical deployments."
    },
    {
      question: "Can we migrate from our current system?",
      answer: "Yes! Data migration from most systems is possible. We recommend a phased approach to minimize disruption."
    }
  ],
  comparison: [
    {
      question: "How does it compare to Epic/Cerner/Allscripts?",
      answer: "Biograph offers similar clinical features at a fraction of the cost, with the added benefit of complete ERP integration and customization freedom. You own your data and system."
    },
    {
      question: "Why choose Biograph over other open-source HIMS?",
      answer: "Unique advantages: 1) Tight ERPNext integration (full ERP), 2) Low-code framework (easy customization), 3) Large community (50,000+ members), 4) Modern tech stack."
    },
    {
      question: "What about OpenMRS or Bahmni?",
      answer: "Those are excellent for public health and resource-limited settings. Biograph is better for hospitals needing full business operations (billing, inventory, HR, etc.) integrated with clinical workflows."
    }
  ]
}
```

## ROI Calculator Data

```javascript
export const roiData = {
  mediumHospital: {
    users: 100,
    traditional: {
      himsLicense: 100000,
      erpLicense: 80000,
      crmLicense: 30000,
      perUserFees: 120000,
      integration: 50000,
      maintenance: 70000,
      hosting: 0,
      support: 0,
      training: 20000
    },
    biograph: {
      himsLicense: 0,
      erpLicense: 0,
      crmLicense: 0,
      perUserFees: 0,
      integration: 0,
      maintenance: 0,
      hosting: 6000,
      support: 24000,
      training: 10000
    }
  },
  largeHospital: {
    users: 500,
    traditional: {
      himsLicense: 500000,
      erpLicense: 400000,
      otherModules: 300000,
      perUserFees: 600000,
      integration: 200000,
      maintenance: 360000,
      hosting: 0,
      support: 0,
      training: 100000
    },
    biograph: {
      himsLicense: 0,
      erpLicense: 0,
      otherModules: 0,
      perUserFees: 0,
      integration: 0,
      maintenance: 0,
      hosting: 36000,
      support: 120000,
      training: 50000
    }
  }
}
```

## Installation Code Examples

```javascript
export const installationSteps = [
  {
    title: "Install Frappe Bench",
    code: "pip install frappe-bench"
  },
  {
    title: "Initialize a new bench",
    code: `bench init frappe-bench
cd frappe-bench`
  },
  {
    title: "Get ERPNext",
    code: "bench get-app erpnext"
  },
  {
    title: "Get Biograph",
    code: "bench get-app https://github.com/Tacten/biograph"
  },
  {
    title: "Create a new site",
    code: "bench new-site yourhospital.com"
  },
  {
    title: "Install the apps",
    code: `bench --site yourhospital.com install-app erpnext
bench --site yourhospital.com install-app healthcare`
  },
  {
    title: "Start the server",
    code: "bench start"
  }
]

export const productionDeployment = [
  {
    title: "Enable production mode",
    code: "sudo bench setup production [your-user]"
  },
  {
    title: "Enable HTTPS",
    code: "sudo bench setup lets-encrypt yourhospital.com"
  }
]

export const dockerDeployment = [
  {
    title: "Use official Docker images",
    code: "docker pull frappe/erpnext:latest"
  },
  {
    title: "Or use Docker Compose",
    code: `git clone https://github.com/frappe/frappe_docker
cd frappe_docker
docker-compose up -d`
  }
]
```

## Community Resources

```javascript
export const communityResources = {
  channels: [
    {
      name: "Frappe/ERPNext Discuss",
      description: "100,000+ posts, 50,000+ members, Active daily discussions",
      url: "https://discuss.frappe.io"
    },
    {
      name: "GitHub",
      description: "1,000+ contributors, Issues and discussions, Feature requests",
      url: "https://github.com/Tacten/biograph"
    },
    {
      name: "Telegram & Discord",
      description: "Real-time chat, Developer community, Quick help"
    },
    {
      name: "Stack Overflow",
      description: "Tagged questions, Community answers, Best practices"
    }
  ],
  learning: [
    {
      name: "Deep-Wiki",
      description: "Biograph documentation",
      url: "https://deepwiki.com/Tacten/biograph"
    },
    {
      name: "Frappe Framework",
      description: "Platform docs",
      url: "https://frappeframework.com/docs"
    },
    {
      name: "ERPNext",
      description: "ERP documentation",
      url: "https://docs.erpnext.com"
    }
  ],
  events: [
    {
      name: "Frappeverse",
      description: "Annual global conference, Product launches, Networking, Workshops"
    },
    {
      name: "Regional Meetups",
      description: "Local user groups, Knowledge sharing, Networking"
    },
    {
      name: "Webinars",
      description: "Monthly feature demos, Use case presentations, Q&A sessions"
    }
  ]
}
```

## Navigation Links

```javascript
export const navigationLinks = {
  product: [
    { text: "Features", href: "#comprehensive-feature-coverage" },
    { text: "Use Cases", href: "#use-cases--solutions" },
    { text: "Pricing", href: "#pricing--licensing" },
    { text: "Demo", href: "https://marley.frappe.cloud" }
  ],
  resources: [
    { text: "Documentation", href: "https://deepwiki.com/Tacten/biograph" },
    { text: "GitHub", href: "https://github.com/Tacten/biograph" },
    { text: "Community Forum", href: "https://discuss.frappe.io" },
    { text: "Blog", href: "/blog" }
  ],
  company: [
    { text: "About Tacten", href: "/about" },
    { text: "Contact", href: "/contact-us" },
    { text: "Support", href: "https://mi.tacten.link/tacten-support/new" },
    { text: "Enterprise Hosting", href: "/enterprise-cloud-hosting" }
  ],
  social: [
    { icon: "linkedin", href: "https://www.linkedin.com/company/tacten" },
    { icon: "twitter", href: "https://twitter.com/tactenhealth" },
    { icon: "youtube", href: "https://www.youtube.com/channel/UC1skdE9Ba5RXyPILTUr6RDA" },
    { icon: "github", href: "https://github.com/Tacten" }
  ]
}
```

## Export all data for easy import

```javascript
// data/biographData.js
export {
  statsData,
  threeColumnFeatures,
  ecosystemBenefits,
  comparisonData,
  useCases,
  testimonials,
  faqData,
  roiData,
  installationSteps,
  productionDeployment,
  dockerDeployment,
  communityResources,
  navigationLinks
}
```

## Usage in Vue Components

```vue
<!-- In your VitePress page or component -->
<script setup>
import { 
  statsData, 
  threeColumnFeatures, 
  testimonials 
} from '@/data/biographData.js'
</script>

<template>
  <StatsCounter :stats="statsData" />
  <FeatureGrid :features="threeColumnFeatures" />
  <TestimonialSlider :testimonials="testimonials" />
</template>
```

This data file gives you structured, ready-to-use content that you can import into your Vue components and VitePress pages!
