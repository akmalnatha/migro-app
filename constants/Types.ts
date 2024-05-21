export interface Project {
  id: number;
  previewImageUrl: string;
  title: string;
  ownerId: string;
  category: string;
  subCategory: string;
  targetFunding: number;
  currentFunding: number;
  date: Date;
  backers: number;
}

export interface ProjectPhoto {
  id: number;
  projectId: number;
  imageUrl: string;
  description: string;
}

export interface ProjectFAQ {
  id: number;
  projectId: number;
  question: string;
  answer: string;
}
