import { Cohort } from "@/components/cohortDetails";

export interface CoursesType {
  leadCapture: {
    titleOne: string;
    titleTwo: string;
    subtitleOne: string;
    subtitleTwo: string;
    tags: string[];
  };
  cohortSectionHeading: string;
  Cohort: Cohort[];
  highlights: Array<{
    icon: string;
    title: string;
    value: string;
  }>;
  StoryHeader: {
    headerTitle: string;
    description: string;
  };
  LifeAtDA360Header: {
    headerTitle: string;
    description: string;
  };
  LearningRoadmapProps: {
    headerTitle: string;
    description: string;
  };
}

