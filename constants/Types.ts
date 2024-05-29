export interface Project {
  id: number;
  name: string;
  category: string;
  created_at: string;
  description: string;
  owner: string;
  backers: number;
  target_funding: number;
  deadline_date: string;
  overview_image: string;
  current_funding: number;
  is_recommended: boolean;
  is_wishlisted: boolean;
}

export interface Category {
  id: number;
  name: string;
}

export interface Campaign {
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
