export type NavLinkItem = { path: string; label: string; };
export type CoreAreaItem = {
  icon: string;
  title: string;
  description: string;
  slug: string;
};
export type PlanCoreAreaItem = {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  aim: string;
  practices: string[];
};
export type ActionPointItem = { title: string; description: string; };
export type PracticeItem = { title: string; description: string; };
export type StoryItem = { quote: string; author: string; };
export type SocialLinkItem = {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  href: string;
};
export type FaqItem = { q: string; a: string; };
export type ImpactFrameworkItem = { title: string; items: string[]; };
export type ApproachItem = { title: string; description: string; };
export type DifferentiatorItem = { title: string; description: string; };
export type BenefitItem = {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};
export type RepresentativeItem = {
  id: number;
  name: string;
  location: string;
  country: string;
  imageUrl: string;
};