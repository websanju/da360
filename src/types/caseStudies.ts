export interface CaseStudy {
  id: number;
  logo: string;
  title: string;
  description: string;
  tags: string[];
}

export interface CaseStudiesSection {
  heading: string;
  subheading?: string;
  items: CaseStudy[];
}