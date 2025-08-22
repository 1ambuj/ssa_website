import {
  ShieldCheck,
  ReceiptText,
  BarChart3,
  IndianRupee,
  Globe2,
  Workflow,
} from "lucide-react";

const services = [
  {
    slug: "audit",
    title: "Audit & Assurance",
    description:
      "We offer a complete range of Audit & Assurance services, performed in accordance with applicable statutes to satisfy investors and stakeholders.",
    details: [
      "Our Audit & Assurance services include statutory audits, internal audits, management audits, and special purpose audits. We ensure transparency, accuracy, and compliance with all regulatory requirements, providing stakeholders with confidence in your financial statements.",
      "We perform audits in accordance with applicable laws and professional standards. Our audit process focuses on identifying key risks, evaluating internal controls, performing substantive testing and delivering clear, actionable reports to management and stakeholders.",
    ],
    subservices: [
      {
        title: "Statutory Audit, Tax Audit and Review",
        details: [
          "Statutory audits under applicable statutes including Companies Act and other sectoral laws.",
          "Tax audits and review engagements to ensure compliance with taxation provisions and reporting requirements.",
        ],
      },
      {
        title: "Internal Audit & Risk Assurance",
        details: [
          "Risk-based internal audits, process reviews, control design and testing.",
          "Tailored assurance programs to strengthen governance and operational effectiveness.",
        ],
      },
    ],
    image:
      "https://t3.ftcdn.net/jpg/10/43/68/60/240_F_1043686089_u33CSblgfGAFkCGSrW4ZxV5scSXAi9dg.jpg",
    icon: ShieldCheck,
  },
  {
    slug: "advisory",
    title: "Advisory & Consulting",
    description:
      "Help our clients take better decisions, reduce cost, improve performance, and restructure businesses as needed.",
    details: [
      "We provide professional advisory services to support organizations in navigating complex legal, tax, and financial environments. Our advisory engagements are designed to align with applicable regulatory frameworks and are executed in accordance with professional standards.",
    ],
    subservices: [
      {
        title: "Business Restructuring & Performance Improvement",
        details: [
          "Operational reviews, cost optimization and organizational redesign to improve business performance.",
        ],
      },
      {
        title: "Mergers & Acquisitions Support",
        details: [
          "Due diligence, valuations and transaction support for successful M&A execution.",
        ],
      },
    ],
    image:
      "https://t3.ftcdn.net/jpg/13/65/41/58/240_F_1365415875_Q4siCon7J3xib31y5qYysJvnpCDIbr2I.jpg",
    icon: BarChart3,
  },
  {
    slug: "taxation",
    title: "Taxation Services",
    description:
      "Wide experience in Indian direct and indirect taxes; we assist with tax compliance and planning for businesses of all sizes.",
    details: [
      "We provide direct taxation services under the Income Tax Act, 1961 covering individuals, corporates, professionals, NGOs and trusts. Our services include tax planning, return filing, representation and advisory on complex tax matters.",
      "We also assist with transfer pricing, international tax advisory and controversy management including assessments, appeals and settlement support.",
    ],
    subservices: [
      {
        title: "Income Tax Compliance & Advisory",
        details: [
          "Preparation and filing of returns, tax computation and compliance support for businesses and individuals.",
        ],
      },
      {
        title: "Representation & Controversy Management",
        details: [
          "Assistance before tax authorities, handling assessments and appeals, and negotiation support.",
        ],
      },
    ],
    image:
      "https://t4.ftcdn.net/jpg/05/11/53/35/240_F_511533588_7VKFFifPkCWUcwOtkwaxmylmtcFgc451.jpg",
    icon: ReceiptText,
  },
  {
    slug: "gst",
    title: "Goods & Service Tax (GST)",
    description:
      "Knowledge-driven GST advisory and compliance across sectors including manufacturing, travel, IT, media and more.",
    details: [
      "We provide end-to-end GST services including registration, return filing, audit, litigation support, and sector-specific GST advisory. Our team ensures you stay compliant and benefit from available credits and schemes.",
    ],
    subservices: [
      {
        title: "GST Registration & Returns",
        details: [
          "Registration, monthly/quarterly return filing and reconciliation support.",
        ],
      },
      {
        title: "GST Audit & Litigation Support",
        details: [
          "Support during GST audits, assessments and representation before tax authorities.",
        ],
      },
    ],
    image:
      "https://t4.ftcdn.net/jpg/06/02/25/05/240_F_602250562_i5m45xj8qCawvfALiyi7NTFUCve7aKtv.jpg",
    icon: IndianRupee,
  },
  {
    slug: "nri",
    title: "Non-Resident Services",
    description:
      "Specialized support for NRIs and foreign entities on taxation, compliance, investment structuring, and regulatory matters.",
    details: [
      "India continues to be a key destination for global investment and cross-border business. Our firm offers specialized professional services to Non-Resident Indians (NRIs), Foreign Nationals, and Overseas Entities to navigate the Indian regulatory, tax, and legal landscape with ease.",
      "We assist clients in establishing and managing their business, financial, and compliance affairs in India while ensuring alignment with relevant provisions under FEMA, Income Tax Act, Companies Act, and other applicable Indian laws.",
    ],
    subservices: [
      {
        title: "FEMA & RBI Compliance",
        details: [
          "Advisory on foreign exchange regulations, remittances and repatriation of funds.",
        ],
      },
      {
        title: "NRI Tax Advisory",
        details: [
          "Tax planning, compliance and filing support for NRI individuals and their investments in India.",
        ],
      },
    ],
    image:
      "https://t4.ftcdn.net/jpg/02/01/97/35/240_F_201973585_rTODGe52I9oNQaOMdizlKUkX0GyT30rl.jpg",
    icon: Globe2,
  },
  {
    slug: "bpo",
    title: "Business Process Outsourcing",
    description:
      "Efficient outsourcing solutions for accounting, payroll, and compliance to streamline your operations.",
    details: [
      "In today’s competitive business environment, startups, SMEs, and expanding enterprises need agile, efficient, and compliant finance operations to thrive. Outsourcing your finance and accounting functions to a professional firm is a strategic decision that delivers measurable advantages—allowing you to focus on core business growth while we expertly manage your financial backbone.",
    ],
    subservices: [
      {
        title: "Accounting & Bookkeeping",
        details: [
          "Day-to-day bookkeeping, month-end close and MIS reporting.",
        ],
      },
      {
        title: "Payroll & HR Support",
        details: [
          "Payroll processing, statutory compliance and employee benefits administration.",
        ],
      },
    ],
    image:
      "https://t3.ftcdn.net/jpg/09/45/38/56/240_F_945385682_wVfeJqRjNya4FDGIRLTqfkCkMi6wDTl8.jpg",
    icon: Workflow,
  },
];

export default services;

