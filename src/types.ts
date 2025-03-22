// types.ts

export interface ProfileBanner {
  backgroundimage: { url: string };
  headline: string;
  resumelink: {
    url: string;
  };
  linkedinlink: string;
  profilesummary: string;
}

export interface WorkPermit {
  visastatus: string;
  expirydate: Date;
  summary: string;
  additionalinfo: string;
}

export interface TimelineItem {
  timelineType: 'work' | 'education';
  name: string;
  title: string;
  techStack: string;
  summaryPoints: string[];
  dateRange: string;
}

export interface Project {
  title: string;
  description: string;
  techUsed: string;
  image: { url: string };
}

export interface Certification {
  title: string;
  issuer: string;
  issuedDate: string;
  link: string;
  iconName: string;
}

export interface ContactMe {
  profilepicture: { url: string };
  name: string;
  title: string;
  summary: string;
  companyuniversity: string;
  linkedinlink: string;
  email: string;
  phonenumber: string;
}

export interface Skill { 
  name: string;
  category: string;
  description: string;
  icon: string;
}
