
import { CreditCard, DollarSign, Shield, Briefcase, CheckCircle, Clock } from 'lucide-react';
import { FundingProduct } from '@/types/funding';

export const fundingProducts: FundingProduct[] = [
  {
    icon: CreditCard,
    title: "Term Loans",
    description: "Access lump-sum financing with fixed repayment terms and competitive rates.",
    features: [
      "$15k-$500k funding amount",
      "3-36 month terms",
      "Fixed or variable rates",
      "Weekly or monthly payments"
    ],
    cardStyle: "funding-card-blue"
  },
  {
    icon: DollarSign,
    title: "Merchant Cash Advances",
    description: "Get funding based on your future sales with flexible repayment options.",
    features: [
      "$5k-$250k funding amount",
      "Repay based on daily sales",
      "No fixed payment amount",
      "Ideal for seasonal businesses"
    ],
    cardStyle: "funding-card-purple"
  },
  {
    icon: Shield,
    title: "Lines of Credit",
    description: "Flexible funding that allows you to draw funds as needed up to a set limit.",
    features: [
      "$10k-$150k credit line",
      "Only pay interest on what you use",
      "Revolving credit available",
      "Funds available in 24 hours"
    ],
    cardStyle: "funding-card-green"
  },
  {
    icon: Briefcase,
    title: "Equipment Financing",
    description: "Finance new or used equipment with the equipment serving as collateral.",
    features: [
      "Up to 100% equipment value",
      "2-7 year terms",
      "Potential tax advantages",
      "Fixed monthly payments"
    ],
    cardStyle: "funding-card-teal"
  },
  {
    icon: CheckCircle,
    title: "Invoice Factoring",
    description: "Turn your unpaid invoices into immediate cash flow for your business.",
    features: [
      "80-90% advance rates",
      "No debt on balance sheet",
      "Immediate working capital",
      "Credit based on your customers"
    ],
    cardStyle: "funding-card-orange"
  },
  {
    icon: Clock,
    title: "Short-Term Funding",
    description: "Quick access to capital for immediate business opportunities or challenges.",
    features: [
      "$5k-$250k funding amount",
      "3-18 month terms",
      "Approval within hours",
      "Daily or weekly payments"
    ],
    cardStyle: "funding-card-pink"
  }
];
