
import { LucideIcon } from 'lucide-react';

export interface FundingFeature {
  text: string;
}

export interface FundingProduct {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  cardStyle: string;
}
