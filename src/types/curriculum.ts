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

export interface BatchTiming {
  label: string;
  slots: string[];
}

export interface CurriculumProps {
  heading: string;
  description: string;
  learningMode: string;
  batchTimings: BatchTiming[];
  modules: ModuleData[];
}
