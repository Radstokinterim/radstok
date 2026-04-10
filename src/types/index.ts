export interface Case {
  id: string;
  company: string;
  logo?: string;
  sector: string;
  period: string;
  role: string;
  fte: string;
  challenge: string;
  solution: string;
  results: string[];
  learning: string;
  highlight?: string;
}

export interface TimelineEvent {
  year: string;
  endYear?: string;
  title: string;
  company: string;
  description: string;
  highlight?: boolean;
  type: "employment" | "interim" | "milestone";
}

export interface Framework {
  name: string;
  shortName: string;
  description: string;
  application: string;
}

export interface ExpertiseArea {
  title: string;
  description: string;
  capabilities: string[];
}
