export interface LeadCaptureData {
  tags: string[];
  titleOne: string;
  titleTow: string;
  subtitleOne: string;
  subtitleTow: string;
}

export interface Cohort {
  date: string;
  mode: "Offline" | "Online";
  weekday: string;
  capacity: string;
  campus: string;
}

export interface Highlight {
  icon: string; // Image path
  title: string;
  value: string;
}
export interface StoryHeader {
  headerTitle: string;
  description: string;
}
export interface CoursesType {
  leadCapture: LeadCaptureData;
  cohorts: Cohort[];
  cohortSectionHeading: string;
  highlights: Highlight[];
  StoryHeader: StoryHeader;
  // Add other sections as needed
}
