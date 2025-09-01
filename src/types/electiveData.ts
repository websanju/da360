import type { ReactNode } from "react";

export interface ModuleBadge {
  icon: ReactNode;
  label: string;
}

export interface ModuleData {
   moduleslable?: string;
  number: number;
  title: string;
  badges: ModuleBadge[];
  topics: string[];
}


export interface SpecialisationProps {
  specialisationHeading: string;
  specialisationDescription: string;
  specialisationmodulesData: ModuleData[];
}
